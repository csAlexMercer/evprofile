'use client';
import { useState } from "react"
import ProgressIndicator from "./ProgressIndicator";
import KYCVerificationForm from "./KYCVerificationForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import BankDetailsForm from "./BankDetailsForm";
import AccountActivationForm from "./AccountActivationForm"

export default function EVProfileForm(){
    const [currentStep, setCurrentStep] = useState(1); //form step

    //all form data from all steps
    const [formData, setFormData] = useState({
        //Personal Details
        fullName: '',
        email: '',
        phoneNumber: '',
        homeAddress: '',
        pincode: '',

        //KYC Verification
        aadhaarNumber: '',
        aadhaarFile: null,
        panNumber: '',
        panFile: null,
        drivingLicenseNumber: '',
        drivingLicenseFile: null,
        evPlateNumber: '',
        evPlateFile: null,
        rcFile: null,

        //Bank Details
        accountHolderName: '',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        accountType: '',

        //Account Activation
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        liveSelfieCaptured: false,
    });

    const updateFormData = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleContinue = () => {
        if(currentStep < 4){
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1){
            setCurrentStep(currentStep - 1);
        }
    };

    //background images
    const backgrounds = [
        '/images/bg-personal.jpg',
        '/images/bg-kyc.jpg',
        '/images/bg-bank.jpg',
        '/images/bg-activation.jpg',
    ]
    return (
        <div className="lg:w-[1440px] lg:h-[958px] lg:min-h-0 relative w-full min-h-screen mx-auto overflow-hidden">
            <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${backgrounds[currentStep - 1]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 w-full flex flex-col items-center pt-8 md:pt-12 lg:pt-20">
                <ProgressIndicator currentStep={currentStep}/>
                {/*Form Container*/}
                <div className="bg-white/60 lg:bg-white/85  rounded-2xl mt-10 md:mt-12 lg:mt-20 w-full max-w-[380px] mx-auto">
                    {currentStep === 1 && (
                        <PersonalDetailsForm
                            formData={formData}
                            updateFormData={updateFormData}
                            onContinue={handleContinue}
                        />
                    )}
                    {currentStep === 2 && (
                        <KYCVerificationForm 
                            formData = {formData}
                            updateFormData={updateFormData}
                            onContinue={handleContinue}
                            onBack={handleBack}
                        />
                    )}
                    {currentStep === 3 && (
                        <BankDetailsForm
                            formData= {formData}
                            updateFormData={updateFormData}
                            onContinue={handleContinue}
                            onBack={handleBack}
                        />
                    )}
                    {currentStep === 4 && (
                        <AccountActivationForm
                            formData={formData}
                            updateFormData={updateFormData}
                            onContinue={handleContinue}
                            onBack={handleBack}
                        />
                    )}
                </div>

            </div>
            <button className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <svg className="w-9 h-9 text-[#38EF0A]"width={16} height={16} viewBox="0 0 16 16">
                        <path fill="currentColor" d="M9.968 2.404A5 5 0 0 0 3 7h.33c.37 0 .67.285.67.625v3.75c0 .35-.3.625-.67.625H2c-1.11 0-2-.844-2-1.875v-1.25C0 7.833.902 7 2 7a6 6 0 0 1 12 0c1.11 0 2 .844 2 1.875v1.25C16 11.167 15.098 12 14 12h-.1c-.393 1.452-1.452 2.209-2.405 2.59a6 6 0 0 1-.519.177a1.5 1.5 0 1 1-.164-.995a4 4 0 0 0 .312-.111c.697-.279 1.392-.768 1.726-1.661h-.18c-.37 0-.67-.285-.67-.625v-3.75c0-.35.3-.625.67-.625H13a5 5 0 0 0-3.032-4.596M13 11h1c.612 0 1-.45 1-.875v-1.25C15 8.453 14.616 8 14 8h-1zM3 8H2c-.612 0-1 .45-1 .875v1.25c0 .422.384.875 1 .875h1z"></path>
                    </svg>
                </div>
            </button>
        </div>
    )
}