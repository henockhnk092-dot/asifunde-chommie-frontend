import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const CurriculumArticle: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    // This data would ideally come from an API or a shared data file
    const articleData: Record<string, { title: string; date: string; category: string; content: string; image: string }> = {
        "final-matric-exam-timetable-2024": {
            title: "Final Matric Exam Timetable Released for 2024",
            date: "12 Aug 2024",
            category: "Exams",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
            content: `
                <p class="mb-4">The Department of Basic Education has officially released the final combined timetable for the 2024 National Senior Certificate (NSC) examinations. This schedule combines both public (NSC) and private (IEB) examination dates where applicable for standardized subjects.</p>
                <p class="mb-4">The examinations are set to commence on <strong>Monday, 21 October 2024</strong>, with Computer Applications Technology (CAT) Practical and Information Technology (IT) Practical, and will conclude on <strong>Wednesday, 27 November 2024</strong>.</p>
                <h3 class="text-2xl font-bold mb-3 mt-6">Key Advice for Learners</h3>
                <ul class="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Start Early:</strong> With the timetable now available, create a study schedule that covers all your subjects.</li>
                    <li><strong>Verify Dates:</strong> Double-check the dates for your specific subjects against your personal registration.</li>
                    <li><strong>Prepare Resources:</strong> Ensure you have all necessary stationery and identification documents ready well in advance.</li>
                </ul>
                <p class="mb-4">The Minister of Basic Education continues to encourage all Grade 12 learners to utilize the available support materials, including past papers and study guides available on this platform.</p>
            `,
        },
        "changes-to-lo-assessment-guidelines": {
            title: "Changes to Life Orientation Assessment Guidelines",
            date: "05 Aug 2024",
            category: "Curriculum",
            image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1000&auto=format&fit=crop",
            content: `
                <p class="mb-4">New guidelines for the Common Assessment Task (CAT) in Life Orientation (LO) have been published by the Department of Basic Education. These changes are aimed at standardizing the assessment process across all provinces and ensuring a more rigorous evaluation of learner competencies.</p>
                <h3 class="text-2xl font-bold mb-3 mt-6">What has changed?</h3>
                <p class="mb-4">The updated rubric places a greater emphasis on <strong>critical thinking</strong> and <strong>practical application</strong> of skills rather than rote memorization. The written component of the CAT has been adjusted to include more scenario-based questions.</p>
                <p class="mb-4">Teachers and learners are advised to familiarize themselves with the new Section A and Section B structures. Workshops will be held in each district to assist educators with the implementation of these changes.</p>
            `,
        },
        "robotics-and-coding-grade-8-9": {
            title: "Introduction of Robotics and Coding in Grade 8-9",
            date: "28 Jul 2024",
            category: "Policy",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
            content: `
                <p class="mb-4">The pilot program for Robotics and Coding, initially launched in select primary schools, is expanding to 500 more high schools in the 2025 academic year, specifically targeting Grades 8 and 9.</p>
                <p class="mb-4">This curriculum implementation is part of the Department's strategy to equip learners with 21st-century skills such as computational thinking, problem-solving, and digital literacy.</p>
                <h3 class="text-2xl font-bold mb-3 mt-6">Implications for Learners</h3>
                <p class="mb-4">Learners in participating schools will have the option to take Robotics and Coding as a subject. This serves as a foundational course for Information Technology (IT) and Computer Applications Technology (CAT) in the FET phase (Grades 10-12).</p>
                <p class="mb-4">Schools selected for the rollout will receive the necessary hardware kits and software licenses. Teacher training for this new curriculum is currently underway during the school holidays.</p>
            `,
        },
    };

    const article = slug ? articleData[slug] : null;

    if (!article) {
        return (
            <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
                <PublicHeader />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                        <Link to="/curriculum" className="text-primary hover:underline">Back to Curriculum Updates</Link>
                    </div>
                </div>
                <PublicFooter />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
            <PublicHeader />

            <main className="flex-grow">
                {/* Hero / Header */}
                <div className="relative w-full h-64 md:h-96 bg-[#111722] overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111722] via-transparent to-transparent"></div>
                    </div>

                    {/* Back Button positioned at top-left */}
                    <div className="absolute top-8 left-4 md:left-8 z-20">
                        <Link to="/curriculum" className="inline-flex items-center text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full transition-all">
                            <span className="material-symbols-outlined mr-2 text-sm">arrow_back</span>
                            <span className="text-sm font-bold">Back to Curriculum</span>
                        </Link>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
                        <div className="max-w-[1280px] mx-auto">
                            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded uppercase mb-3 shadow-lg">
                                {article.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2 drop-shadow-md">{article.title}</h1>
                            <p className="text-gray-300 font-medium">{article.date}</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-[800px] mx-auto px-4 py-12 md:py-20">
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/50">
                            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">Want to ace your exams?</h4>
                            <p className="text-blue-800 dark:text-blue-200 mb-4">
                                Sign up for Stitch to access thousands of past papers, video lessons, and interactive quizzes for your grade.
                            </p>
                            <Link to="/signup" className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">
                                Create Free Account
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <PublicFooter />
        </div>
    );
};

export default CurriculumArticle;
