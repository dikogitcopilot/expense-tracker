import React from 'react';
import { Menu, Bell, Plus } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-4 lg:px-8">
      <button
        onClick={onMenuClick}
        className="text-gray-500 hover:text-gray-700 lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div className="flex-1 flex justify-end items-center space-x-4">
        <button className="hidden sm:flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Plus className="h-5 w-5 mr-2" />
          Add Transaction
        </button>

        <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;