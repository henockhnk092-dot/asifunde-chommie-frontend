import React from 'react';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const StudyGuides: React.FC = () => {
    const [selectedSubjects, setSelectedSubjects] = React.useState<string[]>([]);
    const [selectedPublishers, setSelectedPublishers] = React.useState<string[]>([]);

    const guides = [
        { title: "Mathematics: Functions & Finance", publisher: "Mind the Gap", grade: "Grade 12", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop" },
        { title: "Physics: Mechanics", publisher: "The Answer Series", grade: "Grade 12", image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=600&auto=format&fit=crop" },
        { title: "Chemistry: Organic Molecules", publisher: "Via Afrika", grade: "Grade 12", image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=600&auto=format&fit=crop" },
        { title: "Geography: Mapwork Mastery", publisher: "Oxford", grade: "Grade 11", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" },
        { title: "Life Sciences: Genetics", publisher: "Mind the Gap", grade: "Grade 12", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop" },
        { title: "Accounting: Financial Statements", publisher: "Study & Master", grade: "Grade 12", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" },
    ];

    const toggleFilter = (item: string, current: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        if (current.includes(item)) {
            setter(current.filter(i => i !== item));
        } else {
            setter([...current, item]);
        }
    };

    const filteredGuides = guides.filter(guide => {
        const subjectMatch = selectedSubjects.length === 0 || selectedSubjects.some(s => guide.title.includes(s));
        const publisherMatch = selectedPublishers.length === 0 || selectedPublishers.includes(guide.publisher);
        return subjectMatch && publisherMatch;
    });

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />
            <main className="flex-grow">
                <div className="relative w-full bg-[#111722] py-20 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop"
                            alt="Study Guides"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111722] via-[#111722]/80 to-transparent"></div>
                    </div>
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 text-white">
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Study Guides</h1>
                        <p className="text-lg text-gray-300 max-w-2xl">Comprehensive summaries and study notes to help you master every subject.</p>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Filters */}
                        <div className="hidden lg:block space-y-8">
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Subjects</h3>
                                <div className="space-y-2">
                                    {['Mathematics', 'Physics', 'Life Sciences', 'Geography', 'Accounting', 'Chemistry'].map(subject => (
                                        <label key={subject} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-primary cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                                checked={selectedSubjects.includes(subject)}
                                                onChange={() => toggleFilter(subject, selectedSubjects, setSelectedSubjects)}
                                            />
                                            {subject}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Publishers</h3>
                                <div className="space-y-2">
                                    {['Mind the Gap', 'The Answer Series', 'Via Afrika', 'Oxford', 'Study & Master'].map(pub => (
                                        <label key={pub} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-primary cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-primary focus:ring-primary"
                                                checked={selectedPublishers.includes(pub)}
                                                onChange={() => toggleFilter(pub, selectedPublishers, setSelectedPublishers)}
                                            />
                                            {pub}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Guides Grid */}
                        <div className="lg:col-span-3">
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Featured Study Guides</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredGuides.map((guide, i) => (
                                    <div key={i} className="bg-white dark:bg-[#192233] rounded-xl overflow-hidden border border-gray-200 dark:border-[#324467] hover:shadow-xl transition-all group">
                                        <div className="h-40 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                            <img src={guide.image} alt={guide.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                                <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs font-bold text-white mb-2">{guide.publisher}</span>
                                                <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">{guide.title}</h3>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex justify-between items-center mb-4 text-sm text-slate-500">
                                                <span>{guide.grade}</span>
                                                <div className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-yellow-400 text-sm filled">star</span>
                                                    <span>4.8</span>
                                                </div>
                                            </div>
                                            <a href="/signup" className="block w-full py-2.5 rounded-lg bg-gray-100 dark:bg-[#111722] hover:bg-primary hover:text-white text-slate-900 dark:text-white text-center font-bold text-sm transition-all">
                                                Download Guide
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Popular Topics Section */}
                <section className="py-16 bg-white dark:bg-[#192233] border-t border-slate-100 dark:border-[#232f48]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white text-center">Popular Topics</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Algebra', 'Organic Chemistry', 'Mapwork', 'Human Anatomy', 'Financial Math', 'Poetry Analysis', 'Mechanics', 'Essay Writing'].map((topic, i) => (
                                <button key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-[#111722] hover:bg-primary/10 hover:text-primary transition-colors text-center font-medium text-slate-700 dark:text-gray-300">
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Value Prop Section */}
                <section className="py-20 bg-background-light dark:bg-[#111722]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Why Use Our Guides?</h2>
                            <p className="text-lg text-[#637588] dark:text-[#92a4c9]">
                                Don't just study hard, study smart. Our guides are designed to help you understand concepts faster and retain them longer.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: 'verified', title: 'Curriculum Aligned', desc: 'Strictly follows the CAPS curriculum to ensure you are studying exactly what will be tested.' },
                                { icon: 'bolt', title: 'Simplified Concepts', desc: 'Complex theories broken down into bite-sized, easy-to-understand explanations.' },
                                { icon: 'auto_stories', title: 'Exam Focus', desc: 'Highlights common exam questions and provides tips on how to answer them for maximum marks.' }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-6">
                                    <div className="size-16 rounded-2xl bg-white dark:bg-[#192233] border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                                    <p className="text-[#637588] dark:text-[#92a4c9]">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


            </main>
            <PublicFooter />
        </div>
    );
};

export default StudyGuides;
