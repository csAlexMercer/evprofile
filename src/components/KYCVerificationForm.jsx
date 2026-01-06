'use client'
export default function KYCVerificationForm({formData, updateFormData, onContinue, onBack}){
    const handleFileUpload = (field, fileField) => (e) => {
        const file = e.target.files[0];
        if (file) {
        updateFormData(fileField, file);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onContinue();

    }
    //Rendering fields that require file upload as well as text
    const FileUploadField = ({ label, numberField, fileField, placeholder }) => (
        <div>
            <label className="block text-sm font-bold text-black mb-1">
            {label}
            </label>

            <div className="relative">
            {/* Left icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
                </svg>
            </div>

            {/* Input */}
            <input
                type="text"
                value={formData[numberField]}
                onChange={(e) => updateFormData(numberField, e.target.value)}
                placeholder={placeholder}
                className="
                w-full
                pl-10 pr-28
                py-3
                h-12
                text-gray-700
                bg-gray-100
                border border-gray-300
                rounded-lg
                shadow-md hover:shadow-lg focus:shadow-lg
                focus:ring-2 focus:ring-green-500
                focus:border-transparent
                outline-none
                transition-shadow
                "
            />

            {/* Upload button (overlay) */}
            <label className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <input
                type="file"
                onChange={handleFileUpload(numberField, fileField)}
                className="hidden"
                accept="image/*,.pdf"
                />
                <div className="
                pointer-events-auto
                bg-[#38EF0A]
                text-white
                px-4 py-2
                rounded-md
                cursor-pointer
                flex items-center gap-2
                text-sm font-semibold
                shadow-md hover:shadow-lg
                transition-all
                active:scale-[0.98]
                ">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                </svg>
                Upload
                </div>
            </label>
            </div>

            {/* File name */}
            {formData[fileField] && (
            <p className="text-xs text-green-600 mt-1">
                ✓ {formData[fileField].name}
            </p>
            )}
        </div>
    );

    return (
        <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-2xl w-[480px] h-[669px] p-6 flex flex-col">
            <div className="flex flex-col items-center mb-4">
                <div className="mb-2">
                    <img src="/logo.png" alt="ChargeFlow" className="h-16" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Complete Your EV Profile</h2>
                <p className="text-white font-bold mt-1">KYC Verification</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                {/*form fields*/}
                <div className="space-y-3">
                    <FileUploadField
                        label="Aadhaar Card Number"
                        numberField="aadhaarNumber"
                        fileField="aadhaarFile"
                        placeholder="Aadhaar Card Number"
                    />

                    <FileUploadField
                        label="PAN Card Number"
                        numberField="panNumber"
                        fileField="panFile"
                        placeholder="PAN Card Number"
                    />

                    <FileUploadField
                        label="Driving Lincense Number"
                        numberField="drivingLicenseNumber"
                        fileField="drivingLicenseFile"
                        placeholder="Driving Lincense Number"
                    />

                    <FileUploadField
                        label="EV Plate Number"
                        numberField="evPlateNumber"
                        fileField="evPlateFile"
                        placeholder="EV Plate Number"
                    />
                    {/*RC field without text */}
                    <div>
                        <label className="block text-sm font-bold text-black mb-1">
                            RC (Registration Certificate)
                        </label>

                        <div className="relative">
                            {/* Left icon */}
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            </div>

                            {/* Input */}
                            <input
                            type="text"
                            value={formData.rcFile?.name || ''}
                            placeholder="RC (Registration Certificate)"
                            readOnly
                            className="
                                w-full
                                pl-10 pr-28
                                py-3
                                h-12
                                text-gray-700
                                bg-gray-100
                                border border-gray-300
                                rounded-lg
                                shadow-md hover:shadow-lg focus:shadow-lg
                                focus:ring-2 focus:ring-green-500
                                focus:border-transparent
                                outline-none
                                transition-shadow
                            "
                            />

                            {/* Upload button overlay */}
                            <label className="absolute inset-y-0 right-2 flex items-center">
                            <input
                                type="file"
                                onChange={handleFileUpload('rc', 'rcFile')}
                                className="hidden"
                                accept="image/*,.pdf"
                            />
                            <div
                                className="
                                bg-[#38EF0A]
                                text-white
                                px-4 py-2
                                rounded-md
                                cursor-pointer
                                flex items-center gap-2
                                text-sm font-semibold
                                shadow-md hover:shadow-lg
                                transition-all
                                active:scale-[0.98]
                                "
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                                </svg>
                                Upload
                            </div>
                            </label>
                        </div>

                        {/* File name confirmation */}
                        {formData.rcFile && (
                            <p className="text-xs text-green-600 mt-1">
                            ✓ {formData.rcFile.name}
                            </p>
                        )}
                    </div>

                </div>
                {/*Coninue and backButtons */}
                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        onClick={onBack}
                        className="w-44 mx-auto bg-[#818181]  text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-180"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="w-44 mx-auto bg-[#38EF0A] text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-180"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}