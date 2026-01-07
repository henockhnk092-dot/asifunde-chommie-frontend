import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import type { UserRole } from '../types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  requirePremium?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles, requirePremium = false }) => {
  const { user, userProfile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!userProfile) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userProfile.role)) {
    return <Navigate to="/" replace />;
  }

  if (requirePremium && userProfile.subscriptionStatus !== 'premium') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-6">
        <div className="max-w-md w-full bg-white dark:bg-surface-dark rounded-xl shadow-xl p-8 text-center">
          <div className="size-16 mx-auto mb-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl text-yellow-600 dark:text-yellow-400">
              lock
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Premium Content</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            This content is only available to premium subscribers. Upgrade your account to access all features.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => (window.location.href = '/settings?tab=subscription')}
              className="w-full h-12 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              Upgrade to Premium
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="w-full h-12 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
