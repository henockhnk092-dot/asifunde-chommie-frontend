import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useAuth } from '../../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user, userProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data for display if auth context is missing details
  const [formData, setFormData] = useState({
    displayName: userProfile?.displayName || 'Thando Nkosi',
    email: user?.email || 'student@example.com',
    phone: '083 555 1234',
    grade: 'Grade 11',
    school: 'Sandton High Scool',
    bio: 'Aspiring Civil Engineer. Love Maths & Physics!',
    notifications: {
      email: true,
      push: false,
      weeklyReport: true
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggle = (key: keyof typeof formData.notifications) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically update the user profile in Firebase
    alert('Profile updated successfully!');
  };

  return (
    <DashboardLayout userType="learner" headerTitle="My Profile">
      <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 text-slate-900 dark:text-white">

        {/* Profile Header */}
        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-4 border-white dark:border-surface-dark shadow-lg">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(formData.displayName)}&background=4F46E5&color=fff&size=128`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors">
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{formData.displayName}</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-4">{formData.email} • {formData.grade}</p>
            <div className="flex justify-center md:justify-start gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-semibold">Premium Learner</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-semibold">Active</span>
            </div>
          </div>

          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${isEditing ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-primary hover:bg-blue-600 text-white'}`}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        {/* Personal Information */}
        <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500">person</span>
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Full Name</label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Grade</label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">School Name</label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Bio / Goals</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows={3}
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Notifications */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-500">notifications</span>
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">Email Notifications</p>
                  <p className="text-sm text-slate-500">Receive updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.notifications.email}
                    onChange={() => handleToggle('email')}
                    disabled={!isEditing}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold">Weekly Progress Report</p>
                  <p className="text-sm text-slate-500">Summary of your activity</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.notifications.weeklyReport}
                    onChange={() => handleToggle('weeklyReport')}
                    disabled={!isEditing}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-500">lock</span>
              Security
            </h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
                <div className="text-left">
                  <p className="font-bold">Change Password</p>
                  <p className="text-sm text-slate-500">Update your login credentials</p>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group">
                <div className="text-left">
                  <p className="font-bold">Two-Factor Auth</p>
                  <p className="text-sm text-slate-500">Secure your account</p>
                </div>
                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
