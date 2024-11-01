import React from 'react';
import { Plus, Edit2, Trash2, ShoppingCart, Briefcase, Film, Zap, Laptop } from 'lucide-react';

const categories = [
  {
    id: '1',
    name: 'Groceries',
    type: 'expense',
    color: '#EF4444',
    icon: ShoppingCart,
    transactions: 145,
    totalAmount: 2850.00
  },
  {
    id: '2',
    name: 'Salary',
    type: 'income',
    color: '#10B981',
    icon: Briefcase,
    transactions: 12,
    totalAmount: 24000.00
  },
  {
    id: '3',
    name: 'Entertainment',
    type: 'expense',
    color: '#8B5CF6',
    icon: Film,
    transactions: 89,
    totalAmount: 1250.00
  },
  {
    id: '4',
    name: 'Utilities',
    type: 'expense',
    color: '#F59E0B',
    icon: Zap,
    transactions: 24,
    totalAmount: 980.00
  },
  {
    id: '5',
    name: 'Freelance',
    type: 'income',
    color: '#3B82F6',
    icon: Laptop,
    transactions: 8,
    totalAmount: 4000.00
  }
];

function Categories() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Categories</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your transaction categories
          </p>
        </div>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Plus className="h-5 w-5 mr-2" />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: `${category.color}20` }}>
                    <Icon className="h-6 w-6" style={{ color: category.color }} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                    <span className={`text-sm ${category.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
                      {category.type.charAt(0).toUpperCase() + category.type.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-500">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Transactions</span>
                  <span className="font-medium text-gray-900">{category.transactions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Amount</span>
                  <span className="font-medium text-gray-900">
                    ${category.totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;