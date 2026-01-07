import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { api } from '../../services/api';

const Upload: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'video' | 'material'>('video');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Form States
    const [videoForm, setVideoForm] = useState({
        title: '',
        url: '',
        grade: 'Grade 10',
        subject: 'Mathematics',
        topic: '',
        description: '',
        isPremium: false
    });

    const [materialForm, setMaterialForm] = useState({
        title: '',
        url: '', // Google Drive Link
        type: 'PDF',
        grade: 'Grade 10',
        subject: 'Mathematics',
        topic: '',
        isPremium: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            if (activeTab === 'video') {
                // Extract video ID from URL
                let videoId = '';
                let platform = 'youtube';

                if (videoForm.url.includes('youtube.com') || videoForm.url.includes('youtu.be')) {
                    const urlParams = new URLSearchParams(new URL(videoForm.url).search);
                    videoId = urlParams.get('v') || videoForm.url.split('/').pop() || '';
                    platform = 'youtube';
                } else if (videoForm.url.includes('vimeo.com')) {
                    videoId = videoForm.url.split('/').pop() || '';
                    platform = 'vimeo';
                } else if (videoForm.url.includes('drive.google.com')) {
                    const match = videoForm.url.match(/\/d\/([^/]+)/);
                    videoId = match ? match[1] : '';
                    platform = 'google_drive';
                }

                const contentData = {
                    title: videoForm.title,
                    description: videoForm.description,
                    content_type: 'video',
                    platform: platform,
                    video_id: videoId,
                    subject: videoForm.subject,
                    grade: parseInt(videoForm.grade.replace('Grade ', '')),
                    topic: videoForm.topic,
                    is_premium: videoForm.isPremium
                };

                await api.content.create(contentData);
                setSuccess('Video uploaded successfully!');
                setVideoForm({ title: '', url: '', grade: 'Grade 10', subject: 'Mathematics', topic: '', description: '', isPremium: false });
            } else {
                const contentData = {
                    title: materialForm.title,
                    content_type: 'document',
                    file_url: materialForm.url,
                    file_type: materialForm.type.toLowerCase(),
                    subject: materialForm.subject,
                    grade: parseInt(materialForm.grade.replace('Grade ', '')),
                    topic: materialForm.topic,
                    is_premium: materialForm.isPremium
                };

                await api.content.create(contentData);
                setSuccess('Study material uploaded successfully!');
                setMaterialForm({ title: '', url: '', type: 'PDF', grade: 'Grade 10', subject: 'Mathematics', topic: '', isPremium: false });
            }
        } catch (err: any) {
            console.error('Upload error:', err);
            setError(err.response?.data?.error || 'Failed to upload content. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout userType="teacher" headerTitle="Upload Content">
            <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 text-slate-900 dark:text-white">

                {/* Tabs */}
                <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
                    <button
                        onClick={() => setActiveTab('video')}
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === 'video' ? 'bg-white dark:bg-surface-dark shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        Video Lesson
                    </button>
                    <button
                        onClick={() => setActiveTab('material')}
                        className={`px-6 py-2 rounded-lg font-bold transition-all ${activeTab === 'material' ? 'bg-white dark:bg-surface-dark shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                        Study Material
                    </button>
                </div>

                <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h2 className="text-2xl font-bold mb-6">
                        {activeTab === 'video' ? 'Add New Video Lesson' : 'Add Study Material'}
                    </h2>

                    {/* Success Message */}
                    {success && (
                        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3">
                            <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
                            <p className="text-green-800 dark:text-green-200 font-medium">{success}</p>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
                            <span className="material-symbols-outlined text-red-600 dark:text-red-400">error</span>
                            <p className="text-red-800 dark:text-red-200 font-medium">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Common Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Content Title</label>
                                <input
                                    type="text"
                                    required
                                    value={activeTab === 'video' ? videoForm.title : materialForm.title}
                                    onChange={(e) => activeTab === 'video' ? setVideoForm({ ...videoForm, title: e.target.value }) : setMaterialForm({ ...materialForm, title: e.target.value })}
                                    placeholder={activeTab === 'video' ? "e.g. Introduction to Algebra" : "e.g. Algebra Worksheet 1"}
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-400">
                                    {activeTab === 'video' ? 'YouTube URL' : 'Google Drive / Share URL'}
                                </label>
                                <input
                                    type="url"
                                    required
                                    value={activeTab === 'video' ? videoForm.url : materialForm.url}
                                    onChange={(e) => activeTab === 'video' ? setVideoForm({ ...videoForm, url: e.target.value }) : setMaterialForm({ ...materialForm, url: e.target.value })}
                                    placeholder="https://..."
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Grade</label>
                                <select
                                    value={activeTab === 'video' ? videoForm.grade : materialForm.grade}
                                    onChange={(e) => activeTab === 'video' ? setVideoForm({ ...videoForm, grade: e.target.value }) : setMaterialForm({ ...materialForm, grade: e.target.value })}
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                >
                                    {[8, 9, 10, 11, 12].map(g => <option key={g} value={`Grade ${g}`}>Grade {g}</option>)}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Subject</label>
                                <select
                                    value={activeTab === 'video' ? videoForm.subject : materialForm.subject}
                                    onChange={(e) => activeTab === 'video' ? setVideoForm({ ...videoForm, subject: e.target.value }) : setMaterialForm({ ...materialForm, subject: e.target.value })}
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                >
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Physical Sciences">Physical Sciences</option>
                                    <option value="Life Sciences">Life Sciences</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Topic</label>
                                <input
                                    type="text"
                                    required
                                    value={activeTab === 'video' ? videoForm.topic : materialForm.topic}
                                    onChange={(e) => activeTab === 'video' ? setVideoForm({ ...videoForm, topic: e.target.value }) : setMaterialForm({ ...materialForm, topic: e.target.value })}
                                    placeholder="e.g. Geometry"
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                        </div>

                        {activeTab === 'video' && (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Description</label>
                                <textarea
                                    rows={4}
                                    value={videoForm.description}
                                    onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
                                    placeholder="Brief summary of the lesson..."
                                    className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                                />
                            </div>
                        )}

                        {activeTab === 'material' && (
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-500 dark:text-slate-400">Material Type</label>
                                <div className="flex gap-4">
                                    {['PDF', 'Worksheet', 'Notes', 'Past Paper'].map(type => (
                                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="type"
                                                value={type}
                                                checked={materialForm.type === type}
                                                onChange={(e) => setMaterialForm({ ...materialForm, type: e.target.value })}
                                                className="w-4 h-4 text-primary focus:ring-primary"
                                            />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Premium Content Toggle */}
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={activeTab === 'video' ? videoForm.isPremium : materialForm.isPremium}
                                    onChange={(e) => activeTab === 'video'
                                        ? setVideoForm({ ...videoForm, isPremium: e.target.checked })
                                        : setMaterialForm({ ...materialForm, isPremium: e.target.checked })}
                                    className="w-5 h-5 text-primary focus:ring-primary rounded"
                                />
                                <div>
                                    <span className="font-bold text-yellow-900 dark:text-yellow-100">Premium Content</span>
                                    <p className="text-sm text-yellow-800 dark:text-yellow-200">Only students with active parent subscriptions can access this content</p>
                                </div>
                            </label>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <span className="material-symbols-outlined animate-spin">sync</span>
                                        Uploading...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">cloud_upload</span>
                                        Upload Content
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800 flex gap-4">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">info</span>
                    <div>
                        <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Zero Storage Policy</h3>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                            Please note that we do not store video or document files directly.
                            <strong> Videos must be hosted on YouTube (Unlisted)</strong> and
                            <strong> documents on Google Drive (Viewer link)</strong>.
                            This ensures fast streaming and low costs.
                        </p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Upload;
