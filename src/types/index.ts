export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language: string;
  confidence?: number;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  startTime: Date;
  lastActivity: Date;
  language: string;
}

export interface FAQ {
  id: string;
  intent: string;
  category: string;
  translations: {
    en: { question: string; answer: string };
    hi: { question: string; answer: string };
    mr: { question: string; answer: string };
    kn: { question: string; answer: string };
    te: { question: string; answer: string };
  };
  keywords: string[];
  synonyms: string[];
  priority: number;
}

export interface Analytics {
  totalQueries: number;
  languageDistribution: Record<string, number>;
  topQuestions: Array<{ question: string; count: number }>;
  unansweredQueries: number;
  intentDistribution: Record<string, number>;
  dailyActivity: Array<{ date: string; count: number }>;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface User {
  id: string;
  role: 'admin' | 'student';
  email: string;
  name: string;
}

export interface ChatbotResponse {
  text: string;
  confidence: number;
  language: string;
  suggestions?: string[];
  fallback?: boolean;
}