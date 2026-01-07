import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root bg-background text-foreground overflow-x-hidden">
            {/* Navigation Bar */}
            <PublicHeader />

            <main className="flex-grow flex flex-col items-center w-full">
                {/* Hero Section */}
                <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-20 py-10 lg:py-16">
                    <div className="@container">
                        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
                            <div className="flex flex-col gap-6 lg:w-1/2 items-start text-left">
                                <div className="flex flex-col gap-4">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide w-fit">
                                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                        Grade 8-12 Learning Hub
                                    </span>
                                    <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                                        Unlock Your Future, <span className="text-primary">Chommie!</span>
                                    </h1>
                                    <p className="text-muted-foreground text-lg font-normal leading-relaxed max-w-[540px]">
                                        The ultimate study buddy for South African learners. Master your Matric, ace your exams, and discover your dream career path—all in one place.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                    <button
                                        onClick={() => navigate('/learners')}
                                        className="flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-primary hover:opacity-90 text-primary-foreground text-base font-bold transition-all shadow-lg shadow-primary/25 w-full sm:w-auto"
                                    >
                                        Start Learning
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                    <button
                                        onClick={() => navigate('/career-quiz')}
                                        className="flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-transparent border border-border text-foreground hover:bg-accent text-base font-bold transition-all w-full sm:w-auto"
                                    >
                                        <span className="material-symbols-outlined">quiz</span>
                                        Take Career Quiz
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 mt-2 pt-4 border-t border-border w-full">
                                    <div className="flex -space-x-3">
                                        <div className="size-8 rounded-full bg-muted border-2 border-background bg-center bg-cover"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJO_t95o_XR-i6A8XncxjBtYvk58Fp_7zRn5D9Y2y7-FrVsyyLHumdwXg_q-RQTGYpAaO1ZXXvVeid-nxt2t0TC0MsfdVONXQnVDqwmf3cnGbYI5Q5XoG4fOZxg_jgHU3GzHkT44SNGTdNkA-0qyUgy9w4xtbOhfvEjCi9UJygE-NSXdUNs4jOJu8STqEoc-0W6mEYudDpQgGtVUhuNfmWpU-eDn8r8a3snm7Obo8qSdv8UR-7dX0loSrILB-gvzqAryOx5k2Wgquy")' }}></div>
                                        <div className="size-8 rounded-full bg-muted border-2 border-background bg-center bg-cover"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiCHjaDc47LvnFTPUnkvqjCnkjgwki7buEAEQGy_G5LKR4HZxYceRkEnTbq_rKqyULyNyEO1zu1AP9HBJXf5cQguOChSPxy4YJ63J16nL2bSDcgogf-9LvE_xkmM5Sur1cVtlwvQKAhKZ9aT3m0GdSTc55NL17LO31iUoPjvUfijRtSHhWCotMoX9AAiEhObJdPIRaydPLMISw-fIUGY8bKt_8FynI71d7eEogaGW5pnZHMHV9REzEPTWH4vB00QtHJypJKWs6uZG8")' }}></div>
                                        <div className="size-8 rounded-full bg-muted border-2 border-background bg-center bg-cover"
                                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZiTrxvv31PmPFWEvk7M1GIGMKTxMYbZeDvLULlKrKFIp1mr8sZSDR8GHF96_QG_owGvVkTXsKYsmDui023WkQ-UGw_7V7DlJm8Baz7jjDWqb6v2yX0d8h9SaOQ1_vUPEzGkOK6wPceVFn9jg9t_xckr1Zz0PM8F9jp4qa0V3MEFumsVihCHH2Dkyc6gTG428doq2m_ENnqyDPbH5OK2PFXZ642-aN5Epk6vaNixgXijCY83tMgM7MOY6bG7-tWzSj3ytOQtjrGrlt")' }}></div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Trusted by <span className="font-bold text-foreground">10,000+</span> SA Learners</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur-xl opacity-70"></div>
                                <div className="relative w-full aspect-[4/3] bg-center bg-cover rounded-xl shadow-2xl overflow-hidden"
                                    style={{ backgroundImage: 'url("/assets/success_toolkit_hero.png")' }}>
                                    {/* Decorative Overlay Card */}
                                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-card/95 backdrop-blur-md p-4 rounded-lg shadow-lg border border-border sm:max-w-[260px]">
                                        <div className="flex items-start gap-3">
                                            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                                                <span className="material-symbols-outlined text-xl">check_circle</span>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Latest Achievement</p>
                                                <p className="text-sm font-bold text-foreground leading-tight">Thando aced Physics P1!</p>
                                                <p className="text-xs text-muted-foreground mt-1">Found via Past Papers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="w-full bg-card border-y border-border">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-12 md:py-16">
                        <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-16">
                            <div className="flex max-w-2xl flex-col gap-4">
                                <h2 className="text-foreground text-2xl md:text-3xl font-bold leading-tight">Bridging the gap between school and your dream job.</h2>
                                <p className="text-muted-foreground text-base font-normal leading-relaxed">
                                    We provide the tools you need to master your matric and plan your future career with confidence. Whether you need revision material or guidance on university applications, we've got you covered.
                                </p>
                            </div>
                            <div className="flex items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-foreground">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="material-symbols-outlined text-4xl">school</span>
                                    <span className="text-xs font-bold">TVET Colleges</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="material-symbols-outlined text-4xl">account_balance</span>
                                    <span className="text-xs font-bold">Universities</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="material-symbols-outlined text-4xl">menu_book</span>
                                    <span className="text-xs font-bold">DoE Aligned</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* User Personas Grid */}
                <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-20 py-16">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-3 text-center md:text-left">
                            <h2 className="text-foreground text-3xl font-bold leading-tight">Who is Asifunde For?</h2>
                            <p className="text-muted-foreground text-base">Tailored resources for every part of the education journey.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Learner Card */}
                            <button
                                onClick={() => navigate('/learners')}
                                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer relative overflow-hidden text-left"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-8xl text-primary">school</span>
                                </div>
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined text-2xl">school</span>
                                </div>
                                <div className="flex flex-col gap-2 z-10">
                                    <h3 className="text-foreground text-xl font-bold">For Learners</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        Access past papers, quizzes, and career advice tailored for Grades 8-12. Improve your marks today.
                                    </p>
                                    <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Start Studying <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </span>
                                </div>
                            </button>
                            {/* Parent Card */}
                            <button
                                onClick={() => navigate('/parents')}
                                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer relative overflow-hidden text-left"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-8xl text-purple-500">family_restroom</span>
                                </div>
                                <div className="size-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-2">
                                    <span className="material-symbols-outlined text-2xl">family_restroom</span>
                                </div>
                                <div className="flex flex-col gap-2 z-10">
                                    <h3 className="text-foreground text-xl font-bold">For Parents</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        Track your child's progress, understand curriculum changes, and find resources to support their journey.
                                    </p>
                                    <span className="text-purple-600 dark:text-purple-400 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Support your Child <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </span>
                                </div>
                            </button>
                            {/* Teacher Card */}
                            <button
                                onClick={() => navigate('/teachers')}
                                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer relative overflow-hidden text-left"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-8xl text-teal-500">cast_for_education</span>
                                </div>
                                <div className="size-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-2">
                                    <span className="material-symbols-outlined text-2xl">cast_for_education</span>
                                </div>
                                <div className="flex flex-col gap-2 z-10">
                                    <h3 className="text-foreground text-xl font-bold">For Teachers</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        Get lesson plans, administrative tools, and connect with a community of South African educators.
                                    </p>
                                    <span className="text-teal-600 dark:text-teal-400 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Access Resources <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Popular Subjects */}
                <section className="w-full bg-card py-16">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="flex justify-between items-end mb-8 px-4">
                            <h2 className="text-foreground text-2xl md:text-3xl font-bold leading-tight">Popular Subjects</h2>
                            <button
                                onClick={() => navigate('/subjects')}
                                className="text-primary text-sm font-bold hover:underline hidden sm:block"
                            >
                                View All Subjects
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
                            {[
                                { name: 'Mathematics', slug: 'mathematics', icon: 'calculate', color: 'blue' },
                                { name: 'Physical Sciences', slug: 'physical-sciences', icon: 'science', color: 'red' },
                                { name: 'Life Sciences', slug: 'life-sciences', icon: 'biotech', color: 'yellow' },
                                { name: 'English HL', slug: 'english-hl', icon: 'translate', color: 'green' },
                                { name: 'Accounting', slug: 'accounting', icon: 'account_balance', color: 'purple', hidden: 'hidden md:flex' }
                            ].map((subject) => (
                                <button
                                    key={subject.name}
                                    onClick={() => navigate(`/subjects/${subject.slug}`)}
                                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-lg bg-background hover:bg-card border border-transparent hover:border-border transition-all group text-center ${subject.hidden || ''}`}
                                >
                                    <div className={`size-14 rounded-full bg-${subject.color}-100 dark:bg-${subject.color}-900/30 flex items-center justify-center text-${subject.color}-600 dark:text-${subject.color}-400 group-hover:scale-110 transition-transform`}>
                                        <span className="material-symbols-outlined text-3xl">{subject.icon}</span>
                                    </div>
                                    <span className="text-foreground font-medium">{subject.name}</span>
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-center mt-6 sm:hidden">
                            <button
                                onClick={() => navigate('/subjects')}
                                className="text-primary text-sm font-bold hover:underline"
                            >
                                View All Subjects
                            </button>
                        </div>
                    </div>
                </section>

                {/* Career Guidance */}
                <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-20 py-16">
                    <div className="rounded-2xl bg-card border border-primary/20 overflow-hidden relative shadow-lg dark:shadow-none">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [backgroundSize:16px_16px]"></div>
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 relative z-10">
                            <div className="flex-1 flex flex-col gap-6">
                                <h2 className="text-foreground text-3xl font-bold leading-tight">Unsure about your future?</h2>
                                <p className="text-muted-foreground text-lg">
                                    Don't stress, chommie! Take our free career aptitude test to find out which careers match your personality and skills. We also have guides on university requirements and TVET colleges.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button
                                        onClick={() => navigate('/career-quiz')}
                                        className="h-10 px-5 rounded-lg bg-primary hover:opacity-90 text-primary-foreground text-sm font-bold transition-colors shadow-md shadow-primary/20"
                                    >
                                        Take the Career Quiz
                                    </button>
                                    <button
                                        onClick={() => navigate('/career-guides')}
                                        className="h-10 px-5 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground text-sm font-bold transition-all shadow-sm"
                                    >
                                        Browse Career Guides
                                    </button>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="relative size-48 md:size-64">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center border-4 border-primary/30 shadow-inner">
                                        <span className="material-symbols-outlined text-primary text-[80px] md:text-[100px]">lightbulb</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Asifunde (Features) */}
                <section className="w-full bg-card py-20 border-y border-border">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
                        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/home_features_human.png"
                                    alt="Asifunde Features"
                                    className="w-full rounded-2xl shadow-2xl border border-border hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-8">
                                <div>
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Everything you need</span>
                                    <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight mb-4">
                                        Your All-in-One <br />
                                        <span className="text-primary">Success Toolkit</span>
                                    </h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Stop juggling multiple sites and textbooks. We've brought everything together in one easy-to-use platform.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: "Expert Video Lessons", desc: "Complex topics broken down into bite-sized, easy-to-understand videos.", icon: "play_circle", link: "/video-lessons" },
                                        { title: "Interactive Past Papers", desc: "Practice with real exam questions and get instant feedback on your answers.", icon: "assignment", link: "/past-papers" },
                                        { title: "24/7 Career Guidance", desc: "Never feel lost about your future with our AI-powered career counseling.", icon: "school", link: "/study-guides" }
                                    ].map((feature, i) => (
                                        <Link to={feature.link} key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted transition-colors group cursor-pointer block">
                                            <div className="size-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-primary text-2xl">{feature.icon}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{feature.title}</h3>
                                                <p className="text-muted-foreground text-sm">{feature.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Footer */}
                <PublicFooter />
            </main>
        </div>
    );
};

export default HomePage;
