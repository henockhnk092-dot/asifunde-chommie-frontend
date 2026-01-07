import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

interface Material {
    id: string;
    title: string;
    type: 'PDF' | 'Doc' | 'Link';
    grade: string;
    subject: string;
    downloads: number;
}

const MyMaterials: React.FC = () => {
    const [materials, setMaterials] = useState<Material[]>([
        { id: '1', title: 'Algebra Formula Sheet', type: 'PDF', grade: 'Grade 12', subject: 'Mathematics', downloads: 342 },
        { id: '2', title: 'Periodic Table High Res', type: 'PDF', grade: 'Grade 10', subject: 'Physical Sciences', downloads: 156 },
        { id: '3', title: 'Past Paper 2023', type: 'PDF', grade: 'Grade 12', subject: 'Life Sciences', downloads: 89 }
    ]);

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this material?")) {
            setMaterials(materials.filter(m => m.id !== id));
        }
    };

    return (
        <DashboardLayout userType="teacher" headerTitle="Study Materials">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="flex justify-between items-center bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-2xl font-bold">Study Materials</h2>
                        <p className="text-slate-500 dark:text-slate-400">Manage documents and notes</p>
                    </div>
                    <a href="/dashboard/teacher/upload" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-blue-600 transition-colors font-bold">
                        <span className="material-symbols-outlined">upload_file</span>
                        Upload Material
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materials.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col hover:border-primary/50 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                                    <span className="material-symbols-outlined text-2xl">description</span>
                                </div>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-slate-400 hover:text-red-500 transition-colors"
                                >
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>

                            <h3 className="text-lg font-bold mb-1 truncate">{item.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.subject} • {item.grade}</p>

                            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm">
                                <span className="font-semibold text-slate-600 dark:text-slate-300">{item.type}</span>
                                <div className="flex items-center gap-1 text-slate-500">
                                    <span className="material-symbols-outlined text-base">download</span>
                                    <span>{item.downloads}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default MyMaterials;
