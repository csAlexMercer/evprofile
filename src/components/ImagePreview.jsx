'use client';

export default function ImagePreviewModal({ image, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="relative">
        {/* Back Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 left-0 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Image Display - 3:4 aspect ratio */}
        <div className="w-[450px] h-[600px] bg-black rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={image}
            alt="Captured selfie"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}