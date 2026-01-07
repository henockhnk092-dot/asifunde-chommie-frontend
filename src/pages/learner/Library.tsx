import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const Library: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);

  const materials = [
    {
      id: 1,
      title: 'Algebra Complete Study Guide',
      type: 'PDF',
      subject: 'Mathematics',
      grade: 10,
      topic: 'Algebra',
      pages: 45,
      size: '2.3 MB',
      uploadedBy: 'Mr. Johnson',
      uploadDate: '2024-11-15',
      isPremium: false,
      previewUrl: 'https://docs.google.com/gview?url=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf&embedded=true',
      thumbnailUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Physics - Mechanics Worksheets',
      type: 'PDF',
      subject: 'Physical Sciences',
      grade: 10,
      topic: 'Mechanics',
      pages: 28,
      size: '1.8 MB',
      uploadedBy: 'Ms. Williams',
      uploadDate: '2024-11-20',
      isPremium: true,
      previewUrl: 'https://docs.google.com/gview?url=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf&embedded=true',
      thumbnailUrl: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Trigonometry Formulas & Examples',
      type: 'PDF',
      subject: 'Mathematics',
      grade: 11,
      topic: 'Trigonometry',
      pages: 18,
      size: '1.2 MB',
      uploadedBy: 'Mr. Davis',
      uploadDate: '2024-12-01',
      isPremium: false,
      previewUrl: 'https://docs.google.com/gview?url=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf&embedded=true',
      thumbnailUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Chemistry - Periodic Table Reference',
      type: 'PDF',
      subject: 'Physical Sciences',
      grade: 10,
      topic: 'Matter & Materials',
      pages: 12,
      size: '900 KB',
      uploadedBy: 'Dr. Smith',
      uploadDate: '2024-11-28',
      isPremium: true,
      previewUrl: 'https://docs.google.com/gview?url=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf&embedded=true',
      thumbnailUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = !selectedGrade || material.grade === selectedGrade;
    const matchesSubject = !selectedSubject || material.subject === selectedSubject;
    return matchesSearch && matchesGrade && matchesSubject;
  });

  return (
    <DashboardLayout userType="learner" headerTitle="Library">
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Material Viewer Modal */}
        {selectedMaterial && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-surface-dark rounded-xl max-w-6xl w-full h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {selectedMaterial.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {selectedMaterial.pages} pages • {selectedMaterial.size}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Watermark Notice */}
                  <div className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 text-xs font-semibold rounded-lg flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">shield</span>
                    Content Protected
                  </div>
                  <button
                    onClick={() => setSelectedMaterial(null)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
                      close
                    </span>
                  </button>
                </div>
              </div>

              {/* Viewer */}
              <div className="flex-1 relative overflow-hidden">
                {/* Watermark Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-10">
                  <div className="text-6xl font-bold text-slate-900 dark:text-white transform rotate-45">
                    user@example.com
                  </div>
                </div>

                {/* PDF/Document Viewer */}
                <iframe
                  src={selectedMaterial.previewUrl}
                  className="w-full h-full border-0"
                  title={selectedMaterial.title}
                  sandbox="allow-same-origin allow-scripts"
                />

                {/* No Download Overlay - Prevents right-click */}
                <div
                  className="absolute inset-0 pointer-events-auto"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ userSelect: 'none' }}
                />
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
                  🔒 This content is view-only and cannot be downloaded. All content is protected and watermarked.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Study Library</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Browse and view study materials (View-only, no downloads)
          </p>
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
              placeholder="Search study materials by title or topic..."
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
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedGrade === grade
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
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedSubject === subject
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
        <div className="mb-4 flex items-center justify-between">
          <p className="text-slate-600 dark:text-slate-400">
            Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredMaterials.length}</span>{' '}
            materials
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined text-sm">info</span>
            All materials are view-only
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              onClick={() => setSelectedMaterial(material)}
              className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary transition-all cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="relative h-48 bg-slate-100 dark:bg-slate-800">
                <img
                  src={material.thumbnailUrl}
                  alt={material.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Premium Badge */}
                {material.isPremium && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Premium
                  </div>
                )}
                {/* File Type Badge */}
                <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 text-white text-xs font-semibold rounded">
                  {material.type}
                </div>
                {/* View Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">visibility</span>
                    View Material
                  </span>
                </div>
              </div>

              {/* Material Info */}
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {material.title}
                </h3>

                {/* Metadata */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 text-xs font-semibold rounded">
                    Grade {material.grade}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 text-xs font-semibold rounded">
                    {material.subject}
                  </span>
                </div>

                {/* Stats */}
                <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">description</span>
                    <span>{material.pages} pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">folder</span>
                    <span>{material.size}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl text-slate-400 mb-4">library_books</span>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No materials found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Library;
