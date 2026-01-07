import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

interface Child {
    id: string;
    name: string;
    grade: string;
    school: string;
    avatarBg: string; // Hex color
}

const MyChildren: React.FC = () => {
    const [children, setChildren] = useState<Child[]>([
        { id: '1', name: 'Thando Nkosi', grade: 'Grade 11', school: 'Sandton High', avatarBg: '4F46E5' },
        { id: '2', name: 'Lethabo Nkosi', grade: 'Grade 9', school: 'Sandton High', avatarBg: '10B981' }
    ]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newChildName, setNewChildName] = useState('');

    const handleAddChild = (e: React.FormEvent) => {
        e.preventDefault();
        const newChild: Child = {
            id: Date.now().toString(),
            name: newChildName,
            grade: 'Grade 10', // Default
            school: 'School Name', // Default
            avatarBg: Math.floor(Math.random() * 16777215).toString(16)
        };
        setChildren([...children, newChild]);
        setNewChildName('');
        setIsAddModalOpen(false);
    };

    return (
        <DashboardLayout userType="parent" headerTitle="My Children" showSearch={false}>
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="flex justify-between items-center bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-2xl font-bold">Linked Accounts</h2>
                        <p className="text-slate-500 dark:text-slate-400">Manage your children's profiles and subscriptions</p>
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-blue-600 transition-colors font-bold"
                    >
                        <span className="material-symbols-outlined">add</span>
                        Add Child
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {children.map((child) => (
                        <div key={child.id} className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6 flex flex-col items-center border-b border-slate-100 dark:border-slate-800">
                                <div className="w-24 h-24 rounded-full mb-4 overflow-hidden border-4 border-slate-100 dark:border-slate-800">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(child.name)}&background=${child.avatarBg}&color=fff&size=128`}
                                        alt={child.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{child.name}</h3>
                                <p className="text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-semibold">{child.grade}</p>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 flex justify-around">
                                <button className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-xs font-semibold">
                                    <span className="material-symbols-outlined text-xl">analytics</span>
                                    <span>Progress</span>
                                </button>
                                <button className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-xs font-semibold">
                                    <span className="material-symbols-outlined text-xl">edit</span>
                                    <span>Edit</span>
                                </button>
                                <button className="flex flex-col items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors text-xs font-semibold">
                                    <span className="material-symbols-outlined text-xl">link_off</span>
                                    <span>Unlink</span>
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center min-h-[250px] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary group"
                    >
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">add</span>
                        </div>
                        <span className="font-bold text-lg">Link Another Child</span>
                    </button>
                </div>
            </div>

            {/* Add Child Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-surface-dark rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                            <h3 className="text-xl font-bold">Add New Child</h3>
                            <p className="text-slate-500 text-sm">Link an existing student account</p>
                        </div>
                        <form onSubmit={handleAddChild} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Child's Name</label>
                                <input
                                    type="text"
                                    required
                                    value={newChildName}
                                    onChange={(e) => setNewChildName(e.target.value)}
                                    placeholder="e.g. Sipho Mthembu"
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Child's Email (Optional)</label>
                                <input
                                    type="email"
                                    placeholder="student@example.com"
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                            <div className="pt-4 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-4 py-2 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Add Child
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default MyChildren;
