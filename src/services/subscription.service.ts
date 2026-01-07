import { api } from './api';

export interface SubscriptionPlan {
  id: number;
  name: string;
  description: string;
  price: number;
  billing_cycle: 'monthly' | 'yearly';
  max_children: number;
  features: string[];
}

export interface CurrentSubscription {
  id: number;
  plan_name: string;
  status: 'active' | 'inactive' | 'cancelled';
  start_date: string;
  end_date: string;
  next_billing_date: string;
  amount: number;
  children_count: number;
  max_children: number;
}

export interface PaymentHistory {
  id: number;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  payment_date: string;
  description: string;
  invoice_url?: string;
}

export const subscriptionService = {
  // Get current subscription
  getCurrentSubscription: async (): Promise<CurrentSubscription | null> => {
    try {
      const response = await api.subscriptions.getCurrent();
      return response.data.data.subscription || null;
    } catch (error) {
      console.error('Error getting current subscription:', error);
      return null;
    }
  },

  // Get available subscription plans
  getPlans: async (): Promise<SubscriptionPlan[]> => {
    try {
      const response = await api.subscriptions.getPlans();
      return response.data.data.plans || [];
    } catch (error) {
      console.error('Error getting subscription plans:', error);
      throw error;
    }
  },

  // Subscribe to a plan
  subscribe: async (planId: number): Promise<{ paymentUrl: string }> => {
    try {
      const response = await api.subscriptions.subscribe(planId);
      return response.data.data;
    } catch (error: any) {
      console.error('Error subscribing:', error);
      throw new Error(error.response?.data?.error || 'Failed to subscribe');
    }
  },

  // Cancel subscription
  cancel: async (): Promise<void> => {
    try {
      await api.subscriptions.cancel();
    } catch (error: any) {
      console.error('Error cancelling subscription:', error);
      throw new Error(error.response?.data?.error || 'Failed to cancel subscription');
    }
  },

  // Get payment history
  getPaymentHistory: async (): Promise<PaymentHistory[]> => {
    try {
      const response = await api.subscriptions.getPaymentHistory();
      return response.data.data.payments || [];
    } catch (error) {
      console.error('Error getting payment history:', error);
      throw error;
    }
  },
};
