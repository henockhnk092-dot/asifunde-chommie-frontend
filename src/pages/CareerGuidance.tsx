import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const CareerGuidance: React.FC = () => {


    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />



            <main className="flex-grow flex h-[calc(100vh-64px)] overflow-hidden">
                {/* Secondary Sidebar Navigation (Pathways) - Hidden on mobile, visible on LG */}
                <aside className="w-72 flex-col gap-6 bg-white dark:bg-[#111722] border-r border-gray-200 dark:border-[#232f48] hidden lg:flex overflow-y-auto shrink-0 p-6 z-10 sticky top-0 h-full">
                    {/* Navigation Links */}
                    <div className="flex flex-col gap-2">
                        <p className="px-3 text-xs font-bold text-slate-500 dark:text-text-secondary uppercase tracking-wider mb-2">Detailed Pathways</p>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all group shadow-sm" href="#">
                            <span className="material-symbols-outlined text-[20px]">explore</span>
                            <p className="text-sm font-bold">All Pathways</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#192233] text-slate-600 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-all group" href="#">
                            <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[20px]">science</span>
                            <p className="text-sm font-medium">STEM</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#192233] text-slate-600 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-all group" href="#">
                            <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[20px]">palette</span>
                            <p className="text-sm font-medium">Arts & Design</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#192233] text-slate-600 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-all group" href="#">
                            <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[20px]">build</span>
                            <p className="text-sm font-medium">Trade Skills</p>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#192233] text-slate-600 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white transition-all group" href="#">
                            <span className="material-symbols-outlined group-hover:text-primary transition-colors text-[20px]">medical_services</span>
                            <p className="text-sm font-medium">Health Sciences</p>
                        </a>
                    </div>
                    {/* Resources Widget */}
                    <div className="mt-4">
                        <p className="px-3 text-xs font-bold text-slate-500 dark:text-text-secondary uppercase tracking-wider mb-3">Quick Resources</p>
                        <div className="bg-gray-50 dark:bg-[#192233] rounded-xl p-4 border border-gray-200 dark:border-[#232f48] flex flex-col gap-3">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-0.5 text-[20px]">description</span>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900 dark:text-white hover:text-primary cursor-pointer">Grade 9 Subject Choice Guide</h4>
                                    <p className="text-xs text-slate-500 dark:text-text-secondary mt-1">PDF • View Only</p>
                                </div>
                            </div>
                            <div className="h-px bg-gray-200 dark:bg-[#232f48] w-full"></div>
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-0.5 text-[20px]">school</span>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900 dark:text-white hover:text-primary cursor-pointer">NSFAS Application Steps</h4>
                                    <p className="text-xs text-slate-500 dark:text-text-secondary mt-1">External Link</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark relative scrollbar-hide">
                    <div className="max-w-[1200px] mx-auto pb-20">
                        {/* Hero Section */}
                        <div className="relative w-full h-[320px] md:h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4" style={{ backgroundImage: 'linear-gradient(rgba(17, 23, 34, 0.7) 0%, rgba(17, 23, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaVji7u7-ndtGy_CGBr8WFsTuvCXsu_xwfyVNfrJV7TevFNQimIo-0bHPGnKMF4VFGYbOIBlWN_4Fm2XHxOOcaFEW6aQsOvIjuwbnb5OLrCH_Xq_c_zPfKZBBcPP7CngJ3PcQbkJEHSyI46b13KwMQqdEGv8-aZJW-stIiOh2CMksuU2TZiw_FdAbMU8T8OruvT9sgQA62e0Uk5o4XQeCLPSUvS9FkxxJE68Yrxa0OTnT-PEZUMGh4ew7wYwXOr3FlcC_YFJmlR8T8")' }}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm tracking-wide backdrop-blur-md border border-white/20 mb-6">
                                Career Guidance
                            </span>
                            <h1 className="text-white text-3xl md:text-6xl font-black leading-tight tracking-tight mb-4 max-w-4xl">
                                Find Your Future. Own It.
                            </h1>
                            <h2 className="text-gray-200 dark:text-text-secondary text-base md:text-xl font-normal mb-8 max-w-2xl text-balance">
                                Explore career paths, check APS requirements, and plan your journey from Grade 8 to Matric.
                            </h2>
                            <div className="mb-10">
                                <Link to="/career-quiz" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">psychology</span>
                                    Take the Career Quiz
                                </Link>
                            </div>
                            {/* Search Bar */}
                            <div className="w-full max-w-2xl relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 dark:text-text-secondary">search</span>
                                </div>
                                <input className="block w-full pl-12 pr-32 py-4 rounded-2xl border-none bg-white/95 dark:bg-[#192233]/90 backdrop-blur-xl text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-text-secondary focus:ring-4 focus:ring-primary/30 text-base shadow-2xl transition-all h-16" placeholder="Search careers (e.g., Data Science, Electrician, Nursing)..." type="text" />
                                <div className="absolute inset-y-2 right-2">
                                    <Link to="/search" className="flex items-center justify-center h-full px-8 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl text-sm transition-colors shadow-lg">
                                        Search
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Filters / Chips */}
                        <div className="px-6 md:px-10 -mt-7 relative z-10">
                            <div className="flex justify-center gap-3 overflow-x-auto pb-4 hide-scrollbar">
                                {['Industry', 'School Subjects', 'Qualification Level', 'Salary Range'].map((filter) => (
                                    <button key={filter} className="flex shrink-0 items-center gap-2 rounded-full bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#232f48] px-5 py-2.5 hover:border-primary/50 transition-colors shadow-lg text-slate-700 dark:text-white text-sm font-bold">
                                        <span>{filter}</span>
                                        <span className="material-symbols-outlined text-gray-500 dark:text-text-secondary text-base">keyboard_arrow_down</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Trending Section */}
                        <div className="px-6 md:px-10 mt-12">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Trending Careers</h2>
                                <a className="text-primary font-bold hover:underline flex items-center gap-1" href="#">
                                    View All <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Card 1 */}
                                <div className="group bg-white dark:bg-[#192233] rounded-2xl border border-gray-200 dark:border-[#232f48] overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full shadow-sm dark:shadow-none translate-y-0 hover:-translate-y-1 duration-300">
                                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrwPpC9fiu79Vxnv8qbvuJv6mx7b7IwLNndPbDNXQ03YGsmKQxWRG09VJdeNo3lj8uvE3_eZxZzsUlQbTn-cU5rA863l2R5P2yENbYYwkTYRbVAWRSe13vhWDOjf8kABgEZ5KNpJ4v8FSop3XwETc8UrRNCxvY-SeKXQnrFB_QmiY3JWOnxOD6wfNj8DX91J8H8EEmqoYKO9UTmIZYdF1oHgw9-M_RmUcwdehA15NAhofQQUW7bhgmI1cG4dKHDUdv-FWIzEEAxE1M")' }}>
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/10 shadow-lg">
                                            <span className="material-symbols-outlined text-green-400 text-sm">verified</span>
                                            <span className="text-xs font-bold text-white">95% Match</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-1 rounded">High Demand</span>
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-text-secondary bg-gray-100 dark:bg-[#232f48] px-2 py-1 rounded">IT & Tech</span>
                                        </div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">Software Developer</h3>
                                        <p className="text-slate-500 dark:text-text-secondary text-sm line-clamp-2 mb-6 leading-relaxed">Design, build, and maintain software applications. High demand locally and internationally.</p>
                                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#232f48]">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-500 dark:text-text-secondary font-medium">Entry Level</span>
                                                <span className="text-slate-900 dark:text-white font-bold">R20k - R35k pm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="group bg-white dark:bg-[#192233] rounded-2xl border border-gray-200 dark:border-[#232f48] overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full shadow-sm dark:shadow-none translate-y-0 hover:-translate-y-1 duration-300">
                                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCymGCOrbfzXAZjb2IkUEZlu2VJ_b54JXumqErqaskuiwS3qaT2ia08BU709h1MZhxlNiTyBPyLqsRx9RcSN7tX5AKctGBnX35HxqnX2iUBiFTa8m6AIuQs4P-RIDPSQxp8a4Po3-7E_oY8JreVOYCRTeX_ijSuH4LQwKXIGcDZxtVBAD4qBNtBM5lV713nda9ck_OLcry1RA88snlp_8Wciq0VhgERazG66wmqU13fENJqLcbIZ8I0IQ_VPSBpOO9i7MtCoIUxidVU")' }}>
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/10 shadow-lg">
                                            <span className="material-symbols-outlined text-yellow-400 text-sm">bolt</span>
                                            <span className="text-xs font-bold text-white">88% Match</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-green-500 dark:text-green-400 bg-green-100 dark:bg-green-400/10 px-2 py-1 rounded">Green Economy</span>
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-text-secondary bg-gray-100 dark:bg-[#232f48] px-2 py-1 rounded">Artisan</span>
                                        </div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">Solar PV Technician</h3>
                                        <p className="text-slate-500 dark:text-text-secondary text-sm line-clamp-2 mb-6 leading-relaxed">Install and maintain solar power systems. A rapidly growing field in South Africa due to energy needs.</p>
                                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#232f48]">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-slate-500 dark:text-text-secondary font-medium">Entry Level</span>
                                                <span className="text-slate-900 dark:text-white font-bold">R12k - R18k pm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="group bg-white dark:bg-[#192233] rounded-2xl border border-gray-200 dark:border-[#232f48] overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full shadow-sm dark:shadow-none translate-y-0 hover:-translate-y-1 duration-300">
                                    <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpXlYNyzAZUpdyTrutROcvQPt0-FLiGIHOuerX_ASWSvE0AuNMUA9mmoBoV7KKeWaQnJIVNebtboI5SVf6B-O0CkBJIib9g10aby835oaK1SByAIIoazrmJT6uvfevL-yqP54_1hrdd9PUafkVziHrg_IDy7x3x3HyHWsOSLwB3A_5CbsdVZydmF22G1l9Hqyi4wn72WSBNaZI1__kSGOmvsZUqFcDS_Fhc3ZqtOvrozj-8g6pWuPw6mH3wryh9CtBJMQwihmZ9OLw")' }}>
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/10 shadow-lg">
                                            <span className="material-symbols-outlined text-blue-400 text-sm">show_chart</span>
                                            <span className="text-xs font-bold text-white">75% Match</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-2 py-1 rounded">Stable</span>
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-text-secondary bg-gray-100 dark:bg-[#232f48] px-2 py-1 rounded">Health</span>
                                        </div>
                                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">Professional Nurse</h3>
                                        <p className="text-slate-500 dark:text-text-secondary text-sm line-clamp-2 mb-6 leading-relaxed">Provide patient care and support in hospitals and clinics. Requires dedication and empathy.</p>
                                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#232f48]">
                                            <div className="flex items-center justify-between text-sm mb-2">
                                                <span className="text-slate-500 dark:text-text-secondary font-medium">Entry Level</span>
                                                <span className="text-slate-900 dark:text-white font-bold">R18k - R25k pm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Explore by Subject Section */}
                        <div className="px-6 md:px-10 mt-12">
                            <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-8">Explore by Favorite Subject</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { name: "Mathematics", icon: "calculate", color: "text-blue-600 dark:text-blue-500", bg: "bg-blue-100 dark:bg-blue-500/10", hover: "group-hover:bg-blue-600" },
                                    { name: "Life Sciences", icon: "biotech", color: "text-green-600 dark:text-green-500", bg: "bg-green-100 dark:bg-green-500/10", hover: "group-hover:bg-green-600" },
                                    { name: "Visual Arts", icon: "brush", color: "text-purple-600 dark:text-purple-500", bg: "bg-purple-100 dark:bg-purple-500/10", hover: "group-hover:bg-purple-600" },
                                    { name: "Business Studies", icon: "business_center", color: "text-orange-600 dark:text-orange-500", bg: "bg-orange-100 dark:bg-orange-500/10", hover: "group-hover:bg-orange-600" }
                                ].map((subject, idx) => (
                                    <a key={idx} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#232f48] hover:border-primary hover:bg-gray-50 dark:hover:bg-[#192233]/80 transition-all group gap-4 shadow-sm hover:shadow-lg dark:shadow-none" href="#">
                                        <div className={`size-16 rounded-2xl ${subject.bg} flex items-center justify-center ${subject.color} group-hover:text-white transition-colors ${subject.hover}`}>
                                            <span className="material-symbols-outlined text-3xl">{subject.icon}</span>
                                        </div>
                                        <span className="text-slate-900 dark:text-white font-bold text-base">{subject.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                    <PublicFooter />
                </div>
            </main>
        </div>
    );

};

export default CareerGuidance;
