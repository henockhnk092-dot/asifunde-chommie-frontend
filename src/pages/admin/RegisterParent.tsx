import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { api } from '../../services/api';

const RegisterParent: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        dateOfBirth: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            await api.admin.registerParent(formData);
            setSuccess(`Parent account created successfully for ${formData.email}`);
            // Reset form
            setFormData({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                dateOfBirth: ''
            });
        } catch (err: any) {
            console.error('Error registering parent:', err);
            setError(err.response?.data?.error || 'Failed to register parent');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout userType="admin" headerTitle="Register Parent">
            <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                            <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-3xl">family_restroom</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Register New Parent</h2>
                            <p className="text-slate-500 dark:text-slate-400">Create a new parent account in the system</p>
                        </div>
                    </div>

                    {success && (
                        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                <span className="material-symbols-outlined">check_circle</span>
                                <p className="font-bold">{success}</p>
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                <span className="material-symbols-outlined">error</span>
                                <p className="font-bold">{error}</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-bold mb-2">
                                    First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Enter first name"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-bold mb-2">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Enter last name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-bold mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="parent@example.com"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-bold mb-2">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    minLength={8}
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Minimum 8 characters"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-bold mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="+27 XX XXX XXXX"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block text-sm font-bold mb-2">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                        </div>

                        {/* Info Box */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-blue-600 text-sm align-middle mr-1">info</span>
                                <strong>Note:</strong> Parents can register and manage their children's accounts from their dashboard after logging in.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">person_add</span>
                                        Register Parent
                                    </>
                                )}
                            </button>

                            <a
                                href="/dashboard/admin/users"
                                className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span className="material-symbols-outlined">arrow_back</span>
                                Back to Users
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default RegisterParent;
