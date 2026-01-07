import React from 'react';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const About: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/about_us_hero.png"
                            alt="Our Team"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/70"></div>
                    </div>
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 relative z-10 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm tracking-wide mb-6 border border-white/20 backdrop-blur-md">
                            Our Mission
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Democratizing Education <br />
                            <span className="text-primary">For Every Learner.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                            We believe that quality education is a right, not a privilege. Asifunde Chommie bridges the gap by providing world-class resources to students across South Africa.
                        </p>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-white dark:bg-[#192233]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { title: "Inclusivity", desc: "Building tools that work for everyone, regardless of their background or resources.", icon: "diversity_3", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/20" },
                                { title: "Excellence", desc: "Curating only the best, CAPS-aligned content from top educators.", icon: "verified", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/20" },
                                { title: "Community", desc: "Fostering a supportive network of learners, parents, and teachers.", icon: "groups", color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/20" }
                            ].map((value, i) => (
                                <div key={i} className="text-center group">
                                    <div className={`size-20 mx-auto rounded-2xl ${value.bg} ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="material-symbols-outlined text-4xl">{value.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{value.title}</h3>
                                    <p className="text-slate-600 dark:text-[#92a4c9] leading-relaxed">
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Journey Section */}
                <section className="py-20 bg-background-light dark:bg-[#111722]">
                    <div className="max-w-[1000px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-sm tracking-wide mb-4">
                                Milestones
                            </span>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Our Journey So Far</h2>
                        </div>

                        <div className="relative space-y-12">
                            {/* Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-[#324467] -translate-x-1/2 md:translate-x-0 hidden md:block"></div>

                            {[
                                { year: "2023", title: "The Idea", desc: "Asifunde Chommie was born out of a hackathon project aimed at solving the digital divide in education.", align: "left" },
                                { year: "2024", title: "Beta Launch", desc: "We launched our pilot program in 50 schools across Gauteng, reaching our first 5,000 learners.", align: "right" },
                                { year: "2025", title: "Going National", desc: "Expanded to all 9 provinces and introduced teacher-generated content and live tutoring.", align: "left" },
                                { year: "Future", title: "The Vision", desc: "Ai-driven personalized learning paths for every high school student in South Africa.", align: "right" }
                            ].map((item, i) => (
                                <div key={i} className={`relative flex md:justify-between items-center ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="hidden md:block w-5/12"></div>
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 size-8 rounded-full bg-primary border-4 border-white dark:border-[#111722] z-10 hidden md:block"></div>

                                    <div className={`w-full md:w-5/12 pl-4 md:pl-0 ${item.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-white dark:bg-[#192233] p-6 rounded-2xl border border-slate-200 dark:border-[#324467] hover:border-primary/50 transition-all shadow-sm">
                                            <span className="text-primary font-black text-xl block mb-2">{item.year}</span>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                            <p className="text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-background-light dark:bg-[#111722]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="bg-primary rounded-3xl p-12 text-white text-center relative overflow-hidden">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                                {[
                                    { label: "Students", value: "50k+" },
                                    { label: "Resources", value: "10k+" },
                                    { label: "Schools", value: "500+" },
                                    { label: "Provinces", value: "9" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-4xl md:text-6xl font-black mb-2">{stat.value}</div>
                                        <div className="text-blue-100 font-medium uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Legal & Policies Section */}
                <section id="legal" className="py-20 bg-white dark:bg-[#192233]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <h2 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-16">Legal & Policies</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Privacy Policy Preview */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">security</span>
                                    Privacy Policy
                                </h3>
                                <div className="prose dark:prose-invert text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed">
                                    <p className="mb-4"><strong>Last updated: December 12, 2025</strong></p>
                                    <p className="mb-4">Welcome to Asifunde Chommie. We respect your privacy and are committed to protecting your personal data.</p>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">1. The Data We Collect</h4>
                                    <ul className="list-disc pl-5 space-y-1 mb-4">
                                        <li><strong>Identity Data:</strong> Name, username.</li>
                                        <li><strong>Contact Data:</strong> Email, phone.</li>
                                        <li><strong>Technical Data:</strong> IP address, browser info.</li>
                                    </ul>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">2. How We Use Your Data</h4>
                                    <p className="mb-4">We use your data to manage your account, provide educational content, and improve our services.</p>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Data Security</h4>
                                    <p className="mb-4">We implement security measures to protect your personal data from unauthorized access.</p>
                                </div>
                            </div>

                            {/* Terms of Service Preview */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">gavel</span>
                                    Terms of Service
                                </h3>
                                <div className="prose dark:prose-invert text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed">
                                    <p className="mb-4"><strong>Last updated: December 12, 2025</strong></p>
                                    <p className="mb-4">By accessing Asifunde Chommie, you agree to these Terms of Service.</p>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">1. User Account</h4>
                                    <p className="mb-4">You are responsible for maintaining the confidentiality of your account credentials.</p>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">2. Intellectual Property</h4>
                                    <p className="mb-4">All content on this site is the property of Asifunde Chommie or its content creators.</p>

                                    <h4 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">3. Educational Use</h4>
                                    <p className="mb-4">Materials are provided for educational purposes only. We do not guarantee specific academic results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <PublicFooter />
        </div>
    );
};

export default About;
