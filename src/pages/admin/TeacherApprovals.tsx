import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const TeacherApprovals: React.FC = () => {
    // Mock Applications
    const [applications, setApplications] = useState([
        { id: 1, name: 'Sipho Dlamini', email: 'sipho.d@gmail.com', subject: 'Mathematics', qualification: 'BSc Ed', status: 'Pending' },
        { id: 2, name: 'Alice Walker', email: 'alice.w@gmail.com', subject: 'English', qualification: 'BA English', status: 'Pending' },
    ]);

    const handleAction = (id: number, action: 'Approve' | 'Reject') => {
        if (window.confirm(`Are you sure you want to ${action} this application?`)) {
            setApplications(applications.filter(app => app.id !== id));
        }
    };

    return (
        <DashboardLayout userType="admin" headerTitle="Teacher Approvals">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex items-center gap-4">
                    <span className="material-symbols-outlined text-4xl text-blue-600">info</span>
                    <div>
                        <h3 className="font-bold text-blue-800 dark:text-blue-300">Pending Applications: {applications.length}</h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm">Review credentials carefully before approving new teacher accounts.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {applications.length > 0 ? applications.map(app => (
                        <div key={app.id} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="size-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl text-slate-400">person</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{app.name}</h3>
                                    <p className="text-slate-500">{app.email}</p>
                                    <div className="flex gap-2 mt-2">
                                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold text-slate-600 dark:text-slate-300">{app.subject}</span>
                                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold text-slate-600 dark:text-slate-300">{app.qualification}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 w-full md:w-auto">
                                <button
                                    onClick={() => handleAction(app.id, 'Reject')}
                                    className="flex-1 md:flex-none px-6 py-3 border-2 border-red-500 text-red-500 font-bold rounded-xl hover:bg-red-50 transition-colors"
                                >
                                    Reject
                                </button>
                                <button
                                    onClick={() => handleAction(app.id, 'Approve')}
                                    className="flex-1 md:flex-none px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg"
                                >
                                    Approve
                                </button>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-12 text-slate-500">
                            <span className="material-symbols-outlined text-6xl mb-4 text-slate-300">check_circle</span>
                            <p className="text-xl font-bold">All caught up!</p>
                            <p>No pending teacher applications.</p>
                        </div>
                    )}
                </div>

            </div>
        </DashboardLayout>
    );
};

export default TeacherApprovals;
