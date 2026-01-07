import { api } from './api';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  subject_id: number;
  subject_name?: string;
  grade: number;
  topic?: string;
  is_premium: boolean;
  difficulty: string;
  time_limit_minutes?: number;
  passing_score?: number;
  questions: QuizQuestion[];
  teacher_id: number;
  teacher_name?: string;
  created_at: string;
  due_date?: string;
}

export interface QuizAttempt {
  id: number;
  quiz_id: number;
  quiz_title?: string;
  learner_id: number;
  answers: number[];
  score: number;
  total_points: number;
  percentage: number;
  time_spent_seconds: number;
  completed_at: string;
}

export const quizService = {
  // Get all quizzes
  getAllQuizzes: async (filters?: {
    grade?: number;
    subject_id?: number;
    is_premium?: boolean;
  }): Promise<Quiz[]> => {
    try {
      const response = await api.quizzes.getAll(filters);
      return response.data.data.quizzes || [];
    } catch (error) {
      console.error('Error getting quizzes:', error);
      return [];
    }
  },

  // Get quiz by ID
  getQuizById: async (quizId: number): Promise<Quiz | null> => {
    try {
      const response = await api.quizzes.getById(quizId);
      return response.data.data.quiz || null;
    } catch (error) {
      console.error('Error getting quiz:', error);
      return null;
    }
  },

  // Create quiz (teacher only)
  createQuiz: async (quizData: {
    title: string;
    description: string;
    subject_id: number;
    grade: number;
    topic?: string;
    is_premium: boolean;
    difficulty: string;
    time_limit_minutes?: number;
    passing_score?: number;
    questions: QuizQuestion[];
    due_date?: string;
  }): Promise<Quiz> => {
    try {
      const response = await api.quizzes.create(quizData);
      return response.data.data.quiz;
    } catch (error: any) {
      console.error('Error creating quiz:', error);
      throw new Error(error.response?.data?.error || 'Failed to create quiz');
    }
  },

  // Submit quiz attempt
  submitQuizAttempt: async (
    quizId: number,
    answers: number[],
    timeSpent: number
  ): Promise<QuizAttempt> => {
    try {
      const response = await api.quizzes.submit(quizId, {
        answers,
        time_spent_seconds: timeSpent,
      });
      return response.data.data.attempt;
    } catch (error: any) {
      console.error('Error submitting quiz:', error);
      throw new Error(error.response?.data?.error || 'Failed to submit quiz');
    }
  },

  // Get quiz results
  getQuizResults: async (attemptId: number): Promise<any> => {
    try {
      const response = await api.quizzes.getResults(attemptId);
      return response.data.data.results;
    } catch (error) {
      console.error('Error getting quiz results:', error);
      throw error;
    }
  },

  // Get my quiz attempts
  getMyAttempts: async (): Promise<QuizAttempt[]> => {
    try {
      const response = await api.quizzes.getUserAttempts();
      return response.data.data.attempts || [];
    } catch (error) {
      console.error('Error getting quiz attempts:', error);
      return [];
    }
  },

  // Generate quiz using AI
  generateQuiz: async (
    topic: string,
    difficulty: 'easy' | 'medium' | 'hard',
    questionCount: number = 10
  ): Promise<QuizQuestion[]> => {
    try {
      const response = await api.ai.generateQuiz(topic, difficulty, questionCount);
      return response.data.data.questions || [];
    } catch (error: any) {
      console.error('Error generating quiz with AI:', error);
      throw new Error(error.response?.data?.error || 'Failed to generate quiz');
    }
  },
};
