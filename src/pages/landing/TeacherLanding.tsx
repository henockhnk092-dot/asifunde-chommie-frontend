import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PublicHeader from '../../components/PublicHeader';
import PublicFooter from '../../components/PublicFooter';

const TeacherLanding: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full py-16 lg:py-24 bg-teal-50 dark:bg-teal-900/10">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 font-bold text-sm tracking-wide self-center md:self-start">
                                    For Educators
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                    Empower Your Classroom.<br />
                                    <span className="text-teal-600 dark:text-teal-400">Inspire Minds.</span>
                                </h1>
                                <p className="text-lg text-[#637588] dark:text-[#92a4c9] leading-relaxed max-w-2xl">
                                    Access a wealth of CAPS-aligned teaching resources, lesson plans, and assessment tools. Join a community of South African educators making a difference.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                    <button
                                        onClick={() => navigate('/signup?role=teacher')}
                                        className="h-12 px-8 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg shadow-lg shadow-teal-600/25 transition-all"
                                    >
                                        Join Educator Network
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 w-full max-w-md md:max-w-none">
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-[#232f48]">
                                    <img
                                        src="/teacher_hero_v3.png"
                                        alt="Teacher in Classroom"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-20 bg-white dark:bg-[#192233]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Tools Built for South African Teachers</h2>
                            <p className="text-[#637588] dark:text-[#92a4c9]">Save time on admin and focus on what matters most: teaching.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: 'history_edu', title: 'Lesson Plans', desc: 'Ready-to-use, CAPS-compliant lesson plans for Grades 8-12.' },
                                { icon: 'assignment', title: 'Assessment Bank', desc: 'Create tests and quizzes in minutes using our bank of thousands of questions.' },
                                { icon: 'insights', title: 'Class Analytics', desc: 'Track class performance and identify gaps in understanding immediately.' },
                                { icon: 'folder_shared', title: 'Resource Sharing', desc: 'Share worksheets and notes with your class digitally.' },
                                { icon: 'forum', title: 'Educator Community', desc: 'Connect with other teachers to share best practices and advice.' },
                                { icon: 'verified', title: 'Professional Growth', desc: 'Access workshops and training materials to earn CPTD points.' }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-background-light dark:bg-[#111722] border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 transition-colors">
                                    <div className="size-12 rounded-xl bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6">
                                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-[#637588] dark:text-[#92a4c9]">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Resource Categories Section */}
                <section className="py-20 bg-background-light dark:bg-[#111722]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Browse Resources by Subject</h2>
                                <p className="text-[#637588] dark:text-[#92a4c9]">Find exactly what you need for your specialty.</p>
                            </div>
                            <button onClick={() => navigate('/signup')} className="px-6 py-2 rounded-lg border border-slate-200 dark:border-slate-700 font-bold hover:bg-white dark:hover:bg-[#192233] transition-colors text-slate-700 dark:text-white">
                                View All Subjects
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Mathematics', 'Physical Sciences', 'Life Orientation', 'Accounting', 'English HL', 'Geography', 'History', 'CAT'].map((subject, i) => (
                                <button key={i} onClick={() => navigate('/signup')} className="p-6 rounded-xl bg-white dark:bg-[#192233] border border-slate-200 dark:border-slate-800 hover:border-teal-500 hover:text-teal-600 transition-all font-bold text-lg text-slate-700 dark:text-white shadow-sm">
                                    {subject}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>


            </main>

            <PublicFooter />
        </div >
    );
};

export default TeacherLanding;
