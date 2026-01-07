import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const AdminSubscriptions: React.FC = () => {
    // Mock Subscriptions
    const [subs, setSubs] = useState([
        { id: 1, user: 'Thando Nkosi', plan: 'Premium', term: 'Monthly', status: 'Active', nextBill: '2023-12-15' },
        { id: 2, user: 'Lerato Zulu', plan: 'Free', term: 'N/A', status: 'Active', nextBill: 'N/A' },
        { id: 3, user: 'Mike Smith', plan: 'Premium', term: 'Annual', status: 'Cancelled', nextBill: '2024-01-20' },
    ]);

    return (
        <DashboardLayout userType="admin" headerTitle="Subscriptions">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p className="text-slate-500 uppercase text-xs font-bold mb-2">Total MRR</p>
                        <h3 className="text-3xl font-black">R 45,200</h3>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p className="text-slate-500 uppercase text-xs font-bold mb-2">Active Premium Users</p>
                        <h3 className="text-3xl font-black text-primary">850</h3>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p className="text-slate-500 uppercase text-xs font-bold mb-2">Replenishment Rate</p>
                        <h3 className="text-3xl font-black text-green-500">92%</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
                                <tr>
                                    <th className="p-6">User</th>
                                    <th className="p-6">Plan</th>
                                    <th className="p-6">Term</th>
                                    <th className="p-6">Next Billing</th>
                                    <th className="p-6">Status</th>
                                    <th className="p-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {subs.map(sub => (
                                    <tr key={sub.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-6 font-bold">{sub.user}</td>
                                        <td className="p-6">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${sub.plan === 'Premium' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700'}`}>
                                                {sub.plan}
                                            </span>
                                        </td>
                                        <td className="p-6 text-sm">{sub.term}</td>
                                        <td className="p-6 text-sm text-slate-500">{sub.nextBill}</td>
                                        <td className="p-6">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${sub.status === 'Active' ? 'text-green-600 bg-green-50' :
                                                    sub.status === 'Cancelled' ? 'text-red-600 bg-red-50' : 'text-slate-600 bg-slate-50'
                                                }`}>
                                                {sub.status}
                                            </span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <button className="text-primary font-bold text-sm hover:underline">Manage</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminSubscriptions;
