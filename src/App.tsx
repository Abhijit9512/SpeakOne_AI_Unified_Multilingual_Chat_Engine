import { useState } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { AdminDashboard } from './pages/AdminDashboard';
import { LandingPage } from './pages/LandingPage';
import { Navigation } from './components/Navigation';
import type { ChatSession } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'chat' | 'admin'>('landing');
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  
  const handleSessionUpdate = (session: ChatSession) => {
    setSessions(prev => {
      const existingIndex = prev.findIndex(s => s.id === session.id);
      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = session;
        return updated;
      }
      return [...prev, session];
    });
  };
  
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      
      {/* Main Content */}
      {currentView === 'landing' ? (
        <LandingPage />
      ) : currentView === 'chat' ? (
        <ChatInterface onSessionUpdate={handleSessionUpdate} />
      ) : (
        <AdminDashboard />
      )}
      
      {/* Floating Stats (Chat View Only) */}
      {currentView === 'chat' && sessions.length > 0 && (
        <div className="fixed bottom-4 left-4 bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20">
          <div className="text-xs text-gray-400">
            <div>Active Sessions: {sessions.length}</div>
            <div>Total Messages: {sessions.reduce((acc, s) => acc + s.messages.length, 0)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;