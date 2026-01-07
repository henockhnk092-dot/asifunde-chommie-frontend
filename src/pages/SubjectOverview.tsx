import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const SubjectOverview: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGrade, setSelectedGrade] = useState<number>(10);
    const [showGradeDropdown, setShowGradeDropdown] = useState(false);

    const languages = ['All', 'English', 'Afrikaans', 'isiXhosa', 'isiZulu'];
    const grades = [8, 9, 10, 11, 12];

    const subjects = [
        {
            name: "Mathematics",
            slug: "mathematics",
            description: "Algebra, Geometry, Trigonometry, and Functions.",
            lessons: 24,
            quizzes: 8,
            gradient: "from-blue-600 to-indigo-700",
            icon: "calculate",
            color: "text-primary",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [8, 9, 10, 11, 12]
        },
        {
            name: "Physical Sciences",
            slug: "physical-sciences",
            description: "Physics, Chemistry, Mechanics and Waves.",
            lessons: 18,
            notes: 12,
            gradient: "from-teal-500 to-emerald-700",
            icon: "science",
            color: "text-teal-600",
            progress: 35,
            image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1974&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "Life Sciences",
            slug: "life-sciences",
            description: "Human Anatomy, Environmental Studies, DNA.",
            lessons: 20,
            gradient: "from-green-500 to-lime-600",
            icon: "biotech",
            color: "text-green-600",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "Accounting",
            slug: "accounting",
            description: "Financial Statements, Bookkeeping, Ethics.",
            lessons: 15,
            quizzes: 5,
            gradient: "from-orange-400 to-red-500",
            icon: "account_balance",
            color: "text-orange-600",
            image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2072&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "English HL",
            slug: "english-hl",
            description: "Poetry, Shakespeare, Grammar, Creative Writing.",
            notes: 32,
            gradient: "from-purple-500 to-pink-600",
            icon: "translate",
            color: "text-purple-600",
            image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop",
            languages: ['English'],
            grades: [8, 9, 10, 11, 12]
        },
        {
            name: "Geography",
            slug: "geography",
            description: "Climatology, Geomorphology, Map Work.",
            lessons: 10,
            gradient: "from-cyan-600 to-blue-800",
            icon: "public",
            color: "text-cyan-600",
            image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "Life Orientation",
            slug: "life-orientation",
            description: "Careers, Democracy, Physical Education.",
            notes: 14,
            gradient: "from-yellow-400 to-orange-500",
            icon: "self_improvement",
            color: "text-orange-500",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
            languages: ['English', 'Afrikaans', 'isiXhosa', 'isiZulu'],
            grades: [8, 9, 10, 11, 12]
        },
        {
            name: "Math Literacy",
            slug: "math-literacy",
            description: "Finance, Measurement, Maps, Probability.",
            lessons: 18,
            gradient: "from-indigo-500 to-violet-600",
            icon: "percent",
            color: "text-indigo-600",
            image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2074&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "Business Studies",
            slug: "business-studies",
            description: "Business Operations, Management, Legislation.",
            lessons: 22,
            quizzes: 6,
            gradient: "from-blue-500 to-cyan-600",
            icon: "business_center",
            color: "text-blue-600",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "History",
            slug: "history",
            description: "Cold War, South African History, Globalization.",
            lessons: 16,
            gradient: "from-amber-600 to-orange-700",
            icon: "history_edu",
            color: "text-amber-700",
            image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=2074&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "Economics",
            slug: "economics",
            description: "Macroeconomics, Microeconomics, Economic Pursuits.",
            lessons: 19,
            notes: 8,
            gradient: "from-emerald-600 to-green-700",
            icon: "trending_up",
            color: "text-emerald-700",
            image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2071&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "Information Technology",
            slug: "it",
            description: "Programming (Delphi/Java), Hardware, Databases.",
            lessons: 25,
            quizzes: 10,
            gradient: "from-sky-500 to-blue-600",
            icon: "code",
            color: "text-sky-600",
            image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
            languages: ['English'],
            grades: [10, 11, 12]
        },
        {
            name: "CAT",
            slug: "cat",
            description: "Computer Applications Technology, Word, Excel, Access.",
            lessons: 21,
            gradient: "from-slate-500 to-gray-600",
            icon: "keyboard",
            color: "text-slate-600",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [10, 11, 12]
        },
        {
            name: "Natural Sciences",
            slug: "natural-sciences",
            description: "Matter and Materials, Energy and Change, Life and Living.",
            lessons: 30,
            gradient: "from-green-400 to-teal-500",
            icon: "eco",
            color: "text-green-500",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [8, 9]
        },
        {
            name: "Economic Management Sciences",
            slug: "ems",
            description: "The Economy, Financial Literacy, Entrepreneurship.",
            lessons: 28,
            gradient: "from-orange-300 to-amber-500",
            icon: "store",
            color: "text-orange-500",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [8, 9]
        },
        {
            name: "Technology",
            slug: "technology",
            description: "Structures, Processing, Mechanical Systems.",
            lessons: 15,
            gradient: "from-gray-400 to-slate-500",
            icon: "construction",
            color: "text-gray-500",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [8, 9]
        },
        {
            name: "Creative Arts",
            slug: "creative-arts",
            description: "Visual Arts, Performing Arts, Dance, Music.",
            lessons: 12,
            gradient: "from-pink-400 to-rose-500",
            icon: "palette",
            color: "text-pink-500",
            image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=2070&auto=format&fit=crop",
            languages: ['English', 'Afrikaans'],
            grades: [8, 9]
        }
    ];

    const filteredSubjects = subjects.filter(subject => {
        const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            subject.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLanguage = selectedLanguage === 'All' || subject.languages.includes(selectedLanguage);
        const matchesGrade = subject.grades.includes(selectedGrade);

        return matchesSearch && matchesLanguage && matchesGrade;
    });

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative w-full bg-[#111722] py-16 md:py-24 z-20">
                    <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                            alt="Education Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111722] via-[#111722]/80 to-transparent"></div>
                    </div>

                    <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div className="flex flex-col gap-2">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold w-fit">
                                    CAPS CURRICULUM
                                </span>
                                <h1 className="text-4xl md:text-5xl font-black leading-tight text-white mb-2">Browse Subjects</h1>
                                <p className="text-gray-300 text-base md:text-lg font-normal max-w-2xl leading-relaxed">
                                    Access video lessons, study notes, and past papers tailored for Grade 8-12 South African learners.
                                </p>
                            </div>
                            <div className="flex gap-3 relative">
                                <button
                                    onClick={() => setShowGradeDropdown(!showGradeDropdown)}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md text-sm font-bold text-white hover:bg-white/20 transition-colors w-40 justify-between"
                                >
                                    <span>Grade {selectedGrade}</span>
                                    <span className={`material-symbols-outlined text-base transition-transform ${showGradeDropdown ? 'rotate-180' : ''}`}>expand_more</span>
                                </button>

                                {showGradeDropdown && (
                                    <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#324467] rounded-xl shadow-xl overflow-hidden z-20">
                                        {grades.map(grade => (
                                            <button
                                                key={grade}
                                                onClick={() => {
                                                    setSelectedGrade(grade);
                                                    setShowGradeDropdown(false);
                                                }}
                                                className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#232f48] transition-colors ${selectedGrade === grade ? 'text-primary bg-primary/5' : 'text-slate-700 dark:text-white'}`}
                                            >
                                                Grade {grade}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1280px] mx-auto p-4 md:p-8 flex flex-col gap-6">

                    {/* Filters & Search Toolbar */}
                    <div className="flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm py-4 border-b border-gray-200/50 dark:border-white/5 pb-4">
                        {/* Search */}
                        <div className="w-full xl:w-96">
                            <div className="flex w-full items-stretch rounded-lg h-12 bg-white dark:bg-[#232f48] shadow-sm border border-gray-200 dark:border-none overflow-hidden">
                                <div className="flex items-center justify-center pl-4 pr-2 text-slate-400 dark:text-[#92a4c9]">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input
                                    className="flex-1 bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#92a4c9] focus:ring-0 text-base"
                                    placeholder="Search subjects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Language Chips */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full xl:w-auto pb-2 xl:pb-0 no-scrollbar">
                            <span className="text-sm font-medium text-slate-500 dark:text-[#92a4c9] whitespace-nowrap mr-2">Language:</span>
                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => setSelectedLanguage(lang)}
                                    className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-transform active:scale-95 ${selectedLanguage === lang ? 'bg-primary text-white' : 'bg-white dark:bg-[#232f48] border border-gray-200 dark:border-none text-slate-700 dark:text-white hover:bg-gray-50 dark:hover:bg-[#344361]'}`}
                                >
                                    <p className="text-sm font-medium">{lang}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Subject Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20 mt-4">
                        {filteredSubjects.map((subject, index) => (
                            <div key={index} className="group flex flex-col bg-white dark:bg-[#192233] rounded-xl overflow-hidden border border-gray-200 dark:border-[#324467] hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none hover:translate-y-[-4px] h-full">
                                <div className="h-40 relative flex flex-col justify-end overflow-hidden">
                                    <img
                                        src={subject.image}
                                        alt={subject.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                    <div className="relative z-10 p-4 flex justify-between items-end">
                                        <div className={`bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg text-white shadow-lg`}>
                                            <span className="material-symbols-outlined">{subject.icon}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{subject.name}</h3>
                                        <p className="text-sm text-slate-500 dark:text-text-secondary line-clamp-2 leading-relaxed">{subject.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {subject.lessons && (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-bold">
                                                <span className="material-symbols-outlined text-[14px]">play_circle</span> {subject.lessons}
                                            </span>
                                        )}
                                        {subject.quizzes && (
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 text-xs font-bold">
                                                <span className="material-symbols-outlined text-[14px]">quiz</span> {subject.quizzes}
                                            </span>
                                        )}
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-bold">
                                            GD {selectedGrade}
                                        </span>
                                    </div>

                                    <Link to={`/subjects/${subject.slug}`} className="w-full mt-4 py-3 flex items-center justify-center rounded-lg bg-slate-50 dark:bg-[#232f48] border border-gray-200 dark:border-[#324467] group-hover:bg-primary group-hover:border-primary text-slate-900 dark:text-white group-hover:text-white text-sm font-bold transition-all">
                                        View Subject
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredSubjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="size-20 bg-gray-100 dark:bg-[#192233] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-4xl text-gray-400">cancel_presentation</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No subjects found for Grade {selectedGrade}</h3>
                            <p className="text-slate-500 dark:text-text-secondary">
                                No subjects match your search or language filter.
                            </p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedLanguage('All'); }}
                                className="mt-6 text-primary font-bold hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <PublicFooter />
        </div>
    );

};

export default SubjectOverview;
