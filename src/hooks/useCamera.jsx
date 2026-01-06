'use client'
import { useRef, useState } from 'react'

export function useCamera() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [image, setImage] = useState(null)
  const [isActive, setIsActive] = useState(false)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' }
      })

      videoRef.current.srcObject = stream
      setIsActive(true)
    } catch (err) {
      alert('Camera access denied')
    }
  }

  const capturePhoto = () => {
    const video = videoRef.current
    const canvas = canvasRef.current

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    canvas.getContext('2d').drawImage(video, 0, 0)
    const imageData = canvas.toDataURL('image/png')

    setImage(imageData)

    // Stop camera
    video.srcObject.getTracks().forEach(track => track.stop())
    setIsActive(false)

    return imageData
  }

  return {
    videoRef,
    canvasRef,
    image,
    isActive,
    startCamera,
    capturePhoto
  }
}
