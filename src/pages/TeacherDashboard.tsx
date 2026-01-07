import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const TeacherDashboard: React.FC = () => {
    // Mock Data
    const stats = [
        { label: 'Total Students', value: 124, icon: 'groups', change: '+12%', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
        { label: 'Videos Uploaded', value: 45, icon: 'video_library', change: '+3', color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900/30' },
        { label: 'Avg Class Score', value: '68%', icon: 'analytics', change: '+5%', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30' },
        { label: 'Pending Assessments', value: 8, icon: 'pending_actions', change: '-2', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/30' }
    ];

    const recentActivity = [
        { type: 'upload', message: 'Uploaded "Newton\'s Laws" video', time: '2 hours ago', icon: 'cloud_upload' },
        { type: 'student', message: 'Thando N. completed "Algebra Quiz 1"', time: '4 hours ago', icon: 'assignment_turned_in' },
        { type: 'system', message: 'Weekly report generated', time: '1 day ago', icon: 'summarize' }
    ];

    return (
        <DashboardLayout userType="teacher" headerTitle="Teacher Overview">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col justify-between group hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                    <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {stat.change}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Quick Actions */}
                    <div className="lg:col-span-2 bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Link to="/dashboard/teacher/upload" className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors gap-2 group">
                                <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">cloud_upload</span>
                                <span className="font-semibold text-sm">Upload Video</span>
                            </Link>
                            <Link to="/dashboard/teacher/create-assessment" className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors gap-2 group">
                                <span className="material-symbols-outlined text-3xl text-purple-500 group-hover:scale-110 transition-transform">add_task</span>
                                <span className="font-semibold text-sm">Create Quiz</span>
                            </Link>
                            <Link to="/dashboard/teacher/students" className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors gap-2 group">
                                <span className="material-symbols-outlined text-3xl text-green-500 group-hover:scale-110 transition-transform">person_add</span>
                                <span className="font-semibold text-sm">Add Student</span>
                            </Link>
                            <Link to="/dashboard/teacher/performance" className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors gap-2 group">
                                <span className="material-symbols-outlined text-3xl text-orange-500 group-hover:scale-110 transition-transform">bar_chart</span>
                                <span className="font-semibold text-sm">Analytics</span>
                            </Link>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                        <div className="space-y-6">
                            {recentActivity.map((activity, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500">
                                        <span className="material-symbols-outlined text-sm">{activity.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium leading-snug">{activity.message}</p>
                                        <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Class Performance Overview (Simple Chart Placeholder) */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Class Performance Overview</h2>
                        <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm p-2 font-medium">
                            <option>Grade 10 - Mathematics</option>
                            <option>Grade 11 - Physical Sciences</option>
                        </select>
                    </div>

                    <div className="h-48 flex items-end justify-between gap-2 px-4">
                        {[45, 60, 75, 50, 80, 70, 65, 55, 85, 90, 40, 60].map((height, i) => (
                            <div key={i} className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-sm relative group">
                                <div
                                    className="absolute bottom-0 w-full bg-primary/80 hover:bg-primary transition-all rounded-t-sm"
                                    style={{ height: `${height}%` }}
                                ></div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {height}%
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-400 uppercase font-bold">
                        <span>Jan</span>
                        <span>Dec</span>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherDashboard;
