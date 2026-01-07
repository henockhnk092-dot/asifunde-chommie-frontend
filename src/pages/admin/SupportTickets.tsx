import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const SupportTickets: React.FC = () => {
    // Mock Tickets
    const [tickets, setTickets] = useState([
        { id: '#1204', user: 'Thando Nkosi', subject: 'Login Issues', status: 'Open', priority: 'High', date: '2 hrs ago' },
        { id: '#1203', user: 'Mrs. Jones', subject: 'Billing Question', status: 'Resolved', priority: 'Medium', date: '1 day ago' },
        { id: '#1202', user: 'Mr. Smith', subject: 'Upload Failed', status: 'In Progress', priority: 'Low', date: '2 days ago' },
    ]);

    const handleStatusChange = (id: string, newStatus: string) => {
        setTickets(tickets.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    return (
        <DashboardLayout userType="admin" headerTitle="Support Tickets">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-slate-500 font-bold text-xs uppercase mb-2">Open Tickets</h3>
                        <p className="text-3xl font-black text-red-500">12</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-slate-500 font-bold text-xs uppercase mb-2">Avg Response Time</h3>
                        <p className="text-3xl font-black text-blue-500">1.5 hrs</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-slate-500 font-bold text-xs uppercase mb-2">Satisfaction Rating</h3>
                        <p className="text-3xl font-black text-green-500">4.8/5</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
                                <tr>
                                    <th className="p-6">ID</th>
                                    <th className="p-6">User</th>
                                    <th className="p-6">Subject</th>
                                    <th className="p-6">Priority</th>
                                    <th className="p-6">Status</th>
                                    <th className="p-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {tickets.map(ticket => (
                                    <tr key={ticket.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-6 font-mono text-xs">{ticket.id}</td>
                                        <td className="p-6 font-bold">{ticket.user}</td>
                                        <td className="p-6">{ticket.subject}</td>
                                        <td className="p-6">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${ticket.priority === 'High' ? 'bg-red-100 text-red-700' :
                                                    ticket.priority === 'Medium' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                                                }`}>
                                                {ticket.priority}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <select
                                                value={ticket.status}
                                                onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                                                className={`bg-transparent font-bold outline-none cursor-pointer ${ticket.status === 'Open' ? 'text-red-500' :
                                                        ticket.status === 'Resolved' ? 'text-green-500' : 'text-blue-500'
                                                    }`}
                                            >
                                                <option className="text-slate-900">Open</option>
                                                <option className="text-slate-900">In Progress</option>
                                                <option className="text-slate-900">Resolved</option>
                                            </select>
                                        </td>
                                        <td className="p-6 text-right">
                                            <button className="text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined">forum</span>
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

export default SupportTickets;
