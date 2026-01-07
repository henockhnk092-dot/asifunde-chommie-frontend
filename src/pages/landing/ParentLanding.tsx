import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PublicHeader from '../../components/PublicHeader';
import PublicFooter from '../../components/PublicFooter';

const ParentLanding: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full py-16 lg:py-24 bg-purple-50 dark:bg-purple-900/10">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 font-bold text-sm tracking-wide self-center md:self-start">
                                    For Parents & Guardians
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                    Support Their Journey.<br />
                                    <span className="text-purple-600 dark:text-purple-400">Secure Their Future.</span>
                                </h1>
                                <p className="text-lg text-[#637588] dark:text-[#92a4c9] leading-relaxed max-w-2xl">
                                    Stay connected to your child's academic progress with real-time insights, curriculum guides, and expert advice for navigating high school.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <button
                                        onClick={() => navigate('/signup?role=parent')}
                                        className="h-12 px-8 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg shadow-lg shadow-purple-600/25 transition-all"
                                    >
                                        Create Parent Account
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 w-full max-w-md md:max-w-none">
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-[#232f48]">
                                    <div className="absolute inset-0 bg-purple-600/10 mix-blend-multiply"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                                        alt="Parent Helping Student"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="py-20 bg-white dark:bg-[#192233]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Why Join Asifunde?</h2>
                            <p className="text-[#637588] dark:text-[#92a4c9]">We give you the visibility you need without hovering.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: 'monitoring', title: 'Real-time Monitoring', desc: 'See exactly which topics your child has mastered and where they need help.' },
                                { icon: 'notifications', title: 'Automated Updates', desc: 'Get weekly email summaries of quiz scores and study activity.' },
                                { icon: 'Menu_book', title: 'Curriculum Guides', desc: 'Understand the CAPS curriculum requirements and subject choices.' },
                                { icon: 'school', title: 'University Info', desc: 'Access info on APS scores, application deadlines, and bursary opportunities.' },
                                { icon: 'lock', title: 'Safe & Secure', desc: 'A safe online environment focused purely on education and growth.' },
                                { icon: 'family_restroom', title: 'Family Accounts', desc: 'Link multiple children to a single parent dashboard for easy management.' }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-background-light dark:bg-[#111722] border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-colors">
                                    <div className="size-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-[#637588] dark:text-[#92a4c9]">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-20 bg-background-light dark:bg-[#111722]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Simple Setup, Powerful Insights</h2>
                            <p className="text-lg text-[#637588] dark:text-[#92a4c9]">
                                Get started in less than 5 minutes.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>

                            {[
                                { step: "1", title: "Create Your Account", desc: "Sign up for a free parent profile." },
                                { step: "2", title: "Link Your Child", desc: "Send an invite code or create their account." },
                                { step: "3", title: "Track Progress", desc: "View their dashboard instantly." }
                            ].map((item, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center text-center">
                                    <div className="size-24 rounded-full bg-white dark:bg-[#192233] border-4 border-purple-100 dark:border-purple-900/30 flex items-center justify-center mb-6 shadow-sm">
                                        <span className="text-4xl font-black text-purple-600 dark:text-purple-400">{item.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-[#637588] dark:text-[#92a4c9]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Parent Reviews Section */}
                <section className="py-20 bg-white dark:bg-[#192233]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <h2 className="text-3xl font-black text-center mb-12 text-slate-900 dark:text-white">Trusted by Parents</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Lerato M.", child: "Grade 10 Learner", quote: "Now I know exactly when my son needs help with Math. No more surprises at report card time!" },
                                { name: "David K.", child: "Grade 12 Learner", quote: "The career guidance tool helped us finally agree on university choices. It was a lifesaver." },
                                { name: "Susan V.", child: "Grade 11 Learner", quote: "I love the weekly summaries. It makes our Sunday evening planning so much easier." }
                            ].map((review, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/20">
                                    <div className="flex gap-1 mb-4 text-orange-400">
                                        {[1, 2, 3, 4, 5].map(star => <span key={star} className="material-symbols-outlined filled text-xl">star</span>)}
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 italic mb-6">"{review.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-white dark:bg-[#111722] flex items-center justify-center font-bold text-slate-500 shadow-sm">
                                            {review.name[0]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</p>
                                            <p className="text-xs text-slate-500">{review.child}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <PublicFooter />
        </div>
    );
};

export default ParentLanding;
