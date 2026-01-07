import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { api } from '../../services/api';

interface Video {
    id: number;
    title: string;
    grade: number;
    subject: string;
    subject_name?: string;
    subject_id?: number;
    views: number;
    is_published: boolean;
    is_premium: boolean;
    created_at: string;
    platform?: string;
    video_id?: string;
    video_platform?: string;
    content_type?: string;
    description?: string;
}

const MyVideos: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [showVideoModal, setShowVideoModal] = useState(false);

    // Fetch teacher's content on mount
    useEffect(() => {
        fetchMyVideos();
    }, []);

    const fetchMyVideos = async () => {
        try {
            setLoading(true);
            setError(null);

            // Fetch content created by current teacher
            const response = await api.content.getMyContent();
            const allContent = response.data.data.content || [];

            // Filter only video content
            const videoContent = allContent.filter((item: any) => item.content_type === 'video');
            setVideos(videoContent);
        } catch (err: any) {
            console.error('Error fetching videos:', err);
            setError(err.response?.data?.error || 'Failed to load videos');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm("Are you sure you want to delete this video?")) {
            try {
                await api.content.delete(id);
                setVideos(videos.filter(v => v.id !== id));
            } catch (err: any) {
                console.error('Delete error:', err);
                alert('Failed to delete video: ' + (err.response?.data?.error || 'Unknown error'));
            }
        }
    };

    const handlePublishToggle = async (id: number, currentlyPublished: boolean) => {
        try {
            if (currentlyPublished) {
                await api.content.unpublish(id);
            } else {
                await api.content.publish(id);
            }
            // Refresh the list
            await fetchMyVideos();
        } catch (err: any) {
            console.error('Publish/unpublish error:', err);
            alert('Failed to update video status: ' + (err.response?.data?.error || 'Unknown error'));
        }
    };

    const handlePlayVideo = (video: Video) => {
        setSelectedVideo(video);
        setShowVideoModal(true);
    };

    const handleCloseModal = () => {
        setShowVideoModal(false);
        setSelectedVideo(null);
    };

    const getVideoEmbedUrl = (video: Video) => {
        const platform = video.video_platform || video.platform;
        const videoId = video.video_id;

        if (!platform || !videoId) return null;

        switch (platform.toLowerCase()) {
            case 'youtube':
                return `https://www.youtube.com/embed/${videoId}`;
            case 'vimeo':
                return `https://player.vimeo.com/video/${videoId}`;
            case 'google_drive':
                return `https://drive.google.com/file/d/${videoId}/preview`;
            default:
                return null;
        }
    };

    return (
        <DashboardLayout userType="teacher" headerTitle="My Videos">
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-900 dark:text-white">

                <div className="flex justify-between items-center bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-2xl font-bold">Video Library</h2>
                        <p className="text-slate-500 dark:text-slate-400">Manage your uploaded lessons</p>
                    </div>
                    {/* Link to upload page (button style) */}
                    <a href="/dashboard/teacher/upload" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-blue-600 transition-colors font-bold">
                        <span className="material-symbols-outlined">cloud_upload</span>
                        Upload New
                    </a>
                </div>

                {loading ? (
                    <div className="bg-white dark:bg-surface-dark p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-center">
                        <span className="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
                        <p className="mt-4 text-slate-500">Loading videos...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border border-red-200 dark:border-red-800 flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-600 dark:text-red-400">error</span>
                        <p className="text-red-800 dark:text-red-200 font-medium">{error}</p>
                    </div>
                ) : videos.length === 0 ? (
                    <div className="bg-white dark:bg-surface-dark p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 text-center">
                        <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">video_library</span>
                        <h3 className="text-xl font-bold mb-2">No videos yet</h3>
                        <p className="text-slate-500 mb-6">Upload your first video lesson to get started</p>
                        <a href="/dashboard/teacher/upload" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-blue-600 transition-colors font-bold">
                            <span className="material-symbols-outlined">cloud_upload</span>
                            Upload Video
                        </a>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">
                                    <tr>
                                        <th className="p-6">Title</th>
                                        <th className="p-6">Subject</th>
                                        <th className="p-6">Type</th>
                                        <th className="p-6">Views</th>
                                        <th className="p-6">Status</th>
                                        <th className="p-6 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {videos.map(video => (
                                        <tr key={video.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="p-6 font-bold">{video.title}</td>
                                            <td className="p-6">
                                                <div className="flex flex-col">
                                                    <a
                                                        href={`/subjects?subject=${video.subject_id || video.subject}&grade=${video.grade}`}
                                                        className="font-semibold text-primary hover:underline cursor-pointer"
                                                        title="View all content in this subject"
                                                    >
                                                        {video.subject_name || video.subject}
                                                    </a>
                                                    <span className="text-xs text-slate-500">Grade {video.grade}</span>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${video.is_premium ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                                                    {video.is_premium ? 'Premium' : 'Free'}
                                                </span>
                                            </td>
                                            <td className="p-6">{(video.views || 0).toLocaleString()}</td>
                                            <td className="p-6">
                                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${video.is_published ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
                                                    {video.is_published ? 'Published' : 'Draft'}
                                                </span>
                                            </td>
                                            <td className="p-6">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => handlePlayVideo(video)}
                                                        className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full text-slate-500 hover:text-blue-500 transition-colors"
                                                        title="Play Video"
                                                    >
                                                        <span className="material-symbols-outlined">play_circle</span>
                                                    </button>
                                                    <button
                                                        onClick={() => handlePublishToggle(video.id, video.is_published)}
                                                        className={`p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors ${video.is_published ? 'text-slate-500 hover:text-orange-500' : 'text-slate-500 hover:text-green-500'}`}
                                                        title={video.is_published ? 'Unpublish' : 'Publish'}
                                                    >
                                                        <span className="material-symbols-outlined">{video.is_published ? 'visibility_off' : 'publish'}</span>
                                                    </button>
                                                    <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-500 hover:text-primary transition-colors" title="Edit">
                                                        <span className="material-symbols-outlined">edit</span>
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(video.id)}
                                                        className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full text-slate-500 hover:text-red-500 transition-colors"
                                                        title="Delete"
                                                    >
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
                )}

                {/* Video Player Modal */}
                {showVideoModal && selectedVideo && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
                        <div className="bg-white dark:bg-surface-dark rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                            {/* Modal Header */}
                            <div className="flex justify-between items-start p-6 border-b border-slate-200 dark:border-slate-700">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">subject</span>
                                            {selectedVideo.subject_name || selectedVideo.subject}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">school</span>
                                            Grade {selectedVideo.grade}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">visibility</span>
                                            {(selectedVideo.views || 0).toLocaleString()} views
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

                            {/* Video Player */}
                            <div className="p-6">
                                {getVideoEmbedUrl(selectedVideo) ? (
                                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                        <iframe
                                            src={getVideoEmbedUrl(selectedVideo)!}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={selectedVideo.title}
                                        ></iframe>
                                    </div>
                                ) : (
                                    <div className="aspect-video rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <div className="text-center">
                                            <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">videocam_off</span>
                                            <p className="text-slate-500">Video player not available</p>
                                            <p className="text-sm text-slate-400 mt-2">
                                                Platform: {selectedVideo.video_platform || selectedVideo.platform || 'Unknown'}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Video Description */}
                                {selectedVideo.description && (
                                    <div className="mt-6">
                                        <h4 className="font-bold mb-2">Description</h4>
                                        <p className="text-slate-600 dark:text-slate-400">{selectedVideo.description}</p>
                                    </div>
                                )}

                                {/* Video Info */}
                                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">Type</p>
                                        <p className={`font-bold ${selectedVideo.is_premium ? 'text-yellow-600 dark:text-yellow-400' : 'text-blue-600 dark:text-blue-400'}`}>
                                            {selectedVideo.is_premium ? 'Premium' : 'Free'}
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">Status</p>
                                        <p className={`font-bold ${selectedVideo.is_published ? 'text-green-600 dark:text-green-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                            {selectedVideo.is_published ? 'Published' : 'Draft'}
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">Platform</p>
                                        <p className="font-bold capitalize">{selectedVideo.video_platform || selectedVideo.platform || 'N/A'}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                                        <p className="text-xs text-slate-500 mb-1">Video ID</p>
                                        <p className="font-bold text-xs truncate">{selectedVideo.video_id || 'N/A'}</p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="mt-6 flex gap-3">
                                    <button
                                        onClick={() => {
                                            handlePublishToggle(selectedVideo.id, selectedVideo.is_published);
                                            handleCloseModal();
                                        }}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors ${
                                            selectedVideo.is_published
                                                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300'
                                                : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300'
                                        }`}
                                    >
                                        <span className="material-symbols-outlined">
                                            {selectedVideo.is_published ? 'visibility_off' : 'publish'}
                                        </span>
                                        {selectedVideo.is_published ? 'Unpublish' : 'Publish'}
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleDelete(selectedVideo.id);
                                            handleCloseModal();
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 rounded-lg font-bold transition-colors"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                        Delete Video
                                    </button>
                                    <button
                                        onClick={handleCloseModal}
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 rounded-lg font-bold transition-colors ml-auto"
                                    >
                                        Close
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

export default MyVideos;
