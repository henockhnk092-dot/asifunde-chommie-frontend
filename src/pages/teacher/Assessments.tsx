import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';

interface Question {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number;
}

interface Assessment {
    id: string;
    title: string;
    grade: string;
    subject: string;
    questions: Question[];
    status: 'Draft' | 'Published';
}

const Assessments: React.FC = () => {
    const location = useLocation();

    // Set initial view based on route
    const getInitialView = (): 'list' | 'create' => {
        if (location.pathname.includes('create-assessment')) {
            return 'create';
        }
        return 'list';
    };

    const [view, setView] = useState<'list' | 'create'>(getInitialView());

    // Update view when route changes
    useEffect(() => {
        setView(getInitialView());
    }, [location.pathname]);

    // Mock Assessments
    const [assessments, setAssessments] = useState<Assessment[]>([
        {
            id: '1',
            title: 'Algebra Basics Quiz',
            grade: 'Grade 10',
            subject: 'Mathematics',
            questions: [],
            status: 'Published'
        },
        {
            id: '2',
            title: 'Newton\'s Laws Check',
            grade: 'Grade 11',
            subject: 'Physical Sciences',
            questions: [],
            status: 'Draft'
        }
    ]);

    // Create Form State
    const [newAssessment, setNewAssessment] = useState<Assessment>({
        id: '',
        title: '',
        grade: 'Grade 10',
        subject: 'Mathematics',
        questions: [],
        status: 'Draft'
    });

    const handleCreate = () => {
        setAssessments([...assessments, { ...newAssessment, id: Date.now().toString(), status: 'Published' }]);
        setView('list');
        setNewAssessment({ id: '', title: '', grade: 'Grade 10', subject: 'Mathematics', questions: [], status: 'Draft' });
    };

    return (
        <DashboardLayout userType="teacher" headerTitle="Assessments">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {view === 'list' ? (
                    <>
                        <div className="flex justify-between items-center bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <div>
                                <h2 className="text-2xl font-bold">My Assessments</h2>
                                <p className="text-slate-500 dark:text-slate-400">Manage quizzes and tests</p>
                            </div>
                            <button
                                onClick={() => setView('create')}
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-blue-600 transition-colors font-bold"
                            >
                                <span className="material-symbols-outlined">add</span>
                                Create Assessment
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {assessments.map((assessment) => (
                                <div key={assessment.id} className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${assessment.status === 'Published' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'}`}>
                                                {assessment.status}
                                            </span>
                                            <button className="text-slate-400 hover:text-primary">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">{assessment.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">{assessment.grade} • {assessment.subject}</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 dark:bg-slate-900/50 grid grid-cols-3 gap-2">
                                        <div className="text-center">
                                            <span className="block text-lg font-bold">24</span>
                                            <span className="text-xs text-slate-500 uppercase">Attempts</span>
                                        </div>
                                        <div className="text-center border-l border-slate-200 dark:border-slate-700">
                                            <span className="block text-lg font-bold text-green-500">78%</span>
                                            <span className="text-xs text-slate-500 uppercase">Avg Score</span>
                                        </div>
                                        <div className="text-center border-l border-slate-200 dark:border-slate-700">
                                            <button className="text-primary font-bold text-sm h-full flex items-center justify-center w-full hover:bg-white dark:hover:bg-slate-800 rounded transition-colors">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="max-w-3xl mx-auto">
                        <button
                            onClick={() => setView('list')}
                            className="flex items-center gap-2 text-slate-500 hover:text-primary mb-6 transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Back to Assessments
                        </button>

                        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h2 className="text-2xl font-bold mb-6">Create New Assessment</h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Title</label>
                                    <input
                                        type="text"
                                        value={newAssessment.title}
                                        onChange={(e) => setNewAssessment({ ...newAssessment, title: e.target.value })}
                                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="e.g. Trigonometry Quiz 1"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Grade</label>
                                        <select
                                            value={newAssessment.grade}
                                            onChange={(e) => setNewAssessment({ ...newAssessment, grade: e.target.value })}
                                            className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                        >
                                            {[8, 9, 10, 11, 12].map(g => <option key={g} value={`Grade ${g}`}>Grade {g}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Subject</label>
                                        <select
                                            value={newAssessment.subject}
                                            onChange={(e) => setNewAssessment({ ...newAssessment, subject: e.target.value })}
                                            className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                        >
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="Physical Sciences">Physical Sciences</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-center border-2 border-dashed border-slate-200 dark:border-slate-700">
                                    <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">auto_awesome</span>
                                    <h3 className="text-lg font-bold mb-2">AI Generator</h3>
                                    <p className="text-slate-500 text-sm mb-4">Paste a video link or topic to generate questions automatically.</p>
                                    <button className="px-6 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-primary hover:shadow-md transition-all">
                                        Use AI Generator
                                    </button>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        onClick={handleCreate}
                                        className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
                                    >
                                        Publish Assessment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Assessments;
