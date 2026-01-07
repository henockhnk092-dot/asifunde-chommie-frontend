import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Support: React.FC = () => {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const faqs = [
        { id: 1, question: "How do I upgrade my subscription?", answer: "Go to the 'Subscription' tab in your dashboard and select 'Upgrade Plan'. You can choose between monthly and annual billing." },
        { id: 2, question: "How can I add another child?", answer: "Visit the 'My Children' page and click the 'Add Child' button. You'll need to enter their name, grade, and create a login for them." },
        { id: 3, question: "Can I monitor my child's quiz results?", answer: "Yes! Navigate to 'Progress Reports' and select your child's profile to see a detailed breakdown of their quiz scores and subject mastery." },
        { id: 4, question: "I forgot my password, how do I reset it?", answer: "On the login page, click 'Forgot Password'. Follow the email instructions to securely reset your credentials." }
    ];

    return (
        <DashboardLayout userType="parent" headerTitle="Support & Help">
            <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                        <span className="material-symbols-outlined text-4xl text-primary mb-3">email</span>
                        <h3 className="font-bold text-lg mb-2">Email Us</h3>
                        <p className="text-sm text-slate-500 mb-4">Get a response within 24 hours</p>
                        <a href="mailto:support@stitch.co.za" className="text-primary font-bold hover:underline">support@stitch.co.za</a>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                        <span className="material-symbols-outlined text-4xl text-green-500 mb-3">chat</span>
                        <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                        <p className="text-sm text-slate-500 mb-4">Available Mon-Fri, 9am-5pm</p>
                        <button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-bold text-sm">Start Chat</button>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                        <span className="material-symbols-outlined text-4xl text-purple-500 mb-3">call</span>
                        <h3 className="font-bold text-lg mb-2">Call Us</h3>
                        <p className="text-sm text-slate-500 mb-4">Urgent inquiries only</p>
                        <p className="font-bold text-lg">0860 123 456</p>
                    </div>
                </div>

                {/* FAQs */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-700">
                        {faqs.map((faq) => (
                            <div key={faq.id} className="p-6">
                                <button
                                    onClick={() => setFaqOpen(faqOpen === faq.id ? null : faq.id)}
                                    className="flex justify-between items-center w-full text-left font-bold text-lg hover:text-primary transition-colors"
                                >
                                    {faq.question}
                                    <span className={`material-symbols-outlined transition-transform ${faqOpen === faq.id ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>
                                {faqOpen === faq.id && (
                                    <p className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ticket Form */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-8">
                    <h2 className="text-xl font-bold mb-6">Submit a Support Ticket</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500">Subject</label>
                                <input type="text" className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none" placeholder="Brief description of issue" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500">Category</label>
                                <select className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none">
                                    <option>Technical Issue</option>
                                    <option>Billing</option>
                                    <option>Account Access</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-500">Message</label>
                            <textarea className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none h-32" placeholder="Describe your issue in detail..."></textarea>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg">Submit Ticket</button>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default Support;
