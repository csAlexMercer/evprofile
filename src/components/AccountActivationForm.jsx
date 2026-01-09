'use client';

import { useState } from 'react';
import OTPVerification from './OTPVerification';
import SuccessModal from './SuccessModal';
import CameraCaptureModal from './CameraCaptureModal';
import ImagePreviewModal from './ImagePreview';

export default function AccountActivationForm({ formData, updateFormData, onBack, onContinue }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showSuccess, setShowSuccess] = useState();
  const [showCamera, setShowCamera] = useState(false);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [confirmError, setConfirmError] = useState(false);

  const validateConfirmPassword = (value) => {
    const password = formData.password;
    if(!value) return false;
    if(!password) return false;
    return !password.startsWith(value);
  }

  const handleCaptureSelfie = () => {
    setShowCamera(true);
  }

  const handleCameraCapture = (imageData) => {
    setCapturedImage(imageData);
    updateFormData('liveSelfieCaptured', true);
    updateFormData('liveSelfieImage', imageData);
    setShowCamera(false);
  };

  const handleCameraClose = () => {
    setShowCamera(false);
  };

  const handleImageClick = () => {
    if(capturedImage){
      setShowImagePreview(true);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.password || !formData.confirmPassword) {
      alert('Please enter password');
      return;
    }
    
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to Terms of Service and Privacy Policy');
      return;
    }
    
    if (!formData.liveSelfieCaptured) {
      alert('Please capture live selfie for verification');
      return;
    }

    // All validations passed
    setShowOTP(true);
    
  };
  const handleOTPVerify = (otpValue) => {
    console.log('OTP Entered:', otpValue);
    setShowOTP(false);
    setShowSuccess(true);
  };
  
  const handleOTPResend = () => {
    console.log('Resending OTP');
  };
  const handleSuccessContinue = () => {
    setShowSuccess(false);
    console.log('Final form data:',formData);
  };

  return (
    <div className="bg-black/30 lg:bg-black/20 rounded-2xl shadow-2xl w-full max-w-[480] min-h-[620px] lg:w-[480px] lg:h-[669px] lg:min-h-0 p-4 md:p-6 flex flex-col">
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
              <svg className= 'w-6 h-6 text-gray-400'xmlns="http://www.w3.org/2000/svg" width='24' height='24' viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12h1.4a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8"></path>
              </svg>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 shadow-4xl rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-md hover:shadow-lg focus:shadow-lg transition-shadow"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <svg className='h-5 w-5 text-gray-400' width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13" strokeWidth={0.5} stroke="currentColor"></path>
                </svg>
              ) : (
                <svg className='h-5 w-5 text-gray-400' width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" strokeWidth={0.5} stroke="currentColor"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-bold text-black mb-1 mt-3">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className= 'w-6 h-6 text-gray-400'xmlns="http://www.w3.org/2000/svg" width='24' height='24' viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12h1.4a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8"></path>
              </svg>
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => {
                const value = e.target.value 
                updateFormData('confirmPassword', value)
                setConfirmError(validateConfirmPassword(value))
              }}
              placeholder="Confirm Password"
              className={`w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 shadow-4xl rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none shadow-md hover:shadow-lg focus:shadow-lg transition-shadow
                ${confirmError ? 'focus:ring-red-500' : 'focus:ring-green-500'}`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <svg className='h-5 w-5 text-gray-400' width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13" strokeWidth={0.5} stroke="currentColor"></path>
                </svg>
              ) : (
                <svg className='h-5 w-5 text-gray-400' width={24} height={24} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0" strokeWidth={0.5} stroke="currentColor"></path>
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
            <span className="text-[#38EF0A] font-medium cursor-pointer hover:underline">
              Terms Of Service
            </span>{' '}
            and{' '}
            <span className="text-[#38EF0A] font-medium cursor-pointer hover:underline">
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
              <div 
                className="w-16 h-16 bg-white border-2 border-green-500 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleImageClick}
              >
                {capturedImage ? (
                  <img
                    src={capturedImage}
                    alt="Captured selfie"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg className='h-10 w-10 text-gray-400' width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path>
                  </svg>
                )}
              </div>  
              <span className="text-sm text-gray-600">
                {capturedImage ? 'Selfie captured ✓' : 'No selfie captured'}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCaptureSelfie}
              className="bg-[#38EF0A] hover:bg-[#2dd908] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
            >
              <svg className="h-5 w-5 text-white" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" strokeWidth={0.5} stroke="currentColor" d="M11.5 8C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9M5 5h2l2-2h5l2 2h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m4.41-1l-2 2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.41l-2-2z"></path>
              </svg>
              {capturedImage ? 'Recapture' : 'Capture Live Selfie'}
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
      
      {/*Camera capture modal */}
      {showCamera && (
        <CameraCaptureModal
          onCapture={handleCameraCapture}
          onClose={handleCameraClose}
        />
      )}

      {/*Image Preview */}
      {showImagePreview && (
        <ImagePreviewModal
          image={capturedImage}
          onClose={() => setShowImagePreview(false)}
        />
      )}

      {/* OTP Verification*/}
      {showOTP && (
        <OTPVerification
          phoneNumber={formData.phoneNumber}
          onVerify={handleOTPVerify}
          onResend={handleOTPResend}
        />
      )}

      {/* Success */}
      {showSuccess && (
        <SuccessModal onContinue={handleSuccessContinue} />
      )}
    </div>
  );
}