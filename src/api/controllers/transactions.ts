import { Transaction } from '../types';
import { mockTransactions } from '../mock-data';

export const transactionController = {
  getAll: (): Promise<Transaction[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockTransactions);
      }, 500);
    });
  },

  getById: (id: string): Promise<Transaction | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const transaction = mockTransactions.find(t => t.id === id);
        resolve(transaction || null);
      }, 500);
    });
  },

  create: (data: Omit<Transaction, 'id'>): Promise<Transaction> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTransaction = {
          ...data,
          id: Math.random().toString(36).substr(2, 9)
        };
        mockTransactions.unshift(newTransaction);
        resolve(newTransaction);
      }, 500);
    });
  },

  update: (id: string, data: Partial<Transaction>): Promise<Transaction | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockTransactions.findIndex(t => t.id === id);
        if (index === -1) {
          resolve(null);
          return;
        }
        mockTransactions[index] = { ...mockTransactions[index], ...data };
        resolve(mockTransactions[index]);
      }, 500);
    });
  },

  delete: (id: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockTransactions.findIndex(t => t.id === id);
        if (index === -1) {
          resolve(false);
          return;
        }
        mockTransactions.splice(index, 1);
        resolve(true);
      }, 500);
    });
  }
};