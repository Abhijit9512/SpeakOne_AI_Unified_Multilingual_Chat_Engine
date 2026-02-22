import type { Analytics, Message } from '../types';
import { StorageService } from './storage';

export class AnalyticsService {
  private static instance: AnalyticsService;
  private storage: StorageService;
  
  private constructor() {
    this.storage = StorageService.getInstance();
  }
  
  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }
  
  trackQuery(message: Message): void {
    const analytics = this.getOrCreateAnalytics();
    
    // Increment total queries
    analytics.totalQueries += 1;
    
    // Update language distribution
    const lang = message.language || 'en';
    analytics.languageDistribution[lang] = (analytics.languageDistribution[lang] || 0) + 1;
    
    // Track unanswered queries (low confidence)
    if (message.confidence !== undefined && message.confidence < 0.3) {
      analytics.unansweredQueries += 1;
    }
    
    // Update daily activity
    const today = new Date().toLocaleDateString('en-US', { weekday: 'short' });
    const todayIndex = analytics.dailyActivity.findIndex(d => d.date === today);
    
    if (todayIndex !== -1) {
      analytics.dailyActivity[todayIndex].count += 1;
    } else {
      // Keep only last 7 days
      analytics.dailyActivity.push({ date: today, count: 1 });
      if (analytics.dailyActivity.length > 7) {
        analytics.dailyActivity.shift();
      }
    }
    
    this.storage.saveAnalytics(analytics);
  }
  
  trackIntent(intent: string): void {
    const analytics = this.getOrCreateAnalytics();
    
    // Map intent to broader category
    const category = this.mapIntentToCategory(intent);
    analytics.intentDistribution[category] = (analytics.intentDistribution[category] || 0) + 1;
    
    this.storage.saveAnalytics(analytics);
  }
  
  trackTopQuestion(question: string): void {
    const analytics = this.getOrCreateAnalytics();
    
    const existingIndex = analytics.topQuestions.findIndex(q => q.question === question);
    
    if (existingIndex !== -1) {
      analytics.topQuestions[existingIndex].count += 1;
    } else {
      analytics.topQuestions.push({ question, count: 1 });
    }
    
    // Keep only top 10 questions
    analytics.topQuestions.sort((a, b) => b.count - a.count);
    if (analytics.topQuestions.length > 10) {
      analytics.topQuestions = analytics.topQuestions.slice(0, 10);
    }
    
    this.storage.saveAnalytics(analytics);
  }
  
  getAnalytics(): Analytics {
    return this.storage.getAnalytics() || this.createDefaultAnalytics();
  }
  
  private getOrCreateAnalytics(): Analytics {
    let analytics = this.storage.getAnalytics();
    
    if (!analytics) {
      analytics = this.createDefaultAnalytics();
      this.storage.saveAnalytics(analytics);
    }
    
    return analytics;
  }
  
  private createDefaultAnalytics(): Analytics {
    return {
      totalQueries: 0,
      languageDistribution: {
        en: 0,
        hi: 0,
        mr: 0,
        kn: 0,
        te: 0
      },
      topQuestions: [],
      unansweredQueries: 0,
      intentDistribution: {
        Admissions: 0,
        Fees: 0,
        Courses: 0,
        Exams: 0,
        Results: 0,
        Hostel: 0,
        Placement: 0,
        Scholarship: 0
      },
      dailyActivity: [
        { date: 'Mon', count: 0 },
        { date: 'Tue', count: 0 },
        { date: 'Wed', count: 0 },
        { date: 'Thu', count: 0 },
        { date: 'Fri', count: 0 },
        { date: 'Sat', count: 0 },
        { date: 'Sun', count: 0 }
      ]
    };
  }
  
  private mapIntentToCategory(intent: string): string {
    const categoryMap: Record<string, string> = {
      'admission_process': 'Admissions',
      'admission_eligibility': 'Admissions',
      'fee_structure': 'Fees',
      'fee_payment_modes': 'Fees',
      'available_courses': 'Courses',
      'exam_schedule': 'Exams',
      'result_declaration': 'Results',
      'hostel_facilities': 'Hostel',
      'placement_statistics': 'Placement',
      'scholarship_programs': 'Scholarship',
      'required_documents': 'Documents',
      'college_timing': 'General'
    };
    
    return categoryMap[intent] || 'General';
  }
  
  generateReport(): {
    totalQueries: number;
    averageQueriesPerDay: number;
    successRate: number;
    mostPopularLanguage: string;
    topIntent: string;
    busiestDay: string;
  } {
    const analytics = this.getAnalytics();
    
    const totalQueries = analytics.totalQueries;
    const averageQueriesPerDay = totalQueries / 7; // Last 7 days average
    
    const answeredQueries = totalQueries - analytics.unansweredQueries;
    const successRate = totalQueries > 0 ? (answeredQueries / totalQueries) * 100 : 0;
    
    const mostPopularLanguage = Object.entries(analytics.languageDistribution)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'en';
    
    const topIntent = Object.entries(analytics.intentDistribution)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'General';
    
    const busiestDay = analytics.dailyActivity
      .sort((a, b) => b.count - a.count)[0]?.date || 'Mon';
    
    return {
      totalQueries,
      averageQueriesPerDay: Math.round(averageQueriesPerDay),
      successRate: Math.round(successRate),
      mostPopularLanguage,
      topIntent,
      busiestDay
    };
  }
  
  resetAnalytics(): void {
    const defaultAnalytics = this.createDefaultAnalytics();
    this.storage.saveAnalytics(defaultAnalytics);
  }
}