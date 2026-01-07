import { api } from './api';

export interface Child {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  grade: number;
  has_premium_access: boolean;
  relationship: string;
  linked_at: string;
}

export interface ChildProgress {
  child_id: number;
  total_videos_watched: number;
  total_quizzes_completed: number;
  average_quiz_score: number;
  current_streak: number;
  total_points: number;
  subjects: Array<{
    subject_name: string;
    progress_percentage: number;
  }>;
}

export interface QuizResult {
  id: number;
  quiz_title: string;
  subject_name: string;
  score: number;
  total_questions: number;
  percentage: number;
  completed_at: string;
}

export const parentService = {
  // Get all linked children
  getChildren: async (): Promise<Child[]> => {
    try {
      const response = await api.parent.getChildren();
      return response.data.data.children || [];
    } catch (error) {
      console.error('Error getting children:', error);
      throw error;
    }
  },

  // Link a child to parent account
  linkChild: async (learnerEmail: string, relationship?: string): Promise<void> => {
    try {
      await api.parent.linkChild(learnerEmail, relationship);
    } catch (error: any) {
      console.error('Error linking child:', error);
      throw new Error(error.response?.data?.error || 'Failed to link child');
    }
  },

  // Unlink a child from parent account
  unlinkChild: async (learnerId: number): Promise<void> => {
    try {
      await api.parent.unlinkChild(learnerId);
    } catch (error: any) {
      console.error('Error unlinking child:', error);
      throw new Error(error.response?.data?.error || 'Failed to unlink child');
    }
  },

  // Get child's progress
  getChildProgress: async (learnerId: number): Promise<ChildProgress> => {
    try {
      const response = await api.parent.getChildProgress(learnerId);
      return response.data.data;
    } catch (error) {
      console.error('Error getting child progress:', error);
      throw error;
    }
  },

  // Get child's quiz results
  getChildQuizResults: async (learnerId: number): Promise<QuizResult[]> => {
    try {
      const response = await api.parent.getChildQuizResults(learnerId);
      return response.data.data.results || [];
    } catch (error) {
      console.error('Error getting child quiz results:', error);
      throw error;
    }
  },
};
