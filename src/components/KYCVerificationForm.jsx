'use client'
export default function KYCVerificationForm({formData, updateFormData, onContinue, onBack}){
    return (
        <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-2xl w-[480px] h-[669px] p-6 flex flex-col">
            <div className="flex flex-col items-center mb-4">
                <div className="mb-2">
                    <img src="/logo.png" alt="ChargeFlow" className="h-16" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Complete Your EV Profile</h2>
                <p className="text-white font-bold mt-1">KYC Verification</p>
            </div>
        </div>
    );
}