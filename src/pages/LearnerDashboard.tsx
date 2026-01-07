import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const LearnerDashboard: React.FC = () => {
    return (
        <DashboardLayout userType="learner">
            <div className="max-w-7xl mx-auto space-y-8 p-6 md:p-8">
                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Welcome back, Thabo!</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg flex items-center gap-2">
                            <span className="material-symbols-outlined text-orange-500">local_fire_department</span>
                            You're on a 3-day streak! Keep the momentum going.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-6 rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined">play_circle</span>
                            Resume Last Lesson
                        </button>
                    </div>
                </div>

                {/* Stats Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-[#1a1d24] p-5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1 shadow-sm">
                        <div className="flex justify-between items-start">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Syllabus Completion</p>
                            <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-lg text-lg">donut_large</span>
                        </div>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">68%</p>
                        <p className="text-[#0bda5e] text-sm font-medium flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-sm">trending_up</span> +1.2% this week
                        </p>
                    </div>
                    <div className="bg-white dark:bg-[#1a1d24] p-5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1 shadow-sm">
                        <div className="flex justify-between items-start">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Quizzes Aced</p>
                            <span className="material-symbols-outlined text-purple-500 bg-purple-500/10 p-1.5 rounded-lg text-lg">emoji_events</span>
                        </div>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">12</p>
                        <p className="text-[#0bda5e] text-sm font-medium flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-sm">add</span> 2 new badges
                        </p>
                    </div>
                    <div className="bg-white dark:bg-[#1a1d24] p-5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-1 shadow-sm">
                        <div className="flex justify-between items-start">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Study Time</p>
                            <span className="material-symbols-outlined text-orange-500 bg-orange-500/10 p-1.5 rounded-lg text-lg">timer</span>
                        </div>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">4h 12m</p>
                        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium flex items-center gap-1 mt-1">
                            Today's Total
                        </p>
                    </div>
                </div>

                {/* Two Column Layout: Main Content vs Sidebar Widgets */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (Main Content) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Continue Learning Section */}
                        <section>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Continue Learning</h3>
                                <a className="text-primary text-sm font-medium hover:underline" href="#">View all history</a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Video Card 1 */}
                                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#1a1d24] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-pointer">
                                    <div className="aspect-video w-full bg-slate-800 relative">
                                        <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6D6IjRjfS8ja_UbizbISlSZr9iYYzYvTeOkH88tnEphUQjFNpi6-W3tJs-a131P2VG3HpVGQaL8-TtK2isQVKz90TptKC2ppU4KQzFRw6hGuqrK0Nn9nUiVXFcJXLz5_QBwfdeF8scAykloMwUXjBL-YETMGTdC-t4bAu2tnZub9_IanUgxYFUAkn-VHFbvgQRsa1V6UhRNpiwYbJIjIhJV0E7MV2Fni49Ix_QiuKi8CSmomFW7w0TuBaoaRA9oD4wvoFD4cOmVRD" alt="Trigonometry" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
                                            <div className="h-full bg-primary w-3/4"></div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Mathematics</span>
                                            <span className="text-xs text-slate-400">12m left</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">Trigonometry: Reduction Formulae</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Grade 11 • Term 2</p>
                                    </div>
                                </div>
                                {/* Video Card 2 */}
                                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#1a1d24] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all cursor-pointer">
                                    <div className="aspect-video w-full bg-slate-800 relative">
                                        <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCprepQMMQmhEqZLlpRwmfGPJGF4kxsIS5TUKVqxYF4wrX_uC0gR_0l_cxG5BchhEEZU1SHWBIvJ0jiiDuOCE-6bptiuVftyQbKkMI6br6M-TzzXDtN0cpHaaIcRpYD_MkSSmdP3NbE8G76Uvqc_ww4jFPR6xUKG16j1mBmIKlppa-lsuwBdCr_VSyxuQnZQGUQQcYmJ3-O21l6N4dvhTMKCvtRVY_MBaF0xHhUXBwog9exqhpD9eVDpkcNTK6ti4nZK4ZMbWrhaRp2" alt="Chemistry" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
                                            <div className="h-full bg-primary w-1/4"></div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">Physical Sciences</span>
                                            <span className="text-xs text-slate-400">45m left</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">Intermolecular Forces</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Grade 11 • Chemistry</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Subject Hub */}
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">My Subjects</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <a className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1a1d24] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all group" href="#">
                                    <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">calculate</span>
                                    </div>
                                    <span className="font-semibold text-slate-900 dark:text-white text-center">Mathematics</span>
                                </a>
                                <a className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1a1d24] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/10 transition-all group" href="#">
                                    <div className="bg-teal-100 dark:bg-teal-500/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-teal-600 dark:text-teal-400">science</span>
                                    </div>
                                    <span className="font-semibold text-slate-900 dark:text-white text-center">Physical Sci</span>
                                </a>
                                <a className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1a1d24] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all group" href="#">
                                    <div className="bg-green-100 dark:bg-green-500/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-green-600 dark:text-green-400">biotech</span>
                                    </div>
                                    <span className="font-semibold text-slate-900 dark:text-white text-center">Life Sciences</span>
                                </a>
                                <a className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1a1d24] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all group" href="#">
                                    <div className="bg-orange-100 dark:bg-orange-500/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">menu_book</span>
                                    </div>
                                    <span className="font-semibold text-slate-900 dark:text-white text-center">English FAL</span>
                                </a>
                                <a className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1a1d24] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all group" href="#">
                                    <div className="bg-purple-100 dark:bg-purple-500/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-purple-600 dark:text-purple-400">public</span>
                                    </div>
                                    <span className="font-semibold text-slate-900 dark:text-white text-center">Geography</span>
                                </a>
                                <a className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group cursor-pointer" href="#">
                                    <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-slate-400 dark:text-slate-300">add</span>
                                    </div>
                                    <span className="font-semibold text-slate-500 dark:text-slate-400 text-center text-sm">Add Subject</span>
                                </a>
                            </div>
                        </section>
                    </div>

                    {/* Right Column (Sidebar Widgets) */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Up Next / Quizzes */}
                        <div className="bg-white dark:bg-[#1a1d24] rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Up Next</h3>
                                <span className="text-xs font-semibold px-2 py-1 rounded bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">2 Due Soon</span>
                            </div>
                            <div className="space-y-3">
                                <div className="p-3 rounded-lg bg-background-light dark:bg-[#111722] border border-slate-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <span className="material-symbols-outlined text-red-500 text-xl">assignment_late</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Algebra Basics Quiz</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Due Friday • Math</p>
                                        </div>
                                    </div>
                                    <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors">
                                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                                    </button>
                                </div>
                                <div className="p-3 rounded-lg bg-background-light dark:bg-[#111722] border border-slate-200 dark:border-slate-700 flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <span className="material-symbols-outlined text-orange-500 text-xl">pending_actions</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Map Work Practical</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">In Progress • Geography</p>
                                        </div>
                                    </div>
                                    <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors">
                                        <span className="material-symbols-outlined text-xl">play_arrow</span>
                                    </button>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                View All Tasks
                            </button>
                        </div>

                        {/* Career Spotlight */}
                        <div className="relative overflow-hidden bg-white dark:bg-[#1a1d24] rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                                <span className="material-symbols-outlined text-9xl text-slate-900 dark:text-white">lightbulb</span>
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-blue-50 dark:bg-primary/20 text-primary p-1.5 rounded-lg">
                                        <span className="material-symbols-outlined text-lg">school</span>
                                    </span>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">Career Insight</h3>
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Software Engineering</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                                    Did you know? Most universities require at least 70% in Mathematics (not Math Lit) for Computer Science degrees.
                                </p>
                                <a className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors" href="#">
                                    Check Requirements
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        {/* Mini Calendar/Schedule */}
                        <div className="bg-white dark:bg-[#1a1d24] rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Today's Schedule</h3>
                            <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-6">
                                <div className="relative">
                                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-[#1a1d24]"></div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">08:00 AM</p>
                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Online Physics Class</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-[#1a1d24] shadow-[0_0_0_4px_rgba(19,91,236,0.2)]"></div>
                                    <p className="text-xs text-primary font-bold mb-0.5">14:00 PM (Now)</p>
                                    <p className="text-sm font-medium text-slate-900 dark:text-white">Self Study: Math</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-[#1a1d24]"></div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">16:00 PM</p>
                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">English Essay Due</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-8"></div> {/* Spacer for bottom scrolling */}
            </div>
        </DashboardLayout>
    );
};

export default LearnerDashboard;
