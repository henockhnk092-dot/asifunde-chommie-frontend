import { useState, type FC, type FormEvent } from 'react';

import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../contexts/AuthContext';
import { updateUserProfile } from '../services/auth.service';
import { api } from '../services/api';

const ProfileSettings: FC = () => {
  const { user, userProfile } = useAuth();


  // Active section
  const [activeSection, setActiveSection] = useState<'personal' | 'security' | 'notifications' | 'subscription' | 'account'>('personal');

  // Personal Info State
  const [firstName, setFirstName] = useState(userProfile?.displayName?.split(' ')[0] || '');
  const [lastName, setLastName] = useState(userProfile?.displayName?.split(' ').slice(1).join(' ') || '');


  const [grade, setGrade] = useState(10);
  const [language, setLanguage] = useState('en');

  // Security State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Notifications State
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [quizReminders, setQuizReminders] = useState(true);
  const [progressReports, setProgressReports] = useState(true);
  const [careerUpdates, setCareerUpdates] = useState(false);
  const [newContent, setNewContent] = useState(true);

  // Loading & Messages
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSavePersonalInfo = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      if (user) {
        // Update display name
        await updateUserProfile(user.uid, {
          displayName: `${firstName} ${lastName}`,
          // Add other profile fields here
        });

        setSuccessMessage('Personal information updated successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to update personal information');
    } finally {
      setIsSaving(false);
    }
  };

  const handleChangePassword = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Validation
    if (newPassword !== confirmPassword) {
      setErrorMessage('New passwords do not match');
      setIsSaving(false);
      return;
    }

    if (newPassword.length < 8) {
      setErrorMessage('Password must be at least 8 characters');
      setIsSaving(false);
      return;
    }

    try {
      if (user && user.email) {
        // Update password via backend API
        // Note: Backend expects user ID, convert uid to number if needed
        const userId = parseInt(user.uid) || 0;
        await api.users.update(userId, {
          currentPassword,
          newPassword
        });

        setSuccessMessage('Password changed successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        setErrorMessage('Current password is incorrect');
      } else if (error.code === 'auth/weak-password') {
        setErrorMessage('Password is too weak. Please choose a stronger password.');
      } else {
        setErrorMessage(error.message || 'Failed to change password');
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveNotifications = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Save notification preferences to Firestore
      if (user) {
        await updateUserProfile(user.uid, {
          notificationPreferences: {
            emailNotifications,
            quizReminders,
            progressReports,
            careerUpdates,
            newContent,
          },
        });
        setSuccessMessage('Notification preferences saved!');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to save preferences');
    } finally {
      setIsSaving(false);
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'personal':
        return (
          <form onSubmit={handleSavePersonalInfo} className="space-y-6">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">badge</span>
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 outline-none cursor-not-allowed"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Contact support to change your email address
                  </p>
                </div>

                {userProfile?.role === 'learner' && (
                  <>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Grade Level</label>
                      <select
                        value={grade}
                        onChange={(e) => setGrade(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer transition-all"
                      >
                        <option value={8}>Grade 8</option>
                        <option value={9}>Grade 9</option>
                        <option value={10}>Grade 10</option>
                        <option value={11}>Grade 11</option>
                        <option value={12}>Grade 12</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Preferred Language</label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer transition-all"
                      >
                        <option value="en">English</option>
                        <option value="zu">isiZulu</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                  <span className="material-symbols-outlined text-sm">check</span>
                </button>
              </div>
            </div>
          </form>
        );

      case 'security':
        return (
          <form onSubmit={handleChangePassword} className="space-y-6">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">lock</span>
                Change Password
              </h2>

              <div className="max-w-2xl space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Password</label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full px-4 py-2.5 pr-12 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {showCurrentPassword ? 'visibility_off' : 'visibility'}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">New Password</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                      >
                        <span className="material-symbols-outlined text-sm">
                          {showNewPassword ? 'visibility_off' : 'visibility'}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm New Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      required
                      minLength={8}
                    />
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-900 dark:text-blue-200">
                    <span className="font-semibold">Password requirements:</span> Minimum 8 characters
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSaving ? 'Changing...' : 'Change Password'}
                  <span className="material-symbols-outlined text-sm">lock_reset</span>
                </button>
              </div>
            </div>
          </form>
        );

      case 'notifications':
        return (
          <form onSubmit={handleSaveNotifications} className="space-y-6">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">notifications</span>
                Notification Preferences
              </h2>

              <div className="space-y-6">
                {/* Email Notifications */}
                <div className="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email Notifications</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Receive email updates about your account activity
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Quiz Reminders */}
                <div className="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Quiz Reminders</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Get reminded about upcoming quiz deadlines
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={quizReminders}
                      onChange={(e) => setQuizReminders(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Progress Reports */}
                <div className="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Weekly Progress Reports</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Receive weekly summaries of your learning progress
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={progressReports}
                      onChange={(e) => setProgressReports(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Career Updates */}
                <div className="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Career Guidance Updates</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Get notified about new career paths and opportunities
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={careerUpdates}
                      onChange={(e) => setCareerUpdates(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* New Content */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">New Content Alerts</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Be notified when new videos and materials are added
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={newContent}
                      onChange={(e) => setNewContent(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-300 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-6 py-2.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSaving ? 'Saving...' : 'Save Preferences'}
                  <span className="material-symbols-outlined text-sm">check</span>
                </button>
              </div>
            </div>
          </form>
        );

      case 'subscription':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">workspace_premium</span>
                Subscription Status
              </h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Current Plan</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {userProfile?.subscriptionStatus === 'premium' ? 'Premium' : 'Free'}
                    </p>
                  </div>
                  <span className={`px-4 py-2 rounded-full font-semibold ${userProfile?.subscriptionStatus === 'premium'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                    {userProfile?.subscriptionStatus === 'premium' ? 'Premium' : 'Free'}
                  </span>
                </div>

                {userProfile?.subscriptionStatus !== 'premium' && (
                  <div className="p-6 bg-gradient-to-r from-primary to-blue-600 rounded-lg text-white">
                    <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
                    <p className="mb-4 opacity-90">
                      Get access to all videos, unlimited quizzes, and ad-free experience for only R99/month
                    </p>
                    <button className="px-6 py-2.5 bg-white text-primary hover:bg-slate-100 font-semibold rounded-lg transition-colors">
                      Upgrade Now
                    </button>
                  </div>
                )}

                {userProfile?.role === 'learner' && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-900 dark:text-blue-200 flex items-start gap-2">
                      <span className="material-symbols-outlined text-sm mt-0.5">info</span>
                      <span>Your parent/guardian manages your subscription. Contact them to upgrade to Premium.</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">manage_accounts</span>
                Account Management
              </h2>

              <div className="space-y-6">
                {/* Account Info */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Account Email</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{user?.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Account Type</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white capitalize">{userProfile?.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Member Since</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
                  <h3 className="text-lg font-bold text-red-900 dark:text-red-200 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined">warning</span>
                    Danger Zone
                  </h3>
                  <p className="text-sm text-red-800 dark:text-red-300 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                        alert('Account deletion will be implemented with proper backend integration');
                      }
                    }}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <DashboardLayout userType={userProfile?.role as any} headerTitle="Settings" showSearch={false}>
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
            <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
            <p className="text-green-800 dark:text-green-200 font-medium">{successMessage}</p>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3">
            <span className="material-symbols-outlined text-red-600 dark:text-red-400">error</span>
            <p className="text-red-800 dark:text-red-200 font-medium">{errorMessage}</p>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Settings</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage your account and preferences</p>
        </div>

        {/* Section Tabs */}
        <div className="mb-8 border-b border-slate-200 dark:border-slate-700">
          <nav className="flex gap-1 overflow-x-auto">
            {[
              { id: 'personal', label: 'Personal Info', icon: 'person' },
              { id: 'security', label: 'Security', icon: 'lock' },
              { id: 'notifications', label: 'Notifications', icon: 'notifications' },
              { id: 'subscription', label: 'Subscription', icon: 'workspace_premium' },
              { id: 'account', label: 'Account', icon: 'manage_accounts' },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as any)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${activeSection === section.id
                  ? 'border-primary text-primary font-semibold'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                <span className="material-symbols-outlined text-sm">{section.icon}</span>
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {renderSectionContent()}
      </div>
    </DashboardLayout>
  );
};

export default ProfileSettings;
