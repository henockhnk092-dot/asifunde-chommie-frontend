import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const MySubjects: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState(10);
  const grades = [8, 9, 10, 11, 12];

  const subjects = [
    {
      name: 'Mathematics',
      icon: 'calculate',
      totalTopics: 12,
      totalVideos: 145,
      completionPercentage: 45,
      color: 'blue',
    },
    {
      name: 'Physical Sciences',
      icon: 'science',
      totalTopics: 15,
      totalVideos: 178,
      completionPercentage: 30,
      color: 'purple',
    },
  ];

  const mathTopics = [
    { name: 'Algebra', videos: 25, completed: 15, difficulty: 'Medium' },
    { name: 'Functions', videos: 18, completed: 8, difficulty: 'Hard' },
    { name: 'Trigonometry', videos: 22, completed: 12, difficulty: 'Medium' },
    { name: 'Analytical Geometry', videos: 20, completed: 5, difficulty: 'Hard' },
    { name: 'Statistics', videos: 15, completed: 0, difficulty: 'Easy' },
    { name: 'Probability', videos: 12, completed: 0, difficulty: 'Medium' },
  ];

  const scienceTopics = [
    { name: 'Mechanics', videos: 30, completed: 10, difficulty: 'Medium', type: 'Physics' },
    { name: 'Waves & Sound', videos: 22, completed: 5, difficulty: 'Hard', type: 'Physics' },
    { name: 'Electricity & Magnetism', videos: 28, completed: 8, difficulty: 'Hard', type: 'Physics' },
    { name: 'Matter & Materials', videos: 25, completed: 0, difficulty: 'Easy', type: 'Chemistry' },
    { name: 'Chemical Systems', videos: 20, completed: 0, difficulty: 'Medium', type: 'Chemistry' },
    { name: 'Chemical Change', videos: 18, completed: 0, difficulty: 'Medium', type: 'Chemistry' },
  ];

  return (
    <DashboardLayout userType="learner" headerTitle="My Subjects">
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Grade Selector */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">My Subjects</h1>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  selectedGrade === grade
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white dark:bg-surface-dark text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Grade {grade}
              </button>
            ))}
          </div>
        </div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 bg-${subject.color}-100 dark:bg-${subject.color}-900/20 rounded-lg`}>
                    <span className={`material-symbols-outlined text-3xl text-${subject.color}-600 dark:text-${subject.color}-400`}>
                      {subject.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{subject.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {subject.totalTopics} topics • {subject.totalVideos} videos
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress</span>
                  <span className="text-sm font-bold text-primary">{subject.completionPercentage}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all"
                    style={{ width: `${subject.completionPercentage}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full py-2.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                View Topics
              </button>
            </div>
          ))}
        </div>

        {/* Mathematics Topics */}
        <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600">calculate</span>
            Mathematics Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mathTopics.map((topic) => (
              <div
                key={topic.name}
                className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{topic.name}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    topic.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                    topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                    'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {topic.difficulty}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {topic.videos} videos • {topic.completed} completed
                </p>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-2">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: `${(topic.completed / topic.videos) * 100}%` }}
                  ></div>
                </div>
                <button className="text-sm text-primary hover:underline font-medium">
                  {topic.completed > 0 ? 'Continue Learning' : 'Start Learning'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Sciences Topics */}
        <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-purple-600">science</span>
            Physical Sciences Topics
          </h2>

          {/* Physics Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Physics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scienceTopics.filter(t => t.type === 'Physics').map((topic) => (
                <div
                  key={topic.name}
                  className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{topic.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      topic.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                      topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {topic.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {topic.videos} videos • {topic.completed} completed
                  </p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-2">
                    <div
                      className="bg-purple-600 h-1.5 rounded-full"
                      style={{ width: `${(topic.completed / topic.videos) * 100}%` }}
                    ></div>
                  </div>
                  <button className="text-sm text-primary hover:underline font-medium">
                    {topic.completed > 0 ? 'Continue Learning' : 'Start Learning'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Chemistry Section */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">Chemistry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scienceTopics.filter(t => t.type === 'Chemistry').map((topic) => (
                <div
                  key={topic.name}
                  className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{topic.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      topic.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                      topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                    }`}>
                      {topic.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    {topic.videos} videos • {topic.completed} completed
                  </p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-2">
                    <div
                      className="bg-purple-600 h-1.5 rounded-full"
                      style={{ width: `${(topic.completed / topic.videos) * 100}%` }}
                    ></div>
                  </div>
                  <button className="text-sm text-primary hover:underline font-medium">
                    {topic.completed > 0 ? 'Continue Learning' : 'Start Learning'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MySubjects;
