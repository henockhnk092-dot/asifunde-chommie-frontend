import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Subscription: React.FC = () => {
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

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.buttonStyle}`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
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
