import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const AdminSettings: React.FC = () => {
    const [settings, setSettings] = useState({
        siteName: 'Stitch Learning',
        supportEmail: 'support@stitch.co.za',
        allowSignups: true,
        maintenanceMode: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <DashboardLayout userType="admin" headerTitle="Platform Settings">
            <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-bold mb-6">General Configuration</h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="font-bold text-slate-500">Site Name</label>
                                <input
                                    type="text"
                                    name="siteName"
                                    value={settings.siteName}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-bold text-slate-500">Support Email</label>
                                <input
                                    type="email"
                                    name="supportEmail"
                                    value={settings.supportEmail}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <div>
                                <h3 className="font-bold">Allow New Registrations</h3>
                                <p className="text-sm text-slate-500">Enable or disable new user signups</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="allowSignups" checked={settings.allowSignups} onChange={handleChange} className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30">
                            <div>
                                <h3 className="font-bold text-red-700 dark:text-red-400">Maintenance Mode</h3>
                                <p className="text-sm text-red-600 dark:text-red-300">Disable platform access for all non-admin users</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="maintenanceMode" checked={settings.maintenanceMode} onChange={handleChange} className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <button className="px-6 py-3 font-bold text-slate-500 hover:bg-slate-100 rounded-xl">Cancel</button>
                    <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-blue-600">Save Changes</button>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default AdminSettings;
