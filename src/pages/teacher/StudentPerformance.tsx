import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { api } from '../../services/api';
import { useSearchParams } from 'react-router-dom';

interface QuizResult {
    id: number;
    quiz_id: number;
    user_id: number;
    quiz_title: string;
    quiz_total_points: number;
    quiz_pass_score: number;
    first_name: string;
    last_name: string;
    email: string;
    grade: number;
    subject_name: string;
    score: number;
    percentage: number;
    is_completed: boolean;
    started_at: string;
    completed_at: string | null;
    time_spent: number;
}

interface Student {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    grade: number;
}

const StudentPerformance: React.FC = () => {
    const [searchParams] = useSearchParams();
    const studentIdParam = searchParams.get('student');

    const [results, setResults] = useState<QuizResult[]>([]);
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
        studentIdParam ? parseInt(studentIdParam) : null
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        if (selectedStudentId) {
            fetchResults();
        }
    }, [selectedStudentId]);

    const fetchStudents = async () => {
        try {
            const response = await api.courses.getMyStudents();
            setStudents(response.data.students || []);
        } catch (err: any) {
            console.error('Error fetching students:', err);
        }
    };

    const fetchResults = async () => {
        try {
            setLoading(true);
            const response = await api.quizzes.getStudentResults({ studentId: selectedStudentId });
            setResults(response.data.data || []);
            setError(null);
        } catch (err: any) {
            console.error('Error fetching results:', err);
            setError(err.response?.data?.error || 'Failed to fetch results');
        } finally {
            setLoading(false);
        }
    };

    const selectedStudent = students.find(s => s.user_id === selectedStudentId);

    const completedResults = results.filter(r => r.is_completed);
    const averageScore = completedResults.length > 0
        ? completedResults.reduce((sum, r) => sum + (r.percentage || 0), 0) / completedResults.length
        : 0;

    const passedResults = completedResults.filter(r => (r.percentage || 0) >= (r.quiz_pass_score || 50));
    const passRate = completedResults.length > 0 ? (passedResults.length / completedResults.length) * 100 : 0;

    const topResults = [...completedResults]
        .sort((a, b) => (b.percentage || 0) - (a.percentage || 0))
        .slice(0, 5);

    const lowResults = [...completedResults]
        .filter(r => (r.percentage || 0) < (r.quiz_pass_score || 50))
        .sort((a, b) => (a.percentage || 0) - (b.percentage || 0))
        .slice(0, 5);

    return (
        <DashboardLayout userType="teacher" headerTitle="Student Performance">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Student Selector */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <label className="block text-sm font-bold mb-2">Select Student</label>
                    <select
                        value={selectedStudentId || ''}
                        onChange={(e) => setSelectedStudentId(e.target.value ? parseInt(e.target.value) : null)}
                        className="w-full md:w-96 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none font-bold"
                    >
                        <option value="">-- Select a student --</option>
                        {students.map(student => (
                            <option key={student.user_id} value={student.user_id}>
                                {student.first_name} {student.last_name} (Grade {student.grade})
                            </option>
                        ))}
                    </select>
                </div>

                {!selectedStudentId ? (
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-12 text-center">
                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">person_search</span>
                        <h3 className="text-xl font-bold mb-2">Select a Student</h3>
                        <p className="text-slate-500 dark:text-slate-400">Choose a student from the dropdown to view their performance</p>
                    </div>
                ) : loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                        <p className="text-red-600 dark:text-red-400">{error}</p>
                    </div>
                ) : (
                    <>
                        {/* Student Header */}
                        {selectedStudent && (
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="size-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                                        {selectedStudent.first_name.charAt(0)}{selectedStudent.last_name.charAt(0)}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedStudent.first_name} {selectedStudent.last_name}</h2>
                                        <p className="opacity-90">{selectedStudent.email} • Grade {selectedStudent.grade}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Statistics Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-primary">quiz</span>
                                    <h3 className="font-bold text-slate-500 dark:text-slate-400">Quizzes Taken</h3>
                                </div>
                                <p className="text-3xl font-bold">{completedResults.length}</p>
                            </div>

                            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-green-600">trending_up</span>
                                    <h3 className="font-bold text-slate-500 dark:text-slate-400">Average Score</h3>
                                </div>
                                <p className="text-3xl font-bold text-green-600">{Math.round(averageScore)}%</p>
                            </div>

                            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-blue-600">check_circle</span>
                                    <h3 className="font-bold text-slate-500 dark:text-slate-400">Pass Rate</h3>
                                </div>
                                <p className="text-3xl font-bold text-blue-600">{Math.round(passRate)}%</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Top Performances */}
                            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-600">
                                    <span className="material-symbols-outlined">emoji_events</span>
                                    Top Performances
                                </h3>
                                {topResults.length === 0 ? (
                                    <p className="text-slate-500 dark:text-slate-400 text-center py-8">No completed quizzes yet</p>
                                ) : (
                                    <div className="space-y-3">
                                        {topResults.map((result, i) => (
                                            <div key={result.id} className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30">
                                                <div className="flex items-center gap-3">
                                                    <div className="font-bold text-green-700 dark:text-green-400">#{i + 1}</div>
                                                    <div className="font-semibold text-sm">{result.quiz_title}</div>
                                                </div>
                                                <div className="font-bold text-green-600">{Math.round(result.percentage || 0)}%</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Needs Improvement */}
                            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-orange-500">
                                    <span className="material-symbols-outlined">running_with_errors</span>
                                    Needs Improvement
                                </h3>
                                {lowResults.length === 0 ? (
                                    <p className="text-slate-500 dark:text-slate-400 text-center py-8">No failed quizzes - Great work!</p>
                                ) : (
                                    <div className="space-y-3">
                                        {lowResults.map((result) => (
                                            <div key={result.id} className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-900/30">
                                                <div className="flex items-center gap-3">
                                                    <div className="font-semibold text-sm">{result.quiz_title}</div>
                                                </div>
                                                <div className="font-bold text-orange-600">{Math.round(result.percentage || 0)}%</div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* All Quiz Results */}
                        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                                <h2 className="text-xl font-bold">All Quiz Attempts</h2>
                            </div>
                            {results.length === 0 ? (
                                <div className="p-8 text-center text-slate-500">
                                    <p>No quiz attempts yet</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold">
                                            <tr>
                                                <th className="p-4">Quiz Title</th>
                                                <th className="p-4">Subject</th>
                                                <th className="p-4">Score</th>
                                                <th className="p-4">Status</th>
                                                <th className="p-4">Completed</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                            {results.map(result => (
                                                <tr key={result.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                                                    <td className="p-4 font-semibold">{result.quiz_title}</td>
                                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{result.subject_name}</td>
                                                    <td className="p-4">
                                                        {result.is_completed ? (
                                                            <span className="font-bold">{Math.round(result.percentage || 0)}%</span>
                                                        ) : (
                                                            <span className="text-slate-400">In Progress</span>
                                                        )}
                                                    </td>
                                                    <td className="p-4">
                                                        {result.is_completed ? (
                                                            (result.percentage || 0) >= (result.quiz_pass_score || 50) ? (
                                                                <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-lg text-sm font-bold">
                                                                    Passed
                                                                </span>
                                                            ) : (
                                                                <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 rounded-lg text-sm font-bold">
                                                                    Failed
                                                                </span>
                                                            )
                                                        ) : (
                                                            <span className="px-3 py-1 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-lg text-sm font-bold">
                                                                In Progress
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                                                        {result.completed_at ? new Date(result.completed_at).toLocaleDateString() : '-'}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </DashboardLayout>
    );
};

export default StudentPerformance;
