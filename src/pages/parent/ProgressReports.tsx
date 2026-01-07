import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const ProgressReports: React.FC = () => {
    const [selectedChild, setSelectedChild] = useState('Thando Nkosi');

    // Mock Data
    const children = ['Thando Nkosi', 'Lethabo Nkosi'];

    // Mock Stats
    const summaryStats = [
        { label: 'Overall Average', value: '72%', change: '+5%', positive: true },
        { label: 'Videos Watched', value: '24', change: '+8', positive: true },
        { label: 'Quizzes Completed', value: '15', change: '-2', positive: false },
        { label: 'Study Time', value: '12h 30m', change: '+2h', positive: true }
    ];

    const detailedStats = [
        { subject: 'Mathematics', average: 78, quizzes: 8, videos: 14, weakTopic: 'Geometry' },
        { subject: 'Physical Sciences', average: 65, quizzes: 5, videos: 8, weakTopic: 'Electricity' },
        { subject: 'Life Sciences', average: 72, quizzes: 2, videos: 2, weakTopic: 'Photosynthesis' }
    ];

    return (
        <DashboardLayout userType="parent" headerTitle="Progress Reports" showSearch={false}>
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Child Selector */}
                <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-fit">
                    <span className="text-slate-500 font-semibold">Viewing report for:</span>
                    <select
                        value={selectedChild}
                        onChange={(e) => setSelectedChild(e.target.value)}
                        className="bg-transparent font-bold text-lg outline-none cursor-pointer text-primary"
                    >
                        {children.map(child => (
                            <option key={child} value={child}>{child}</option>
                        ))}
                    </select>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {summaryStats.map((stat, index) => (
                        <div key={index} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-1">{stat.label}</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-3xl font-bold">{stat.value}</h3>
                                <span className={`text-sm font-bold flex items-center ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                                    <span className="material-symbols-outlined text-sm">{stat.positive ? 'trending_up' : 'trending_down'}</span>
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Performance */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                        <h2 className="text-xl font-bold">Subject Performance</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50">
                                <tr>
                                    <th className="p-4 text-sm font-bold text-slate-500 dark:text-slate-400">Subject</th>
                                    <th className="p-4 text-sm font-bold text-slate-500 dark:text-slate-400">Average Score</th>
                                    <th className="p-4 text-sm font-bold text-slate-500 dark:text-slate-400">Quizzes Taken</th>
                                    <th className="p-4 text-sm font-bold text-slate-500 dark:text-slate-400">Videos Watched</th>
                                    <th className="p-4 text-sm font-bold text-slate-500 dark:text-slate-400">Focus Area</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {detailedStats.map((subject, index) => (
                                    <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-4 font-bold">{subject.subject}</td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${subject.average >= 70 ? 'bg-green-500' : subject.average >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${subject.average}%` }}></div>
                                                </div>
                                                <span className="text-sm font-semibold">{subject.average}%</span>
                                            </div>
                                        </td>
                                        <td className="p-4">{subject.quizzes}</td>
                                        <td className="p-4">{subject.videos}</td>
                                        <td className="p-4 text-red-500 font-semibold text-sm">{subject.weakTopic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recommendations */}
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
                    <h2 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined">lightbulb</span>
                        Recommendations for Thando
                    </h2>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-blue-800 dark:text-blue-200 text-sm">
                            <span className="material-symbols-outlined text-lg opacity-70">check_circle</span>
                            Encourage Thando to review <strong>Geometry theorems</strong> before the next assessment.
                        </li>
                        <li className="flex items-start gap-3 text-blue-800 dark:text-blue-200 text-sm">
                            <span className="material-symbols-outlined text-lg opacity-70">check_circle</span>
                            Great progress in <strong>Physical Sciences</strong>! A "Well Done" note would be encouraging.
                        </li>
                        <li className="flex items-start gap-3 text-blue-800 dark:text-blue-200 text-sm">
                            <span className="material-symbols-outlined text-lg opacity-70">check_circle</span>
                            Suggest taking a <strong>Life Sciences quiz</strong> to improve mastery score.
                        </li>
                    </ul>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ProgressReports;
