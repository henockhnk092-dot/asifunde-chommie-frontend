import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface SidebarItem {
    label: string;
    icon: string;
    path: string;
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    userProfile?: {
        name: string;
        role: string;
        image: string;
    };
    items: SidebarItem[];
    onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, userProfile, items, onLogout }) => {
    const location = useLocation();

    return (
        <aside className={`w-64 flex-shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111722] transition-all duration-300 fixed top-0 left-0 bottom-0 md:relative z-40 h-full ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
            <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 text-primary font-black text-xl tracking-tight">
                    <span className="material-symbols-outlined text-3xl">school</span>
                    <span>ASIFUNDE</span>
                </div>
                <button className="md:hidden ml-auto text-slate-500" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>

            <div className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
                {userProfile && (
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="flex gap-3 items-center px-2 py-1">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary" style={{ backgroundImage: `url("${userProfile.image}")` }}></div>
                            <div className="flex flex-col">
                                <h1 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">{userProfile.name}</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal capitalize">{userProfile.role}</p>
                            </div>
                        </div>
                    </div>
                )}

                <nav className="flex flex-col gap-1">
                    {items.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${isActive
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                onClick={() => window.innerWidth < 768 && onClose()}
                            >
                                <span className={`material-symbols-outlined ${isActive ? 'filled' : 'group-hover:text-primary transition-colors'}`}>{item.icon}</span>
                                <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <button
                    onClick={onLogout}
                    className="flex w-full items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                    <span className="material-symbols-outlined">logout</span>
                    <span className="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
