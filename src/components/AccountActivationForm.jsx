'use client';

import { useState } from 'react';
import { Camera, User, Eye, EyeOff, Lock } from 'lucide-react';
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
              <Lock className='h-5 w-5 text-gray-400'/>
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
                <EyeOff className='h-5 w-5 text-gray-400 hover:text-gray-600'/>
              ) : (
                <Eye className='h-5 w-5 text-gray-400 hover:text-gray-600'/>
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
              <Lock className='h-5 w-5 text-gray-400'/>
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
                <EyeOff className='h-5 w-5 text-gray-400 hover:text-gray-600'/>
              ) : (
                <Eye className='h-5 w-5 text-gray-400 hover:text-gray-600'/>
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
                  <User className='w-8 h-8 text-gray-400'/>
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
              <Camera className='w-5 h-5'/>
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