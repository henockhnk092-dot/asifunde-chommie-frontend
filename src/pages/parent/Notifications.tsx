import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Notifications: React.FC = () => {
    // Mock Notifications
    const notifications = [
        { id: 1, title: 'Weekly Progress Report Ready', message: 'The progress report for Thando (Grade 10) is now available.', time: '2 hours ago', type: 'report', read: false },
        { id: 2, title: 'New Assessment Added', message: 'A new Mathematics quiz has been assigned to Lerato.', time: '1 day ago', type: 'alert', read: true },
        { id: 3, title: 'Subscription Update', message: 'Your premium subscription has been successfully renewed.', time: '3 days ago', type: 'system', read: true },
        { id: 4, title: 'High Score Alert!', message: 'Thando scored 92% in the Physical Sciences quiz!', time: '4 days ago', type: 'achievement', read: true },
    ];

    return (
        <DashboardLayout userType="parent" headerTitle="Notifications">
            <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6 text-slate-900 dark:text-white">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Recent Activity</h2>
                    <button className="text-sm font-bold text-primary hover:underline">Mark all as read</button>
                </div>

                <div className="space-y-4">
                    {notifications.map((notif) => (
                        <div key={notif.id} className={`p-6 rounded-2xl border ${notif.read ? 'bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700' : 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800'} shadow-sm flex gap-4 transition-colors`}>
                            <div className={`p-3 rounded-full h-fit flex-shrink-0 ${notif.type === 'report' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30' :
                                    notif.type === 'alert' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30' :
                                        notif.type === 'achievement' ? 'bg-green-100 text-green-600 dark:bg-green-900/30' :
                                            'bg-slate-100 text-slate-600 dark:bg-slate-800'
                                }`}>
                                <span className="material-symbols-outlined">
                                    {notif.type === 'report' ? 'summarize' :
                                        notif.type === 'alert' ? 'priority_high' :
                                            notif.type === 'achievement' ? 'emoji_events' : 'info'}
                                </span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className={`font-bold text-lg mb-1 ${!notif.read ? 'text-primary' : ''}`}>{notif.title}</h3>
                                    <span className="text-xs font-bold text-slate-400">{notif.time}</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{notif.message}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8">
                    <button className="text-slate-400 hover:text-slate-600 font-bold text-sm">Load Older Notifications</button>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default Notifications;
