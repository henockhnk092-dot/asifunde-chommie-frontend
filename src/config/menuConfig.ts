/**
 * Menu Configuration for All User Roles
 * Based on project specifications
 */

import type { SidebarItem } from '../components/Sidebar';

// ============================================
// STUDENT/LEARNER MENU
// ============================================
export const learnerMenuItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    label: 'My Subjects',
    icon: 'menu_book',
    path: '/dashboard/subjects',
  },
  {
    label: 'Videos',
    icon: 'play_circle',
    path: '/dashboard/videos',
  },
  {
    label: 'Library',
    icon: 'library_books',
    path: '/dashboard/library',
  },
  {
    label: 'Quizzes',
    icon: 'quiz',
    path: '/dashboard/quizzes',
  },
  {
    label: 'AI Tutor',
    icon: 'psychology',
    path: '/dashboard/ai-tutor',
  },
  {
    label: 'Progress',
    icon: 'trending_up',
    path: '/dashboard/progress',
  },
  {
    label: 'Career Guidance',
    icon: 'explore',
    path: '/dashboard/career-guidance',
  },
  {
    label: 'Profile',
    icon: 'person',
    path: '/dashboard/profile',
  },
];

// ============================================
// PARENT MENU
// ============================================
export const parentMenuItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard/parent',
  },
  {
    label: 'My Children',
    icon: 'family_restroom',
    path: '/dashboard/parent/children',
  },
  {
    label: 'Progress Reports',
    icon: 'assessment',
    path: '/dashboard/parent/reports',
  },
  {
    label: 'Subscription',
    icon: 'payments',
    path: '/dashboard/parent/subscription',
  },
  {
    label: 'Content Preview',
    icon: 'preview',
    path: '/dashboard/parent/content-preview',
  },
  {
    label: 'Notifications',
    icon: 'notifications',
    path: '/dashboard/parent/notifications',
  },
  {
    label: 'Profile',
    icon: 'person',
    path: '/dashboard/parent/profile',
  },
  {
    label: 'Support',
    icon: 'help',
    path: '/dashboard/parent/support',
  },
];

// ============================================
// TEACHER MENU
// ============================================
export const teacherMenuItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard/teacher',
  },
  {
    label: 'Upload Content',
    icon: 'cloud_upload',
    path: '/dashboard/teacher/upload',
  },
  {
    label: 'My Videos',
    icon: 'video_library',
    path: '/dashboard/teacher/videos',
  },
  {
    label: 'My Materials',
    icon: 'folder',
    path: '/dashboard/teacher/materials',
  },
  {
    label: 'Create Assessment',
    icon: 'add_task',
    path: '/dashboard/teacher/create-assessment',
  },
  {
    label: 'My Assessments',
    icon: 'assignment',
    path: '/dashboard/teacher/assessments',
  },
  {
    label: 'Student Performance',
    icon: 'bar_chart',
    path: '/dashboard/teacher/performance',
  },
  {
    label: 'Assigned Students',
    icon: 'groups',
    path: '/dashboard/teacher/students',
  },
  {
    label: 'Profile',
    icon: 'person',
    path: '/dashboard/teacher/profile',
  },
];

// ============================================
// ADMIN MENU
// ============================================
export const adminMenuItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard/admin',
  },
  {
    label: 'User Management',
    icon: 'people',
    path: '/dashboard/admin/users',
  },
  {
    label: 'Content Management',
    icon: 'video_library',
    path: '/dashboard/admin/content',
  },
  {
    label: 'Quiz Management',
    icon: 'quiz',
    path: '/dashboard/admin/quizzes',
  },
  {
    label: 'Teacher Approvals',
    icon: 'approval',
    path: '/dashboard/admin/teacher-approvals',
  },
  {
    label: 'Subscriptions',
    icon: 'subscriptions',
    path: '/dashboard/admin/subscriptions',
  },
  {
    label: 'Payments',
    icon: 'payment',
    path: '/dashboard/admin/payments',
  },
  {
    label: 'Analytics',
    icon: 'analytics',
    path: '/dashboard/admin/analytics',
  },
  {
    label: 'Settings',
    icon: 'settings',
    path: '/dashboard/admin/settings',
  },
  {
    label: 'Reports',
    icon: 'summarize',
    path: '/dashboard/admin/reports',
  },
  {
    label: 'Support Tickets',
    icon: 'support_agent',
    path: '/dashboard/admin/support',
  },
];

// ============================================
// GET MENU ITEMS BY ROLE
// ============================================
export const getMenuItemsByRole = (role: string): SidebarItem[] => {
  switch (role) {
    case 'learner':
      return learnerMenuItems;
    case 'parent':
      return parentMenuItems;
    case 'teacher':
      return teacherMenuItems;
    case 'admin':
      return adminMenuItems;
    default:
      return learnerMenuItems; // Default fallback
  }
};
