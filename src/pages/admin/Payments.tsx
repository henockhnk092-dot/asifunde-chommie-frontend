import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const AdminPayments: React.FC = () => {
    // Mock Transactions
    const transactions = [
        { id: 'TXN-001', user: 'Thando Nkosi', amount: 'R 150.00', date: '2023-11-25 14:30', status: 'Success' },
        { id: 'TXN-002', user: 'Mike Smith', amount: 'R 1500.00', date: '2023-11-24 09:15', status: 'Success' },
        { id: 'TXN-003', user: 'Failed User', amount: 'R 150.00', date: '2023-11-23 18:45', status: 'Failed' },
    ];

    return (
        <DashboardLayout userType="admin" headerTitle="Payment History">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold">Transaction Log</h2>
                        <p className="text-slate-500">View all recent payment activity</p>
                    </div>
                    <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800">Export CSV</button>
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
                                <tr>
                                    <th className="p-6">Transaction ID</th>
                                    <th className="p-6">User</th>
                                    <th className="p-6">Amount</th>
                                    <th className="p-6">Date</th>
                                    <th className="p-6">Status</th>
                                    <th className="p-6 text-right">Details</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {transactions.map(txn => (
                                    <tr key={txn.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-6 font-mono text-xs">{txn.id}</td>
                                        <td className="p-6 font-bold">{txn.user}</td>
                                        <td className="p-6 font-mono">{txn.amount}</td>
                                        <td className="p-6 text-sm text-slate-500">{txn.date}</td>
                                        <td className="p-6">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${txn.status === 'Success' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                                                }`}>
                                                {txn.status}
                                            </span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <button className="text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined">visibility</span>
                                            </button>
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

export default AdminPayments;
