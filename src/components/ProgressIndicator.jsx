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
            <svg className='w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9' width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></path>
            </svg>
        );
        } else if (step.number === 2) {
        return (
            <svg className='w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9' width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M14 13h5v-2h-5zm0-3h5V8h-5zm-9 6h8v-.55q0-1.125-1.1-1.787T9 13t-2.9.663T5 15.45zm4-4q.825 0 1.413-.587T11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12m-5 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"></path>
            </svg>
        );
        } else if (step.number === 3) {
        return (
            <svg className='w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9' width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M11.5 1L2 6v2h19V6m-5 4v7h3v-7M2 22h19v-3H2m8-9v7h3v-7m-9 0v7h3v-7z"></path>
            </svg>
        );
        } else {
        return (
            <svg className='w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9' width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"></path>
            </svg>
        );
        }
    };

    return (
        <div className="flex items-start justify-center w-full max-w-5xl px-4 md:px-6 lg:px-8">
            {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                <div className="flex items-center">
                    {/* Circle */}
                    <div className="w-16 flex justify-center">
                    <div
                        className={`
                        lg:w-16 lg:h-16 w-10 h-10 rounded-full flex items-center justify-center
                        transition-all duration-300
                        ${currentStep === step.number ? 'ring-4 ring-[#38EF0A] text-white bg-[#38EF0A]' : ''}
                        ${currentStep > step.number
                            ? 'bg-white text-[#38EF0A]'
                            : currentStep < step.number ? 'bg-white text-[#38EF0A]' : ''}
                        
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
                        w-6 sm:w-8 md:w-12 lg:w-40 mx-2 md:mx-3 lg:mx-4 lg:h-1 h-[2px]
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