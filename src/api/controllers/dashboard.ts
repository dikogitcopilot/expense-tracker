import { DashboardStats } from '../types';
import { mockDashboardStats } from '../mock-data';

export const dashboardController = {
  getStats: (): Promise<DashboardStats> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockDashboardStats);
      }, 500);
    });
  }
};