'use client'
import {Upload, FileText} from 'lucide-react'
export default function KYCVerificationForm({formData, updateFormData, onContinue, onBack}){
    const handleFileUpload = (fileField) => (e) => {
        const file = e.target.files[0];
        if (file) {
        updateFormData(fileField, file);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
            // if (!formData.aadhaarNumber || !formData.panNumber || !formData.drivingLicenseNumber || 
            //         !formData.evPlateNumber) {
            //     alert('Please fill in all fields and upload required documents');
            //     return;
            // }
        onContinue();

    }
    //Rendering fields that require file upload as well as text
    const FileUploadField = ({ onUpload }) => (
        <div className="flex-shrink-0">
            <label>
                <input
                    type="file"
                    onChange={onUpload}
                    className="hidden"
                    accept="image/*,.pdf"
                />
                <div className="h-12 bg-[#38EF0A] text-white px-4 rounded-md cursor-pointer flex items-center gap-2 text-sm font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
                    <Upload className='h-4 w-4'/>
                    Upload
                </div>
            </label>
        </div>
    );



    return (
        <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-2xl w-full max-w-[480] min-h-[620px] lg:w-[480px] lg:h-[669px] lg:min-h-0 p-4 md:p-6 flex flex-col">
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
                    <div>
                        <div className='flex'>
                            <label className="block text-sm font-bold text-black mb-1">
                                Aadhaar Card Number
                            </label>
                            {formData.aadhaarFile && (
                                <p className="text-s text-[#818181]">
                                ✓ {formData.aadhaarFile.name}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Input */}
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 text-gray-400 flex items-center pointer-events-none">
                                    <FileText className='h-5 w-5'/>
                                </div>

                                <input
                                    type="text"
                                    value={formData.aadhaarNumber}
                                    onChange={(e) => updateFormData('aadhaarNumber', e.target.value)}
                                    placeholder="Aadhaar Card Number"
                                    className="w-full h-12 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                />
                            </div>

                            {/* Upload button */}
                            <FileUploadField
                            fileField="aadhaarFile"
                            onUpload={handleFileUpload('aadhaarFile')}
                            />
                        </div>
                    </div>

                    <div>
                        <div className='flex'>
                            <label className="block text-sm font-bold text-black mb-1">
                                PAN Card Number
                            </label>
                            {formData.panFile && (
                                <p className="text-s text-[#818181]">
                                ✓ {formData.panFile.name}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Input */}
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 text-gray-400 flex items-center pointer-events-none">
                                    <FileText className='h-5 w-5'/>
                                </div>

                                <input
                                    type="text"
                                    value={formData.panNumber}
                                    onChange={(e) => updateFormData('panNumber', e.target.value)}
                                    placeholder="PAN Card Number"
                                    className="w-full h-12 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                />
                            </div>

                            {/* Upload button */}
                            <FileUploadField
                            fileField="panFile"
                            onUpload={handleFileUpload('panFile')}
                            />
                        </div>
                    </div>
                    
                    <div>
                        <div className='flex'>
                            <label className="block text-sm font-bold text-black mb-1">
                                Driving License Number
                            </label>
                            {formData.drivingLicenseFile && (
                                <p className="text-s text-[#818181]">
                                ✓ {formData.drivingLicenseFile.name}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Input */}
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 text-gray-400 flex items-center pointer-events-none">
                                    <FileText className='h-5 w-5'/>
                                </div>

                                <input
                                    type="text"
                                    value={formData.drivingLicenseNumber}
                                    onChange={(e) => updateFormData('drivingLicenseNumber', e.target.value)}
                                    placeholder="Driving License Number"
                                    className="w-full h-12 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                />
                            </div>

                            {/* Upload button */}
                            <FileUploadField
                            fileField="drivingLicenseFile"
                            onUpload={handleFileUpload('drivingLicenseFile')}
                            />
                        </div>
                    </div>

                    <div>
                        <div className='flex'>
                            <label className="block text-sm font-bold text-black mb-1">
                                EV Plate Number
                            </label>
                            {formData.evPlateFile && (
                                <p className="text-s text-[#818181]">
                                ✓ {formData.evPlateFile.name}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Input */}
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 text-gray-400 flex items-center pointer-events-none">
                                    <FileText className='h-5 w-5'/>
                                </div>

                                <input
                                    type="text"
                                    value={formData.evPlateNumber}
                                    onChange={(e) => updateFormData('evPlateNumber', e.target.value)}
                                    placeholder="EV Plate Number"
                                    className="w-full h-12 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                />
                            </div>

                            {/* Upload button */}
                            <FileUploadField
                            fileField="evPlateFile"
                            onUpload={handleFileUpload('evPlateFile')}
                            />
                        </div>
                    </div>
                    {/*RC field without text */}
                    <div>
                        <div className='flex'>
                            <label className="block text-sm font-bold text-black mb-1">
                                RC (Registration Certificate)
                            </label>
                            {formData.rcFile && (
                                <p className="text-xs text-green-600 mt-1">
                                ✓ {formData.rcFile.name}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Read-only input */}
                            <div className="relative flex-1">
                            <div className="absolute text-gray-400 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FileText className='w-5 h-5'/>
                            </div>

                            <input
                                type="text"
                                value={formData.rcFile?.name || ''}
                                placeholder="RC (Registration Certificate)"
                                readOnly
                                className="w-full h-12 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-green-500 outline-none"
                            />
                            </div>

                            {/* Upload button */}
                            <FileUploadField
                            fileField="rcFile"
                            onUpload={handleFileUpload('rcFile')}
                            />
                        </div>
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