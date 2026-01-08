import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { api } from '../../services/api';

interface Material {
    id: number;
    title: string;
    content_type: string;
    grade: number;
    subject: string;
    subject_name?: string;
    downloads?: number;
    views?: number;
    url?: string;
    file_url?: string;
    description?: string;
    is_published: boolean;
    created_at: string;
}

const MyMaterials: React.FC = () => {
    const [materials, setMaterials] = useState<Material[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
    const [showViewerModal, setShowViewerModal] = useState(false);

    useEffect(() => {
        fetchMyMaterials();
    }, []);

    const fetchMyMaterials = async () => {
        try {
            setLoading(true);
            const response = await api.content.getMyContent();
            // Filter for study materials (not videos)
            const materialsData = response.data.filter((item: any) =>
                item.content_type !== 'video' && item.content_type !== 'lesson'
            );
            setMaterials(materialsData);
        } catch (err: any) {
            console.error('Error fetching materials:', err);
            setError(err.response?.data?.error || 'Failed to fetch materials');
        } finally {
            setLoading(false);
        }
    };

    const handleView = (material: Material) => {
        setSelectedMaterial(material);
        setShowViewerModal(true);
    };

    const handleCloseModal = () => {
        setShowViewerModal(false);
        setSelectedMaterial(null);
    };

    const handleDelete = async (id: number, closeModal: boolean = false) => {
        if (window.confirm("Are you sure you want to delete this material?")) {
            try {
                await api.content.delete(id);
                // Refresh the materials list from server to ensure sync
                await fetchMyMaterials();
                if (closeModal) {
                    handleCloseModal();
                }
            } catch (err: any) {
                alert('Failed to delete material: ' + (err.response?.data?.error || err.message));
            }
        }
    };

    const handlePublishToggle = async (id: number, isPublished: boolean) => {
        try {
            if (isPublished) {
                await api.content.unpublish(id);
            } else {
                await api.content.publish(id);
            }
            // Refresh materials
            fetchMyMaterials();
        } catch (err: any) {
            alert('Failed to update status: ' + (err.response?.data?.error || err.message));
        }
    };

    const getDocumentViewUrl = (material: Material): string | null => {
        const url = material.url || material.file_url;
        if (!url) return null;

        // Google Drive documents
        if (url.includes('drive.google.com')) {
            // Extract file ID
            const fileIdMatch = url.match(/[-\w]{25,}/);
            if (fileIdMatch) {
                return `https://drive.google.com/file/d/${fileIdMatch[0]}/preview`;
            }
        }

        // Google Docs
        if (url.includes('docs.google.com')) {
            return url.replace('/edit', '/preview');
        }

        // Direct PDF URLs
        if (url.endsWith('.pdf') || material.content_type === 'pdf') {
            return url;
        }

        // For other URLs, return as is
        return url;
    };

    const getMaterialIcon = (contentType: string) => {
        switch (contentType?.toLowerCase()) {
            case 'pdf':
                return 'picture_as_pdf';
            case 'document':
            case 'doc':
            case 'docx':
                return 'description';
            case 'presentation':
            case 'ppt':
            case 'pptx':
                return 'slideshow';
            case 'spreadsheet':
            case 'xls':
            case 'xlsx':
                return 'table_chart';
            case 'link':
            case 'url':
                return 'link';
            default:
                return 'insert_drive_file';
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

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
                        <p className="text-red-600 dark:text-red-400">{error}</p>
                    </div>
                ) : materials.length === 0 ? (
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-12 text-center">
                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">folder_open</span>
                        <h3 className="text-xl font-bold mb-2">No Materials Yet</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-4">Upload your first study material to get started</p>
                        <a href="/dashboard/teacher/upload" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-blue-600 transition-colors font-bold">
                            <span className="material-symbols-outlined">upload_file</span>
                            Upload Material
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {materials.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col hover:border-primary/50 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                                        <span className="material-symbols-outlined text-2xl">{getMaterialIcon(item.content_type)}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handlePublishToggle(item.id, item.is_published)}
                                            className={`text-sm px-2 py-1 rounded ${item.is_published ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'}`}
                                            title={item.is_published ? 'Published' : 'Draft'}
                                        >
                                            <span className="material-symbols-outlined text-base">{item.is_published ? 'visibility' : 'visibility_off'}</span>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="text-slate-400 hover:text-red-500 transition-colors"
                                        >
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold mb-1 line-clamp-2">{item.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                                    {item.subject_name || item.subject} • Grade {item.grade}
                                </p>

                                {item.description && (
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{item.description}</p>
                                )}

                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex justify-between items-center text-sm mb-3">
                                        <span className="font-semibold text-slate-600 dark:text-slate-300 capitalize">{item.content_type}</span>
                                        <div className="flex items-center gap-1 text-slate-500">
                                            <span className="material-symbols-outlined text-base">visibility</span>
                                            <span>{item.views || 0}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleView(item)}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-bold"
                                    >
                                        <span className="material-symbols-outlined">open_in_new</span>
                                        View Document
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Document Viewer Modal */}
                {showViewerModal && selectedMaterial && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
                        <div className="bg-white dark:bg-surface-dark rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                            {/* Modal Header */}
                            <div className="flex justify-between items-start p-6 border-b border-slate-200 dark:border-slate-700">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{selectedMaterial.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">subject</span>
                                            {selectedMaterial.subject_name || selectedMaterial.subject}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">school</span>
                                            Grade {selectedMaterial.grade}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">visibility</span>
                                            {selectedMaterial.views || 0} views
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleCloseModal}
                                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Document Viewer */}
                            <div className="p-6">
                                {getDocumentViewUrl(selectedMaterial) ? (
                                    <div className="w-full h-[600px] rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900">
                                        <iframe
                                            src={getDocumentViewUrl(selectedMaterial)!}
                                            className="w-full h-full"
                                            title={selectedMaterial.title}
                                        ></iframe>
                                    </div>
                                ) : (
                                    <div className="w-full h-[400px] rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <div className="text-center">
                                            <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">description</span>
                                            <p className="text-slate-500 mb-2">Document preview not available</p>
                                            {(selectedMaterial.url || selectedMaterial.file_url) && (
                                                <a
                                                    href={selectedMaterial.url || selectedMaterial.file_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors font-bold mt-4"
                                                >
                                                    <span className="material-symbols-outlined">open_in_new</span>
                                                    Open in New Tab
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Document Description */}
                                {selectedMaterial.description && (
                                    <div className="mt-6">
                                        <h4 className="font-bold mb-2">Description</h4>
                                        <p className="text-slate-600 dark:text-slate-400">{selectedMaterial.description}</p>
                                    </div>
                                )}

                                {/* Document Info */}
                                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">Type</p>
                                        <p className="font-bold capitalize">{selectedMaterial.content_type}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">Status</p>
                                        <p className={`font-bold ${selectedMaterial.is_published ? 'text-green-600 dark:text-green-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                            {selectedMaterial.is_published ? 'Published' : 'Draft'}
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">Uploaded</p>
                                        <p className="font-bold text-sm">{new Date(selectedMaterial.created_at).toLocaleDateString()}</p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-6 flex gap-3">
                                    <button
                                        onClick={() => {
                                            handlePublishToggle(selectedMaterial.id, selectedMaterial.is_published);
                                            handleCloseModal();
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${
                                            selectedMaterial.is_published
                                                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300'
                                                : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined">
                                            {selectedMaterial.is_published ? 'visibility_off' : 'publish'}
                                        </span>
                                        {selectedMaterial.is_published ? 'Unpublish' : 'Publish'}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(selectedMaterial.id, true)}
                                        className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 rounded-lg font-bold transition-colors"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default MyMaterials;
