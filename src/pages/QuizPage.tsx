import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QuizPage: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const questions = [
        {
            question: "Which of the following activities do you enjoy most during your free time?",
            description: "Select the option that best describes your natural inclination when you have unstructured time.",
            tags: [{ name: "Personality Check", icon: "psychology" }],
            options: [
                { id: "opt1", title: "Solving puzzles and logic games", desc: "Activities like Sudoku, chess, or strategy video games." },
                { id: "opt2", title: "Writing stories or reading", desc: "Creative writing, journaling, or reading fiction/non-fiction." },
                { id: "opt3", title: "Fixing broken items or building things", desc: "Working with tools, electronics, or woodworking." },
                { id: "opt4", title: "Organizing events for friends", desc: "Planning parties, study groups, or school clubs." }
            ]
        }
    ];

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setSelectedOption(null);
        } else {
            console.log("Quiz completed!");
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#111722]/80 backdrop-blur-md px-6 py-3 lg:px-10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
                        <span className="material-symbols-outlined">school</span>
                    </div>
                    <div>
                        <h2 className="text-base font-bold leading-tight tracking-tight sm:text-lg">Career Aptitude Assessment</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Grade 10 • Physical Sciences</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[18px]">timer</span>
                        <span>14:20 remaining</span>
                    </div>
                    <Link to="/career-guidance" className="flex h-9 min-w-[84px] cursor-pointer items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent px-4 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <span className="truncate">Save & Exit</span>
                    </Link>
                </div>
            </header>

            {/* Main Layout */}
            <main className="flex flex-1 flex-col items-center justify-start px-4 py-8 sm:px-6 lg:px-8 relative z-10">
                <div className="w-full max-w-3xl flex flex-col gap-6">
                    {/* Progress Section */}
                    <div className="w-full rounded-xl bg-white dark:bg-[#1a1d24] p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Question {currentQuestion + 1} of {questions.length}</p>
                                </div>
                                <p className="text-sm font-bold text-primary">{(currentQuestion / questions.length) * 100}% Completed</p>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                <div className="h-full rounded-full bg-primary transition-all duration-500 ease-out" style={{ width: `${(currentQuestion / questions.length) * 100}%` }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Question Card */}
                    <div className="flex flex-col gap-6 rounded-xl bg-white dark:bg-[#1a1d24] p-6 sm:p-10 shadow-lg ring-1 ring-slate-900/5 dark:ring-white/10">
                        {/* Question Header & Text */}
                        <div className="flex flex-col gap-4">
                            {questions[currentQuestion].tags.map((tag, idx) => (
                                <div key={idx} className="flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">
                                    <span className="material-symbols-outlined text-[16px]">{tag.icon}</span>
                                    <span>{tag.name}</span>
                                </div>
                            ))}

                            <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-slate-900 dark:text-white">
                                {questions[currentQuestion].question}
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                                {questions[currentQuestion].description}
                            </p>
                        </div>

                        {/* Answer Options */}
                        <div className="mt-4 flex flex-col gap-3" role="radiogroup">
                            {questions[currentQuestion].options.map((option) => (
                                <label key={option.id} className={`group relative flex cursor-pointer items-start gap-4 rounded-xl border p-5 transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-sm ${selectedOption === option.id ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30'}`}>
                                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${selectedOption === option.id ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                                        <input
                                            className="peer h-0 w-0 opacity-0"
                                            name="question"
                                            type="radio"
                                            value={option.id}
                                            onChange={() => setSelectedOption(option.id)}
                                            checked={selectedOption === option.id}
                                        />
                                        {selectedOption === option.id && <span className="material-symbols-outlined text-[16px] text-white">check</span>}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-base font-semibold ${selectedOption === option.id ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{option.title}</span>
                                        <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{option.desc}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 pb-12">
                        <button className="flex items-center justify-center gap-2 rounded-lg px-6 h-12 text-slate-500 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                            <span>Previous</span>
                        </button>
                        <button
                            onClick={handleNext}
                            className={`flex items-center justify-center gap-2 rounded-lg bg-primary px-8 h-12 text-white font-bold shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-600 ${!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!selectedOption}
                        >
                            <span>{currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </main>

            {/* Background Abstract Pattern decoration */}
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5"></div>
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5"></div>
            </div>
        </div>
    );
};

export default QuizPage;
