import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar, { type SidebarItem } from './Sidebar';
import Header from './Header';
import { useAuth } from '../contexts/AuthContext';
import { getMenuItemsByRole } from '../config/menuConfig';

interface DashboardLayoutProps {
    children: React.ReactNode;
    userType?: 'learner' | 'parent' | 'teacher' | 'admin';
    sidebarItems?: SidebarItem[];
    headerTitle?: string;
    showSearch?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    userType = 'learner', // basic default, but we should rely on auth profile
    sidebarItems,
    headerTitle,
    showSearch = true
}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user, userProfile, logout } = useAuth();
    const navigate = useNavigate();

    // Get menu items based on user profile role or fallback to userType prop
    const userRole = userProfile?.role || userType;
    const items = sidebarItems || getMenuItemsByRole(userRole);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Failed to log out', error);
            alert('Failed to log out. Please try again.');
        }
    };

    // Map Auth user data to Sidebar profile format
    const mappedUserProfile = user ? {
        name: userProfile?.displayName || user.displayName || user.email?.split('@')[0] || 'User',
        role: userProfile?.role || 'Member',
        image: userProfile?.photoURL || user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userProfile?.displayName || user.displayName || user.email?.split('@')[0] || 'U')}&background=4F46E5`
    } : undefined;

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased overflow-hidden h-screen flex w-full">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                userProfile={mappedUserProfile}
                items={items}
                onLogout={handleLogout}
            />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background-light dark:bg-background-dark relative">
                <Header onMenuClick={() => setSidebarOpen(true)} title={headerTitle} showSearch={showSearch}>
                    {/* Right Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                    </div>
                </Header>

                {/* Overlay for mobile sidebar */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-30 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                <main className="flex-1 overflow-y-auto scrollbar-hide relative">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
