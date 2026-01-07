import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AdminDashboard: React.FC = () => {
    return (
        <DashboardLayout userType="learner" headerTitle="Admin Console">
            <div className="max-w-7xl mx-auto p-6 md:p-8 space-y-8">
                {/* Header Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-[#1a1d24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="flex justify-between items-start z-10">
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Total Learners</p>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">12,450</h3>
                            </div>
                            <span className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                                <span className="material-symbols-outlined">group</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-green-500 font-medium z-10">
                            <span className="material-symbols-outlined text-base">trending_up</span>
                            <span>+12% this month</span>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                            <span className="material-symbols-outlined text-9xl">group</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1a1d24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="flex justify-between items-start z-10">
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Active Teachers</p>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">842</h3>
                            </div>
                            <span className="p-2 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg">
                                <span className="material-symbols-outlined">school</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-green-500 font-medium z-10">
                            <span className="material-symbols-outlined text-base">trending_up</span>
                            <span>+5% this month</span>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                            <span className="material-symbols-outlined text-9xl">school</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1a1d24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="flex justify-between items-start z-10">
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Content Items</p>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">3,204</h3>
                            </div>
                            <span className="p-2 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-lg">
                                <span className="material-symbols-outlined">library_books</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500 font-medium z-10">
                            <span>+150 new this week</span>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                            <span className="material-symbols-outlined text-9xl">library_books</span>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1a1d24] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 relative overflow-hidden group">
                        <div className="flex justify-between items-start z-10">
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">System Status</p>
                                <h3 className="text-3xl font-bold text-green-500 mt-1">Good</h3>
                            </div>
                            <span className="p-2 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                                <span className="material-symbols-outlined">dns</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500 font-medium z-10">
                            <span>Last check: 1m ago</span>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                            <span className="material-symbols-outlined text-9xl">dns</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Registrations Table */}
                    <div className="lg:col-span-2 bg-white dark:bg-[#1a1d24] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Registrations</h3>
                            <button className="text-sm text-primary font-bold hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                                <thead className="bg-slate-50 dark:bg-[#111722] text-xs uppercase font-semibold text-slate-900 dark:text-white">
                                    <tr>
                                        <th className="px-6 py-4">User</th>
                                        <th className="px-6 py-4">Role</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-[#1e2532] transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white">Lerato Zulu</p>
                                                        <p className="text-xs">lerato.z@gmail.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">Learner</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Updates */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-[#1a1d24] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Quick Actions</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-slate-50 dark:hover:bg-[#1e2532] transition-all group">
                                    <span className="material-symbols-outlined text-2xl text-primary mb-2 group-hover:scale-110 transition-transform">person_add</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Add User</span>
                                </button>
                                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-slate-50 dark:hover:bg-[#1e2532] transition-all group">
                                    <span className="material-symbols-outlined text-2xl text-purple-500 mb-2 group-hover:scale-110 transition-transform">upload_file</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Upload Content</span>
                                </button>
                                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-slate-50 dark:hover:bg-[#1e2532] transition-all group">
                                    <span className="material-symbols-outlined text-2xl text-orange-500 mb-2 group-hover:scale-110 transition-transform">campaign</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Announcement</span>
                                </button>
                                <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-slate-50 dark:hover:bg-[#1e2532] transition-all group">
                                    <span className="material-symbols-outlined text-2xl text-teal-500 mb-2 group-hover:scale-110 transition-transform">settings</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Settings</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;
