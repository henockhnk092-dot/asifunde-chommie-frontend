import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const VideoPlayer: React.FC = () => {
    return (
        <DashboardLayout userType="learner" showSearch={true}>
            <div className="layout-container w-full max-w-[1440px] mx-auto px-4 md:px-6 py-6 lg:py-8 flex flex-col lg:flex-row gap-8">
                {/* Left Column: Video Player & Main Interactions (70% width on Desktop) */}
                <section className="flex-1 w-full lg:w-[70%] flex flex-col gap-6">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-text-secondary">
                        <Link className="hover:text-slate-900 dark:hover:text-white" to="/subjects">Grade 10</Link>
                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                        <Link className="hover:text-slate-900 dark:hover:text-white" to="/subjects">Mathematics</Link>
                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                        <span className="text-primary font-medium">Trigonometry</span>
                    </nav>

                    {/* Headline */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-slate-900 dark:text-white tracking-tight text-2xl md:text-3xl font-bold leading-tight">Grade 10 Mathematics: Introduction to Trigonometry</h1>
                        <p className="text-slate-500 dark:text-text-secondary text-sm md:text-base">Master the basics of sine, cosine, and tangent ratios with Mr. Dlamini.</p>
                    </div>

                    {/* Video Player */}
                    <div className="relative w-full aspect-video bg-surface-dark rounded-xl overflow-hidden shadow-2xl group border border-gray-200 dark:border-surface-border/50">
                        {/* Thumbnail/Video Background */}
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_tMZk8MQiq4oCcdvp4PpnRBxdOVTn5-kNwVeOdLKaYRyv4lW8-pLHvdRbuQvW8tcsTWNw5rLzsSKXVZ-QXe0aYC32DOiifm8h2gyqZBLrmY73-imQBF0EaTwf_scgCalU7esnGdVRDZLZUp-bgyDBpHigA0SMWHZaxnf8JBucX5Ahq36DLv5pb1QZGQ6QRWD66Nfqs-oxwaB3EEsT4_rxNrceVR68B7WO0uQsLL4rca0GqnnnFyN3PLHVvrDQ4F_1ZSgdTalJseDm")' }}>
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                        </div>
                        {/* Center Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <button className="flex items-center justify-center rounded-full size-20 bg-primary hover:bg-primary-hover text-white transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
                                <span className="material-symbols-outlined text-[40px] ml-1">play_arrow</span>
                            </button>
                        </div>
                        {/* Controls Overlay (Visible on hover/interaction - simplified for this demo) */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-4 px-4 md:px-6 z-20">
                            {/* Progress Bar Mockup */}
                            <div className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-4">
                                <div className="absolute top-0 left-0 h-full w-[25%] bg-primary rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-white text-xs font-medium tracking-wide">3:45 / 14:20</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="text-white hover:text-primary" title="Fullscreen"><span className="material-symbols-outlined">fullscreen</span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reaction & Action Bar */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-2 border-b border-gray-200 dark:border-surface-border pb-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-gray-200 dark:border-surface-border" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1LwdrjouK8wcyK25vY-g6ilZPNDSCf5dEjaLXRPg_RbqDWf99Ipb7YJeIe3dUEPT9Ua7jCKuq0-7gNlrer7G8jwXDteEgZkd69IWY7pHTnz7KpsoGjSoxwQgOqvGChIqxll34UT73ll2e8eWyCIVeYgpWyj9ZA8JLEX7VcDKqlh4iryew206B-tp1QioJFC3HTz8NQVhJfw3Mz-jtRQlK6kAHzyU-mGQY0gSGLdCLQsybjZRuJxDCPn8_fPqsOuv_EX318PniDPM2")' }}></div>
                                <div>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Mr. S. Dlamini</p>
                                    <p className="text-slate-500 dark:text-text-secondary text-xs">Mathematics Dept • 12k Followers</p>
                                </div>
                            </div>
                            <button className="bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white text-xs font-bold py-2 px-4 rounded-full transition-colors ml-2">Follow</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-surface-border text-slate-700 dark:text-white transition-colors group">
                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-primary transition-colors text-[20px]">thumb_up</span>
                                <span className="text-sm font-medium">245</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-surface-border text-slate-700 dark:text-white transition-colors group">
                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-primary transition-colors text-[20px]">bookmark</span>
                                <span className="text-sm font-medium">Save</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-surface-border text-slate-700 dark:text-white transition-colors group">
                                <span className="material-symbols-outlined text-slate-500 dark:text-text-secondary group-hover:text-primary transition-colors text-[20px]">share</span>
                                <span className="text-sm font-medium">Share</span>
                            </button>
                        </div>
                    </div>

                    {/* Q&A Section */}
                    <div className="mt-2">
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-6">Discussion & Q&A (12)</h3>
                        {/* Comment Input */}
                        <div className="flex gap-4 mb-8">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBH8VppbfQWvI9JhyCRFtzABjUdOLqr8jsDJp3UFGvZKeZS9JWQswI4Q2gHMSSp76BG6-H5uItvJE8mVp7LohM1_8WvuZZlOymfrw4TKgWJH39_JnDH-3DOM15F6Nmz5R6jOjgx4iawMRJhFm_xngZ7boGxiUSBVJ8ZCiB97W2WucVWBgaNSPYYi557JLkZAHVGJlaMBQP9Wc1Wn1xoq-DtIrOIWyYcrewzA0Lm96W9rvsQRup5H0u9LiIA7GFOi3lmhH1SCtBhaobl")' }}></div>
                            <div className="flex-1">
                                <div className="relative">
                                    <textarea className="w-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border rounded-xl p-4 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-text-secondary focus:ring-1 focus:ring-primary focus:border-primary min-h-[100px] resize-y" placeholder="Ask a question or share a thought..."></textarea>
                                    <div className="absolute bottom-3 right-3 flex gap-2">
                                        <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold py-1.5 px-4 rounded-lg transition-colors">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sample Comments */}
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7bJf6n9wCRO-J_K6_6M5ZSRckq76s3LEugq5JYO4vLMC7t7SjeanGTGlsvlTw0syp9ccMnDJxisyfZOFrKmi6NTMPXF5oNI_XQma89a3EpZe3aFZy6RoWO2ZzeDiaSFdBgirygXjXF3yp6Qy3okVtg8U0I5f4mxZUvE2lJFML1ea5u3V29CxqqslrufTDMoMHYiAvOXFjutZD6JvL1v5OdDp75jDuurPPCI1mTGqiv1h3FYOjq1rZAgYf0tD8D1uOr-DsEpZvqqhN")' }}></div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-slate-900 dark:text-white font-bold text-sm">Thabo M.</span>
                                        <span className="text-slate-500 dark:text-text-secondary text-xs">• 2 hours ago</span>
                                    </div>
                                    <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">Can someone explain the CAST diagram part again? I got lost around 10:30.</p>
                                    <div className="flex gap-3 mt-4 ml-2 border-l-2 border-gray-200 dark:border-surface-border pl-4">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFmq1ApiD7bClXDnwBZ3qFWUTbVKvbIT0ahsYYF2u8yymR0fE70cBMEnKte3m5a0dyX80V8DBX8GVi31-RPFYafF7a-XVmBXErUU8ePhAQZseZtB7E3F2eOrjluXuJZo2iVbe9Xla4tyabuvXogKT4_MGLMJCNamn0TG1szQbqzf_ekSq36gH7RPxy0aznGHIj3OKhV_biBQ_ZiZG9CmFYecuyW7AhjRxi13DytB0722TU0iUUH-pMPISqKpDMPHA8BBOeJNhblaj7")' }}></div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-primary font-bold text-sm flex items-center gap-1">Mr. S. Dlamini <span className="material-symbols-outlined text-[14px]">verified</span></span>
                                                <span className="text-slate-500 dark:text-text-secondary text-xs">• 1 hour ago</span>
                                            </div>
                                            <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">Hi Thabo! Remember "All Stations To Cape Town". In the 4th quadrant (Cape Town), only Cosine is positive. Rewatch from 10:45 where I draw the circle.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Column: Syllabus/Resources (30% width on Desktop) */}
                <aside className="w-full lg:w-[30%] flex flex-col gap-6 min-w-[320px]">
                    {/* Sidebar Card */}
                    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-border rounded-xl overflow-hidden flex flex-col h-fit sticky top-4">
                        {/* Tabs Header */}
                        <div className="flex border-b border-gray-200 dark:border-surface-border px-2">
                            <button className="flex-1 py-4 border-b-[3px] border-primary text-slate-900 dark:text-white text-sm font-bold tracking-wide transition-colors">Resources</button>
                            <button className="flex-1 py-4 border-b-[3px] border-transparent text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white text-sm font-bold tracking-wide transition-colors">Quiz</button>
                        </div>

                        {/* Tab Content: Resources */}
                        <div className="p-5 flex flex-col gap-4">
                            <div className="rounded-lg bg-orange-500/10 border border-orange-500/20 p-4 mb-2">
                                <div className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-orange-500 mt-0.5">lock</span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm font-bold text-orange-600 dark:text-orange-400">View Only Mode</span>
                                        <p className="text-xs text-orange-700/80 dark:text-orange-200/80">Downloads are disabled to protect content. You can view all materials directly in the browser.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-2 text-opacity-80">Lesson Materials</h3>

                            {/* Resource Item 1 */}
                            <div className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-colors group cursor-pointer">
                                <div className="size-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mr-3 shrink-0">
                                    <span className="material-symbols-outlined">picture_as_pdf</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-slate-900 dark:text-white text-sm font-medium truncate">Trig_Cheat_Sheet_2024.pdf</p>
                                    <p className="text-slate-500 dark:text-text-secondary text-xs">PDF • View Only</p>
                                </div>
                                <button className="text-slate-400 dark:text-text-secondary group-hover:text-primary transition-colors hover:bg-white/10 p-2 rounded-full" title="View Document">
                                    <span className="material-symbols-outlined">visibility</span>
                                </button>
                            </div>

                            {/* Resource Item 2 */}
                            <div className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-surface-border hover:border-primary/50 transition-colors group cursor-pointer">
                                <div className="size-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mr-3 shrink-0">
                                    <span className="material-symbols-outlined">description</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-slate-900 dark:text-white text-sm font-medium truncate">Practice_Questions_WK4.docx</p>
                                    <p className="text-slate-500 dark:text-text-secondary text-xs">Doc • View Only</p>
                                </div>
                                <button className="text-slate-400 dark:text-text-secondary group-hover:text-primary transition-colors hover:bg-white/10 p-2 rounded-full" title="View Document">
                                    <span className="material-symbols-outlined">visibility</span>
                                </button>
                            </div>

                            <div className="h-px bg-gray-200 dark:bg-surface-border my-2"></div>

                            {/* CTA for Quiz */}
                            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                                <div className="flex items-start gap-3">
                                    <div className="bg-primary rounded-full p-1.5 shrink-0 mt-0.5">
                                        <span className="material-symbols-outlined text-white text-[16px]">quiz</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">Ready to test yourself?</h4>
                                        <p className="text-slate-500 dark:text-text-secondary text-xs mb-3">Complete the 5-question quiz to unlock the next lesson.</p>
                                        <Link to="/quiz" className="block text-center w-full bg-primary hover:bg-primary-hover text-white text-sm font-bold py-2 rounded-lg transition-colors shadow-lg shadow-primary/20">Start Quiz</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Up Next / Related */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white text-base font-bold mb-4 px-1">Up Next in Syllabus</h3>
                        <div className="flex flex-col gap-3">
                            <a className="group flex gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors" href="#">
                                <div className="relative w-32 aspect-video rounded-lg overflow-hidden shrink-0">
                                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD702NXrMp0SNR7uIEYj0Z64cj-52y49_T4h86U0MTMWt4LC9_c4KmKP1HVlDp724UV0Rj14qQJlj1B3OolTyu1Mb-cMBFxqjisiGR-lZa27JX4rj979FCnk6Ck-2TEFkhOIFVRP3KolhJf0Ipckc31ApnRgQyXUX7_zg6DaQfoIWFisxtAOox_NfedyGZa7Wol3mLhc_GGWsybl4pLgw0s21FuotJ57sUrKVrzwhadU1L6hTobhrbvixWA0jWwpDAWtSq3ZreHPlm6")' }}></div>
                                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">12:05</div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h4 className="text-slate-700 dark:text-gray-200 text-sm font-medium leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">Solving 2D Problems using Sine Rule</h4>
                                    <p className="text-slate-500 dark:text-text-secondary text-xs">Mr. S. Dlamini</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </DashboardLayout>
    );
};

export default VideoPlayer;
