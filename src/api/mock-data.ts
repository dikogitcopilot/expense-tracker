import { Transaction, Category, User, DashboardStats } from './types';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    amount: 85.00,
    type: 'expense',
    category: 'groceries',
    description: 'Grocery Shopping',
    date: '2024-03-24T10:00:00Z'
  },
  {
    id: '2',
    amount: 2000.00,
    type: 'income',
    category: 'salary',
    description: 'Monthly Salary',
    date: '2024-03-20T10:00:00Z'
  },
  {
    id: '3',
    amount: 45.00,
    type: 'expense',
    category: 'entertainment',
    description: 'Movie Tickets',
    date: '2024-03-19T10:00:00Z'
  },
  {
    id: '4',
    amount: 120.00,
    type: 'expense',
    category: 'utilities',
    description: 'Electricity Bill',
    date: '2024-03-18T10:00:00Z'
  },
  {
    id: '5',
    amount: 500.00,
    type: 'income',
    category: 'freelance',
    description: 'Web Development Project',
    date: '2024-03-17T10:00:00Z'
  }
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Groceries',
    type: 'expense',
    color: '#EF4444',
    icon: 'shopping-cart'
  },
  {
    id: '2',
    name: 'Salary',
    type: 'income',
    color: '#10B981',
    icon: 'briefcase'
  },
  {
    id: '3',
    name: 'Entertainment',
    type: 'expense',
    color: '#8B5CF6',
    icon: 'film'
  },
  {
    id: '4',
    name: 'Utilities',
    type: 'expense',
    color: '#F59E0B',
    icon: 'zap'
  },
  {
    id: '5',
    name: 'Freelance',
    type: 'income',
    color: '#3B82F6',
    icon: 'laptop'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

export const mockDashboardStats: DashboardStats = {
  totalExpenses: 3240,
  totalIncome: 8450,
  currentBalance: 5210,
  monthlyGoal: {
    current: 820,
    target: 1000,
    percentage: 82
  },
  trends: {
    expenses: 12,
    income: 8,
    balance: 5
  }
};