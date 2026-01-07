import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const subjectData: Record<string, any> = {
    'mathematics': {
        name: "Mathematics",
        description: "Master the language of the universe. From Algebra to Trigonometry, we've got you covered.",
        icon: "calculate",
        color: "text-blue-600",
        bg: "bg-blue-600",
        gradient: "from-blue-600 to-indigo-700",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
        topics: ["Algebra", "Geometry", "Trigonometry", "Functions", "Calculus", "Probability"],
        stats: { lessons: 42, quizzes: 12, papers: 24 }
    },
    'physical-sciences': {
        name: "Physical Sciences",
        description: "Explore the laws of nature through Physics and Chemistry. Mechanics, electricity, and matter.",
        icon: "science",
        color: "text-teal-600",
        bg: "bg-teal-600",
        gradient: "from-teal-500 to-emerald-700",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1974&auto=format&fit=crop",
        topics: ["Mechanics", "Waves, Sound & Light", "Electricity & Magnetism", "Matter & Materials", "Chemical Change"],
        stats: { lessons: 38, quizzes: 10, papers: 20 }
    },
    'life-sciences': {
        name: "Life Sciences",
        description: "Dive into the study of life. Human anatomy, genetics, and environmental studies.",
        icon: "biotech",
        color: "text-green-600",
        bg: "bg-green-600",
        gradient: "from-green-500 to-lime-600",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop",
        topics: ["DNA & Genetics", "Human Reproduction", "Evolution", "Ecology", "Plant Responses"],
        stats: { lessons: 35, quizzes: 15, papers: 18 }
    },
    'english-hl': {
        name: "English HL",
        description: "Refine your language skills. Poetry analysis, Shakespeare, and creative writing.",
        icon: "translate",
        color: "text-purple-600",
        bg: "bg-purple-600",
        gradient: "from-purple-500 to-pink-600",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop",
        topics: ["Poetry Analysis", "Shakespeare (Macbeth/Hamlet)", "Language Structures", "Creative Writing", "Visual Literacy"],
        stats: { lessons: 30, quizzes: 8, papers: 22 }
    },
    'accounting': {
        name: "Accounting",
        description: "Understand the language of business. Financial statements, bookkeeping, and ethics.",
        icon: "account_balance",
        color: "text-orange-600",
        bg: "bg-orange-600",
        gradient: "from-orange-400 to-red-500",
        image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2072&auto=format&fit=crop",
        topics: ["Financial Statements", "Reconciliations", "Companies", "Cost Accounting", "VAT & Ethics"],
        stats: { lessons: 28, quizzes: 14, papers: 16 }
    },
    'geography': {
        name: "Geography",
        description: "Explore the world around you. Climatology, Geomorphology, and Map Work.",
        icon: "public",
        color: "text-cyan-600",
        bg: "bg-cyan-600",
        gradient: "from-cyan-600 to-blue-800",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop",
        topics: ["Climatology", "Geomorphology", "Map Skills", "Settlement Geography", "Economic Geography"],
        stats: { lessons: 25, quizzes: 10, papers: 15 }
    },
    'life-orientation': {
        name: "Life Orientation",
        description: "Develop skills for life. Careers, Democracy, and Physical Education.",
        icon: "self_improvement",
        color: "text-orange-500",
        bg: "bg-orange-500",
        gradient: "from-yellow-400 to-orange-500",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        topics: ["Development of the Self", "Social Responsibility", "Democracy & Human Rights", "Careers & Choices", "Study Skills"],
        stats: { lessons: 20, quizzes: 5, papers: 10 }
    },
    'math-literacy': {
        name: "Math Literacy",
        description: "Practical mathematics for everyday life. Finance, Measurement, and Maps.",
        icon: "percent",
        color: "text-indigo-600",
        bg: "bg-indigo-600",
        gradient: "from-indigo-500 to-violet-600",
        image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2074&auto=format&fit=crop",
        topics: ["Finance", "Measurement", "Maps & Plans", "Data Handling", "Probability"],
        stats: { lessons: 22, quizzes: 8, papers: 12 }
    }
};

const SubjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const subject = id ? subjectData[id.toLowerCase()] : null;

    if (!subject) {
        return (
            <div className="flex flex-col min-h-screen">
                <PublicHeader />
                <div className="flex-grow flex flex-col items-center justify-center p-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Subject Not Found</h2>
                    <p className="mb-6">Sorry, we couldn't find the subject page for "{id}".</p>
                    <Link to="/subjects" className="px-6 py-3 bg-primary text-white rounded-lg font-bold">
                        Browse All Subjects
                    </Link>
                </div>
                <PublicFooter />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className={`relative overflow-hidden bg-[#111722] text-white`}>
                    <div className="absolute inset-0">
                        <img
                            src={subject.image}
                            alt={subject.name}
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111722] via-[#111722]/80 to-transparent"></div>
                    </div>

                    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-20 md:py-28 relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                            <Link to="/subjects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 font-medium transition-colors">
                                <span className="material-symbols-outlined text-lg">arrow_back</span>
                                Back to Subjects
                            </Link>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                    <span className="material-symbols-outlined text-4xl">{subject.icon}</span>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold tracking-wide uppercase">
                                    Grade 10 - 12
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                                {subject.name}
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                                {subject.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/login" className="px-8 py-3.5 bg-white text-slate-900 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
                                    <span className="material-symbols-outlined">play_circle</span>
                                    Start Learning
                                </Link>
                                <Link to="/login" className="px-8 py-3.5 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white rounded-xl font-bold transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined">download</span>
                                    Past Papers
                                </Link>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="w-full md:w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white">
                            <h3 className="font-bold text-lg mb-4 border-b border-white/10 pb-2">Available Resources</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-xl opacity-80">play_lesson</span> Video Lessons</span>
                                    <span className="font-bold bg-white/20 px-2 py-0.5 rounded text-sm">{subject.stats.lessons}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-xl opacity-80">quiz</span> Practice Quizzes</span>
                                    <span className="font-bold bg-white/20 px-2 py-0.5 rounded text-sm">{subject.stats.quizzes}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><span className="material-symbols-outlined text-xl opacity-80">description</span> Past Papers</span>
                                    <span className="font-bold bg-white/20 px-2 py-0.5 rounded text-sm">{subject.stats.papers}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Main Content: Topics */}
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <div className="flex justify-between items-end">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Curriculum Topics</h2>
                                <span className="text-sm font-medium text-slate-500">CAPS Aligned</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {subject.topics.map((topic: string, index: number) => (
                                    <Link to="/login" key={index} className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] hover:border-primary hover:shadow-md transition-all group text-left">
                                        <div className={`size-10 rounded-lg ${subject.bg} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center ${subject.color} dark:text-white font-bold text-lg`}>
                                            {index + 1}
                                        </div>
                                        <span className="font-bold text-slate-700 dark:text-white group-hover:text-primary transition-colors">{topic}</span>
                                        <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-primary">lock</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Recent Papers */}
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Recent Past Papers</h2>
                                <div className="space-y-3">
                                    {[2023, 2022, 2021].map((year) => (
                                        <div key={year} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#1f2b42] rounded-xl border border-gray-200 dark:border-[#324467]">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 bg-white dark:bg-[#192233] rounded-lg flex items-center justify-center border border-gray-200 dark:border-[#324467]">
                                                    <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 dark:text-white">November {year} Exam Papers</h4>
                                                    <p className="text-xs text-slate-500">Includes P1 & P2 + Memos</p>
                                                </div>
                                            </div>
                                            <Link to="/login" className="px-4 py-2 text-sm font-bold text-primary bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-colors">
                                                Login to Download
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Teachers & tips */}
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-[#192233] p-6 rounded-2xl border border-gray-200 dark:border-[#324467] shadow-sm">
                                <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">Top Teacher Tip</h3>
                                <div className="flex gap-4 items-start mb-6">
                                    <div className="size-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white shrink-0">M</div>
                                    <p className="text-slate-600 dark:text-gray-300 text-sm italic">"Don't just memorize formulas. Understand how to derive them. For {subject.name}, consistent practice is key!"</p>
                                </div>
                                <Link to="/login" className="block text-center w-full py-3 bg-gray-50 hover:bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-white rounded-xl font-bold text-sm transition-colors border border-gray-200 dark:border-transparent">
                                    Ask a Question
                                </Link>
                            </div>

                            <div className="bg-blue-50 dark:bg-[#192233] p-6 rounded-2xl border border-blue-100 dark:border-[#324467]">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Need a Tutor?</h3>
                                <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">Get 1-on-1 private lessons for {subject.name} from top performing students.</p>
                                <Link to="/login" className="block text-center w-full py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
                                    Find a Tutor
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PublicFooter />
        </div>
    );
};

export default SubjectDetail;
