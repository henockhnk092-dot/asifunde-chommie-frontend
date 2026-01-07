import React from 'react';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full py-20 bg-[#111722]">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="/contact_us_hero.png"
                            alt="Contact Support"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            Have a question or need support? We're here to help you succeed.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-background-light dark:bg-[#192233] relative">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Contact Information</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-6">
                                        <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/20 text-primary flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-2xl">location_on</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Our Office</h3>
                                            <p className="text-slate-600 dark:text-[#92a4c9]">
                                                123 Education Lane, Braamfontein<br />
                                                Johannesburg, 2001
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="size-12 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-2xl">mail</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
                                            <p className="text-slate-600 dark:text-[#92a4c9]">
                                                support@asifunde.co.za<br />
                                                hello@asifunde.co.za
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-2xl">phone</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Call Us</h3>
                                            <p className="text-slate-600 dark:text-[#92a4c9]">
                                                +27 11 123 4567<br />
                                                Mon-Fri: 8am - 5pm
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white dark:bg-[#111722] p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-[#324467]">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a message</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#324467] bg-background-light dark:bg-[#192233] focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Thabo" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#324467] bg-background-light dark:bg-[#192233] focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Nkosi" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#324467] bg-background-light dark:bg-[#192233] focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="thabo.nkosi@email.co.za" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#324467] bg-background-light dark:bg-[#192233] focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Molweni/Dumelang, I would like to enquire about..."></textarea>
                                    </div>

                                    <button type="button" className="w-full py-4 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-lg shadow-lg shadow-primary/25 transition-all">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Regional Centres Section */}
                <section className="py-20 bg-white dark:bg-[#111722]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wide mb-4">
                                In Person
                            </span>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Visit our Student Centres</h2>
                            <p className="text-slate-600 dark:text-[#92a4c9] max-w-2xl mx-auto">
                                Need face-to-face support? Drop by one of our regional hubs for workshops, study groups, and career counseling.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* JHB Centre */}
                            <div className="group relative overflow-hidden rounded-3xl aspect-video md:aspect-auto md:h-[400px]">
                                <img 
                                    src="/student_centre_jhb.png" 
                                    alt="Johannesburg Student Centre" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">Johannesburg Hub</h3>
                                    <p className="text-gray-300 mb-4">123 Education Lane, Braamfontein</p>
                                    <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold border border-white/20 transition-all flex items-center gap-2">
                                        <span className="material-symbols-outlined">map</span>
                                        Get Directions
                                    </button>
                                </div>
                            </div>

                            {/* CPT Centre */}
                            <div className="group relative overflow-hidden rounded-3xl aspect-video md:aspect-auto md:h-[400px]">
                                <img 
                                    src="/student_centre_cpt.png" 
                                    alt="Cape Town Student Centre" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">Cape Town Hub</h3>
                                    <p className="text-gray-300 mb-4">45 Long Street, City Centre</p>
                                    <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold border border-white/20 transition-all flex items-center gap-2">
                                        <span className="material-symbols-outlined">map</span>
                                        Get Directions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section with Image Background */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/faq_bg.png"
                            alt="Background Pattern"
                            className="w-full h-full object-cover opacity-20 dark:opacity-5"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#192233]/50 dark:to-[#192233]"></div>
                    </div>
                    <div className="max-w-[1000px] mx-auto px-4 md:px-10 relative z-10">
                        <h2 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-12">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { question: "How do I reset my password?", answer: "You can easily reset your password by clicking on 'Forgot Password' on the login page." },
                                { question: "Is Asifunde free to use?", answer: "Yes! Our core resources like past papers and career guides are completely free for students." },
                                { question: "Can I contribute study materials?", answer: "Absolutely. We love contributions from teachers. Please email us at content@asifunde.co.za." },
                                { question: "Do you offer offline access?", answer: "Currently, our platform requires an internet connection, but we are working on an offline mode app." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white/80 dark:bg-[#111722]/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-[#324467] shadow-sm hover:shadow-md transition-all">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{faq.question}</h3>
                                    <p className="text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </main>

            <PublicFooter />
        </div >
    );
};

export default Contact;
