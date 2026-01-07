import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const AdminAnalytics: React.FC = () => {
    return (
        <DashboardLayout userType="admin" headerTitle="Platform Analytics">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-500 font-bold text-xs uppercase mb-2">Total Revenue (Monthly)</p>
                        <h3 className="text-3xl font-black text-green-600">R 84,250</h3>
                        <p className="text-xs text-green-500 font-bold mt-1">+12% vs last month</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-500 font-bold text-xs uppercase mb-2">Active Learners</p>
                        <h3 className="text-3xl font-black text-blue-600">10,200</h3>
                        <p className="text-xs text-blue-500 font-bold mt-1">+850 this week</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-500 font-bold text-xs uppercase mb-2">Completion Rate</p>
                        <h3 className="text-3xl font-black text-purple-600">68%</h3>
                        <p className="text-xs text-purple-500 font-bold mt-1">+5% improvement</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-500 font-bold text-xs uppercase mb-2">Server Uptime</p>
                        <h3 className="text-3xl font-black text-orange-600">99.9%</h3>
                        <p className="text-xs text-green-500 font-bold mt-1">Operational</p>
                    </div>
                </div>

                {/* Charts Placeholders */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-lg mb-6">User Growth</h3>
                        <div className="h-64 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                            [Line Chart Visualization]
                        </div>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-lg mb-6">Device Usage</h3>
                        <div className="h-64 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                            [Pie Chart Visualization]
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Platform Health</h3>
                        <button className="text-primary font-bold text-sm hover:underline">View System Logs</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
                            <h4 className="font-bold text-green-700 dark:text-green-400 mb-1">Database</h4>
                            <p className="text-sm dark:text-slate-300">Healthy (24ms latency)</p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
                            <h4 className="font-bold text-green-700 dark:text-green-400 mb-1">API Gateway</h4>
                            <p className="text-sm dark:text-slate-300">Operational (99.99%)</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                            <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-1">Storage</h4>
                            <p className="text-sm dark:text-slate-300">85% Usage (Warning)</p>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default AdminAnalytics;
