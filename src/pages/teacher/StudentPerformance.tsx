import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const StudentPerformance: React.FC = () => {
    const [selectedGrade, setSelectedGrade] = useState('Grade 10');

    // Mock Data
    const topPerformers = [
        { name: 'Lerato Zulu', score: 92 },
        { name: 'Sipho Mthembu', score: 88 },
        { name: 'Thando Nkosi', score: 85 }
    ];

    const lowPerformers = [
        { name: 'John Doe', score: 42 },
        { name: 'Jane Smith', score: 45 },
        { name: 'Mike Jones', score: 48 }
    ];

    return (
        <DashboardLayout userType="teacher" headerTitle="Student Performance">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Filters */}
                <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 w-fit">
                    <span className="text-slate-500 font-semibold">Class:</span>
                    <select
                        value={selectedGrade}
                        onChange={(e) => setSelectedGrade(e.target.value)}
                        className="bg-transparent font-bold text-lg outline-none cursor-pointer text-primary"
                    >
                        <option>Grade 10</option>
                        <option>Grade 11</option>
                        <option>Grade 12</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Top Performers */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-600">
                            <span className="material-symbols-outlined">emoji_events</span>
                            Top Performers
                        </h3>
                        <div className="space-y-4">
                            {topPerformers.map((student, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
                                    <div className="flex items-center gap-3">
                                        <div className="font-bold text-green-700 dark:text-green-400">#{i + 1}</div>
                                        <div className="font-semibold">{student.name}</div>
                                    </div>
                                    <div className="font-bold text-green-600">{student.score}%</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Needs Attention */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-500">
                            <span className="material-symbols-outlined">running_with_errors</span>
                            Needs Attention
                        </h3>
                        <div className="space-y-4">
                            {lowPerformers.map((student, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                                    <div className="flex items-center gap-3">
                                        <div className="font-semibold">{student.name}</div>
                                    </div>
                                    <div className="font-bold text-red-500">{student.score}%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Detailed Table Placeholder */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                        <h2 className="text-xl font-bold">Class List & Grades</h2>
                    </div>
                    <div className="p-8 text-center text-slate-500">
                        <p>Full gradebook functionality coming in Phase 3.</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default StudentPerformance;
