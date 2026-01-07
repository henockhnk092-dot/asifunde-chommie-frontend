import React from 'react';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const TermsOfService: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />
            <main className="flex-grow py-12 px-4 md:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>Last updated: December 12, 2025</p>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">1. Agreement to Terms</h2>
                        <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Asifunde Chommie ("we," "us" or "our"), concerning your access to and use of the Asifunde Chommie website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">2. Intellectual Property Rights</h2>
                        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">3. User Representations</h2>
                        <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">4. User Registration</h2>
                        <p>You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">5. Educational Content</h2>
                        <p>The content provided on Asifunde Chommie is for educational purposes only. While we strive for accuracy, we make no warranties regarding the completeness, reliability, or accuracy of this information.</p>
                    </section>
                </div>
            </main>
            <PublicFooter />
        </div>
    );
};

export default TermsOfService;
