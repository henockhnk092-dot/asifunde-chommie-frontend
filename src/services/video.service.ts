import { api } from './api';

export interface VideoContent {
  id: number;
  title: string;
  description: string;
  youtube_url?: string;
  embed_url: string;
  thumbnail_url?: string;
  duration?: number;
  subject_id: number;
  subject_name?: string;
  grade: number;
  topic?: string;
  is_premium: boolean;
  language?: string;
  difficulty?: string;
  tags?: string[];
  teacher_id: number;
  teacher_name?: string;
  views: number;
  created_at: string;
}

export interface VideoProgress {
  video_id: number;
  watched_seconds: number;
  total_seconds: number;
  completed: boolean;
  last_watched_at: string;
  completed_at?: string;
}

export const videoService = {
  // Get all videos
  getAllVideos: async (filters?: {
    grade?: number;
    subject_id?: number;
    is_premium?: boolean;
    language?: string;
    difficulty?: string;
  }): Promise<VideoContent[]> => {
    try {
      const response = await api.videos.getAll(filters);
      return response.data.data.videos || [];
    } catch (error) {
      console.error('Error getting videos:', error);
      return [];
    }
  },

  // Get video by ID
  getVideoById: async (videoId: number): Promise<VideoContent | null> => {
    try {
      const response = await api.videos.getById(videoId);
      return response.data.data.video || null;
    } catch (error) {
      console.error('Error getting video:', error);
      return null;
    }
  },

  // Create video (teacher only)
  createVideo: async (videoData: {
    title: string;
    description: string;
    youtube_url?: string;
    embed_url: string;
    thumbnail_url?: string;
    duration?: number;
    subject_id: number;
    grade: number;
    topic?: string;
    is_premium: boolean;
    language?: string;
    difficulty?: string;
    tags?: string[];
  }): Promise<VideoContent> => {
    try {
      const response = await api.videos.create(videoData);
      return response.data.data.video;
    } catch (error: any) {
      console.error('Error creating video:', error);
      throw new Error(error.response?.data?.error || 'Failed to create video');
    }
  },

  // Update video (teacher only)
  updateVideo: async (videoId: number, videoData: Partial<VideoContent>): Promise<void> => {
    try {
      await api.videos.update(videoId, videoData);
    } catch (error: any) {
      console.error('Error updating video:', error);
      throw new Error(error.response?.data?.error || 'Failed to update video');
    }
  },

  // Delete video (teacher only)
  deleteVideo: async (videoId: number): Promise<void> => {
    try {
      await api.videos.delete(videoId);
    } catch (error: any) {
      console.error('Error deleting video:', error);
      throw new Error(error.response?.data?.error || 'Failed to delete video');
    }
  },

  // Track video view
  trackView: async (videoId: number, duration: number): Promise<void> => {
    try {
      await api.videos.trackView(videoId, duration);
    } catch (error) {
      console.error('Error tracking video view:', error);
    }
  },

  // Update video progress
  updateProgress: async (
    videoId: number,
    watchedSeconds: number,
    totalSeconds: number
  ): Promise<void> => {
    try {
      await api.progress.updateProgress({
        video_id: videoId,
        watched_seconds: watchedSeconds,
        total_seconds: totalSeconds,
      });
    } catch (error) {
      console.error('Error updating video progress:', error);
    }
  },

  // Get my progress
  getMyProgress: async (): Promise<VideoProgress[]> => {
    try {
      const response = await api.progress.getMy();
      return response.data.data.progress || [];
    } catch (error) {
      console.error('Error getting progress:', error);
      return [];
    }
  },
};
