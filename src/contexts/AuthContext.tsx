import React, { createContext, useContext, useEffect, useState } from 'react';
import type { UserProfile } from '../types';
import { api } from '../services/api';

interface AuthContextType {
  user: UserProfile | null;
  userProfile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  isAuthenticated: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'learner' | 'parent' | 'teacher' | 'admin';
  grade?: number;
  phoneNumber?: string;
  dateOfBirth?: string;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  refreshProfile: async () => {},
  isAuthenticated: false,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const savedProfile = localStorage.getItem('userProfile');

        if (token && savedProfile) {
          const profile = JSON.parse(savedProfile);
          setUser(profile);

          // Verify token is still valid by fetching fresh profile
          try {
            await refreshProfile();
          } catch (error) {
            // Token invalid, clear auth
            console.error('Token validation failed:', error);
            logout();
          }
        }
      } catch (error) {
        console.error('Error loading user:', error);
        // Clear invalid data
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userProfile');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.auth.login(email, password);
      const { token, user: userData } = response.data.data;

      // Save token and user profile
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userProfile', JSON.stringify(userData));

      setUser(userData);
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const response = await api.auth.register(data);
      const { user: userData } = response.data.data;

      // Auto-login after registration
      await login(data.email, data.password);
    } catch (error: any) {
      console.error('Registration error:', error);
      throw new Error(error.response?.data?.error || 'Registration failed');
    }
  };

  const logout = async () => {
    try {
      // Call logout endpoint (optional, for backend cleanup)
      await api.auth.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage and state
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userProfile');
      setUser(null);
    }
  };

  const refreshProfile = async () => {
    try {
      const response = await api.auth.getProfile();
      const userData = response.data.data;

      // Update local storage and state
      localStorage.setItem('userProfile', JSON.stringify(userData));
      setUser(userData);
    } catch (error: any) {
      console.error('Error refreshing profile:', error);
      throw error;
    }
  };

  const value = {
    user,
    userProfile: user,
    loading,
    login,
    register,
    logout,
    refreshProfile,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
