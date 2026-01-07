import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const CareerQuiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState<any>(null);

    const questions = [
        {
            id: 1,
            text: "What interests you most?",
            options: [
                { id: 'a', text: "Solving complex math problems", type: 'stem' },
                { id: 'b', text: "Creating art or music", type: 'arts' },
                { id: 'c', text: "Starting a business", type: 'business' },
                { id: 'd', text: "Helping people", type: 'social' }
            ]
        },
        {
            id: 2,
            text: "Which environment do you prefer?",
            options: [
                { id: 'a', text: "Laboratory or Workshop", type: 'stem' },
                { id: 'b', text: "Studio or Stage", type: 'arts' },
                { id: 'c', text: "Office or Boardroom", type: 'business' },
                { id: 'd', text: "Hospital or Community Center", type: 'social' }
            ]
        },
        {
            id: 3,
            text: "What is your favorite school subject?",
            options: [
                { id: 'a', text: "Physical Sciences", type: 'stem' },
                { id: 'b', text: "Visual Arts / Drama", type: 'arts' },
                { id: 'c', text: "Accounting / Economics", type: 'business' },
                { id: 'd', text: "Life Orientation / History", type: 'social' }
            ]
        },
        {
            id: 4,
            text: "In a group project, you usually:",
            options: [
                { id: 'a', text: "Do the research and analysis", type: 'stem' },
                { id: 'b', text: "Design the presentation", type: 'arts' },
                { id: 'c', text: "Lead and organize everyone", type: 'business' },
                { id: 'd', text: "Resolve conflicts and support others", type: 'social' }
            ]
        },
        {
            id: 5,
            text: "What do you value most in a career?",
            options: [
                { id: 'a', text: "Innovation and discovery", type: 'stem' },
                { id: 'b', text: "Creativity and expression", type: 'arts' },
                { id: 'c', text: "Leadership and wealth", type: 'business' },
                { id: 'd', text: "Making a social impact", type: 'social' }
            ]
        }
    ];

    const results = {
        stem: {
            title: "STEM Innovator",
            description: "You have a natural curiosity for how the world works. You enjoy solving problems using logic and analysis. Careers in Science, Technology, Engineering, and Math are perfect for you.",
            subjects: ["Mathematics", "Physical Sciences", "IT", "EGD"],
            careers: ["Engineer", "Software Developer", "Data Scientist", "Doctor"]
        },
        arts: {
            title: "Creative Visionary",
            description: "You see the world differently and love to express yourself. You thrive in environments that allow for imagination and original thought.",
            subjects: ["Visual Arts", "Design", "Music", "Drama"],
            careers: ["Graphic Designer", "Architect", "Animator", "Fashion Designer"]
        },
        business: {
            title: "Business Leader",
            description: "You are goal-oriented and enjoy taking charge. You have a knack for strategy, organization, and influencing others.",
            subjects: ["Accounting", "Business Studies", "Economics", "Math"],
            careers: ["Entrepreneur", "Accountant", "Project Manager", "Marketing Director"]
        },
        social: {
            title: "Community Helper",
            description: "You are empathetic and driven by a desire to help others. You excel in written and verbal communication and understanding people.",
            subjects: ["History", "Life Sciences", "Languages", "Consumer Studies"],
            careers: ["Psychologist", "Teacher", "Social Worker", "Nurse"]
        }
    };

    const handleOptionSelect = (type: string) => {
        setAnswers(prev => ({ ...prev, [currentQuestion]: type }));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            calculateResult();
        }
    };

    const calculateResult = () => {
        const counts: Record<string, number> = { stem: 0, arts: 0, business: 0, social: 0 };
        Object.values(answers).forEach(type => {
            if (counts[type] !== undefined) counts[type]++;
        });

        const topType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        setResult(results[topType as keyof typeof results]);
        setShowResult(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow flex flex-col items-center justify-center">
                {/* Hero / Intro Section */}
                <div className="w-full bg-[#111722] text-white py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                            alt="Career Planning"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-[#111722]/80 to-transparent"></div>
                    </div>

                    <div className="max-w-2xl mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm tracking-wide mb-6 border border-primary/30 backdrop-blur-md">
                            <span className="material-symbols-outlined text-lg">psychology</span>
                            <span>Career Aptitude Test</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            Discover Your Perfect<br />
                            <span className="text-primary">Career Path</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Not sure which subjects to choose? Take our free 5-minute assessment to find careers that match your personality and strengths.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-3xl px-4 -mt-10 relative z-20 mb-20">

                    <div className="bg-white dark:bg-[#192233] rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-[#232f48]">
                        {!showResult ? (
                            <>
                                <div className="p-8">
                                    <div className="mb-6">
                                        <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                                            <span>Question {currentQuestion + 1} of {questions.length}</span>
                                            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary transition-all duration-300"
                                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                                        {questions[currentQuestion].text}
                                    </h4>

                                    <div className="space-y-3">
                                        {questions[currentQuestion].options.map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() => handleOptionSelect(option.type)}
                                                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-3 ${answers[currentQuestion] === option.type
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-gray-100 dark:border-[#324467] hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-[#232f48]'
                                                    }`}
                                            >
                                                <div className={`size-6 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[currentQuestion] === option.type
                                                    ? 'border-primary bg-primary'
                                                    : 'border-gray-300 dark:border-gray-600'
                                                    }`}>
                                                    {answers[currentQuestion] === option.type && (
                                                        <div className="size-2.5 bg-white rounded-full"></div>
                                                    )}
                                                </div>
                                                <span className={`font-medium ${answers[currentQuestion] === option.type ? 'text-primary' : 'text-slate-700 dark:text-gray-300'}`}>
                                                    {option.text}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 border-t border-gray-200 dark:border-[#232f48] bg-gray-50 dark:bg-[#111722] flex justify-between">
                                    <button
                                        onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                                        disabled={currentQuestion === 0}
                                        className="px-6 py-2.5 rounded-xl font-bold text-slate-600 dark:text-text-secondary hover:bg-gray-200 dark:hover:bg-[#232f48] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={!answers[currentQuestion]}
                                        className="px-8 py-2.5 rounded-xl font-bold bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                                    >
                                        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col h-full">
                                <div className="p-8 text-center animate-in fade-in zoom-in duration-300">
                                    <div className="size-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="material-symbols-outlined text-5xl">check_circle</span>
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                                        {result?.title}
                                    </h2>
                                    <p className="text-lg text-slate-500 dark:text-text-secondary mb-8 max-w-lg mx-auto">
                                        {result?.description}
                                    </p>

                                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-left mb-8">
                                        <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">lightbulb</span>
                                            Recommended School Subjects
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {result?.subjects.map((subject: string) => (
                                                <span key={subject} className="px-3 py-1 bg-white dark:bg-[#192233] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold text-slate-700 dark:text-gray-300">
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                        {result?.careers.map((career: string, idx: number) => (
                                            <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-[#232f48] border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                                                <div className="size-10 rounded-lg bg-white dark:bg-[#111722] flex items-center justify-center shadow-sm">
                                                    <span className="material-symbols-outlined text-primary">work</span>
                                                </div>
                                                <span className="font-bold text-slate-900 dark:text-white">{career}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 border-t border-gray-200 dark:border-[#232f48] bg-gray-50 dark:bg-[#111722] flex justify-end gap-3 filter-blur">
                                    <button
                                        onClick={() => setShowResult(false)}
                                        className="px-6 py-2.5 rounded-xl font-bold text-slate-600 dark:text-text-secondary hover:bg-gray-200 dark:hover:bg-[#232f48] transition-colors"
                                    >
                                        Retake Quiz
                                    </button>
                                    <Link
                                        to="/signup"
                                        className="px-8 py-2.5 rounded-xl font-bold bg-primary text-white hover:bg-blue-600 shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">save</span>
                                        Save Results
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                {/* Additional Sections added based on user feedback */}
                <div className="w-full bg-white dark:bg-[#192233] py-20 border-t border-slate-100 dark:border-[#232f48]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Why Take This Quiz?</h2>
                            <p className="text-lg text-[#637588] dark:text-[#92a4c9]">
                                Choosing your Grade 10 subjects or university course is a huge decision. Our scientifically backed assessment helps you make the right choice with confidence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "psychology",
                                    title: "Understand Yourself",
                                    desc: "Gain insights into your unique personality traits, strengths, and what environments you thrive in."
                                },
                                {
                                    icon: "school",
                                    title: "Subject Guidance",
                                    desc: "Get tailored recommendations for high school subjects that align with your natural aptitudes."
                                },
                                {
                                    icon: "query_stats",
                                    title: "Data-Driven Results",
                                    desc: "Our algorithm matches you with careers based on real-world job data and industry trends."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-background-light dark:bg-[#111722] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
                                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                                    <p className="text-[#637588] dark:text-[#92a4c9] leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="w-full py-20 bg-background-light dark:bg-[#111722]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">How It Works</h2>
                            <p className="text-[#637588] dark:text-[#92a4c9]">Three simple steps to your future.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>

                            {[
                                { step: "1", title: "Answer 5 Questions", desc: "Be honest about what you like and dislike. There are no wrong answers." },
                                { step: "2", title: "Get Instant Analysis", desc: "Our system instantly analyzes your responses to identify your personality type." },
                                { step: "3", title: "Explore Your Path", desc: "Discover career paths and the subjects you need to get there." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="size-24 rounded-full bg-white dark:bg-[#192233] border-4 border-primary text-primary font-black text-3xl flex items-center justify-center mb-6 shadow-xl">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                                    <p className="text-[#637588] dark:text-[#92a4c9] max-w-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </main >
            <PublicFooter />
        </div >
    );
};

export default CareerQuiz;
