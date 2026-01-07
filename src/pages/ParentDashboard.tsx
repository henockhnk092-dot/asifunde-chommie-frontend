import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const ParentDashboard: React.FC = () => {
    return (
        <DashboardLayout userType="parent" headerTitle="ASIFUNDE CHOMMIE" showSearch={false}>
            <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth h-full">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
                    {/* Page Header & Child Selector */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Dashboard Overview</h1>
                            <p className="text-[#9cabba] text-base font-normal">Welcome back, monitoring for <span className="text-primary font-medium">Thabo</span></p>
                        </div>
                        <div className="w-full md:w-auto min-w-[280px]">
                            <label className="block text-[#9cabba] text-xs font-bold uppercase tracking-wider mb-2">Select Student Profile</label>
                            <div className="relative">
                                <select className="appearance-none w-full bg-surface-dark border border-[#3b4754] text-white py-3 pl-4 pr-10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer font-medium">
                                    <option>Thabo Dlamini (Grade 11)</option>
                                    <option>Lindiwe Dlamini (Grade 9)</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#9cabba]">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Subscription Action Panel */}
                    <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-surface-dark to-surface-highlight p-6 relative overflow-hidden group">
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 -skew-x-12 translate-x-12"></div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                            <div className="flex flex-col gap-2 max-w-2xl">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#3b4754] text-[#9cabba] uppercase tracking-wide">Current Plan: Free</span>
                                </div>
                                <h3 className="text-white text-xl font-bold">Unlock Full Potential for Thabo</h3>
                                <p className="text-[#9cabba] text-sm md:text-base">
                                    Thabo is currently on the Free tier. Upgrade to Premium for full access to past Matric exam papers, live tutoring sessions, and detailed step-by-step solutions.
                                </p>
                            </div>
                            <button className="whitespace-nowrap flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 transition-colors h-11 px-6 text-white text-sm font-bold tracking-wide shadow-lg shadow-primary/20">
                                <span>Upgrade via PayFast</span>
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Metric 1 */}
                        <div className="bg-surface-dark rounded-xl p-5 border border-[#283039] flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-[#9cabba]">
                                <div className="p-2 rounded-lg bg-[#283039] text-white">
                                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                                </div>
                                <span className="text-sm font-medium">Watch Time</span>
                            </div>
                            <p className="text-white text-3xl font-bold">12h 30m</p>
                            <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                <span>+2.5h this week</span>
                            </div>
                        </div>
                        {/* Metric 2 */}
                        <div className="bg-surface-dark rounded-xl p-5 border border-[#283039] flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-[#9cabba]">
                                <div className="p-2 rounded-lg bg-[#283039] text-white">
                                    <span className="material-symbols-outlined text-[20px]">quiz</span>
                                </div>
                                <span className="text-sm font-medium">Quizzes Done</span>
                            </div>
                            <p className="text-white text-3xl font-bold">15</p>
                            <div className="text-[#9cabba] text-xs font-medium">
                                <span>Last quiz: Algebra II</span>
                            </div>
                        </div>
                        {/* Metric 3 */}
                        <div className="bg-surface-dark rounded-xl p-5 border border-[#283039] flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-[#9cabba]">
                                <div className="p-2 rounded-lg bg-[#283039] text-white">
                                    <span className="material-symbols-outlined text-[20px]">grade</span>
                                </div>
                                <span className="text-sm font-medium">Avg Score</span>
                            </div>
                            <p className="text-white text-3xl font-bold">78%</p>
                            <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                                <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                                <span>Top 20% of class</span>
                            </div>
                        </div>
                        {/* Metric 4 */}
                        <div className="bg-surface-dark rounded-xl p-5 border border-[#283039] flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-[#9cabba]">
                                <div className="p-2 rounded-lg bg-[#283039] text-white">
                                    <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                                </div>
                                <span className="text-sm font-medium">Streak</span>
                            </div>
                            <p className="text-white text-3xl font-bold">5 Days</p>
                            <div className="text-[#9cabba] text-xs font-medium">
                                <span>Keep it up!</span>
                            </div>
                        </div>
                    </div>
                    {/* Main Dashboard Grid (Charts & Lists) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column (2/3 width) */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Weekly Activity Chart */}
                            <div className="bg-surface-dark rounded-xl border border-[#283039] p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-white text-lg font-bold">Weekly Study Hours</h3>
                                    <button className="text-[#9cabba] hover:text-white text-sm flex items-center gap-1">
                                        Last 7 Days <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                    </button>
                                </div>
                                {/* Custom Bar Chart Visualization */}
                                <div className="flex items-end justify-between gap-2 h-48 w-full mt-2 pb-2">
                                    {/* Mon */}
                                    <div className="flex flex-col items-center gap-2 group w-full">
                                        <div className="w-full max-w-[40px] bg-[#283039] group-hover:bg-primary/50 rounded-t-sm h-full relative overflow-hidden transition-all duration-300">
                                            <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[30%]"></div>
                                        </div>
                                        <span className="text-xs text-[#9cabba] font-medium">M</span>
                                    </div>
                                    {/* Tue */}
                                    <div className="flex flex-col items-center gap-2 group w-full">
                                        <div className="w-full max-w-[40px] bg-[#283039] group-hover:bg-primary/50 rounded-t-sm h-full relative overflow-hidden transition-all duration-300">
                                            <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[45%]"></div>
                                        </div>
                                        <span className="text-xs text-[#9cabba] font-medium">T</span>
                                    </div>
                                    {/* Wed */}
                                    <div className="flex flex-col items-center gap-2 group w-full">
                                        <div className="w-full max-w-[40px] bg-[#283039] group-hover:bg-primary/50 rounded-t-sm h-full relative overflow-hidden transition-all duration-300">
                                            <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[60%]"></div>
                                        </div>
                                        <span className="text-xs text-[#9cabba] font-medium">W</span>
                                    </div>
                                    {/* Thu */}
                                    <div className="flex flex-col items-center gap-2 group w-full">
                                        <div className="w-full max-w-[40px] bg-[#283039] group-hover:bg-primary/50 rounded-t-sm h-full relative overflow-hidden transition-all duration-300">
                                            <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[20%]"></div>
                                        </div>
                                        <span className="text-xs text-[#9cabba] font-medium">T</span>
                                    </div>
                                    {/* Fri */}
                                    <div className="flex flex-col items-center gap-2 group w-full">
                                        <div className="w-full max-w-[40px] bg-[#283039] group-hover:bg-primary/50 rounded-t-sm h-full relative overflow-hidden transition-all duration-300">
                                            <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[80%]"></div>
                                        </div>
                                        <span className="text-xs text-[#9cabba] font-medium">F</span>
                                    </div>
                                    {/* Sat */}
                                    <div className="flex flex-col items-center gap-2 group w-full">
                                        <div className="w-full max-w-[40px] bg-[#283039] group-hover:bg-primary/50 rounded-t-sm h-full relative overflow-hidden transition-all duration-300">
                                            <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[50%]"></div>
                                        </div>
                                        <span className="text-xs text-[#9cabba] font-medium">S</span>
                                    </div>
                                    {/* Sun */}
                                    <div className="flex flex-col items-center gap-2 group w-full">
                                        <div className="w-full max-w-[40px] bg-[#283039] group-hover:bg-primary/50 rounded-t-sm h-full relative overflow-hidden transition-all duration-300">
                                            <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-[10%]"></div>
                                        </div>
                                        <span className="text-xs text-[#9cabba] font-medium">S</span>
                                    </div>
                                </div>
                            </div>
                            {/* Subject Performance */}
                            <div className="bg-surface-dark rounded-xl border border-[#283039] p-6">
                                <h3 className="text-white text-lg font-bold mb-6">Subject Proficiency</h3>
                                <div className="flex flex-col gap-6">
                                    {/* Math */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-blue-500/20 p-1.5 rounded text-blue-400">
                                                    <span className="material-symbols-outlined text-[20px]">calculate</span>
                                                </div>
                                                <span className="text-white font-medium">Mathematics</span>
                                            </div>
                                            <span className="text-white font-bold">75%</span>
                                        </div>
                                        <div className="w-full bg-[#283039] rounded-full h-2.5">
                                            <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                        <p className="text-[#9cabba] text-xs">Strong in Algebra, needs review in Geometry.</p>
                                    </div>
                                    {/* Physics */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-purple-500/20 p-1.5 rounded text-purple-400">
                                                    <span className="material-symbols-outlined text-[20px]">science</span>
                                                </div>
                                                <span className="text-white font-medium">Physical Sciences</span>
                                            </div>
                                            <span className="text-white font-bold">60%</span>
                                        </div>
                                        <div className="w-full bg-[#283039] rounded-full h-2.5">
                                            <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                        <p className="text-[#9cabba] text-xs">Improving in Mechanics, struggling with Chemistry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column (1/3 width) */}
                        <div className="lg:col-span-1 flex flex-col gap-6">
                            {/* Recent Activity List */}
                            <div className="bg-surface-dark rounded-xl border border-[#283039] p-6 flex-1">
                                <h3 className="text-white text-lg font-bold mb-5">Recent Activity</h3>
                                <div className="flex flex-col gap-0 relative">
                                    {/* Vertical Line for timeline effect */}
                                    <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-[#283039] -z-0"></div>
                                    {/* Item 1 */}
                                    <div className="flex gap-4 pb-6 relative z-10 group">
                                        <div className="size-10 rounded-full bg-[#283039] border border-[#3b4754] flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                                            <span className="material-symbols-outlined text-white text-[20px]">play_circle</span>
                                        </div>
                                        <div className="flex flex-col gap-1 pt-1">
                                            <p className="text-white text-sm font-medium leading-tight">Watched "Newton's Laws"</p>
                                            <p className="text-[#9cabba] text-xs">Physical Sciences • 2 hours ago</p>
                                        </div>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex gap-4 pb-6 relative z-10 group">
                                        <div className="size-10 rounded-full bg-[#283039] border border-[#3b4754] flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500 transition-colors">
                                            <span className="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
                                        </div>
                                        <div className="flex flex-col gap-1 pt-1">
                                            <p className="text-white text-sm font-medium leading-tight">Completed Quiz: Algebra</p>
                                            <p className="text-[#9cabba] text-xs">Score: 80% • Yesterday</p>
                                        </div>
                                    </div>
                                    {/* Item 3 */}
                                    <div className="flex gap-4 pb-6 relative z-10 group">
                                        <div className="size-10 rounded-full bg-[#283039] border border-[#3b4754] flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                                            <span className="material-symbols-outlined text-white text-[20px]">play_circle</span>
                                        </div>
                                        <div className="flex flex-col gap-1 pt-1">
                                            <p className="text-white text-sm font-medium leading-tight">Watched "Trigonometry Basics"</p>
                                            <p className="text-[#9cabba] text-xs">Mathematics • 2 days ago</p>
                                        </div>
                                    </div>
                                    {/* Item 4 */}
                                    <div className="flex gap-4 relative z-10 group">
                                        <div className="size-10 rounded-full bg-[#283039] border border-[#3b4754] flex items-center justify-center flex-shrink-0 group-hover:border-yellow-500 transition-colors">
                                            <span className="material-symbols-outlined text-yellow-400 text-[20px]">emoji_events</span>
                                        </div>
                                        <div className="flex flex-col gap-1 pt-1">
                                            <p className="text-white text-sm font-medium leading-tight">Earned Badge "Week Warrior"</p>
                                            <p className="text-[#9cabba] text-xs">Achievement • 3 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Activity Heatmap Mini */}
                            <div className="bg-surface-dark rounded-xl border border-[#283039] p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-white text-sm font-bold">Consistency (Last 30 Days)</h3>
                                </div>
                                <div className="grid grid-cols-7 gap-1.5">
                                    {/* Generating a grid of squares to simulate GitHub contributions style map */}
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    <div className="aspect-square rounded-sm bg-primary/40"></div>
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    <div className="aspect-square rounded-sm bg-primary/80"></div>
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    <div className="aspect-square rounded-sm bg-primary/20"></div>
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    {/* Row 2 */}
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    <div className="aspect-square rounded-sm bg-primary/60"></div>
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    <div className="aspect-square rounded-sm bg-primary/40"></div>
                                    {/* Row 3 */}
                                    <div className="aspect-square rounded-sm bg-primary/20"></div>
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    <div className="aspect-square rounded-sm bg-primary/80"></div>
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    {/* Row 4 */}
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    <div className="aspect-square rounded-sm bg-primary/60"></div>
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    <div className="aspect-square rounded-sm bg-[#283039]"></div>
                                    <div className="aspect-square rounded-sm bg-primary/20"></div>
                                    <div className="aspect-square rounded-sm bg-primary"></div>
                                    <div className="aspect-square rounded-sm bg-primary/40"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-[#9cabba] mt-2">
                                    <span>Less</span>
                                    <span>More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer area */}
                    <div className="mt-8 border-t border-[#283039] pt-6 pb-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#9cabba] text-sm">
                        <p>© 2024 ASIFUNDE CHOMMIE. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="hover:text-white" href="#">Support</a>
                            <a className="hover:text-white" href="#">Privacy Policy</a>
                            <a className="hover:text-white" href="#">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ParentDashboard;
