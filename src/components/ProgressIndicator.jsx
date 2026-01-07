'use client';
import {User, Landmark, IdCard, Check} from 'lucide-react'
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
            <User className="w-9 h-9"/>
        );
        } else if (step.number === 2) {
        return (
            <IdCard className="w-9 h-9 "/>
        );
        } else if (step.number === 3) {
        return (
            <Landmark className='w-9 h-9'/>
        );
        } else {
        return (
            <Check className='w-9 h-9'/>
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