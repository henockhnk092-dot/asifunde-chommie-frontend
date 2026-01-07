import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const AssignedStudents: React.FC = () => {
    // Mock Students
    const students = [
        { id: '1', name: 'Lerato Zulu', email: 'lerato@gmail.com', grade: 'Grade 10', parent: 'Mrs. Zulu (083 444 5555)' },
        { id: '2', name: 'Thando Nkosi', email: 'thando@gmail.com', grade: 'Grade 10', parent: 'Mr. Nkosi (072 111 2222)' },
        { id: '3', name: 'Michael Smith', email: 'mike@gmail.com', grade: 'Grade 11', parent: 'Mrs. Smith (082 333 4444)' },
        { id: '4', name: 'Sarah Jones', email: 'sarah@gmail.com', grade: 'Grade 12', parent: 'Mr. Jones (071 999 8888)' },
    ];

    return (
        <DashboardLayout userType="teacher" headerTitle="Assigned Students">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="flex justify-between items-center bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-2xl font-bold">My Students</h2>
                        <p className="text-slate-500 dark:text-slate-400">Total: {students.length} students</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-bold">
                        <span className="material-symbols-outlined">download</span>
                        Export List
                    </button>
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
                                <tr>
                                    <th className="p-6">Name</th>
                                    <th className="p-6">Contact</th>
                                    <th className="p-6">Grade</th>
                                    <th className="p-6">Parent/Guardian</th>
                                    <th className="p-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {students.map(student => (
                                    <tr key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-6 font-bold flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">
                                                {student.name.charAt(0)}
                                            </div>
                                            {student.name}
                                        </td>
                                        <td className="p-6 text-sm">{student.email}</td>
                                        <td className="p-6">
                                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded text-xs font-bold">
                                                {student.grade}
                                            </span>
                                        </td>
                                        <td className="p-6 text-sm">{student.parent}</td>
                                        <td className="p-6 text-right">
                                            <button className="text-primary font-bold text-sm hover:underline">Message</button>
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

export default AssignedStudents;
