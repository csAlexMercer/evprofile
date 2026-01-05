'use client';

export default function ProgressIndicator({ currentStep }) {
    const steps = [
        { number: 1, label: 'Personal Details', icon: 'user' },
        { number: 2, label: 'KYC Verification', icon: 'id-card' },
        { number: 3, label: 'Bank Details', icon: 'bank' },
        { number: 4, label: 'Account Activation', icon: 'check' },
    ];

    const getStepIcon = (step) => {
        if (step.number === 1) {
        return (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        );
        } else if (step.number === 2) {
        return (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
        );
        } else if (step.number === 3) {
        return (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        );
        } else {
        return (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        );
        }
    };

    return (
        <div className="flex items-start justify-center w-full max-w-5xl px-8">
            {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                <div className="flex items-center">
                    {/* Circle */}
                    <div className="w-16 flex justify-center">
                    <div
                        className={`
                        w-16 h-16 rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${currentStep >= step.number
                            ? 'bg-[#38EF0A] text-white'
                            : 'bg-white text-gray-400'}
                        ${currentStep === step.number ? 'ring-4 ring-[#38EF0A]' : ''}
                        `}
                    >
                        {currentStep > step.number ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        ) : (
                        getStepIcon(step)
                        )}
                    </div>
                    </div>

                    {/* Connector line */}
                    {index < steps.length - 1 && (
                    <div
                        className={`
                        h-[3px] w-40 mx-4
                        transition-all duration-300
                        ${currentStep > step.number ? 'bg-[#38EF0A]' : 'bg-gray-400'}
                        `}
                    />
                    )}
                </div>

                {/* Label*/}
                {/* <span
                    className={`
                    mt-4 text-sm font-medium whitespace-nowrap text-center
                    ${currentStep >= step.number ? 'text-white' : 'text-gray-300'}
                    `}
                    style={{ width: '4rem' }} 
                >
                    {step.label}
                </span> */}
                </div>
            ))}
        </div>
    );
}