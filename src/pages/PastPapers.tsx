import React from 'react';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const PastPapers: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = React.useState<string>('');
    const [selectedGrade, setSelectedGrade] = React.useState<string>('');
    const [selectedYear, setSelectedYear] = React.useState<string>('');

    // Extended mock database
    const allPapers = [
        { subject: 'Mathematics P1', grade: 'Grade 12', term: 'Nov 2023', year: '2023', color: 'blue' },
        { subject: 'Physical Sciences P1', grade: 'Grade 12', term: 'Nov 2023', year: '2023', color: 'teal' },
        { subject: 'Life Sciences P2', grade: 'Grade 12', term: 'Nov 2023', year: '2023', color: 'green' },
        { subject: 'Accounting P1', grade: 'Grade 12', term: 'Nov 2023', year: '2023', color: 'indigo' },
        { subject: 'Geography P1', grade: 'Grade 12', term: 'Nov 2023', year: '2023', color: 'orange' },
        { subject: 'English HL P2', grade: 'Grade 12', term: 'Nov 2023', year: '2023', color: 'red' },
        { subject: 'Mathematics P2', grade: 'Grade 11', term: 'Nov 2023', year: '2023', color: 'blue' },
        { subject: 'Physical Sciences P2', grade: 'Grade 11', term: 'Nov 2022', year: '2022', color: 'teal' },
        { subject: 'Mathematical Literacy P1', grade: 'Grade 12', term: 'Nov 2022', year: '2022', color: 'yellow' },
    ];

    const filteredPapers = allPapers.filter(paper => {
        const subjectMatch = !selectedSubject || paper.subject.includes(selectedSubject);
        const gradeMatch = !selectedGrade || paper.grade === selectedGrade;
        const yearMatch = !selectedYear || paper.year === selectedYear;
        return subjectMatch && gradeMatch && yearMatch;
    });

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />
            <main className="flex-grow">
                <div className="relative w-full bg-[#111722] py-20 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop"
                            alt="Past Papers"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111722] via-[#111722]/80 to-transparent"></div>
                    </div>
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 text-white">
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Past Exam Papers</h1>
                        <p className="text-lg text-gray-300 max-w-2xl">Access thousands of past exam papers and memos to prepare for your upcoming tests.</p>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto px-4 py-12">
                    {/* Search Section */}
                    <div className="bg-white dark:bg-[#192233] p-8 rounded-2xl shadow-lg -mt-24 relative z-20 border border-gray-200 dark:border-[#324467] mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <select
                                    className="h-12 px-4 rounded-lg bg-gray-50 dark:bg-[#111722] border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                                    value={selectedSubject}
                                    onChange={(e) => setSelectedSubject(e.target.value)}
                                >
                                    <option value="">All Subjects</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Physical Sciences">Physical Sciences</option>
                                    <option value="English">English HL</option>
                                    <option value="Geography">Geography</option>
                                    <option value="Accounting">Accounting</option>
                                </select>
                                <select
                                    className="h-12 px-4 rounded-lg bg-gray-50 dark:bg-[#111722] border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                                    value={selectedGrade}
                                    onChange={(e) => setSelectedGrade(e.target.value)}
                                >
                                    <option value="">All Grades</option>
                                    <option value="Grade 12">Grade 12</option>
                                    <option value="Grade 11">Grade 11</option>
                                    <option value="Grade 10">Grade 10</option>
                                </select>
                                <select
                                    className="h-12 px-4 rounded-lg bg-gray-50 dark:bg-[#111722] border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                >
                                    <option value="">All Years</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                            <button
                                className="h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                                onClick={() => { /* In a real app this might trigger a fetch, but here logic is reactive */ }}
                            >
                                <span className="material-symbols-outlined">search</span>
                                Search Papers
                            </button>
                        </div>
                    </div>

                    {/* Popular Papers Grid */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
                            {selectedSubject || selectedGrade || selectedYear ? 'Search Results' : 'Latest Exam Papers'}
                        </h2>
                        {filteredPapers.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredPapers.map((paper, i) => (
                                    <div key={i} className="bg-white dark:bg-[#192233] p-6 rounded-xl border border-gray-200 dark:border-[#324467] hover:shadow-lg transition-shadow group">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`size-12 rounded-lg bg-${paper.color}-100 dark:bg-${paper.color}-900/30 flex items-center justify-center text-${paper.color}-600 dark:text-${paper.color}-400`}>
                                                <span className="material-symbols-outlined">description</span>
                                            </div>
                                            <span className="px-3 py-1 bg-gray-100 dark:bg-[#111722] rounded-full text-xs font-medium text-gray-500">PDF</span>
                                        </div>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{paper.subject}</h3>
                                        <p className="text-sm text-slate-500 mb-4">{paper.grade} • {paper.term}</p>
                                        <div className="flex gap-2">
                                            <a href="/signup" className="flex-1 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#232f48] text-slate-700 dark:text-gray-300 transition-colors">
                                                Memo
                                            </a>
                                            <a href="/signup" className="flex-1 h-9 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 text-sm font-bold text-primary transition-colors">
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white dark:bg-[#192233] rounded-2xl border border-gray-200 dark:border-[#324467]">
                                <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">search_off</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No papers found</h3>
                                <p className="text-slate-500">Try adjusting your search criteria.</p>
                            </div>
                        )}
                    </div>

                    {/* How to Use Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <span className="material-symbols-outlined text-[120px]">school</span>
                            </div>
                            <h3 className="text-2xl font-black mb-6 relative z-10">Why Use Past Papers?</h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    { icon: 'search', text: 'Understand how questions are asked in the final exams.' },
                                    { icon: 'timer', text: 'Practice time management under exam conditions.' },
                                    { icon: 'check_circle', text: 'Use memos to check your answers and understand marking rubrics.' },
                                    { icon: 'trending_up', text: 'Identify recurring topics and high-value sections.' }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="material-symbols-outlined shrink-0 mt-0.5">{item.icon}</span>
                                        <span className="text-blue-50 leading-relaxed">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-[#192233] rounded-3xl p-8 border border-slate-200 dark:border-[#324467]">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Exam Preparation Tips</h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Start Early", desc: "Don't wait until the week before. Break your study load into manageable chunks." },
                                    { title: "Simulate Exam Conditions", desc: "Clear your desk, set a timer, and put away your notes while writing a past paper." },
                                    { title: "Review Your Mistakes", desc: "Don't just mark it right or wrong. Understand WHY you got it wrong to avoid repeating the mistake." }
                                ].map((tip, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center shrink-0">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{tip.title}</h4>
                                            <p className="text-sm text-slate-500">{tip.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PublicFooter />
        </div>
    );
};

export default PastPapers;
