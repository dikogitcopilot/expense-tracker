import React from 'react';
import { User, Bell, Shield, CreditCard, Globe, PaintBucket } from 'lucide-react';

const settings = [
  {
    id: 'profile',
    name: 'Profile Settings',
    description: 'Update your personal information and avatar',
    icon: User,
    href: '#profile'
  },
  {
    id: 'notifications',
    name: 'Notifications',
    description: 'Configure how you want to be notified',
    icon: Bell,
    href: '#notifications'
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Manage your account security settings',
    icon: Shield,
    href: '#security'
  },
  {
    id: 'payment',
    name: 'Payment Methods',
    description: 'Add or remove payment methods',
    icon: CreditCard,
    href: '#payment'
  },
  {
    id: 'preferences',
    name: 'Preferences',
    description: 'Set your default currency and language',
    icon: Globe,
    href: '#preferences'
  },
  {
    id: 'appearance',
    name: 'Appearance',
    description: 'Customize the look and feel',
    icon: PaintBucket,
    href: '#appearance'
  }
];

function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <button className="absolute bottom-0 right-0 p-1 bg-white rounded-full border border-gray-200 shadow-sm hover:bg-gray-50">
                <PaintBucket className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">John Doe</h2>
              <p className="text-sm text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>

        <div className="divide-y">
          {settings.map((setting) => {
            const Icon = setting.icon;
            return (
              <div key={setting.id} className="p-6 hover:bg-gray-50">
                <a href={setting.href} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{setting.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <div className="ml-4">
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Edit
                    </button>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Danger Zone</h3>
        <div className="space-y-4">
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;