import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const CurriculumUpdates: React.FC = () => {

    const articles = [
        {
            title: "Final Matric Exam Timetable Released for 2024",
            date: "12 Aug 2024",
            category: "Exams",
            excerpt: "The Department of Basic Education has officially released the final combined timetable for the 2024 NSC examinations. Download the PDF to view all subject slots...",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
            slug: "final-matric-exam-timetable-2024"
        },
        {
            title: "Changes to Life Orientation Assessment Guidelines",
            date: "05 Aug 2024",
            category: "Curriculum",
            excerpt: "New guidelines for the Common Assessment Task (CAT) in Life Orientation have been published. Teachers and learners are advised to review the updated rubric...",
            image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop",
            slug: "changes-to-lo-assessment-guidelines"
        },
        {
            title: "Introduction of Robotics and Coding in Grade 8-9",
            date: "28 Jul 2024",
            category: "Policy",
            excerpt: "The pilot program for Robotics and Coding is expanding to 500 more schools in 2025. Here is what this means for subject choices and required resources...",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
            slug: "robotics-and-coding-grade-8-9"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />
            <main className="flex-grow">
                <div className="relative w-full bg-[#111722] py-20 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                            alt="Curriculum Updates"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#111722] via-[#111722]/80 to-transparent"></div>
                    </div>
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 text-white">
                        <h1 className="text-4xl md:text-5xl font-black mb-4">Curriculum Updates</h1>
                        <p className="text-lg text-gray-300 max-w-2xl">Stay informed about changes to the CAPS curriculum and assessment guidelines.</p>
                    </div>
                </div>
                <div className="max-w-[1280px] mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main News Feed */}
                        <div className="lg:col-span-2 space-y-8">
                            {articles.map((news, i) => (
                                <article key={i} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-[#192233] p-6 rounded-2xl border border-gray-200 dark:border-[#324467] hover:shadow-lg transition-shadow">
                                    <div className="w-full md:w-48 h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                                        <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase">{news.category}</span>
                                            <span className="text-sm text-slate-500">{news.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{news.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{news.excerpt}</p>
                                        <Link to={`/curriculum/${news.slug}`} className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                                            Read Full Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-primary text-white p-8 rounded-2xl">
                                <h3 className="font-bold text-xl mb-4">Subscribe to Updates</h3>
                                <p className="mb-6 opacity-90">Get the latest DOE announcements sent directly to your inbox.</p>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                                    const button = form.querySelector('button') as HTMLButtonElement;
                                    const originalText = button.innerHTML;

                                    if (!email) return;

                                    button.disabled = true;
                                    button.innerHTML = 'Subscribing...';

                                    fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID || 'placeholder'}`, {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({ email })
                                    })
                                        .then(response => {
                                            if (response.ok) {
                                                alert('Thanks for subscribing!');
                                                form.reset();
                                            } else {
                                                alert('Oops! There was a problem submitting your form');
                                            }
                                        })
                                        .catch(() => {
                                            alert('Oops! There was a problem submitting your form');
                                        })
                                        .finally(() => {
                                            button.disabled = false;
                                            button.innerHTML = originalText;
                                        });
                                }}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 mb-4 focus:ring-2 focus:ring-white outline-none"
                                        required
                                    />
                                    <button type="submit" className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                                        Subscribe
                                    </button>
                                </form>
                            </div>

                            <div className="bg-white dark:bg-[#192233] p-6 rounded-2xl border border-gray-200 dark:border-[#324467]">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">Quick Links</h3>
                                <ul className="space-y-3">
                                    <li><Link to="/signup" className="text-slate-600 dark:text-slate-400 hover:text-primary block">Exam Timetables</Link></li>
                                    <li><Link to="/signup" className="text-slate-600 dark:text-slate-400 hover:text-primary block">Past Papers</Link></li>
                                    <li><Link to="/signup" className="text-slate-600 dark:text-slate-400 hover:text-primary block">Practical Assessment Tasks</Link></li>
                                    <li><Link to="/signup" className="text-slate-600 dark:text-slate-400 hover:text-primary block">SBA Exemplars</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Dates Section */}
                <section className="py-20 bg-background-light dark:bg-[#111722] border-t border-slate-200 dark:border-[#232f48]">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Important Academic Dates 2025</h2>
                            <p className="text-lg text-[#637588] dark:text-[#92a4c9]">
                                Key dates for term start/end, major exams, and registration deadlines.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { title: "Term 1 Starts", date: "15 Jan", desc: "Schools reopen for learners." },
                                { title: "Term 1 Ends", date: "28 Mar", desc: "School closes for Easter break." },
                                { title: "Matric Registration", date: "15 Mar", desc: "Deadline for NSC exam registration." },
                                { title: "June Exams", date: "02 Jun", desc: "Mid-year examinations commence." }
                            ].map((event, i) => (
                                <div key={i} className="bg-white dark:bg-[#192233] p-6 rounded-2xl border-l-4 border-primary shadow-sm">
                                    <span className="text-4xl font-black text-slate-200 dark:text-slate-700 mb-2 block">{event.date}</span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{event.title}</h3>
                                    <p className="text-sm text-slate-500">{event.desc}</p>
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

export default CurriculumUpdates;
