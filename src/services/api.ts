import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

// API Base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor to add JWT token to headers
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear auth data
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userProfile');
      // Redirect to login if needed
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// API service methods
export const api = {
  // Auth endpoints
  auth: {
    register: (data: any) => apiClient.post('/auth/register', data),
    login: (email: string, password: string) =>
      apiClient.post('/auth/login', { email, password }),
    logout: () => apiClient.post('/auth/logout'),
    getProfile: () => apiClient.get('/auth/me'),
    refreshToken: () => apiClient.post('/auth/refresh-token'),
  },

  // User endpoints
  users: {
    getById: (id: number) => apiClient.get(`/users/${id}`),
    update: (id: number, data: any) => apiClient.put(`/users/${id}`, data),
    delete: (id: number) => apiClient.delete(`/users/${id}`),
  },

  // Parent endpoints
  parent: {
    getChildren: () => apiClient.get('/parent/children'),
    linkChild: (learner_email: string, relationship?: string) =>
      apiClient.post('/parent/link-child', { learner_email, relationship }),
    unlinkChild: (learnerId: number) =>
      apiClient.delete(`/parent/unlink-child/${learnerId}`),
    getChildProgress: (learnerId: number) =>
      apiClient.get(`/parent/child-progress/${learnerId}`),
    getChildQuizResults: (learnerId: number) =>
      apiClient.get(`/parent/child-quiz-results/${learnerId}`),
  },

  // Subscription endpoints
  subscriptions: {
    getCurrent: () => apiClient.get('/subscriptions/current'),
    getPlans: () => apiClient.get('/subscriptions/plans'),
    subscribe: (planId: number) =>
      apiClient.post('/subscriptions/subscribe', { plan_id: planId }),
    cancel: () => apiClient.post('/subscriptions/cancel'),
    getPaymentHistory: () => apiClient.get('/subscriptions/payment-history'),
  },

  // Video endpoints
  videos: {
    getAll: (filters?: any) => apiClient.get('/videos', { params: filters }),
    getById: (id: number) => apiClient.get(`/videos/${id}`),
    create: (data: any) => apiClient.post('/videos', data),
    update: (id: number, data: any) => apiClient.put(`/videos/${id}`, data),
    delete: (id: number) => apiClient.delete(`/videos/${id}`),
    trackView: (videoId: number, duration: number) =>
      apiClient.post(`/videos/${videoId}/view`, { duration }),
  },

  // Subject endpoints
  subjects: {
    getAll: () => apiClient.get('/subjects'),
    getById: (id: number) => apiClient.get(`/subjects/${id}`),
    getContent: (subjectId: number) =>
      apiClient.get(`/subjects/${subjectId}/content`),
  },

  // Quiz endpoints
  quizzes: {
    getAll: (filters?: any) => apiClient.get('/quizzes', { params: filters }),
    getById: (id: number) => apiClient.get(`/quizzes/${id}`),
    create: (data: any) => apiClient.post('/quizzes', data),
    submit: (quizId: number, answers: any) =>
      apiClient.post(`/quizzes/${quizId}/submit`, { answers }),
    getResults: (attemptId: number) =>
      apiClient.get(`/quizzes/results/${attemptId}`),
    getUserAttempts: () => apiClient.get('/quizzes/my-attempts'),
  },

  // Progress endpoints
  progress: {
    getMy: () => apiClient.get('/progress/my-progress'),
    getBySubject: (subjectId: number) =>
      apiClient.get(`/progress/subject/${subjectId}`),
    updateProgress: (data: any) => apiClient.post('/progress/update', data),
  },

  // Gamification endpoints
  gamification: {
    getLeaderboard: () => apiClient.get('/gamification/leaderboard'),
    getMyAchievements: () => apiClient.get('/gamification/my-achievements'),
    getMyBadges: () => apiClient.get('/gamification/my-badges'),
  },

  // Career endpoints
  careers: {
    getAll: () => apiClient.get('/careers'),
    getById: (id: number) => apiClient.get(`/careers/${id}`),
    getRecommendations: () => apiClient.get('/careers/recommendations'),
  },

  // Community endpoints
  community: {
    getPosts: (filters?: any) => apiClient.get('/community/posts', { params: filters }),
    getPost: (id: number) => apiClient.get(`/community/posts/${id}`),
    createPost: (data: any) => apiClient.post('/community/posts', data),
    updatePost: (id: number, data: any) =>
      apiClient.put(`/community/posts/${id}`, data),
    deletePost: (id: number) => apiClient.delete(`/community/posts/${id}`),
    addComment: (postId: number, content: string) =>
      apiClient.post(`/community/posts/${postId}/comments`, { content }),
    likePost: (postId: number) =>
      apiClient.post(`/community/posts/${postId}/like`),
  },

  // AI endpoints
  ai: {
    chat: (message: string, context?: any) =>
      apiClient.post('/ai/chat', { message, context }),
    explainConcept: (concept: string, subject: string) =>
      apiClient.post('/ai/explain', { concept, subject }),
    generateQuiz: (topic: string, difficulty: string, questionCount: number) =>
      apiClient.post('/ai/generate-quiz', { topic, difficulty, questionCount }),
  },

  // Content endpoints (for teachers/admins)
  content: {
    getAll: (filters?: any) => apiClient.get('/content', { params: filters }),
    getById: (id: number) => apiClient.get(`/content/${id}`),
    getMyContent: () => apiClient.get('/content/my-content'),
    create: (data: any) => apiClient.post('/content', data),
    update: (id: number, data: any) => apiClient.put(`/content/${id}`, data),
    delete: (id: number) => apiClient.delete(`/content/${id}`),
    publish: (id: number) => apiClient.post(`/content/${id}/publish`),
    unpublish: (id: number) => apiClient.post(`/content/${id}/unpublish`),
    approve: (id: number) => apiClient.post(`/content/${id}/approve`),
    reject: (id: number, reason: string) =>
      apiClient.post(`/content/${id}/reject`, { reason }),
  },

  // Course endpoints
  courses: {
    getAll: (filters?: any) => apiClient.get('/courses', { params: filters }),
    getById: (id: number) => apiClient.get(`/courses/${id}`),
    getMyCourses: () => apiClient.get('/courses/my-courses'),
    getMyEnrollments: () => apiClient.get('/courses/enrollments/my'),
    create: (data: any) => apiClient.post('/courses', data),
    update: (id: number, data: any) => apiClient.put(`/courses/${id}`, data),
    delete: (id: number) => apiClient.delete(`/courses/${id}`),
    publish: (id: number) => apiClient.post(`/courses/${id}/publish`),
    unpublish: (id: number) => apiClient.post(`/courses/${id}/unpublish`),
    enroll: (id: number) => apiClient.post(`/courses/${id}/enroll`),
  },

  // Chapter endpoints
  chapters: {
    getById: (id: number) => apiClient.get(`/chapters/${id}`),
    getByCourse: (courseId: number) => apiClient.get(`/chapters/course/${courseId}`),
    getProgress: (id: number) => apiClient.get(`/chapters/${id}/progress`),
    create: (data: any) => apiClient.post('/chapters', data),
    update: (id: number, data: any) => apiClient.put(`/chapters/${id}`, data),
    delete: (id: number) => apiClient.delete(`/chapters/${id}`),
    publish: (id: number) => apiClient.post(`/chapters/${id}/publish`),
    unpublish: (id: number) => apiClient.post(`/chapters/${id}/unpublish`),
    complete: (id: number) => apiClient.post(`/chapters/${id}/complete`),
    reorder: (courseId: number, chapter_orders: any) =>
      apiClient.post(`/chapters/course/${courseId}/reorder`, { chapter_orders }),
  },
};

export default apiClient;
