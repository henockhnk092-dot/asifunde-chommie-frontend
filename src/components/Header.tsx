import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
    onMenuClick: () => void;
    showSearch?: boolean;
    title?: string;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, showSearch = true, title, children }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { user, userProfile, logout } = useAuth();
    const navigate = useNavigate();

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

    const handleLogout = async () => {
        try {
            await logout();
            setShowUserMenu(false);
            navigate('/');
        } catch (error) {
            console.error('Failed to log out', error);
            alert('Failed to log out. Please try again.');
        }
    };

    const userImage = userProfile?.photoURL || user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile?.displayName || user?.displayName || user?.email?.split('@')[0] || 'U')}&background=4F46E5`;

    return (
        <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111722] flex-shrink-0 z-30 sticky top-0">
            <div className="flex items-center w-full max-w-lg gap-4">
                <button className="md:hidden text-slate-500 dark:text-slate-400" onClick={onMenuClick}>
                    <span className="material-symbols-outlined">menu</span>
                </button>

                {title && (
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white md:hidden">{title}</h1>
                )}

                {showSearch && (
                    <div className="relative w-full hidden md:block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 material-symbols-outlined">search</span>
                        <input className="w-full py-2 pl-10 pr-4 text-sm bg-slate-100 dark:bg-[#1a1d24] border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-shadow" placeholder="Search for topics, e.g., 'Newton's Laws'" type="text" />
                    </div>
                )}
            </div>
            {/* Right Side */}
            <div className="flex items-center gap-2 md:gap-4">
                {children}

                {/* Notifications (Previous Code) */}
                <button className="p-2 relative hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111722]"></span>
                </button>

                {/* User Profile Dropdown */}
                <div className="relative hidden md:block" ref={menuRef}>
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
                                    navigate('/settings');
                                }}
                                className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-3"
                            >
                                <span className="material-symbols-outlined text-lg">person</span>
                                Profile
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
            </div>
        </header>
    );
};

export default Header;
