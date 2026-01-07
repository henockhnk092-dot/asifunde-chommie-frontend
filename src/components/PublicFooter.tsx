import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PublicFooter: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleProtectedAction = (destination: string) => {
        if (!user) {
            sessionStorage.setItem('returnUrl', destination);
            navigate('/login');
        } else {
            navigate(destination);
        }
    };

    return (
        <footer className="w-full bg-white dark:bg-[#192233] border-t border-[#e5e7eb] dark:border-[#232f48] py-12 px-4 md:px-10 lg:px-20">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                            <span className="material-symbols-outlined text-primary text-2xl">school</span>
                            <h3 className="text-lg font-bold">ASIFUNDE</h3>
                        </div>
                        <p className="text-[#637588] dark:text-[#92a4c9] text-sm mb-4">
                            Empowering South African youth through education and career guidance.
                        </p>

                    </div>
                    <div className="col-span-1">
                        <h4 className="font-bold text-[#111418] dark:text-white mb-4">Learners</h4>
                        <ul className="flex flex-col gap-2 text-sm text-[#637588] dark:text-[#92a4c9]">
                            <li><button onClick={() => navigate('/learners')} className="hover:text-primary text-left">Learners Overview</button></li>
                            <li><button onClick={() => navigate('/subjects')} className="hover:text-primary text-left">Subjects</button></li>
                            <li><button onClick={() => navigate('/career-guides')} className="hover:text-primary text-left">Career Guides</button></li>
                            <li><button onClick={() => navigate('/past-papers')} className="hover:text-primary text-left">Past Papers</button></li>
                            <li><button onClick={() => navigate('/study-guides')} className="hover:text-primary text-left">Study Guides</button></li>
                            <li><button onClick={() => navigate('/career-quiz')} className="hover:text-primary text-left">Career Quiz</button></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-bold text-[#111418] dark:text-white mb-4">Parents & Teachers</h4>
                        <ul className="flex flex-col gap-2 text-sm text-[#637588] dark:text-[#92a4c9]">
                            <li><button onClick={() => navigate('/')} className="hover:text-primary text-left">Home</button></li>
                            <li><button onClick={() => navigate('/parents')} className="hover:text-primary text-left">Parent Portal</button></li>
                            <li><button onClick={() => navigate('/teachers')} className="hover:text-primary text-left">Teaching Resources</button></li>
                            <li><button onClick={() => navigate('/curriculum')} className="hover:text-primary text-left">Curriculum Updates</button></li>
                            <li><button onClick={() => navigate('/about')} className="hover:text-primary text-left">About</button></li>
                            <li><button onClick={() => navigate('/contact')} className="hover:text-primary text-left">Contact Us</button></li>

                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h4 className="font-bold text-[#111418] dark:text-white mb-4">Stay in the loop</h4>
                        <p className="text-sm text-[#637588] dark:text-[#92a4c9] mb-4">Get the latest study tips and bursary alerts.</p>
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
                                .catch(error => {
                                    alert('Oops! There was a problem submitting your form');
                                })
                                .finally(() => {
                                    button.disabled = false;
                                    button.innerHTML = originalText;
                                });
                        }} className="flex flex-col gap-2">
                            <input
                                name="email"
                                className="w-full h-10 px-3 rounded-lg bg-background-light dark:bg-[#101622] border border-[#e5e7eb] dark:border-[#324467] text-sm text-[#111418] dark:text-white focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none"
                                placeholder="Enter your email"
                                type="email"
                                required
                            />
                            <button type="submit" className="h-10 px-4 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors w-full disabled:opacity-70 disabled:cursor-not-allowed">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#e5e7eb] dark:border-[#232f48] gap-4">
                    <p className="text-xs text-[#637588] dark:text-[#92a4c9]">© 2024 Asifunde Chommie. All rights reserved.</p>
                    <div className="flex gap-6 text-xs text-[#637588] dark:text-[#92a4c9]">
                        <button onClick={() => navigate('/about')} className="hover:text-primary">Privacy Policy</button>
                        <button onClick={() => navigate('/about')} className="hover:text-primary">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter;
