import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { api } from '../../services/api';

interface Student {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    grade: number;
    enrolled_courses: number;
    avg_progress: number;
    last_active: string | null;
}

const AssignedStudents: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await api.courses.getMyStudents();
            setStudents(response.data.students || []);
        } catch (err: any) {
            console.error('Error fetching students:', err);
            setError(err.response?.data?.error || 'Failed to fetch students');
        } finally {
            setLoading(false);
        }
    };

    const filteredStudents = students.filter(student =>
        `${student.first_name} ${student.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatLastActive = (dateString: string | null) => {
        if (!dateString) return 'Never';
        const date = new Date(dateString);
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInHours = diffInMs / (1000 * 60 * 60);
        const diffInDays = diffInHours / 24;

        if (diffInHours < 1) return 'Just now';
        if (diffInHours < 24) return `${Math.floor(diffInHours)}h ago`;
        if (diffInDays < 7) return `${Math.floor(diffInDays)}d ago`;
        return date.toLocaleDateString();
    };

    return (
        <DashboardLayout userType="teacher" headerTitle="Assigned Students">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-2xl font-bold">My Students</h2>
                        <p className="text-slate-500 dark:text-slate-400">Total: {students.length} students</p>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:flex-initial">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                type="text"
                                placeholder="Search students..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl w-full md:w-64 focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                        <p className="text-red-600 dark:text-red-400">{error}</p>
                    </div>
                ) : filteredStudents.length === 0 ? (
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-12 text-center">
                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">people</span>
                        <h3 className="text-xl font-bold mb-2">
                            {searchTerm ? 'No Students Found' : 'No Students Yet'}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4">
                            {searchTerm
                                ? 'Try a different search term'
                                : 'Students will appear here once they enroll in your courses'
                            }
                        </p>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
                                    <tr>
                                        <th className="p-6">Student</th>
                                        <th className="p-6">Contact</th>
                                        <th className="p-6">Grade</th>
                                        <th className="p-6">Courses</th>
                                        <th className="p-6">Avg Progress</th>
                                        <th className="p-6">Last Active</th>
                                        <th className="p-6 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {filteredStudents.map(student => (
                                        <tr key={student.user_id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="p-6 font-bold">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                                                        {student.first_name.charAt(0)}{student.last_name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div>{student.first_name} {student.last_name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6 text-sm text-slate-600 dark:text-slate-400">{student.email}</td>
                                            <td className="p-6">
                                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-lg text-sm font-bold">
                                                    Grade {student.grade}
                                                </span>
                                            </td>
                                            <td className="p-6">
                                                <span className="text-primary font-bold">{student.enrolled_courses}</span>
                                            </td>
                                            <td className="p-6">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 max-w-[100px] bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                                        <div
                                                            className="bg-primary h-full rounded-full transition-all"
                                                            style={{ width: `${Math.min(100, student.avg_progress || 0)}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
                                                        {Math.round(student.avg_progress || 0)}%
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-sm text-slate-600 dark:text-slate-400">
                                                {formatLastActive(student.last_active)}
                                            </td>
                                            <td className="p-6 text-right">
                                                <a
                                                    href={`/dashboard/teacher/student-performance?student=${student.user_id}`}
                                                    className="text-primary font-bold text-sm hover:underline"
                                                >
                                                    View Details
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default AssignedStudents;
