import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Your financial overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">$3,240</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <ArrowDownRight className="h-6 w-6 text-red-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">12%</span>
            <span className="ml-2 text-gray-500">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Income</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">$8,450</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <ArrowUpRight className="h-6 w-6 text-green-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">8%</span>
            <span className="ml-2 text-gray-500">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Balance</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">$5,210</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-indigo-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">5%</span>
            <span className="ml-2 text-gray-500">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Goal</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">82%</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-500" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
        </div>
        <div className="divide-y">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="p-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <DollarSign className="h-6 w-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Grocery Shopping</p>
                  <p className="text-sm text-gray-500">Mar 24, 2024</p>
                </div>
              </div>
              <span className="text-sm font-medium text-red-500">-$85.00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;