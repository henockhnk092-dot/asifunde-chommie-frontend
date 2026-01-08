import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Subscription: React.FC = () => {
    const [showBankDetails, setShowBankDetails] = useState(false);

    // Mock Subscription Data
    const subscription = {
        plan: 'Free Tier',
        status: 'Active',
        nextBilling: 'N/A',
        paymentMethod: 'N/A'
    };

    const plans = [
        {
            name: 'Free',
            price: 'R0',
            frequency: 'Forever',
            features: [
                'Access to limited videos',
                'Basic quizzes (max 3 per week)',
                'View-only study materials',
                'Standard support'
            ],
            current: true,
            buttonText: 'Current Plan',
            buttonStyle: 'bg-slate-200 dark:bg-slate-700 text-slate-500 cursor-default'
        },
        {
            name: 'Premium',
            price: 'R99',
            frequency: 'per month',
            features: [
                'Unlimited video streaming',
                'Unlimited quizzes & assessments',
                'Full access to all study materials',
                'Detailed progress analytics',
                'AI Tutor access (24/7)',
                'Priority support'
            ],
            current: false,
            buttonText: 'Upgrade Now',
            buttonStyle: 'bg-primary text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
        }
    ];

    // Bank Details for Manual Payments
    const bankAccounts = [
        {
            bank: 'ABSA Bank',
            accountName: 'ASIFUNDE CHOMMIE (PTY) LTD',
            accountNumber: '4092 5183 67',
            accountType: 'Current Account',
            branchCode: '632005',
            branchName: 'Sandton City',
            swiftCode: 'ABSAZAJJ',
            logo: '🏦'
        },
        {
            bank: 'Standard Bank',
            accountName: 'ASIFUNDE CHOMMIE (PTY) LTD',
            accountNumber: '0726 8341 52',
            accountType: 'Business Account',
            branchCode: '051001',
            branchName: 'Johannesburg Main',
            swiftCode: 'SBZAZAJJ',
            logo: '🏦'
        }
    ];

    const contactDetails = {
        email: 'payments@asifundechommie.co.za',
        phone: '+27 11 555 1234',
        whatsapp: '+27 82 555 1234'
    };

    return (
        <DashboardLayout userType="parent" headerTitle="Subscription" showSearch={false}>
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Current Plan Status */}
                <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-500">card_membership</span>
                        Current Subscription
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Current Plan</p>
                            <p className="text-2xl font-bold">{subscription.plan}</p>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Status</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                <p className="font-semibold">{subscription.status}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Next Billing Date</p>
                            <p className="font-semibold mt-1">{subscription.nextBilling}</p>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Payment Method</p>
                            <p className="font-semibold mt-1 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">credit_card_off</span>
                                {subscription.paymentMethod}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Plans Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative p-8 rounded-3xl border-2 flex flex-col ${plan.current ? 'bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700' : 'bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10 border-primary shadow-xl'}`}>
                            {plan.name === 'Premium' && (
                                <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">Best Value</span>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-black">{plan.price}</span>
                                    <span className="text-slate-500 font-semibold mb-1">{plan.frequency}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className={`material-symbols-outlined text-xl ${plan.current ? 'text-slate-400' : 'text-green-500'}`}>check_circle</span>
                                        <span className="text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => !plan.current && setShowBankDetails(true)}
                                className={`w-full py-4 rounded-xl font-bold transition-all ${plan.buttonStyle}`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Manual Payment Options */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-6 md:p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">account_balance</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Manual Bank Payment Option</h2>
                            <p className="text-slate-600 dark:text-slate-300">
                                Prefer to pay at your local bank branch? You can deposit directly into our bank accounts.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowBankDetails(!showBankDetails)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg mb-6"
                    >
                        <span className="material-symbols-outlined">{showBankDetails ? 'visibility_off' : 'visibility'}</span>
                        {showBankDetails ? 'Hide' : 'View'} Bank Account Details
                    </button>

                    {showBankDetails && (
                        <div className="space-y-6">
                            {/* Important Instructions */}
                            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-6">
                                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-orange-700 dark:text-orange-400">
                                    <span className="material-symbols-outlined">info</span>
                                    Important Payment Instructions
                                </h3>
                                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-orange-600 text-sm mt-0.5">check_circle</span>
                                        <span><strong>Payment Reference:</strong> Use your email address or phone number as the payment reference</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-orange-600 text-sm mt-0.5">check_circle</span>
                                        <span><strong>After Payment:</strong> Email or WhatsApp your proof of payment (deposit slip/receipt) to us</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-orange-600 text-sm mt-0.5">check_circle</span>
                                        <span><strong>Processing Time:</strong> Manual payments take approximately <strong>24 hours</strong> to verify and activate</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-orange-600 text-sm mt-0.5">check_circle</span>
                                        <span><strong>Business Hours:</strong> Payments made on weekends will be processed on the next business day</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Bank Accounts */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {bankAccounts.map((account, index) => (
                                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-lg">
                                        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                                            <span className="text-4xl">{account.logo}</span>
                                            <h3 className="text-xl font-bold">{account.bank}</h3>
                                        </div>
                                        <div className="space-y-3 text-sm">
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-400 font-semibold mb-1">Account Name</p>
                                                <p className="font-bold text-base">{account.accountName}</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-400 font-semibold mb-1">Account Number</p>
                                                <p className="font-bold text-lg text-primary">{account.accountNumber}</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-400 font-semibold mb-1">Account Type</p>
                                                <p className="font-semibold">{account.accountType}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <p className="text-slate-500 dark:text-slate-400 font-semibold mb-1">Branch Code</p>
                                                    <p className="font-bold">{account.branchCode}</p>
                                                </div>
                                                <div>
                                                    <p className="text-slate-500 dark:text-slate-400 font-semibold mb-1">Branch</p>
                                                    <p className="font-semibold">{account.branchName}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 dark:text-slate-400 font-semibold mb-1">SWIFT Code</p>
                                                <p className="font-bold">{account.swiftCode}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Information */}
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">contact_support</span>
                                    Send Your Proof of Payment
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                        <span className="material-symbols-outlined text-2xl text-primary">email</span>
                                        <div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Email</p>
                                            <p className="font-bold text-sm">{contactDetails.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                        <span className="material-symbols-outlined text-2xl text-primary">phone</span>
                                        <div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Phone</p>
                                            <p className="font-bold text-sm">{contactDetails.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                        <span className="material-symbols-outlined text-2xl text-green-600">chat</span>
                                        <div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">WhatsApp</p>
                                            <p className="font-bold text-sm">{contactDetails.whatsapp}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Billing History (Empty State for Mock) */}
                <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 opacity-70">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-500">history</span>
                        Billing History
                    </h2>
                    <div className="text-center py-8">
                        <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">receipt_long</span>
                        <p className="text-slate-500">No billing history available on free plan.</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Subscription;
