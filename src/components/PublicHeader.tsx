import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PublicHeader: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { user, userProfile, logout } = useAuth();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    // Handler for authenticated navigation based on role
    const handleDashboardNavigation = () => {
        if (!user) {
            sessionStorage.setItem('returnUrl', '/dashboard');
            navigate('/login');
        } else {
            // Navigate based on user role (with fallback if userProfile not loaded)
            const role = userProfile?.role || user?.role || 'learner';

            switch (role) {
                case 'learner':
                    navigate('/dashboard');
                    break;
                case 'parent':
                    navigate('/dashboard/parent');
                    break;
                case 'teacher':
                    navigate('/dashboard/teacher');
                    break;
                case 'admin':
                    navigate('/dashboard/admin');
                    break;
                default:
                    navigate('/dashboard');
            }
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            setShowUserMenu(false);
            setIsMobileMenuOpen(false);
            navigate('/');
        } catch (error) {
            console.error('Failed to log out', error);
            alert('Failed to log out. Please try again.');
        }
    };

    const userImage = userProfile?.photoURL || user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile?.displayName || user?.displayName || user?.email?.split('@')[0] || 'U')}&background=4F46E5`;

    return (
        <>
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#232f48] bg-background-light dark:bg-[#111722] px-4 py-3 lg:px-10">
                <div className="flex items-center gap-4 lg:gap-8">
                    <Link to="/" className="flex items-center gap-2 text-[#111418] dark:text-white">
                        <div className="size-8 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">school</span>
                        </div>
                        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">ASIFUNDE CHOMMIE</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 lg:gap-9">
                        <Link to="/" className="text-[#111418] dark:text-white text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/about" className="text-[#111418] dark:text-white text-sm font-medium hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link to="/contact" className="text-[#111418] dark:text-white text-sm font-medium hover:text-primary transition-colors">
                            Contact
                        </Link>
                        {/* Learners Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-[#111418] dark:text-white text-sm font-medium hover:text-primary transition-colors py-2">
                                Learners
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="absolute top-full left-0 w-48 bg-white dark:bg-[#1a1d24] border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2 z-50">
                                <Link to="/learners" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Learners Overview
                                </Link>
                                <Link to="/subjects" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Subjects
                                </Link>
                                <Link to="/video-lessons" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Video Lessons
                                </Link>
                                <Link to="/career-guides" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Career Guides
                                </Link>
                                <Link to="/past-papers" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Past Papers
                                </Link>
                                <Link to="/study-guides" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Study Guides
                                </Link>
                                <Link to="/career-quiz" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Career Quiz
                                </Link>
                            </div>
                        </div>

                        {/* Parents & Teachers Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-[#111418] dark:text-white text-sm font-medium hover:text-primary transition-colors py-2">
                                Parents & Teachers
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="absolute top-full left-0 w-56 bg-white dark:bg-[#1a1d24] border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top pt-2 z-50">
                                <Link to="/parents" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Parent Portal
                                </Link>
                                <Link to="/teachers" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Teaching Resources
                                </Link>
                                <Link to="/curriculum" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary">
                                    Curriculum Updates
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
                    <div className="flex gap-2 items-center">
                        {user ? (
                            <>
                                <button
                                    onClick={handleDashboardNavigation}
                                    className="flex h-10 px-4 items-center justify-center rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
                                >
                                    Dashboard
                                </button>
                                {/* User Profile Dropdown */}
                                <div className="relative hidden sm:block" ref={menuRef}>
                                    <button
                                        onClick={() => setShowUserMenu(!showUserMenu)}
                                        className="bg-center bg-no-repeat bg-cover rounded-full size-9 border-2 border-slate-200 dark:border-slate-700 hover:border-primary transition-colors cursor-pointer"
                                        style={{ backgroundImage: `url("${userImage}")` }}
                                    />

                                    {showUserMenu && (
                                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#1a1d24] border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-2 z-50">
                                            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                                    {userProfile?.displayName || user?.displayName || 'User'}
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                                    {user?.email}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    setShowUserMenu(false);
                                                    navigate('/settings');
                                                }}
                                                className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-3"
                                            >
                                                <span className="material-symbols-outlined text-lg">settings</span>
                                                Settings
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setShowUserMenu(false);
                                                    handleDashboardNavigation();
                                                }}
                                                className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-3"
                                            >
                                                <span className="material-symbols-outlined text-lg">dashboard</span>
                                                Dashboard
                                            </button>

                                            <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>

                                            <button
                                                onClick={handleLogout}
                                                className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors flex items-center gap-3"
                                            >
                                                <span className="material-symbols-outlined text-lg">logout</span>
                                                Sign Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="hidden sm:flex h-10 px-4 items-center justify-center rounded-lg bg-transparent border border-[#e5e7eb] dark:border-[#232f48] hover:bg-gray-100 dark:hover:bg-[#1f2b42] text-[#111418] dark:text-white text-sm font-bold transition-colors"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="flex h-10 px-4 items-center justify-center rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20"
                                >
                                    Join the Squad
                                </Link>
                            </>
                        )}
                        <button
                            className="md:hidden flex items-center justify-center size-10 text-[#111418] dark:text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background-light dark:bg-[#111722] flex flex-col pt-20 px-6 gap-6 md:hidden">
                    <nav className="flex flex-col gap-4">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#111418] dark:text-white">Home</Link>
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#111418] dark:text-white">About</Link>
                        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-[#111418] dark:text-white">Contact</Link>
                        <hr className="border-gray-200 dark:border-gray-800 my-2" />
                        <div className="space-y-4">
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Learners</p>
                            <Link to="/learners" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Learners Overview</Link>
                            <Link to="/subjects" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Subjects</Link>
                            <Link to="/video-lessons" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Video Lessons</Link>
                            <Link to="/career-guides" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Career Guides</Link>
                            <Link to="/past-papers" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Past Papers</Link>
                            <Link to="/study-guides" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Study Guides</Link>
                            <Link to="/career-quiz" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Career Quiz</Link>
                        </div>

                        <div className="space-y-4">
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Parents & Teachers</p>
                            <Link to="/parents" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Parent Portal</Link>
                            <Link to="/teachers" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Teaching Resources</Link>
                            <Link to="/curriculum" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-bold text-[#111418] dark:text-white">Curriculum Updates</Link>
                        </div>
                        <hr className="border-gray-200 dark:border-gray-800 my-2" />
                        {user ? (
                            <>
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        handleDashboardNavigation();
                                    }}
                                    className="text-xl font-bold text-[#111418] dark:text-white text-left"
                                >
                                    Dashboard
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="text-xl font-bold text-red-600 dark:text-red-400 text-left flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined">logout</span>
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <Link
                                className="text-xl font-bold text-[#111418] dark:text-white"
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </>
    );
};

export default PublicHeader;
