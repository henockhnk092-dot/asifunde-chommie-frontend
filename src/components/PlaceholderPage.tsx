import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description,
  icon = 'construction',
  features = [],
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-4xl text-primary">
                {icon}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
            <span className="material-symbols-outlined text-primary text-sm">
              schedule
            </span>
            <span className="text-primary font-semibold text-sm">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Features List (if provided) */}
        {features.length > 0 && (
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Planned Features
            </h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    check_circle
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Development Status */}
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Development Status
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                Page Status
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm font-semibold">
                In Development
              </span>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-900 dark:text-blue-100 text-sm">
                <span className="material-symbols-outlined text-sm mr-1">info</span>
                This page is currently under development and will be available soon.
                The navigation structure has been set up to allow you to explore all sections.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
