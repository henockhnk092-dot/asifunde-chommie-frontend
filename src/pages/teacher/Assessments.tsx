import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import { api } from '../../services/api';

interface QuizQuestion {
    id?: number;
    question: string;
    options: string[];
    correct_answer: number;
    points?: number;
}

interface Quiz {
    id: number;
    title: string;
    description?: string;
    grade: number;
    subject: string;
    subject_name?: string;
    difficulty: string;
    time_limit?: number;
    pass_score?: number;
    questions: QuizQuestion[];
    is_published: boolean;
    created_at?: string;
}

const Assessments: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getInitialView = (): 'list' | 'create' | 'edit' => {
        if (location.pathname.includes('create-assessment')) {
            return 'create';
        }
        return 'list';
    };

    const [view, setView] = useState<'list' | 'create' | 'edit'>(getInitialView());
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Form state
    const [quizForm, setQuizForm] = useState<Partial<Quiz>>({
        title: '',
        description: '',
        grade: 10,
        subject: 'Mathematics',
        difficulty: 'medium',
        time_limit: 30,
        pass_score: 50,
        questions: [],
        is_published: false
    });

    const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>({
        question: '',
        options: ['', '', '', ''],
        correct_answer: 0,
        points: 1
    });

    useEffect(() => {
        setView(getInitialView());
        if (getInitialView() === 'list') {
            fetchQuizzes();
        }
    }, [location.pathname]);

    const fetchQuizzes = async () => {
        try {
            setLoading(true);
            const response = await api.quizzes.getAll();
            setQuizzes(response.data);
        } catch (err: any) {
            console.error('Error fetching quizzes:', err);
            setError(err.response?.data?.error || 'Failed to fetch quizzes');
        } finally {
            setLoading(false);
        }
    };

    const handleAddQuestion = () => {
        if (!currentQuestion.question.trim()) {
            alert('Please enter a question');
            return;
        }

        const validOptions = currentQuestion.options.filter(opt => opt.trim() !== '');
        if (validOptions.length < 2) {
            alert('Please add at least 2 options');
            return;
        }

        setQuizForm({
            ...quizForm,
            questions: [...(quizForm.questions || []), { ...currentQuestion }]
        });

        // Reset current question
        setCurrentQuestion({
            question: '',
            options: ['', '', '', ''],
            correct_answer: 0,
            points: 1
        });
    };

    const handleRemoveQuestion = (index: number) => {
        const updatedQuestions = [...(quizForm.questions || [])];
        updatedQuestions.splice(index, 1);
        setQuizForm({ ...quizForm, questions: updatedQuestions });
    };

    const handleSubmitQuiz = async (publish: boolean = false) => {
        if (!quizForm.title?.trim()) {
            alert('Please enter a quiz title');
            return;
        }

        if (!quizForm.questions || quizForm.questions.length === 0) {
            alert('Please add at least one question');
            return;
        }

        try {
            const quizData = {
                ...quizForm,
                is_published: publish
            };

            await api.quizzes.create(quizData);
            alert(`Quiz ${publish ? 'published' : 'saved as draft'} successfully!`);
            setView('list');
            fetchQuizzes();

            // Reset form
            setQuizForm({
                title: '',
                description: '',
                grade: 10,
                subject: 'Mathematics',
                difficulty: 'medium',
                time_limit: 30,
                pass_score: 50,
                questions: [],
                is_published: false
            });
        } catch (err: any) {
            alert('Failed to create quiz: ' + (err.response?.data?.error || err.message));
        }
    };

    const handlePublishToggle = async (id: number, isPublished: boolean) => {
        try {
            // Toggle publish status
            const quiz = quizzes.find(q => q.id === id);
            if (quiz) {
                await api.quizzes.create({ ...quiz, is_published: !isPublished });
                fetchQuizzes();
            }
        } catch (err: any) {
            alert('Failed to update quiz: ' + (err.response?.data?.error || err.message));
        }
    };

    return (
        <DashboardLayout userType="teacher" headerTitle="Assessments">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {view === 'list' ? (
                    <>
                        <div className="flex justify-between items-center bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <div>
                                <h2 className="text-2xl font-bold">My Assessments</h2>
                                <p className="text-slate-500 dark:text-slate-400">Create and manage quizzes</p>
                            </div>
                            <button
                                onClick={() => setView('create')}
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-blue-600 transition-colors font-bold"
                            >
                                <span className="material-symbols-outlined">add</span>
                                Create Quiz
                            </button>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                            </div>
                        ) : error ? (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                                <p className="text-red-600 dark:text-red-400">{error}</p>
                            </div>
                        ) : quizzes.length === 0 ? (
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-12 text-center">
                                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">quiz</span>
                                <h3 className="text-xl font-bold mb-2">No Quizzes Yet</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-4">Create your first assessment to get started</p>
                                <button
                                    onClick={() => setView('create')}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-blue-600 transition-colors font-bold"
                                >
                                    <span className="material-symbols-outlined">add</span>
                                    Create Quiz
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {quizzes.map((quiz) => (
                                    <div key={quiz.id} className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${quiz.is_published ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'}`}>
                                                    {quiz.is_published ? 'Published' : 'Draft'}
                                                </span>
                                                <button
                                                    onClick={() => handlePublishToggle(quiz.id, quiz.is_published)}
                                                    className="text-slate-400 hover:text-primary"
                                                >
                                                    <span className="material-symbols-outlined">{quiz.is_published ? 'visibility_off' : 'publish'}</span>
                                                </button>
                                            </div>
                                            <h3 className="text-xl font-bold mb-1 line-clamp-2">{quiz.title}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm">Grade {quiz.grade} • {quiz.subject_name || quiz.subject}</p>
                                            {quiz.description && (
                                                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-2">{quiz.description}</p>
                                            )}
                                        </div>
                                        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 grid grid-cols-3 gap-2">
                                            <div className="text-center">
                                                <span className="block text-lg font-bold">{quiz.questions?.length || 0}</span>
                                                <span className="text-xs text-slate-500 uppercase">Questions</span>
                                            </div>
                                            <div className="text-center border-l border-slate-200 dark:border-slate-700">
                                                <span className="block text-lg font-bold capitalize">{quiz.difficulty}</span>
                                                <span className="text-xs text-slate-500 uppercase">Difficulty</span>
                                            </div>
                                            <div className="text-center border-l border-slate-200 dark:border-slate-700">
                                                <span className="block text-lg font-bold">{quiz.time_limit}m</span>
                                                <span className="text-xs text-slate-500 uppercase">Time</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="max-w-5xl mx-auto">
                        <button
                            onClick={() => setView('list')}
                            className="flex items-center gap-2 text-slate-500 hover:text-primary mb-6 transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Back to Assessments
                        </button>

                        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h2 className="text-2xl font-bold mb-6">Create New Quiz</h2>

                            {/* Quiz Details */}
                            <div className="space-y-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Quiz Title *</label>
                                    <input
                                        type="text"
                                        value={quizForm.title}
                                        onChange={(e) => setQuizForm({ ...quizForm, title: e.target.value })}
                                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="e.g. Algebra Fundamentals Quiz"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Description</label>
                                    <textarea
                                        value={quizForm.description}
                                        onChange={(e) => setQuizForm({ ...quizForm, description: e.target.value })}
                                        className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none h-24"
                                        placeholder="Brief description of what this quiz covers..."
                                    />
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Grade *</label>
                                        <select
                                            value={quizForm.grade}
                                            onChange={(e) => setQuizForm({ ...quizForm, grade: parseInt(e.target.value) })}
                                            className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                        >
                                            {[8, 9, 10, 11, 12].map(g => <option key={g} value={g}>Grade {g}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject *</label>
                                        <select
                                            value={quizForm.subject}
                                            onChange={(e) => setQuizForm({ ...quizForm, subject: e.target.value })}
                                            className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                        >
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="Physical Sciences">Physical Sciences</option>
                                            <option value="Life Sciences">Life Sciences</option>
                                            <option value="English">English</option>
                                            <option value="Geography">Geography</option>
                                            <option value="History">History</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Difficulty</label>
                                        <select
                                            value={quizForm.difficulty}
                                            onChange={(e) => setQuizForm({ ...quizForm, difficulty: e.target.value })}
                                            className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                        >
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Time (min)</label>
                                        <input
                                            type="number"
                                            value={quizForm.time_limit}
                                            onChange={(e) => setQuizForm({ ...quizForm, time_limit: parseInt(e.target.value) })}
                                            className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                            min="5"
                                            max="180"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Question Builder */}
                            <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
                                <h3 className="text-xl font-bold mb-4">Add Questions</h3>

                                <div className="space-y-4 mb-6 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Question</label>
                                        <input
                                            type="text"
                                            value={currentQuestion.question}
                                            onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
                                            className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                            placeholder="Enter your question..."
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Answer Options</label>
                                        {currentQuestion.options.map((option, index) => (
                                            <div key={index} className="flex gap-2">
                                                <input
                                                    type="radio"
                                                    name="correct"
                                                    checked={currentQuestion.correct_answer === index}
                                                    onChange={() => setCurrentQuestion({ ...currentQuestion, correct_answer: index })}
                                                    className="mt-3"
                                                />
                                                <input
                                                    type="text"
                                                    value={option}
                                                    onChange={(e) => {
                                                        const newOptions = [...currentQuestion.options];
                                                        newOptions[index] = e.target.value;
                                                        setCurrentQuestion({ ...currentQuestion, options: newOptions });
                                                    }}
                                                    className="flex-1 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                                    placeholder={`Option ${index + 1}`}
                                                />
                                            </div>
                                        ))}
                                        <p className="text-xs text-slate-500">Select the radio button for the correct answer</p>
                                    </div>

                                    <button
                                        onClick={handleAddQuestion}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-xl hover:bg-blue-600 transition-colors font-bold"
                                    >
                                        <span className="material-symbols-outlined">add</span>
                                        Add Question
                                    </button>
                                </div>

                                {/* Questions List */}
                                {quizForm.questions && quizForm.questions.length > 0 && (
                                    <div className="space-y-4">
                                        <h4 className="font-bold">Questions ({quizForm.questions.length})</h4>
                                        {quizForm.questions.map((q, index) => (
                                            <div key={index} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                                                <div className="flex justify-between items-start mb-2">
                                                    <p className="font-bold">{index + 1}. {q.question}</p>
                                                    <button
                                                        onClick={() => handleRemoveQuestion(index)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <span className="material-symbols-outlined">delete</span>
                                                    </button>
                                                </div>
                                                <div className="space-y-1 text-sm">
                                                    {q.options.map((opt, i) => (
                                                        <p key={i} className={q.correct_answer === i ? 'text-green-600 font-bold' : 'text-slate-600 dark:text-slate-400'}>
                                                            {String.fromCharCode(65 + i)}. {opt} {q.correct_answer === i && '✓'}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex justify-end gap-3 pt-6 border-t border-slate-200 dark:border-slate-700 mt-6">
                                <button
                                    onClick={() => handleSubmitQuiz(false)}
                                    className="px-6 py-3 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    Save as Draft
                                </button>
                                <button
                                    onClick={() => handleSubmitQuiz(true)}
                                    className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
                                >
                                    Publish Quiz
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Assessments;
