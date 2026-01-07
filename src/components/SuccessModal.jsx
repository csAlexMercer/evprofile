'use client';

export default function SuccessModal({ onContinue }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Success Box */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[400px] p-8">
        {/* Success Icon with Glow */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#38EF0A] rounded-full blur-2xl opacity-50 animate-pulse" />
            
            {/* Check icon */}
            <div className="relative w-24 h-24 bg-[#38EF0A] rounded-full flex items-center justify-center">
              <svg 
                className="w-14 h-14 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
          Account Created Successfully!
        </h2>
        
        {/* Description */}
        <p className="text-sm text-gray-600 text-center mb-8 px-4">
          Your Account Setup Is Underway. We Will Notify You Via SMS And Email Within 12 To 24 Hours Once Your Profile Is Fully Confirmed And Ready To Use.
        </p>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full bg-[#38EF0A] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
}