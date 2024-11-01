import React from 'react';
import { Calendar, Download, TrendingUp, PieChart, BarChart3, DollarSign } from 'lucide-react';

function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
          <p className="mt-1 text-sm text-gray-500">
            Analyze your financial data
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <select className="block pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
              <option>Custom range</option>
            </select>
          </div>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="h-5 w-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Total Income</h3>
            <div className="bg-green-50 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-gray-900">$28,450</p>
            <p className="text-sm text-green-500">+12.5% from last period</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Total Expenses</h3>
            <div className="bg-red-50 p-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-red-500" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-gray-900">$12,780</p>
            <p className="text-sm text-red-500">+8.2% from last period</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Net Savings</h3>
            <div className="bg-indigo-50 p-2 rounded-lg">
              <BarChart3 className="h-5 w-5 text-indigo-500" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-gray-900">$15,670</p>
            <p className="text-sm text-indigo-500">+15.8% from last period</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Income vs Expenses</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-500">Income</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-500">Expenses</span>
              </div>
            </div>
          </div>
          <div className="h-80 flex items-center justify-center border-t">
            <BarChart3 className="h-40 w-40 text-gray-300" />
            <p className="text-gray-500 text-sm">Chart will be implemented here</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Expense Distribution</h3>
            <button className="text-sm text-gray-500 hover:text-gray-700">View All</button>
          </div>
          <div className="h-80 flex items-center justify-center border-t">
            <PieChart className="h-40 w-40 text-gray-300" />
            <p className="text-gray-500 text-sm">Chart will be implemented here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;