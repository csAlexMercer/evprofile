'use client'
export default function BankDetailsForm({formData, updateFormData, onContinue, onBack}){
    const handleSubmit = (e) => {
        e.preventDefault();
            // if (!formData.accountHolderName || !formData.bankName || !formData.accountNumber || 
            //         !formData.ifscCode || !formData.accountType) {
            //     alert('Please fill in all fields');
            //     return;
            // }
        onContinue();

    }
    return (
        <div className="bg-white/75 backdrop-blur-sm rounded-2xl shadow-2xl w-[480px] h-[669px] p-6 flex flex-col">
            <div className="flex flex-col items-center mb-4">
                <div className="mb-2">
                    <img src="/logo.png" alt="ChargeFlow" className="h-16" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Complete Your EV Profile</h2>
                <p className="text-white font-bold mt-1">Bank Details</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                <div className="space-y-3">
                    {/* Account Holder Name */}
                    <div>
                    <label className="block text-sm font-bold text-black">
                        Account Holder Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        </div>
                        <input
                        type="text"
                        value={formData.accountHolderName}
                        onChange={(e) => updateFormData('accountHolderName', e.target.value)}
                        placeholder="Enter Account Holder Name"
                        className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 shadow-4xl rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-md hover:shadow-lg focus:shadow-lg transition-shadow"
                        />
                    </div>
                    </div>

                    {/* Bank Name */}
                    <div>
                    <label className="block text-sm font-bold text-black">
                        Bank Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        </div>
                        <input
                        type="text"
                        value={formData.bankName}
                        onChange={(e) => updateFormData('bankName', e.target.value)}
                        placeholder="Bank Name"
                        className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-md hover:shadow-lg focus:shadow-lg transition-shadow"
                        />
                    </div>
                    </div>

                    {/* Account Number */}
                    <div>
                    <label className="block text-sm font-bold text-black">
                        Account Number
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        </div>
                        <input
                        type="text"
                        value={formData.accountNumber}
                        onChange={(e) => updateFormData('accountNumber', e.target.value)}
                        placeholder="Account Number"
                        className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-md"
                        />
                    </div>
                    </div>

                    {/* IFSC Code */}
                    <div>
                    <label className="block text-sm font-bold text-black">
                        IFSC Code
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </div>
                        <input
                        type="text"
                        value={formData.ifscCode}
                        onChange={(e) => updateFormData('ifscCode', e.target.value)}
                        placeholder="IFSC Code"
                        className="w-full pl-10 pr-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-md hover:shadow-lg focus:shadow-lg transition-shadow"
                        />
                    </div>
                    </div>

                    {/* Account Type */}
                    <div>
                    <label className="block text-sm font-bold text-black">
                        Account Type
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        </div>
                        <select
                            value={formData.accountType}
                            onChange={(e) => updateFormData('accountType', e.target.value)}
                            className="w-full text-gray-400 pl-10 pr-10 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none appearance-none cursor-pointer"
                            >
                            <option value="">Select Account Type</option>
                            <option value="savings">Savings Account</option>
                            <option value="current">Current Account</option>
                            <option value="salary">Salary Account</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 pt-4 mt-2">
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