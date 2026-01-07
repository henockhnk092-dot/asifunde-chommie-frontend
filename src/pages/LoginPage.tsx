import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { UserRole } from '../types';
import heroImage from '../assets/diverse_school_community.png';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { userProfile, login } = useAuth();
    const [selectedRole, setSelectedRole] = useState<UserRole>('learner');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Redirect if already logged in
    React.useEffect(() => {
        if (userProfile) {
            // Check if there's a return URL
            const returnUrl = sessionStorage.getItem('returnUrl');
            if (returnUrl) {
                sessionStorage.removeItem('returnUrl');
                navigate(returnUrl);
                return;
            }

            // Navigate based on user role
            switch (userProfile.role) {
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
            }
        }
    }, [userProfile, navigate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.email.trim()) {
            setError('Please enter your email address');
            return;
        }
        if (!formData.password) {
            setError('Please enter your password');
            return;
        }

        setLoading(true);

        try {
            await login(formData.email, formData.password);
            // Navigation will be handled by useEffect after userProfile updates
        } catch (err: any) {
            setError(err.message || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setError('Google Sign-In is not available with backend authentication. Please use email and password.');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col font-display antialiased selection:bg-primary selection:text-white overflow-x-hidden">
            <PublicHeader />

            <div className="flex flex-1 w-full overflow-hidden flex-col lg:flex-row">
                {/* Left Side: Login Form */}
                <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-12 relative z-10 w-full lg:w-1/2 overflow-y-auto">
                    {/* Mobile/Tablet Background Abstract Decoration */}
                    <div className="absolute inset-0 -z-10 overflow-hidden lg:hidden">
                        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
                        <div className="absolute top-1/2 -right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"></div>
                    </div>
                    <div className="w-full max-w-[420px] flex flex-col gap-8">

                        {/* Welcome Text */}
                        <div className="space-y-2">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">Welcome Back</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-base">Log in to continue your learning journey.</p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Login Form */}
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            {/* Role Selection */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    I am a...
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {[
                                        { role: 'learner', label: 'Learner', icon: 'school' },
                                        { role: 'parent', label: 'Parent', icon: 'family_restroom' },
                                        { role: 'teacher', label: 'Teacher', icon: 'cast_for_education' },
                                        { role: 'admin', label: 'Admin', icon: 'admin_panel_settings' },
                                    ].map((item) => (
                                        <button
                                            key={item.role}
                                            type="button"
                                            onClick={() => setSelectedRole(item.role as UserRole)}
                                            className={`h-16 flex flex-col items-center justify-center gap-1 rounded-lg border transition-all ${selectedRole === item.role
                                                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                                                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-600 dark:text-slate-400 hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-800'
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                            <span className="text-xs font-medium">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                                    Email or Username
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full h-12 px-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        id="email"
                                        placeholder="Enter your email or username"
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400 pointer-events-none text-[20px]">person</span>
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full h-12 px-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        id="password"
                                        placeholder="Enter your password"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button
                                        className="absolute right-4 top-3 text-slate-400 hover:text-slate-300 transition-colors"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        className="size-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-surface-dark text-primary focus:ring-primary/20"
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                    />
                                    <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">
                                        Remember me
                                    </span>
                                </label>
                                <Link
                                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                    to="/forgot-password"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full h-12 mt-2 bg-primary hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Signing In...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Log In</span>
                                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                    </>
                                )}
                            </button>

                            {/* Divider */}
                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                                <span className="flex-shrink-0 mx-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
                                    Or continue with
                                </span>
                                <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                            </div>

                            {/* Social Login */}
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                                className="flex items-center justify-center gap-2 h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <svg className="size-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"></path>
                                    <path d="M3.15295 7.3455L6.4385 9.755C7.3275 7.554 9.4805 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.159 2 4.828 4.1685 3.15295 7.3455Z" fill="#FF3D00"></path>
                                    <path d="M12 22C14.6605 22 17.0715 20.9495 18.8585 19.2415L15.6515 16.6495C14.595 17.476 13.3155 18 12 18C9.358 18 7.1195 16.3015 6.29 13.945L3.026 16.438C4.693 19.782 8.1215 22 12 22Z" fill="#4CAF50"></path>
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.6515 16.6495L18.8585 19.2415C20.5725 17.652 21.688 15.378 21.9565 12.8725C21.9835 12.0195 21.928 11.0855 21.8055 10.0415Z" fill="#1976D2"></path>
                                </svg>
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Google</span>
                            </button>

                            {/* Sign Up Link */}
                            <div className="text-center mt-2">
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Don't have an account?{' '}
                                    <Link className="text-primary font-medium hover:text-primary/80 transition-colors ml-1" to="/signup">
                                        Sign up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Side: Visuals (Hidden on Mobile) */}
                <div className="hidden lg:flex flex-1 relative bg-surface-dark overflow-hidden w-full lg:w-1/2 min-h-screen lg:min-h-0">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${heroImage})`,
                        }}
                    >
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                    </div>

                    {/* Floating Content on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-12 z-20">
                        <div className="max-w-lg">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium mb-4">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                Trusted by 10,000+ Students
                            </div>
                            <blockquote className="text-2xl font-medium text-white leading-relaxed mb-4">
                                "Education is the most powerful weapon which you can use to change the world."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <div
                                        className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-300 bg-cover"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCabRMzsVA6dnxqLqgQMUeq3uv-NgwOj6hDBligedr89U4Kep3-SfsCkOICeBi6Qsnenr_mkQlbzXq40s2EyEm6p1bL-YVBqvT2sE238R5l3lJWC1hRy_ezN5WPPr3EgEDOvhlnXj3a6W3UUGYsRcB2a3H5lj2aqO09aSBiIsLL3CdPI1QXl__oNTBkwzJiP8n74W8Xupja-DaR7Cong4Y-uHd5kLUci9cSK9l9PpPP-V7d_hs2t65z_cu2ZnubsodPptlCeHpib4Vc')",
                                        }}
                                    ></div>
                                    <div
                                        className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-300 bg-cover"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVb7RTJ57fsL9oOegwAE9T0t6JjBJLdyn-udZdoRe6lWf3cvzA3Fm9gBweqZb4xk83kJfAMS2vFv1em8m-NVLFG4q80wTAR2zNq26yyLqh-yuaxtFG6WVNMmDdBxf699BlQfbgjiEtiQY9UtMKdJTwpSt3cE_3jNiDt7h4yTyQPhPSjXc0gmo396GXHuDW344EQ3N7qdOY00eu8a3Gb5J4bVVzdLzVObALreAZwbmsUNWGYoOrHg0AJ_san-9_quZSd3-Y6hFHpGGs')",
                                        }}
                                    ></div>
                                    <div
                                        className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-300 bg-cover"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVC6QmHTWaI1kjqhb8qe9-0tzQQrXU-LFkY7IqDlNKs6F6OEqUuMCGGfZNuJAj_S2UMC74d_EYC27uIyA-Nk3N1lgn5d8fmrcLf0VxRF2KsuUcA13QXRIqfBuAkZ_XuYZS_fLE_OLdB7DuhBO3fpZyOhgEyxcL00Npxiy5M7IwqdhkD-P8UvI-1bO7IKfAORVN8hHiJyBA289jAfcCGHOrzEP87pgL6DJQSsNYfAlNFqIJK29gszAYyNjBeWsFsN0aXZjoFVh3GsIx')",
                                        }}
                                    ></div>
                                    <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-surface-dark flex items-center justify-center text-xs font-bold text-white">
                                        +10k
                                    </div>
                                </div>
                                <div className="text-white/80 text-sm">
                                    <p className="font-semibold text-white">Nelson Mandela</p>
                                    <p>Former President of South Africa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PublicFooter />
        </div>
    );
};

export default LoginPage;
