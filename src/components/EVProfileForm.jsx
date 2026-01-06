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
        <div className="relative w-[1440px] h-[958px] overflow-hidden">
            <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${backgrounds[currentStep - 1]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 w-full h-100 flex flex-col items-center pt-20">
                <ProgressIndicator currentStep={currentStep}/>
                {/*Form Container*/}
                <div className="mt-20">
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
        </div>
    )
}