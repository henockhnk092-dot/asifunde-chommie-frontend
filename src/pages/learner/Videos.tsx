import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Videos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: 'Introduction to Quadratic Equations',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
      duration: '15:30',
      grade: 10,
      subject: 'Mathematics',
      topic: 'Algebra',
      views: 1250,
      rating: 4.8,
      language: 'en',
      isPremium: false,
      isNew: true,
      progress: 0,
    },
    {
      id: 2,
      title: "Newton's Laws of Motion Explained",
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
      duration: '22:15',
      grade: 10,
      subject: 'Physical Sciences',
      topic: 'Mechanics',
      views: 2100,
      rating: 4.9,
      language: 'en',
      isPremium: true,
      isNew: false,
      progress: 45,
    },
    {
      id: 3,
      title: 'Trigonometric Identities - Part 1',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
      duration: '18:45',
      grade: 11,
      subject: 'Mathematics',
      topic: 'Trigonometry',
      views: 890,
      rating: 4.7,
      language: 'en',
      isPremium: false,
      isNew: true,
      progress: 0,
    },
    {
      id: 4,
      title: 'Chemical Bonding Basics',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
      duration: '25:00',
      grade: 10,
      subject: 'Physical Sciences',
      topic: 'Chemical Systems',
      views: 1560,
      rating: 4.6,
      language: 'en',
      isPremium: true,
      isNew: false,
      progress: 0,
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = !selectedGrade || video.grade === selectedGrade;
    const matchesSubject = !selectedSubject || video.subject === selectedSubject;
    return matchesSearch && matchesGrade && matchesSubject;
  });

  return (
    <DashboardLayout userType="learner" headerTitle="Videos">
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Video Library</h1>
          <p className="text-slate-600 dark:text-slate-400">Browse and watch educational content</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 material-symbols-outlined">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search videos by topic, keyword, or title..."
              className="w-full py-3 pl-12 pr-4 bg-white dark:bg-surface-dark border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Grade
            </label>
            <div className="flex gap-2">
              {[8, 9, 10, 11, 12].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(selectedGrade === grade ? null : grade)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedGrade === grade
                      ? 'bg-primary text-white'
                      : 'bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-primary'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Subject
            </label>
            <div className="flex gap-2">
              {['Mathematics', 'Physical Sciences'].map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(selectedSubject === subject ? null : subject)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedSubject === subject
                      ? 'bg-primary text-white'
                      : 'bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-primary'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-slate-600 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredVideos.length}</span> videos
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary transition-all cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs font-semibold rounded">
                  {video.duration}
                </div>
                {/* Premium Badge */}
                {video.isPremium && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Premium
                  </div>
                )}
                {/* New Badge */}
                {video.isNew && (
                  <div className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">
                    NEW
                  </div>
                )}
                {/* Progress Bar */}
                {video.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/50">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${video.progress}%` }}
                    ></div>
                  </div>
                )}
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>

                {/* Metadata */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 text-xs font-semibold rounded">
                    Grade {video.grade}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 text-xs font-semibold rounded">
                    {video.subject}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-yellow-500">star</span>
                    <span>{video.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">video_library</span>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No videos found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Videos;
