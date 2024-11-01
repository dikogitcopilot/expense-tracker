import { User } from '../types';
import { mockUser } from '../mock-data';

export const authController = {
  login: (email: string, password: string): Promise<{ user: User; token: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'john@example.com' && password === 'password') {
          resolve({
            user: mockUser,
            token: 'mock-jwt-token'
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },

  register: (data: { name: string; email: string; password: string }): Promise<{ user: User; token: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          ...mockUser,
          ...data,
          id: Math.random().toString(36).substr(2, 9)
        };
        resolve({
          user: newUser,
          token: 'mock-jwt-token'
        });
      }, 500);
    });
  },

  getCurrentUser: (): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUser);
      }, 500);
    });
  },

  forgotPassword: (email: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  },

  resetPassword: (token: string, newPassword: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  }
};