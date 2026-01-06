'use client';

import { useState } from 'react';
import { useCamera } from '@/hooks/useCamera';

export default function AccountActivationForm({ formData, updateFormData, onBack, onContinue }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {videoRef, canvasRef, startCamera, capturePhoto, image} = useCamera();

  const handleCaptureSelfie = async () => {
    await startCamera()

    // wait for camera to initialize
    setTimeout(() => {
      const selfie = capturePhoto()
      updateFormData('liveSelfieCaptured', true)
      updateFormData('liveSelfieImage', selfie)
    }, 800)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // // Validation
    // if (!formData.password || !formData.confirmPassword) {
    //   alert('Please enter password');
    //   return;
    // }
    
    // if (formData.password.length < 8) {
    //   alert('Password must be at least 8 characters long');
    //   return;
    // }
    
    // if (formData.password !== formData.confirmPassword) {
    //   alert('Passwords do not match');
    //   return;
    // }
    
    // if (!formData.agreeToTerms) {
    //   alert('Please agree to Terms of Service and Privacy Policy');
    //   return;
    // }
    
    // if (!formData.liveSelfieCaptured) {
    //   alert('Please capture live selfie for verification');
    //   return;
    // }

    // // All validations passed
    alert('Account activation successful! Your EV profile is complete.');
    // console.log('Form Data:', formData);
  };

  return (
    <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-2xl w-[480px] h-[669px] p-6 flex flex-col">
      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-4">
        <div className="mb-2">
          <img src="/logo.png" alt="ChargeFlow" className="h-16" />
        </div>
          <h2 className="text-2xl font-bold text-gray-800">Complete Your EV Profile</h2>
          <p className="text-white font-bold mt-1">Account Activation</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        {/* Password */}
        <div className='space-y-3'>
          <label className="block text-sm font-bold text-black mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 shadow-4xl rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-md hover:shadow-lg focus:shadow-lg transition-shadow mb-3"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-bold text-black mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => updateFormData('confirmPassword', e.target.value)}
              placeholder="Confirm Password"
              className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 shadow-4xl rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-md hover:shadow-lg focus:shadow-lg transition-shadow"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Password Requirements */}
        <div className="mt-2 bg-gray-400/70 border border-gray-300 rounded-md px-3 py-2">
          <p className="text-s text-white">
            Choose a strong password (Min 8 characters, use letters and numbers).
          </p>
        </div>

        {/* Terms Agreement */}
        <div className="flex items-start gap-3 py-2">
          <input
            type="checkbox"
            id="terms"
            checked={formData.agreeToTerms}
            onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
            className="mt-1 w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the{' '}
            <span className="text-green-600 font-medium cursor-pointer hover:underline">
              Terms Of Service
            </span>{' '}
            and{' '}
            <span className="text-green-600 font-medium cursor-pointer hover:underline">
              Privacy Policy
            </span>
            *
          </label>
        </div>

        {/* Live Face Verification */}
        <div>
          <label className="block text-sm font-bold text-black mb-2">
            Live Face Verification
          </label>
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white border-2 border-green-500 rounded-lg overflow-hidden flex items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    alt="Captured selfie"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                )}
              </div>  
              <video ref={videoRef} autoPlay playsInline className="hidden" />
              <canvas ref={canvasRef} className="hidden" />

              <span className="text-sm text-gray-600">
                {formData.liveSelfieCaptured ? 'Selfie captured ✓' : 'No selfie captured'}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCaptureSelfie}
              className="bg-[#38EF0A] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Capture Live Selfie
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="w-44 mx-auto bg-[#818181]  text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-180"
          >
            Back
          </button>
          <button
            type="submit"
              className="w-44 mx-auto bg-[#38EF0A] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-180"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}