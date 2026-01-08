'use client';
import {Headset} from 'lucide-react';
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
                <div className="mt-10 md:mt-12 lg:mt-20 w-full max-w-[480px] mx-auto">
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
                <Headset className='w-11 h-11 text-[#38EF0A]'/>
                </div>
            </button>
        </div>
    )
}