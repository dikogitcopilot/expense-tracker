import { Category } from '../types';
import { mockCategories } from '../mock-data';

export const categoryController = {
  getAll: (): Promise<Category[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCategories);
      }, 500);
    });
  },

  getById: (id: string): Promise<Category | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const category = mockCategories.find(c => c.id === id);
        resolve(category || null);
      }, 500);
    });
  },

  create: (data: Omit<Category, 'id'>): Promise<Category> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newCategory = {
          ...data,
          id: Math.random().toString(36).substr(2, 9)
        };
        mockCategories.push(newCategory);
        resolve(newCategory);
      }, 500);
    });
  },

  update: (id: string, data: Partial<Category>): Promise<Category | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockCategories.findIndex(c => c.id === id);
        if (index === -1) {
          resolve(null);
          return;
        }
        mockCategories[index] = { ...mockCategories[index], ...data };
        resolve(mockCategories[index]);
      }, 500);
    });
  },

  delete: (id: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockCategories.findIndex(c => c.id === id);
        if (index === -1) {
          resolve(false);
          return;
        }
        mockCategories.splice(index, 1);
        resolve(true);
      }, 500);
    });
  }
};