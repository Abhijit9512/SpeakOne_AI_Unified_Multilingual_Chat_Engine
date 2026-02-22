import type { FAQ, ChatbotResponse } from '../types';
import { faqDataset, languageDetectionPatterns, synonymsMap } from '../data/faqDataset';

export class NLPService {
  private static instance: NLPService;
  private faqData: FAQ[];
  
  private constructor() {
    this.faqData = faqDataset;
  }
  
  static getInstance(): NLPService {
    if (!NLPService.instance) {
      NLPService.instance = new NLPService();
    }
    return NLPService.instance;
  }
  
  detectLanguage(text: string): string {
    const cleanText = text.toLowerCase().trim();
    
    // Check for Unicode ranges first
    for (const [lang, patterns] of Object.entries(languageDetectionPatterns)) {
      if (patterns[0].test(text)) {
        return lang;
      }
    }
    
    // Check for language-specific keywords
    for (const [lang, patterns] of Object.entries(languageDetectionPatterns)) {
      if (patterns[1] && patterns[1].test(cleanText)) {
        return lang;
      }
    }
    
    // Default to English
    return 'en';
  }
  
  preprocessText(text: string): string {
    return text
      .toLowerCase()
      .replace(/[.,!?;:]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  
  calculateSimilarity(text1: string, text2: string): number {
    const words1 = this.preprocessText(text1).split(' ');
    const words2 = this.preprocessText(text2).split(' ');
    
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    
    return intersection.size / union.size;
  }
  
  extractKeywords(text: string): string[] {
    const words = this.preprocessText(text).split(' ');
    const stopWords = new Set(['what', 'how', 'when', 'where', 'why', 'which', 'is', 'are', 'the', 'a', 'an', 'in', 'at', 'to', 'for', 'of', 'with', 'by', 'on', 'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'between', 'among', 'kya', 'kaise', 'kab', 'kidhar', 'kyon', 'kaay', 'kase', 'yāva', 'ēnu', 'hēge', 'ēmi', 'ela', 'eppudu']);
    
    return words.filter(word => word.length > 2 && !stopWords.has(word));
  }
  
  expandSynonyms(keywords: string[]): string[] {
    const expanded = [...keywords];
    
    for (const keyword of keywords) {
      for (const [mainWord, synonyms] of Object.entries(synonymsMap)) {
        if (keyword.includes(mainWord) || synonyms.some(syn => keyword.includes(syn))) {
          expanded.push(mainWord, ...synonyms);
        }
      }
    }
    
    return [...new Set(expanded)];
  }
  
  findBestMatch(userInput: string, language: string): { faq: FAQ; confidence: number } | null {
    const keywords = this.extractKeywords(userInput);
    const expandedKeywords = this.expandSynonyms(keywords);
    
    let bestMatch: FAQ | null = null;
    let bestScore = 0;
    
    for (const faq of this.faqData) {
      const question = faq.translations[language as keyof typeof faq.translations]?.question || faq.translations.en.question;
      const faqKeywords = [...faq.keywords, ...faq.synonyms];
      
      // Keyword matching
      const keywordScore = expandedKeywords.filter(keyword => 
        faqKeywords.some(faqKeyword => 
          keyword.includes(faqKeyword) || faqKeyword.includes(keyword)
        )
      ).length / expandedKeywords.length;
      
      // Semantic similarity
      const semanticScore = this.calculateSimilarity(userInput, question);
      
      // Combined score with priority weighting
      const combinedScore = (keywordScore * 0.6) + (semanticScore * 0.4) + (faq.priority * 0.1);
      
      if (combinedScore > bestScore && combinedScore > 0.3) {
        bestScore = combinedScore;
        bestMatch = faq;
      }
    }
    
    return bestMatch ? { faq: bestMatch, confidence: bestScore } : null;
  }
  
  generateSuggestions(userInput: string, language: string): string[] {
    const keywords = this.extractKeywords(userInput);
    const suggestions: string[] = [];
    
    // Find FAQs with similar keywords
    for (const faq of this.faqData.slice(0, 5)) {
      const question = faq.translations[language as keyof typeof faq.translations]?.question || faq.translations.en.question;
      const hasCommonKeywords = keywords.some(keyword => 
        faq.keywords.some(faqKeyword => 
          keyword.includes(faqKeyword) || faqKeyword.includes(keyword)
        )
      );
      
      if (hasCommonKeywords) {
        suggestions.push(question);
      }
    }
    
    return suggestions.slice(0, 3);
  }
  
  processMessage(message: string): ChatbotResponse {
    const language = this.detectLanguage(message);
    const match = this.findBestMatch(message, language);
    
    if (match && match.confidence > 0.4) {
      const answer = match.faq.translations[language as keyof typeof match.faq.translations]?.answer || 
                    match.faq.translations.en.answer;
      
      return {
        text: answer,
        confidence: match.confidence,
        language,
        suggestions: this.generateSuggestions(message, language)
      };
    }
    
    // Fallback response
    const fallbackResponses = {
      en: 'Sorry, I could not find that information. Please contact the administration office.',
      hi: 'क्षमा करें, मुझे वह जानकारी नहीं मिली। कृपया प्रशासन कार्यालय से संपर्क करें।',
      mr: 'क्षमस्व, मला ती माहिती सापडली नाही. कृपया प्रशासन कार्यालयाशी संपर्क साधा.',
      kn: 'ಕ್ಷಮಿಸಿ, ನನಗೆ ಆ ಮಾಹಿತಿ ಸಿಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಆಡಳಿತ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      te: 'క్షమించండి, నాకు ఆ సమాచారం దొరకలేదు. దయచేసి అడ్మినిస్ట్రేషన్ ఆఫీస్‌ని సంప్రదించండి.'
    };
    
    return {
      text: fallbackResponses[language as keyof typeof fallbackResponses] || fallbackResponses.en,
      confidence: 0,
      language,
      fallback: true
    };
  }
  
  addFAQ(faq: FAQ): void {
    this.faqData.push(faq);
  }
  
  updateFAQ(id: string, updatedFaq: Partial<FAQ>): boolean {
    const index = this.faqData.findIndex(faq => faq.id === id);
    if (index !== -1) {
      this.faqData[index] = { ...this.faqData[index], ...updatedFaq };
      return true;
    }
    return false;
  }
  
  deleteFAQ(id: string): boolean {
    const index = this.faqData.findIndex(faq => faq.id === id);
    if (index !== -1) {
      this.faqData.splice(index, 1);
      return true;
    }
    return false;
  }
  
  getAllFAQs(): FAQ[] {
    return this.faqData;
  }
  
  getFAQsByCategory(category: string): FAQ[] {
    return this.faqData.filter(faq => faq.category === category);
  }
}