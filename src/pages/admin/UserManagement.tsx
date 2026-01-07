import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

interface User {
    id: number;
    name: string;
    email: string;
    role: 'Learner' | 'Parent' | 'Teacher' | 'Admin';
    status: 'Active' | 'Suspended';
    joinDate: string;
}

const UserManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('All');

    // Mock Users
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Thando Nkosi', email: 'thando@gmail.com', role: 'Learner', status: 'Active', joinDate: '2023-01-15' },
        { id: 2, name: 'Lerato Zulu', email: 'lerato@gmail.com', role: 'Learner', status: 'Active', joinDate: '2023-02-20' },
        { id: 3, name: 'Mr. Smith', email: 'smith@school.co.za', role: 'Teacher', status: 'Active', joinDate: '2023-01-10' },
        { id: 4, name: 'Mrs. Jones', email: 'jones@gmail.com', role: 'Parent', status: 'Active', joinDate: '2023-03-05' },
        { id: 5, name: 'John Doe', email: 'john@badactor.com', role: 'Learner', status: 'Suspended', joinDate: '2023-04-01' },
    ]);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === 'All' || user.role === roleFilter;
        return matchesSearch && matchesRole;
    });

    const toggleStatus = (id: number) => {
        setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Suspended' : 'Active' } : u));
    };

    return (
        <DashboardLayout userType="admin" headerTitle="User Management">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-slate-500 font-bold text-xs uppercase mb-2">Total Users</h3>
                        <p className="text-3xl font-black">12,450</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-blue-500 font-bold text-xs uppercase mb-2">Learners</h3>
                        <p className="text-3xl font-black">10,200</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-purple-500 font-bold text-xs uppercase mb-2">Teachers</h3>
                        <p className="text-3xl font-black">842</p>
                    </div>
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <h3 className="text-orange-500 font-bold text-xs uppercase mb-2">Parents</h3>
                        <p className="text-3xl font-black">1,408</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex gap-4">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                        <select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-primary outline-none"
                        >
                            <option value="All">All Roles</option>
                            <option value="Learner">Learner</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Parent">Parent</option>
                        </select>
                    </div>
                    <div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg">
                            <span className="material-symbols-outlined">person_add</span>
                            Add User
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
                                <tr>
                                    <th className="p-6">User</th>
                                    <th className="p-6">Role</th>
                                    <th className="p-6">Joined</th>
                                    <th className="p-6">Status</th>
                                    <th className="p-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {filteredUsers.map(user => (
                                    <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white">{user.name}</p>
                                                    <p className="text-xs text-slate-500">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className={`px-2 py-1 rounded-md text-xs font-bold ${user.role === 'Admin' ? 'bg-red-100 text-red-700' :
                                                    user.role === 'Teacher' ? 'bg-purple-100 text-purple-700' :
                                                        user.role === 'Parent' ? 'bg-orange-100 text-orange-700' :
                                                            'bg-blue-100 text-blue-700'
                                                }`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="p-6 text-sm text-slate-500">{user.joinDate}</td>
                                        <td className="p-6">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${user.status === 'Active' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => toggleStatus(user.id)}
                                                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-500 hover:text-orange-500 transition-colors" title="Suspend/Activate"
                                                >
                                                    <span className="material-symbols-outlined">block</span>
                                                </button>
                                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-500 hover:text-red-500 transition-colors" title="Delete">
                                                    <span className="material-symbols-outlined">delete</span>
                                                </button>
                                            </div>
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

export default UserManagement;
