import React from 'react';
import { Bot, BarChart3, Home } from 'lucide-react';

interface NavigationProps {
  currentView: 'landing' | 'chat' | 'admin';
  onViewChange: (view: 'landing' | 'chat' | 'admin') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'landing', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'chat', label: 'Chatbot', icon: <Bot className="w-4 h-4" /> },
    { id: 'admin', label: 'Admin', icon: <BarChart3 className="w-4 h-4" /> }
  ];
  
  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onViewChange(item.id as any)}
          className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
            currentView === item.id
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              : 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 border border-white/20'
          }`}
        >
          {item.icon}
          <span className="hidden sm:inline">{item.label}</span>
        </button>
      ))}
    </div>
  );
};