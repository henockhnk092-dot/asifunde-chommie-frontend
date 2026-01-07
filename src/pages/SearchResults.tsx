import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const SearchResults: React.FC = () => {
    return (
        <DashboardLayout userType="learner" showSearch={true}>
            <div className="layout-container flex h-full grow flex-col overflow-hidden">
                <div className="flex flex-1 overflow-hidden">
                    <div className="layout-content-container flex flex-col w-full h-full">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap gap-2 px-6 pt-6 pb-2">
                            <Link className="text-slate-500 dark:text-text-secondary text-sm font-medium leading-normal hover:text-slate-900 dark:hover:text-white" to="/">Home</Link>
                            <span className="text-slate-500 dark:text-text-secondary text-sm font-medium leading-normal">/</span>
                            <a className="text-slate-500 dark:text-text-secondary text-sm font-medium leading-normal hover:text-slate-900 dark:hover:text-white" href="#">Resources</a>
                            <span className="text-slate-500 dark:text-text-secondary text-sm font-medium leading-normal">/</span>
                            <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal">Search Results</span>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 px-6 py-4 h-full overflow-hidden">
                            {/* Filter Sidebar */}
                            <aside className="w-full lg:w-72 flex-shrink-0 h-full overflow-y-auto hidden lg:block pr-2">
                                <div className="bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#232f48] rounded-xl p-5 shadow-sm">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-[#232f48]">
                                        <h3 className="text-slate-900 dark:text-white text-lg font-bold flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">filter_list</span> Filters
                                        </h3>
                                        <button className="text-xs text-slate-500 dark:text-text-secondary hover:text-primary transition-colors uppercase font-bold tracking-wide">Clear All</button>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Content Type Filter */}
                                        <details className="group" open>
                                            <summary className="flex cursor-pointer items-center justify-between text-slate-700 dark:text-white font-medium mb-3 hover:text-primary transition-colors">
                                                <span className="uppercase text-xs tracking-wider text-slate-500 dark:text-text-secondary font-bold">Content Type</span>
                                                <span className="material-symbols-outlined transition group-open:rotate-180 text-slate-500 dark:text-text-secondary text-sm">expand_more</span>
                                            </summary>
                                            <div className="space-y-3 pl-1">
                                                {['Videos', 'PDFs', 'Quizzes', 'Career Info'].map((type) => (
                                                    <label key={type} className="flex items-center gap-3 cursor-pointer group/item">
                                                        <div className="relative flex items-center">
                                                            <input defaultChecked className="peer size-5 appearance-none rounded border border-gray-300 dark:border-[#232f48] bg-white dark:bg-background-dark checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-colors" type="checkbox" />
                                                            <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 text-[16px] pointer-events-none">check</span>
                                                        </div>
                                                        <span className="text-slate-700 dark:text-white text-sm group-hover/item:text-primary transition-colors">{type}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </details>

                                        {/* Grade Level Filter */}
                                        <details className="group" open>
                                            <summary className="flex cursor-pointer items-center justify-between text-slate-700 dark:text-white font-medium mb-3 pt-4 border-t border-gray-100 dark:border-[#232f48] hover:text-primary transition-colors">
                                                <span className="uppercase text-xs tracking-wider text-slate-500 dark:text-text-secondary font-bold">Grade Level</span>
                                                <span className="material-symbols-outlined transition group-open:rotate-180 text-slate-500 dark:text-text-secondary text-sm">expand_more</span>
                                            </summary>
                                            <div className="space-y-3 pl-1">
                                                {['Grade 12', 'Grade 11', 'Grade 10', 'Grade 9', 'Grade 8'].map((grade) => (
                                                    <label key={grade} className="flex items-center gap-3 cursor-pointer group/item">
                                                        <div className="relative flex items-center">
                                                            <input className="peer size-5 appearance-none rounded border border-gray-300 dark:border-[#232f48] bg-white dark:bg-background-dark checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-colors" type="checkbox" />
                                                            <span className="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 text-[16px] pointer-events-none">check</span>
                                                        </div>
                                                        <span className="text-slate-700 dark:text-white text-sm group-hover/item:text-primary transition-colors">{grade}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </aside>

                            {/* Results Area */}
                            <main className="flex-1 min-w-0 h-full overflow-y-auto pb-20 pr-2">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                    <div>
                                        <h1 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight">Results for "Algebra"</h1>
                                        <p className="text-slate-500 dark:text-text-secondary text-sm mt-1">Showing 24 results</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-slate-500 dark:text-text-secondary text-sm font-medium whitespace-nowrap">Sort by:</span>
                                        <div className="relative min-w-[160px]">
                                            <select className="appearance-none w-full bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#232f48] text-slate-700 dark:text-white text-sm rounded-lg pl-4 pr-10 py-2.5 focus:outline-none focus:border-primary cursor-pointer">
                                                <option value="relevance">Relevance</option>
                                                <option value="newest">Newest First</option>
                                                <option value="popular">Most Popular</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 dark:text-text-secondary">
                                                <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* Result 1 - Video */}
                                    <article className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#232f48] hover:border-primary/50 transition-all group shadow-sm dark:shadow-none">
                                        <div className="relative sm:w-48 sm:h-32 w-full h-48 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200 dark:bg-[#2a3b55]">
                                            <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAajRr3772CV5UbgAIsBySDcJm2SGB30nFZjX5E8decTSTzpFxqQOWynziCN8MJVW-I0jTOFT27gayHkBSihZljxtMf38gnsdCwuwFxobJNB4gqK5z_m6e9qViZ_uVp1APuo5-5nTXDrPM40xWXX48CI63YgMVFK7XcMFaJFXqa8AC8pzOJEmPM01zGdCW3idbPATN2ja_XKiPolRtVu2dAAq_rjcGQmfqqcBUjaEVMqec3Hhr8uccmQt-uAe7o8pE4s41FyiHQQa4u")' }}></div>
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                <div className="size-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30">
                                                    <span className="material-symbols-outlined">play_arrow</span>
                                                </div>
                                            </div>
                                            <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">12:05</span>
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="flex gap-2 mb-2">
                                                    <span className="inline-flex items-center gap-1 rounded bg-blue-100 dark:bg-blue-900/40 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                                                        <span className="material-symbols-outlined text-[14px]">videocam</span> Video
                                                    </span>
                                                    <span className="inline-flex items-center rounded bg-gray-100 dark:bg-[#232f48] px-2 py-0.5 text-xs font-medium text-slate-500 dark:text-text-secondary">Grade 10</span>
                                                </div>
                                                <button className="text-slate-400 dark:text-text-secondary hover:text-primary">
                                                    <span className="material-symbols-outlined">bookmark_border</span>
                                                </button>
                                            </div>
                                            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors cursor-pointer">Introduction to Quadratic Equations</h3>
                                            <p className="text-slate-500 dark:text-text-secondary text-sm line-clamp-2 mb-4">Learn the basics of quadratic equations, how to identify them, and the standard form used in South African high school mathematics curriculum.</p>
                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-text-secondary">
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">visibility</span> 1.2k views</span>
                                                </div>
                                                <Link to="/video-player" className="bg-primary hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Watch Now</Link>
                                            </div>
                                        </div>
                                    </article>

                                    {/* Result 2 - PDF */}
                                    <article className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#232f48] hover:border-primary/50 transition-all group shadow-sm dark:shadow-none">
                                        <div className="relative sm:w-48 sm:h-32 w-full h-48 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200 dark:bg-[#2a3b55]">
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-slate-700 dark:from-indigo-900 dark:to-slate-900">
                                                <span className="material-symbols-outlined text-white/50 dark:text-white/20 text-6xl">menu_book</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="flex gap-2 mb-2">
                                                    <span className="inline-flex items-center gap-1 rounded bg-emerald-100 dark:bg-emerald-900/40 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800">
                                                        <span className="material-symbols-outlined text-[14px]">description</span> PDF Guide
                                                    </span>
                                                    <span className="inline-flex items-center rounded bg-gray-100 dark:bg-[#232f48] px-2 py-0.5 text-xs font-medium text-slate-500 dark:text-text-secondary">Grade 10-12</span>
                                                </div>
                                                <button className="text-slate-400 dark:text-text-secondary hover:text-primary">
                                                    <span className="material-symbols-outlined">bookmark_border</span>
                                                </button>
                                            </div>
                                            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors cursor-pointer">Algebra Master Guide: 2024 Edition</h3>
                                            <p className="text-slate-500 dark:text-text-secondary text-sm line-clamp-2 mb-4">Comprehensive PDF guide covering factorization, inequalities, and exponents. Includes past paper questions from NSC exams.</p>
                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-text-secondary">
                                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">download</span> 540 downloads</span>
                                                </div>
                                                <button className="bg-gray-100 dark:bg-[#192233] border border-primary text-primary hover:bg-primary hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">View PDF</button>
                                            </div>
                                        </div>
                                    </article>

                                </div>

                                {/* Pagination (Simplified) */}
                                <div className="flex items-center justify-center mt-10 mb-10 gap-2">
                                    <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium border border-primary">1</button>
                                    <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#232f48] bg-white dark:bg-[#192233] text-slate-500 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-[#232f48] hover:text-slate-900 dark:hover:text-white transition-colors">2</button>
                                    <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#232f48] bg-white dark:bg-[#192233] text-slate-500 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-[#232f48] hover:text-slate-900 dark:hover:text-white transition-colors">3</button>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default SearchResults;
