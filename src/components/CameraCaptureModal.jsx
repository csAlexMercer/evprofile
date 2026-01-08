'use client';

import { useState, useRef, useEffect } from 'react';

export default function CameraCaptureModal({ onCapture, onClose }) {
    const [countdown, setCountdown] = useState(5);
    const [stream, setStream] = useState(null);
    const [error, setError] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        startCamera();
        return () => {
        //stop camera when component unmounts
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        };
    }, []);

    useEffect(() => {
        if (countdown > 0 && stream) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
        } else if (countdown === 0 && stream) {
        capturePhoto();
        }
    }, [countdown, stream]);

    const startCamera = async () => {
        try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
            facingMode: 'user',
            width: { ideal: 1080 },
            height: { ideal: 1440 }
            }
        });
        
        setStream(mediaStream);
        
        if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
        }
        } catch (err) {
        console.error('Camera error:', err);
        setError('Unable to access camera. Please check permissions.');
        }
    };

    const capturePhoto = () => {
        if (!videoRef.current || !canvasRef.current) return;
        const video = videoRef.current;
        //target aspect ratio
        const outputWidth = 300;
        const outputHeight = 400;
        const targetAspect = outputWidth / outputHeight;

        // Original video size
        const vw = video.videoWidth;
        const vh = video.videoHeight;

        //Downscale
        const maxDim = 1024
        const scale = Math.min(1, maxDim / Math.max(vw, vh))
        const dw = Math.round(vw * scale)
        const dh = Math.round(vh * scale)

        const downscaleCanvas = document.createElement('canvas')
        downscaleCanvas.width = dw
        downscaleCanvas.height = dh
        const dctx = downscaleCanvas.getContext('2d')

        dctx.drawImage(video, 0, 0, dw, dh)

        //Crop to 3:4
        const downAspect = dw / dh

        let sx, sy, sw, sh

        if (downAspect > targetAspect) {
            // Too wide
            sh = dh
            sw = dh * targetAspect
            sx = (dw - sw) / 2
            sy = 0
        } else {
            // Too tall
            sw = dw
            sh = dw / targetAspect
            sx = 0
            sy = (dh - sh) / 2
        }

        //Final canvas
        const canvas = canvasRef.current
        canvas.width = outputWidth
        canvas.height = outputHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(downscaleCanvas,sx, sy, sw, sh, 0, 0, outputWidth, outputHeight);
        
        const imageData = canvas.toDataURL('image/jpeg', 0.9);
        
        // Stop camera
        if (stream) {
        stream.getTracks().forEach(track => track.stop());
        }
        
        onCapture(imageData);
    };

    if (error) {
        return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <div className="bg-white rounded-2xl p-8 max-w-md text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Camera Access Denied</h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
                onClick={onClose}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
                Close
            </button>
            </div>
        </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
        {/* Camera Container */}
        <div className="relative">
            {/* Video Display - 3:4 aspect ratio */}
            <div className="relative w-[450px] h-[600px] bg-black rounded-2xl overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
            />
            
            {/* Oval Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Dark overlay with oval cutout effect */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Oval outline */}
                <div 
                className="relative z-10 border-4 border-white rounded-[50%] animate-pulse"
                style={{
                    width: '280px',
                    height: '380px',
                    boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.4)'
                }}
                />
            </div>

            {/* Instruction Text */}
            <div className="absolute top-12 left-0 right-0 text-center z-20">
                <p className="text-white text-lg font-semibold bg-black/50 backdrop-blur-sm inline-block px-6 py-3 rounded-full">
                Please keep your face in the oval
                </p>
            </div>

            {/* Countdown Display */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
                <div className="bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-[#38EF0A]">{countdown}</span>
                </div>
            </div>
            </div>

            {/* Cancel Button */}
            <button
            onClick={() => {
                if (stream) {
                stream.getTracks().forEach(track => track.stop());
                }
                onClose();
            }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
            Cancel
            </button>
        </div>

        {/* Hidden canvas for capture */}
        <canvas ref={canvasRef} className="hidden" />
        </div>
    );
}