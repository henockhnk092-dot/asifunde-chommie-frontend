import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Progress: React.FC = () => {
    // Mock Data
    const stats = [
        { label: 'Videos Watched', value: 12, icon: 'play_circle', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
        { label: 'Quizzes Passed', value: 5, icon: 'quiz', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
        { label: 'Study Streak', value: '3 Days', icon: 'local_fire_department', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
        { label: 'Total Points', value: 450, icon: 'military_tech', color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' }
    ];

    const subjectPerformance = [
        { subject: 'Mathematics', progress: 65, color: 'bg-blue-500' },
        { subject: 'Physical Sciences', progress: 42, color: 'bg-purple-500' },
        { subject: 'Life Sciences', progress: 28, color: 'bg-green-500' }
    ];

    const weeklyActivity = [
        { day: 'Mon', hours: 2.5 },
        { day: 'Tue', hours: 1.0 },
        { day: 'Wed', hours: 3.5 },
        { day: 'Thu', hours: 0.5 },
        { day: 'Fri', hours: 0 },
        { day: 'Sat', hours: 4.0 },
        { day: 'Sun', hours: 1.5 }
    ];

    const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

    return (
        <DashboardLayout userType="learner" headerTitle="My Progress">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center">
                            <div className={`p-3 rounded-full ${stat.bg} ${stat.color} mb-3`}>
                                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Weekly Activity Chart */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-500">bar_chart</span>
                            Weekly Activity
                        </h2>
                        <div className="flex items-end justify-between h-64 gap-2">
                            {weeklyActivity.map((day, index) => (
                                <div key={index} className="flex flex-col items-center gap-2 flex-1 group">
                                    <div className="relative w-full flex justify-center">
                                        <div
                                            className="w-full max-w-[40px] bg-primary/20 dark:bg-primary/20 rounded-t-lg group-hover:bg-primary/40 transition-colors relative overflow-hidden"
                                            style={{ height: `${(day.hours / maxHours) * 200}px` }}
                                        >
                                            <div className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-1000 ease-out h-full opacity-60"></div>
                                        </div>
                                        <div className="absolute -top-8 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">
                                            {day.hours}h
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 uppercase">{day.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subject Performance */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-500">school</span>
                            Subject Mastery
                        </h2>
                        <div className="space-y-6">
                            {subjectPerformance.map((subject, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">{subject.subject}</span>
                                        <span className="font-bold text-slate-500">{subject.progress}%</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${subject.color} rounded-full transition-all duration-1000 ease-out`}
                                            style={{ width: `${subject.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Keep it up! 🎉</h2>
                            <p className="text-slate-600 dark:text-slate-300">You're in the top <span className="font-bold text-indigo-500">15%</span> of learners this week. Complete 2 more quizzes to reach the next level.</p>
                        </div>
                        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
                            View Leaderboard
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Progress;
