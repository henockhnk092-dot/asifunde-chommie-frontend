import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const ContentManagement: React.FC = () => {
    // Mock Content List
    const [content, setContent] = useState([
        { id: 1, title: 'Functions Explained', type: 'Video', author: 'Mr. Smith', date: '2023-11-01', status: 'Live', flags: 0 },
        { id: 2, title: 'Inappropriate Title Test', type: 'PDF', author: 'Student123', date: '2023-11-02', status: 'Flagged', flags: 5 },
        { id: 3, title: 'Chemistry Basics', type: 'Video', author: 'Mrs. Jones', date: '2023-10-20', status: 'Live', flags: 0 },
    ]);

    const handleDelete = (id: number) => {
        if (window.confirm("Delete this content permanently?")) {
            setContent(content.filter(c => c.id !== id));
        }
    };

    return (
        <DashboardLayout userType="admin" headerTitle="Content Moderation">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/30 flex items-center justify-between">
                        <div>
                            <p className="text-red-600 font-bold mb-1">Flagged Items</p>
                            <h3 className="text-3xl font-black text-red-700 dark:text-red-400">5</h3>
                        </div>
                        <span className="material-symbols-outlined text-4xl text-red-300">flag</span>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/30 flex items-center justify-between">
                        <div>
                            <p className="text-green-600 font-bold mb-1">Total Content</p>
                            <h3 className="text-3xl font-black text-green-700 dark:text-green-400">3,204</h3>
                        </div>
                        <span className="material-symbols-outlined text-4xl text-green-300">library_books</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <h2 className="font-bold text-xl">Recent Uploads</h2>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold text-slate-500 cursor-pointer">Filter: All</span>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
                                <tr>
                                    <th className="p-6">Title</th>
                                    <th className="p-6">Type</th>
                                    <th className="p-6">Author</th>
                                    <th className="p-6">Date</th>
                                    <th className="p-6">Status</th>
                                    <th className="p-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {content.map(item => (
                                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-6 font-bold">{item.title}</td>
                                        <td className="p-6">{item.type}</td>
                                        <td className="p-6 text-sm">{item.author}</td>
                                        <td className="p-6 text-sm text-slate-500">{item.date}</td>
                                        <td className="p-6">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${item.status === 'Live' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="text-red-500 hover:text-red-700 font-bold text-sm"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default ContentManagement;
