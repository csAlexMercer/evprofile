'use client'
export default function BankDetailsForm({formData, updateFormData, onContinue, onBack}){
    const handleSubmit = (e) => {
        e.preventDefault();
            if (!formData.accountHolderName || !formData.bankName || !formData.accountNumber || 
                    !formData.ifscCode || !formData.accountType) {
                alert('Please fill in all fields');
                return;
            }
        onContinue();

    }
    return (
        <div className="bg-black/30 lg:bg-black/20 rounded-2xl shadow-2xl w-full max-w-[480] min-h-[620px] lg:w-[480px] lg:h-[669px] lg:min-h-0 p-4 md:p-6 flex flex-col">
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
                        maxLength={40}
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
                        <svg className="w-5 h-5 text-gray-400" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M2 20h20v2H2zm2-8h2v7H4zm5 0h2v7H9zm4 0h2v7h-2zm5 0h2v7h-2zM2 7l10-5l10 5v4H2zm2 1.236V9h16v-.764l-8-4zM12 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></path>
                        </svg>
                        </div>
                        <input
                        type="text"
                        maxLength={30}
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
                        <svg className="w-5 h-5 text-gray-400" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M5 16v-5q0-.425.288-.712T6 10t.713.288T7 11v5q0 .425-.288.713T6 17t-.712-.288T5 16m6 0v-5q0-.425.288-.712T12 10t.713.288T13 11v5q0 .425-.288.713T12 17t-.712-.288T11 16m-8 5q-.425 0-.712-.288T2 20t.288-.712T3 19h18q.425 0 .713.288T22 20t-.288.713T21 21zm14-5v-5q0-.425.288-.712T18 10t.713.288T19 11v5q0 .425-.288.713T18 17t-.712-.288T17 16m4-8H2.9q-.375 0-.638-.262T2 7.1v-.55q0-.275.138-.475T2.5 5.75l8.6-4.3q.425-.2.9-.2t.9.2l8.55 4.275q.275.125.413.375t.137.525V7q0 .425-.287.713T21 8"></path>
                        </svg>
                        </div>
                        <input
                        type="text"
                        maxLength={25}
                        value={formData.accountNumber}
                        onChange={(e) => {const digitsOnly = e.target.value.replace(/\D/g, '')
                            updateFormData('accountNumber', digitsOnly)}}
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
                        <svg className="w-5 h-5 text-gray-400" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M23.277 11.056c-.362-8.68-9.984-13.714-17.32-9.06a11.29 11.29 0 0 0-5.231 10v.507a11.28 11.28 0 0 0 6.258 10.158a.94.94 0 0 0 .413.094a.94.94 0 0 0 .846-.508a.94.94 0 0 0-.414-1.24a9.6 9.6 0 0 1-2.819-2.19a.24.24 0 0 1 0-.253a.24.24 0 0 1 .207-.141h2.434c.093 0 .178.055.216.14q.254.583.535 1.157a.94.94 0 0 0 .827.507a.94.94 0 0 0 .827-1.334c-.15-.31-.3-.62-.432-.94a.22.22 0 0 1 0-.17a1 1 0 0 0 0-.29a.94.94 0 0 0-.47-.809a.23.23 0 0 1-.113-.131a15.2 15.2 0 0 1-.723-3.298a.22.22 0 0 1 .066-.179a.2.2 0 0 1 .169-.084h.63a.94.94 0 1 0 0-1.88h-.62a.22.22 0 0 1-.17-.084a.2.2 0 0 1-.056-.179c.094-1.045.318-2.074.667-3.063a.24.24 0 0 1 .225-.16h5.638a.235.235 0 0 1 .216.16q.314.879.489 1.795a.94.94 0 0 0 .94.751q.089.015.178 0a.94.94 0 0 0 .724-1.08a16 16 0 0 0-.31-1.306a.24.24 0 0 1 0-.207a.24.24 0 0 1 .188-.094h2.696c.084.001.16.048.198.122a9.3 9.3 0 0 1 1.212 3.524a.947.947 0 1 0 1.88-.235M8.412 3.783a.235.235 0 0 1 .291.348q-.45.714-.817 1.475a.24.24 0 0 1-.207.132H6.072a.24.24 0 0 1-.225-.16a.24.24 0 0 1 .065-.263a9.9 9.9 0 0 1 2.5-1.532m-1.363 12.46a.22.22 0 0 1 0 .197a.22.22 0 0 1-.188.094H3.62a.23.23 0 0 1-.207-.132a9.4 9.4 0 0 1-.808-3.147a.24.24 0 0 1 .056-.179a.25.25 0 0 1 .179-.075h3.4c.123 0 .225.094.235.216c.1 1.024.292 2.036.573 3.026m-.592-5.31a.235.235 0 0 1-.235.217h-3.27a.23.23 0 0 1-.178-.075a.25.25 0 0 1-.056-.198a9.4 9.4 0 0 1 1.184-3.176a.24.24 0 0 1 .206-.122h2.66c.073 0 .143.035.187.094a.22.22 0 0 1 0 .207c-.277.996-.444 2.02-.498 3.054m3.862-5.196a.24.24 0 0 1-.197-.122a.26.26 0 0 1 0-.235a16 16 0 0 1 1.626-2.236a.25.25 0 0 1 .169-.056h.244c.067 0 .132.026.179.075A15.5 15.5 0 0 1 13.964 5.4a.22.22 0 0 1 0 .235a.22.22 0 0 1-.197.122Zm5.046-1.606a.25.25 0 0 1 0-.282a.235.235 0 0 1 .263-.066c.91.379 1.756.895 2.51 1.532a.25.25 0 0 1 .074.263a.24.24 0 0 1-.225.16h-1.588a.24.24 0 0 1-.216-.141a14 14 0 0 0-.818-1.466" strokeWidth={0.5} stroke="currentColor"></path>
                            <path fill="currentColor" d="M11.691 16.468h1.41s.235 0 .235.235v4.229s0 .235-.235.235h-1.41s-.235 0-.235-.235v-4.229s0-.235.235-.235m3.759 0h1.41s.234 0 .234.235v4.229s0 .235-.235.235h-1.41s-.234 0-.234-.235v-4.229s0-.235.235-.235m3.758 0h1.41s.235 0 .235.235v4.229s0 .235-.235.235h-1.41s-.234 0-.234-.235v-4.229s0-.235.234-.235m2.19 5.873H11.062a.71.71 0 0 0 0 1.419h10.336a.705.705 0 0 0 0-1.41Zm.611-7.752l-5.432-2.716a.94.94 0 0 0-.845 0L10.31 14.59a.45.45 0 0 0-.244.526a.46.46 0 0 0 .45.357h11.276a.47.47 0 0 0 .216-.883" strokeWidth={0.5} stroke="currentColor"></path>
                        </svg>
                        </div>
                        <input
                        type="text"
                        maxLength={11}
                        value={formData.ifscCode}
                        onChange={(e) => updateFormData('ifscCode', e.target.value.toUpperCase())}
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
                        <svg className="h-5 w-5 text-gray-400" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4 4a2 2 0 0 1 2-2h8a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm13.586 4L14 4.414V8zM12 4H6v16h12V10h-5a1 1 0 0 1-1-1zm-4 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" strokeWidth={0.5} stroke="currentColor"></path>
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