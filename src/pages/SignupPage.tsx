import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { UserRole } from '../types';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';
import studentsCollaboratingLibrary from '../assets/students_collaborating_library.png';

const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [searchParams] = useSearchParams();

    // Initialize state, potentially overriding with URL params if they exist immediately
    // or use useEffect to update it. useEffect is safer for hydration/navigation updates.
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'learner' as UserRole,
        grade: 10,
        subjects: [] as string[],
        language: 'en' as 'en' | 'zu',
        agreedToTerms: false,
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Effect to handle URL parameters for pre-selection
    useEffect(() => {
        const roleParam = searchParams.get('role');
        const gradeParam = searchParams.get('grade');

        if (roleParam && ['learner', 'parent', 'teacher', 'admin'].includes(roleParam)) {
            setFormData(prev => ({
                ...prev,
                role: roleParam as UserRole,
                grade: gradeParam ? parseInt(gradeParam) : prev.grade
            }));
        }
    }, [searchParams]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: (e.target as HTMLInputElement).checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleRoleChange = (role: UserRole) => {
        setFormData({
            ...formData,
            role,
        });
    };

    const handleGradeChange = (grade: number) => {
        setFormData({
            ...formData,
            grade,
        });
    };

    const validateForm = (): boolean => {
        if (!formData.displayName.trim()) {
            setError('Please enter your full name');
            return false;
        }
        if (!formData.email.trim()) {
            setError('Please enter your email address');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError('Please enter a valid email address');
            return false;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        if (!formData.agreedToTerms) {
            setError('Please agree to the Terms & Conditions');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            // Split display name into first and last names
            const nameParts = formData.displayName.trim().split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : nameParts[0];

            const registrationData: any = {
                email: formData.email,
                password: formData.password,
                firstName,
                lastName,
                role: formData.role,
            };

            // Add learner-specific fields
            if (formData.role === 'learner') {
                registrationData.grade = formData.grade;
            }

            await register(registrationData);

            // Check if there's a return URL
            const returnUrl = sessionStorage.getItem('returnUrl');
            if (returnUrl) {
                sessionStorage.removeItem('returnUrl');
                navigate(returnUrl);
                return;
            }

            // Navigate based on role
            switch (formData.role) {
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
                    navigate('/');
            }
        } catch (err: any) {
            setError(err.message || 'Failed to create account. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError('');
        setLoading(true);

        try {
            // TODO: Implement Google Sign-In via backend OAuth
            // await signInWithGoogle();
            setError('Google Sign-In coming soon!');
            // navigate('/dashboard');
        } catch (err: any) {
            setError(err.message || 'Failed to sign in with Google');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
            {/* Header */}
            <PublicHeader />

            {/* Main Content Area */}
            <main className="flex flex-1 w-full overflow-hidden flex-col lg:flex-row">
                {/* Left Side: Form */}
                <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 overflow-y-auto w-full lg:w-1/2">
                    <div className="w-full max-w-[520px] flex flex-col gap-6">
                        {/* Heading */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Create your Account</h1>
                            <p className="text-[#637588] dark:text-[#92a4c9] text-base font-normal leading-normal">Start shaping your future today.</p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Role Selection */}
                            <div className="flex flex-col w-full">
                                <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">I am a...</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {[
                                        { role: 'learner', label: 'Learner', icon: 'school' },
                                        { role: 'parent', label: 'Parent', icon: 'family_restroom' },
                                        { role: 'teacher', label: 'Teacher', icon: 'cast_for_education' },
                                    ].map((item) => (
                                        <button
                                            key={item.role}
                                            type="button"
                                            onClick={() => handleRoleChange(item.role as UserRole)}
                                            className={`h-16 flex flex-col items-center justify-center gap-1 rounded-lg border ${formData.role === item.role
                                                ? 'bg-primary text-white border-primary'
                                                : 'border-[#dce0e5] dark:border-[#324467] bg-white dark:bg-[#192233] text-[#637588] dark:text-[#92a4c9] hover:bg-[#f0f2f4] dark:hover:bg-[#232f48]'
                                                } transition-all`}
                                        >
                                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                            <span className="text-xs font-medium">{item.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Full Name */}
                            <label className="flex flex-col w-full">
                                <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">Full Name</p>
                                <input
                                    className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#dce0e5] dark:border-[#324467] bg-white dark:bg-[#192233] focus:border-primary h-14 placeholder:text-[#637588] dark:placeholder:text-[#92a4c9] px-4 text-base font-normal leading-normal transition-all"
                                    placeholder="Enter your full name"
                                    type="text"
                                    name="displayName"
                                    value={formData.displayName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>

                            {/* Email */}
                            <label className="flex flex-col w-full">
                                <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
                                <input
                                    className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#dce0e5] dark:border-[#324467] bg-white dark:bg-[#192233] focus:border-primary h-14 placeholder:text-[#637588] dark:placeholder:text-[#92a4c9] px-4 text-base font-normal leading-normal transition-all"
                                    placeholder="student@school.co.za"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>

                            {/* Grade Selection (only for learners) */}
                            {formData.role === 'learner' && (
                                <div className="flex flex-col w-full">
                                    <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">Select your Grade</p>
                                    <div className="grid grid-cols-5 gap-2">
                                        {[8, 9, 10, 11, 12].map((grade) => (
                                            <button
                                                key={grade}
                                                type="button"
                                                onClick={() => handleGradeChange(grade)}
                                                className={`h-12 flex items-center justify-center rounded-lg border font-medium ${formData.grade === grade
                                                    ? 'bg-primary text-white border-primary'
                                                    : 'border-[#dce0e5] dark:border-[#324467] bg-white dark:bg-[#192233] text-[#637588] dark:text-[#92a4c9] hover:bg-[#f0f2f4] dark:hover:bg-[#232f48]'
                                                    } transition-all`}
                                            >
                                                {grade}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Password */}
                            <label className="flex flex-col w-full group">
                                <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">Password</p>
                                <div className="flex w-full flex-1 items-stretch rounded-lg relative">
                                    <input
                                        className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#dce0e5] dark:border-[#324467] bg-white dark:bg-[#192233] focus:border-primary h-14 placeholder:text-[#637588] dark:placeholder:text-[#92a4c9] px-4 pr-12 text-base font-normal leading-normal transition-all"
                                        placeholder="Create a strong password"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-3 cursor-pointer text-[#637588] dark:text-[#92a4c9] hover:text-primary transition-colors"
                                    >
                                        <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                    </button>
                                </div>
                            </label>

                            {/* Confirm Password */}
                            <label className="flex flex-col w-full group">
                                <p className="text-[#111418] dark:text-white text-base font-medium leading-normal pb-2">Confirm Password</p>
                                <div className="flex w-full flex-1 items-stretch rounded-lg relative">
                                    <input
                                        className="w-full rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-[#dce0e5] dark:border-[#324467] bg-white dark:bg-[#192233] focus:border-primary h-14 placeholder:text-[#637588] dark:placeholder:text-[#92a4c9] px-4 pr-12 text-base font-normal leading-normal transition-all"
                                        placeholder="Repeat your password"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-3 cursor-pointer text-[#637588] dark:text-[#92a4c9] hover:text-primary transition-colors"
                                    >
                                        <span className="material-symbols-outlined">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                                    </button>
                                </div>
                            </label>

                            {/* Terms & Conditions */}
                            <div className="flex items-start gap-3 mt-2">
                                <div className="flex h-6 items-center">
                                    <input
                                        className="h-5 w-5 rounded border-[#dce0e5] dark:border-[#324467] bg-white dark:bg-[#192233] text-primary focus:ring-primary focus:ring-offset-0 transition-colors"
                                        id="terms"
                                        name="agreedToTerms"
                                        type="checkbox"
                                        checked={formData.agreedToTerms}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label className="font-normal text-[#637588] dark:text-[#92a4c9]" htmlFor="terms">
                                        I agree to the <a className="font-semibold text-primary hover:underline" href="#">Terms & Conditions</a> and <a className="font-semibold text-primary hover:underline" href="#">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 transition-all mt-2"
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Creating Account...</span>
                                    </div>
                                ) : (
                                    <span className="truncate">Create Account</span>
                                )}
                            </button>

                            {/* Divider */}
                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-[#dce0e5] dark:border-[#324467]"></div>
                                <span className="flex-shrink-0 mx-4 text-xs text-[#637588] dark:text-[#92a4c9] font-medium uppercase tracking-wider">Or continue with</span>
                                <div className="flex-grow border-t border-[#dce0e5] dark:border-[#324467]"></div>
                            </div>

                            {/* Google Sign In */}
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                                className="flex items-center justify-center gap-2 h-11 rounded-lg border border-[#dce0e5] dark:border-[#324467] bg-white dark:bg-[#192233] hover:bg-[#f0f2f4] dark:hover:bg-[#232f48] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <svg className="size-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"></path>
                                    <path d="M3.15295 7.3455L6.4385 9.755C7.3275 7.554 9.4805 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.159 2 4.828 4.1685 3.15295 7.3455Z" fill="#FF3D00"></path>
                                    <path d="M12 22C14.6605 22 17.0715 20.9495 18.8585 19.2415L15.6515 16.6495C14.595 17.476 13.3155 18 12 18C9.358 18 7.1195 16.3015 6.29 13.945L3.026 16.438C4.693 19.782 8.1215 22 12 22Z" fill="#4CAF50"></path>
                                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.6515 16.6495L18.8585 19.2415C20.5725 17.652 21.688 15.378 21.9565 12.8725C21.9835 12.0195 21.928 11.0855 21.8055 10.0415Z" fill="#1976D2"></path>
                                </svg>
                                <span className="text-sm font-medium text-[#111418] dark:text-white">Google</span>
                            </button>
                        </form>

                        {/* Login Link */}
                        <div className="flex justify-center mt-4">
                            <p className="text-[#637588] dark:text-[#92a4c9] text-sm">
                                Have an account? <Link className="text-primary font-bold hover:underline" to="/login">Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image/Branding (Hidden on mobile) */}
                <div className="hidden lg:flex flex-1 relative bg-[#192233] w-full lg:w-1/2 min-h-screen lg:min-h-0">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100" style={{ backgroundImage: `url(${studentsCollaboratingLibrary})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
                    <div className="relative z-10 flex flex-col justify-end p-16 w-full max-w-2xl mx-auto h-full">
                        <div className="flex flex-col gap-6 mb-12">
                            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 text-primary">
                                <span className="material-symbols-outlined text-4xl">school</span>
                            </div>
                            <blockquote className="text-3xl font-bold text-white leading-tight">
                                "Education is the most powerful weapon which you can use to change the world."
                            </blockquote>
                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-primary"></div>
                                <p className="text-[#92a4c9] text-lg font-medium">Nelson Mandela</p>
                            </div>
                            <div className="mt-8 p-6 bg-[#1f293a]/80 backdrop-blur-md border border-[#324467] rounded-xl">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Join 15,000+ Learners</h4>
                                        <p className="text-[#92a4c9] text-sm">Access personalized career guidance, study resources, and university application support tailored for South African schools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PublicFooter />
        </div>
    );
};

export default SignupPage;
