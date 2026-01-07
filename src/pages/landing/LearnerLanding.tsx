import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PublicHeader from '../../components/PublicHeader';
import PublicFooter from '../../components/PublicFooter';

const LearnerLanding: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full py-16 lg:py-24 bg-primary/5">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide self-center md:self-start">
                                    For Grades 8-12
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                    Master Your Matric.<br />
                                    <span className="text-primary">Shape Your Future.</span>
                                </h1>
                                <p className="text-lg text-[#637588] dark:text-[#92a4c9] leading-relaxed max-w-2xl">
                                    Get access to thousands of past papers, interactive quizzes, and AI-powered study assistance tailored for the South African CAPS curriculum.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <button
                                        onClick={() => navigate('/signup?role=learner')}
                                        className="h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-lg shadow-lg shadow-primary/25 transition-all"
                                    >
                                        Start Studying Now
                                    </button>
                                    <button
                                        onClick={() => navigate('/subjects')}
                                        className="h-12 px-8 rounded-lg bg-white dark:bg-[#192233] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#232f48] text-[#111418] dark:text-white font-bold text-lg transition-all"
                                    >
                                        Explore Subjects
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 w-full max-w-md md:max-w-none">
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#232f48]">
                                    <img
                                        src="/images/learner_hero_studying.png"
                                        alt="Student Studying"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="material-symbols-outlined text-yellow-400 filled">star</span>
                                            <span className="font-bold">4.9/5 Student Rating</span>
                                        </div>
                                        <p className="text-sm opacity-90">"Asifunde helped me improve my Physics mark by 20%!" - Thabo, Grade 12</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-white dark:bg-[#192233]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Everything You Need to Ace Exams</h2>
                            <p className="text-[#637588] dark:text-[#92a4c9]">We've combined the best study resources into one easy-to-use platform.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: 'library_books', title: 'Past Papers', desc: 'Download exam papers and memos from 2015-2024 for all major subjects.' },
                                { icon: 'quiz', title: 'Interactive Quizzes', desc: 'Test your knowledge with immediate feedback to identify areas for improvement.' },
                                { icon: 'smart_toy', title: 'AI Tutor', desc: 'Get 24/7 help with difficult concepts and homework questions.' },
                                { icon: 'school', title: 'Career Guidance', desc: 'Discover career paths that match your personality and subject choices.' },
                                { icon: 'trophy', title: 'Gamified Learning', desc: 'Earn badges, compete on leaderboards, and make studying fun.' },
                                { icon: 'devices', title: 'Mobile Friendly', desc: 'Study on the go with our fully responsive platform optimized for mobile data.' }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-background-light dark:bg-[#111722] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-[#637588] dark:text-[#92a4c9]">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1280px] mx-auto px-4">
                        <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Improve Your Marks?</h2>
                                <p className="text-lg opacity-90 mb-8">Join thousands of South African learners who are already using Asifunde to succeed.</p>
                                <button
                                    onClick={() => navigate('/signup?role=learner')}
                                    className="h-14 px-10 rounded-full bg-white text-primary font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl"
                                >
                                    Create Free Account
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <PublicFooter />
        </div>
    );
};

export default LearnerLanding;
