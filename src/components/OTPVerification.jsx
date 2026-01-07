'use client';

import { useState, useRef, useEffect } from 'react';

export default function OTPVerification({ phoneNumber, onVerify, onResend }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(10);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Jump to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split('');
    while (newOtp.length < 6) newOtp.push('');
    
    setOtp(newOtp);
    
    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      onVerify(otpValue);
    }
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(30);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
      onResend?.();
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* OTP Box */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[400px] p-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="ChargeFlow" className="h-16" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Verify Your Phone Number
        </h2>
        
        {/* Subtitle */}
        <p className="text-sm text-gray-600 text-center mb-6">
          we sent a 6-digit code to {phoneNumber}
        </p>

        {/* OTP Input Boxes */}
        <div className="flex gap-3 justify-center mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-12 h-12 text-gray-700 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-[#38EF0A] focus:ring-2 focus:ring-green-500 outline-none transition-all"
            />
          ))}
        </div>

        {/* Resend Code */}
        <div className="text-center mb-6">
          {resendTimer > 0 ? (
            <p className="text-sm text-gray-600">
              Resend code in {resendTimer}s
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-sm text-[#38EF0A] font-medium hover:underline"
            >
              Resend code
            </button>
          )}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={otp.join('').length !== 6}
          className="w-full bg-[#38EF0A] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Verify
        </button>
      </div>
    </div>
  );
}