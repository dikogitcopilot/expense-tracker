export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  description: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  color: string;
  icon: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface DashboardStats {
  totalExpenses: number;
  totalIncome: number;
  currentBalance: number;
  monthlyGoal: {
    current: number;
    target: number;
    percentage: number;
  };
  trends: {
    expenses: number;
    income: number;
    balance: number;
  };
}