import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const AdminReports: React.FC = () => {
    const reportTypes = [
        { title: 'User Registration Report', desc: 'New user signups over time', icon: 'person_add' },
        { title: 'Revenue Report', desc: 'Detailed financial statements', icon: 'attach_money' },
        { title: 'Content Engagement', desc: 'Most viewed videos and materials', icon: 'bar_chart' },
        { title: 'Teacher Performance', desc: 'Activity and rating summaries', icon: 'school' }
    ];

    return (
        <DashboardLayout userType="admin" headerTitle="System Reports">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {reportTypes.map((report, index) => (
                        <div key={index} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-between hover:border-primary transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-2xl">{report.icon}</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{report.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">{report.desc}</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-300 group-hover:text-primary">download</span>
                        </div>
                    ))}
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
                    <h2 className="text-xl font-bold mb-6">Generated Reports History</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-slate-400">description</span>
                                    <div>
                                        <p className="font-bold">Monthly_Revenue_Nov_2024.pdf</p>
                                        <p className="text-xs text-slate-500">Generated on 1 Dec 2024</p>
                                    </div>
                                </div>
                                <button className="text-primary font-bold text-sm hover:underline">Download</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default AdminReports;
