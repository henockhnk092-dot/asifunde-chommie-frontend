import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const ContentPreview: React.FC = () => {
    const [selectedGrade, setSelectedGrade] = useState('Grade 10');

    // Mock Content
    const contentItems = [
        { title: 'Algebra Functions', type: 'Video', subject: 'Mathematics', duration: '12 min' },
        { title: 'Newton\'s Laws Notes', type: 'PDF', subject: 'Physical Sciences', size: '2.4 MB' },
        { title: 'Trigonometry Quiz 1', type: 'Quiz', subject: 'Mathematics', questions: 15 },
        { title: 'Cell Biology', type: 'Video', subject: 'Life Sciences', duration: '18 min' },
    ];

    return (
        <DashboardLayout userType="parent" headerTitle="Content Preview">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl text-white shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Explore Your Child's Learning Material</h2>
                    <p className="opacity-90 max-w-2xl">Browse the videos, quizzes, and notes available to your children to better support their learning journey.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-full md:w-auto">
                        <span className="text-slate-500 font-semibold pl-2">View Content For:</span>
                        <select
                            value={selectedGrade}
                            onChange={(e) => setSelectedGrade(e.target.value)}
                            className="bg-transparent font-bold outline-none cursor-pointer text-primary"
                        >
                            <option>Grade 8</option>
                            <option>Grade 9</option>
                            <option>Grade 10</option>
                            <option>Grade 11</option>
                            <option>Grade 12</option>
                        </select>
                    </div>

                    <div className="relative w-full md:w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input
                            type="text"
                            placeholder="Search content..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contentItems.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`p-2 rounded-lg text-xs font-bold uppercase ${item.type === 'Video' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                                        item.type === 'PDF' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                                            'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                                    }`}>
                                    {item.type}
                                </span>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">
                                    {item.type === 'Video' ? 'play_circle' : item.type === 'PDF' ? 'description' : 'quiz'}
                                </span>
                            </div>
                            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.subject}</p>
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-400 uppercase">
                                {item.duration || item.size || `${item.questions} Questions`}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </DashboardLayout>
    );
};

export default ContentPreview;
