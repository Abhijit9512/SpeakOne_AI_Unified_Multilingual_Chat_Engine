import type { ChatSession, Analytics, FAQ } from '../types';

export class StorageService {
  private static instance: StorageService;
  
  private constructor() {}
  
  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }
  
  // Sessions
  saveSession(session: ChatSession): void {
    const sessions = this.getAllSessions();
    const existingIndex = sessions.findIndex(s => s.id === session.id);
    
    if (existingIndex !== -1) {
      sessions[existingIndex] = session;
    } else {
      sessions.push(session);
    }
    
    localStorage.setItem('chatbot_sessions', JSON.stringify(sessions));
  }
  
  getAllSessions(): ChatSession[] {
    const stored = localStorage.getItem('chatbot_sessions');
    if (stored) {
      try {
        const sessions = JSON.parse(stored);
        return sessions.map((s: any) => ({
          ...s,
          startTime: new Date(s.startTime),
          lastActivity: new Date(s.lastActivity),
          messages: s.messages.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp)
          }))
        }));
      } catch (error) {
        console.error('Error parsing sessions:', error);
        return [];
      }
    }
    return [];
  }
  
  getSession(id: string): ChatSession | null {
    const sessions = this.getAllSessions();
    return sessions.find(s => s.id === id) || null;
  }
  
  deleteSession(id: string): void {
    const sessions = this.getAllSessions();
    const filtered = sessions.filter(s => s.id !== id);
    localStorage.setItem('chatbot_sessions', JSON.stringify(filtered));
  }
  
  clearAllSessions(): void {
    localStorage.removeItem('chatbot_sessions');
  }
  
  // Analytics
  saveAnalytics(analytics: Analytics): void {
    localStorage.setItem('chatbot_analytics', JSON.stringify(analytics));
  }
  
  getAnalytics(): Analytics | null {
    const stored = localStorage.getItem('chatbot_analytics');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing analytics:', error);
        return null;
      }
    }
    return null;
  }
  
  // FAQs
  saveFAQs(faqs: FAQ[]): void {
    localStorage.setItem('chatbot_faqs', JSON.stringify(faqs));
  }
  
  getFAQs(): FAQ[] {
    const stored = localStorage.getItem('chatbot_faqs');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing FAQs:', error);
        return [];
      }
    }
    return [];
  }
  
  // Settings
  saveSetting(key: string, value: any): void {
    const settings = this.getAllSettings();
    settings[key] = value;
    localStorage.setItem('chatbot_settings', JSON.stringify(settings));
  }
  
  getSetting(key: string): any {
    const settings = this.getAllSettings();
    return settings[key];
  }
  
  getAllSettings(): Record<string, any> {
    const stored = localStorage.getItem('chatbot_settings');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing settings:', error);
        return {};
      }
    }
    return {};
  }
  
  // Export/Import
  exportData(): string {
    const data = {
      sessions: this.getAllSessions(),
      analytics: this.getAnalytics(),
      faqs: this.getFAQs(),
      settings: this.getAllSettings(),
      exportDate: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  }
  
  importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.sessions) {
        this.saveSession(data.sessions);
      }
      
      if (data.analytics) {
        this.saveAnalytics(data.analytics);
      }
      
      if (data.faqs) {
        this.saveFAQs(data.faqs);
      }
      
      if (data.settings) {
        Object.entries(data.settings).forEach(([key, value]) => {
          this.saveSetting(key, value);
        });
      }
      
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }
}