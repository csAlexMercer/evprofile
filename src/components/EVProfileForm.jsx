'use client';
import { useState } from "react"
import ProgressIndicator from "./ProgressIndicator";
import PersonalDetailsForm from "./PersonalDetailsForm";

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
    })
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
            <div className="relative z-10 w-full h-full flex flex-col items-center pt-20">
                <ProgressIndicator currentStep={currentStep}/>
                {/*Form Container*/}
                <div className="mt-32">
                    {currentStep === 1 && (
                        <PersonalDetailsForm
                            formData={formData}
                            updateFormData={updateFormData}
                            onContinue={handleContinue}

                    )}
                </div>

            </div>
        </div>
    )
}