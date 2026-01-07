// User Roles
export type UserRole = 'learner' | 'parent' | 'teacher' | 'admin';

// User Profile
export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  photoURL?: string;
  subscriptionStatus: 'free' | 'premium';
  subscriptionExpiry?: Date;
  notificationPreferences?: {
    emailNotifications: boolean;
    quizReminders: boolean;
    progressReports: boolean;
    careerUpdates: boolean;
    newContent: boolean;
  };
}

// Learner specific profile
export interface LearnerProfile extends UserProfile {
  role: 'learner';
  grade: 8 | 9 | 10 | 11 | 12;
  parentId?: string; // Linked parent user ID
  subjects: string[];
  language: 'en' | 'zu';
}

// Parent specific profile
export interface ParentProfile extends UserProfile {
  role: 'parent';
  linkedChildren: string[]; // Array of learner UIDs
}

// Teacher specific profile
export interface TeacherProfile extends UserProfile {
  role: 'teacher';
  approved: boolean;
  subjects: string[];
}

// Admin specific profile
export interface AdminProfile extends UserProfile {
  role: 'admin';
}

// Video Content
export interface VideoContent {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
  grade: 8 | 9 | 10 | 11 | 12;
  subject: 'Mathematics' | 'Physical Sciences' | 'Life Sciences';
  topic: string;
  language: 'en' | 'zu';
  difficulty: 'easy' | 'medium' | 'hard';
  isPremium: boolean;
  duration: number; // in seconds
  uploadedBy: string; // Teacher UID
  uploadedAt: Date;
  views: number;
  tags: string[];
}

// Study Material
export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  driveUrl: string; // Google Drive or OneDrive link
  type: 'pdf' | 'worksheet' | 'notes' | 'presentation';
  grade: 8 | 9 | 10 | 11 | 12;
  subject: 'Mathematics' | 'Physical Sciences' | 'Life Sciences';
  topic: string;
  language: 'en' | 'zu';
  isPremium: boolean;
  uploadedBy: string;
  uploadedAt: Date;
  downloads: number;
  tags: string[];
}

// Quiz Question
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

// Quiz
export interface Quiz {
  id: string;
  title: string;
  description: string;
  grade: 8 | 9 | 10 | 11 | 12;
  subject: 'Mathematics' | 'Physical Sciences' | 'Life Sciences';
  topic: string;
  questions: QuizQuestion[];
  timeLimit?: number; // in minutes
  dueDate?: Date;
  isPremium: boolean;
  createdBy: string; // Teacher UID
  createdAt: Date;
  aiGenerated: boolean;
  videoId?: string; // Associated video if AI generated
}

// Quiz Attempt
export interface QuizAttempt {
  id: string;
  quizId: string;
  learnerId: string;
  answers: number[]; // Array of selected option indices
  score: number;
  totalPoints: number;
  percentage: number;
  completedAt: Date;
  timeSpent: number; // in seconds
}

// Video Progress
export interface VideoProgress {
  id: string;
  videoId: string;
  learnerId: string;
  watchedSeconds: number;
  totalSeconds: number;
  completed: boolean;
  lastWatchedAt: Date;
  completedAt?: Date;
}

// Career Profile
export interface CareerProfile {
  id: string;
  title: string;
  description: string;
  requiredSubjects: string[];
  minimumAPS: number; // Admission Point Score
  averageScore?: number; // Minimum average required
  universities: string[];

  salaryRange: string;
  demandLevel: 'high' | 'medium' | 'low';
  relatedCareers: string[];
  imageUrl?: string;
  skills: string[];
  relatedVideos: string[]; // Video IDs
}

// Subscription Transaction
export interface SubscriptionTransaction {
  id: string;
  parentId: string;
  learnerId: string;
  amount: number;
  currency: string;
  paymentMethod: 'payfast';
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  transactionId?: string;
  paymentDate: Date;
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;
}

// Parent-Child Link Request
export interface LinkRequest {
  id: string;
  parentId: string;
  learnerId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  respondedAt?: Date;
}

// Progress Report
export interface ProgressReport {
  learnerId: string;
  period: 'daily' | 'weekly' | 'monthly';
  startDate: Date;
  endDate: Date;
  totalVideosWatched: number;
  totalTimeSpent: number; // in seconds
  quizzesTaken: number;
  averageQuizScore: number;
  subjectBreakdown: {
    subject: string;
    videosWatched: number;
    timeSpent: number;
    quizAverage: number;
    masteryPercentage: number;
  }[];
  weakAreas: string[];
  recommendations: string[];
}
