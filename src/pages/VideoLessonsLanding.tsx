import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const VideoLessonsLanding: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="relative w-full h-[500px] bg-[#111722] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                            alt="Video Lessons"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-[#111722]/60 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 text-center text-white">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light font-bold text-sm tracking-wide border border-primary/30 mb-6 backdrop-blur-sm">
                            World-Class Education
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Master Every Subject with <br /> <span className="text-primary">Expert Video Lessons</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Bite-sized, engaging video tutorials covering the entire CAPS curriculum for Grades 8-12. Learn at your own pace, anytime, anywhere.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/signup" className="px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 text-lg">
                                <span className="material-symbols-outlined">play_circle</span>
                                Start Watching Free
                            </Link>
                            <Link to="/subjects" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-2 text-lg">
                                Browse Subjects
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="py-20 bg-white dark:bg-[#192233]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Video Learning?</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">Visual learning is properly scientifically proven to improve retention and understanding of complex concepts.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Visual & Engaging", desc: "Complex concepts visualized through animations and real-world examples.", icon: "visibility" },
                                { title: "Expert Teachers", desc: "Learn from South Africa's top educators with years of marking experience.", icon: "school" },
                                { title: "On-Demand Access", desc: "Pause, rewind, and re-watch as many times as you need to understand.", icon: "history" }
                            ].map((feature, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-gray-50 dark:bg-[#111722] border border-gray-100 dark:border-[#232f48] hover:border-primary/30 transition-all hover:shadow-lg group">
                                    <div className="size-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sample Lessons Preview */}
                <div className="py-20 bg-gray-50 dark:bg-[#101622]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Lessons</h2>
                                <p className="text-slate-500">A sneak peek into our premium content library.</p>
                            </div>
                            <Link to="/signup" className="text-primary font-bold hover:underline hidden sm:block">View Full Library</Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                            {[
                                { title: "Newton's Laws of Motion", subject: "Physical Sciences", grade: "Grade 12", duration: "12:45", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" },
                                { title: "Algebraic Functions", subject: "Mathematics", grade: "Grade 11", duration: "08:30", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" },
                                { title: "Photosynthesis Process", subject: "Life Sciences", grade: "Grade 10", duration: "15:20", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop" },
                                { title: "Chemical Equilibrium", subject: "Physical Sciences", grade: "Grade 12", duration: "18:10", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" },
                                { title: "Trigonometry Basics", subject: "Mathematics", grade: "Grade 10", duration: "10:15", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop" },
                                { title: "The Cold War", subject: "History", grade: "Grade 12", duration: "22:00", image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2069&auto=format&fit=crop" }
                            ].map((video, i) => (
                                <Link to="/signup" key={i} className="group bg-white dark:bg-[#192233] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#232f48] hover:shadow-xl transition-all">
                                    <div className="relative aspect-video bg-gray-200">
                                        <img src={video.image} alt={video.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                            <div className="size-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                                            </div>
                                        </div>
                                        <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs font-bold rounded">{video.duration}</span>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex gap-2 mb-2">
                                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded uppercase tracking-wide">{video.subject}</span>
                                            <span className="text-xs font-semibold text-slate-500 bg-gray-100 dark:bg-[#232f48] px-2 py-1 rounded">{video.grade}</span>
                                        </div>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">{video.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Mathematics Focus</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Euclidean Geometry", subject: "Mathematics", grade: "Grade 11", duration: "14:20", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" },
                                    { title: "Calculus: Limits", subject: "Mathematics", grade: "Grade 12", duration: "16:45", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2071&auto=format&fit=crop" },
                                    { title: "Financial Maths", subject: "Mathematics", grade: "Grade 10", duration: "11:30", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" }
                                ].map((video, i) => (
                                    <Link to="/signup" key={i} className="group bg-white dark:bg-[#192233] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#232f48] hover:shadow-xl transition-all">
                                        <div className="relative aspect-video bg-gray-200">
                                            <img src={video.image} alt={video.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                                <div className="size-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                                                </div>
                                            </div>
                                            <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs font-bold rounded">{video.duration}</span>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex gap-2 mb-2">
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded uppercase tracking-wide">{video.subject}</span>
                                                <span className="text-xs font-semibold text-slate-500 bg-gray-100 dark:bg-[#232f48] px-2 py-1 rounded">{video.grade}</span>
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">{video.title}</h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <PublicFooter />
            </main>
        </div>
    );
};

export default VideoLessonsLanding;
