import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const CareerGuides: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'University', 'TVET College', 'CV Writing', 'Interview Prep'];

    const guides = [
        {
            id: 1,
            title: "Grade 9 Subject Choice Guide",
            category: "High School",
            description: "How to choose the right subjects for your career path. Understanding designated vs. non-designated subjects.",
            icon: "school",
            color: "text-blue-600",
            bg: "bg-blue-100 dark:bg-blue-900/30"
        },
        {
            id: 2,
            title: "University Application Handbook 2024",
            category: "University",
            description: "Step-by-step guide to applying to South African universities. APS scores, NBTs, and deadlines.",
            icon: "menu_book",
            color: "text-purple-600",
            bg: "bg-purple-100 dark:bg-purple-900/30"
        },
        {
            id: 3,
            title: "TVET College Guide",
            category: "TVET College",
            description: "Explore vocational training options. NCV vs. NATED courses and career opportunities.",
            icon: "build",
            color: "text-orange-600",
            bg: "bg-orange-100 dark:bg-orange-900/30"
        },
        {
            id: 4,
            title: "NSFAS & Funding Guide",
            category: "Bursaries",
            description: "How to apply for NSFAS, ISFAP, and other bursaries. Requirements and supporting documents.",
            icon: "attach_money",
            color: "text-green-600",
            bg: "bg-green-100 dark:bg-green-900/30"
        },
        {
            id: 5,
            title: "CV & Resume Writing 101",
            category: "CV Writing",
            description: "Templates and tips for creating a winning CV even with no work experience.",
            icon: "description",
            color: "text-pink-600",
            bg: "bg-pink-100 dark:bg-pink-900/30"
        },
        {
            id: 6,
            title: "Acing Your First Interview",
            category: "Interview Prep",
            description: "Common interview questions and how to answer them confidently.",
            icon: "people",
            color: "text-teal-600",
            bg: "bg-teal-100 dark:bg-teal-900/30"
        },
        {
            id: 7,
            title: "The World of Engineering",
            category: "University",
            description: "Deep dive into different engineering fields: Civil, Electrical, Mechanical, and Chemical.",
            icon: "engineering",
            color: "text-red-600",
            bg: "bg-red-100 dark:bg-red-900/30"
        },
        {
            id: 8,
            title: "Careers in Medicine & Health",
            category: "University",
            description: "What it takes to become a Doctor, Nurse, or Allied Health Professional.",
            icon: "medical_services",
            color: "text-cyan-600",
            bg: "bg-cyan-100 dark:bg-cyan-900/30"
        }
    ];

    const filteredGuides = guides.filter(guide => {
        const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || guide.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-1 w-full">
                {/* Hero Section */}
                <div className="relative w-full bg-[#111722] py-16 md:py-24 overflow-hidden mb-12">
                    <div className="absolute inset-0 z-0 opacity-30">
                        <img
                            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop"
                            alt="Library Resources"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111722] via-[#111722]/90 to-transparent"></div>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
                        <div className="max-w-2xl">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm tracking-wide mb-6 border border-blue-500/30 backdrop-blur-md">
                                Resource Library
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                                Career Guides & <br />
                                <span className="text-blue-500">Free Resources</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                                Download detailed handbooks, checklist, and step-by-step guides to help you navigate your journey from high school to university and beyond.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-12">

                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
                        <div className="relative w-full md:max-w-md">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400">search</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Search guides..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-[#324467] bg-white dark:bg-[#192233] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-colors ${selectedCategory === cat
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                        : 'bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#324467] text-slate-600 dark:text-text-secondary hover:border-primary/50 hover:text-primary'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Guides Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredGuides.map((guide) => (
                            <div key={guide.id} className="group bg-white dark:bg-[#192233] rounded-2xl border border-gray-200 dark:border-[#324467] p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
                                <div className={`size-14 rounded-xl ${guide.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className={`material-symbols-outlined text-3xl ${guide.color}`}>{guide.icon}</span>
                                </div>

                                <div className="mb-4">
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 block">
                                        {guide.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {guide.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-text-secondary text-sm leading-relaxed line-clamp-3">
                                        {guide.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 flex items-center justify-end">
                                    <button onClick={() => navigate('/login')} className="flex items-center gap-2 text-primary font-bold text-sm bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg transition-colors">
                                        <span className="material-symbols-outlined text-lg">download</span>
                                        Download Guide
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredGuides.length === 0 && (
                        <div className="text-center py-20">
                            <div className="size-20 bg-gray-100 dark:bg-[#192233] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-4xl text-gray-400">inventory_2</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No guides found</h3>
                            <p className="text-slate-500 dark:text-text-secondary">
                                Try adjusting your search or filters to find what you're looking for.
                            </p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                                className="mt-6 text-primary font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}


                    {/* Quick Tips Section */}
                    <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-blue-900/20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <span className="material-symbols-outlined text-[200px] text-blue-500">lightbulb</span>
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wide mb-6">
                                Pro Tips
                            </span>
                            <h2 className="text-3xl font-black mb-12 text-slate-900 dark:text-white">Hack Your Future</h2>
                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                {[
                                    { icon: "visibility", title: "Shadow a Pro", desc: "Don't just guess. Spend a day with someone in your dream job to see the real deal.", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
                                    { icon: "volunteer_activism", title: "Volunteer", desc: "Experience > Grades. Gain real skills while giving back to your community.", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
                                    { icon: "cleaning_services", title: "Clean Up Socials", desc: "Employers are watching. Make sure your online presence says 'Hire Me'.", color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" }
                                ].map((tip, i) => (
                                    <div key={i} className="bg-white dark:bg-[#192233] p-6 rounded-2xl border border-slate-100 dark:border-[#324467] shadow-sm hover:shadow-md transition-all">
                                        <div className={`size-12 rounded-full ${tip.bg} ${tip.color} flex items-center justify-center mb-4`}>
                                            <span className="material-symbols-outlined text-2xl">{tip.icon}</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{tip.title}</h3>
                                        <p className="text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed">{tip.desc}</p>
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

export default CareerGuides;
