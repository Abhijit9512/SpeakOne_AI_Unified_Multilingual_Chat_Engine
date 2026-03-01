console.log("ACTIVE CHAT INTERFACE FILE");
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mic, Volume2, Globe } from 'lucide-react';
import type { Message, ChatSession, Language } from '../types';
import { NLPService } from '../lib/nlpService';
import { AnalyticsService } from '../lib/analytics';

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', flag: '🇮🇳' }
];

interface ChatInterfaceProps {
  onSessionUpdate?: (session: ChatSession) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSessionUpdate }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isListening, setIsListening] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nlpService = NLPService.getInstance();
  const analyticsService = AnalyticsService.getInstance();
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  useEffect(() => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: selectedLanguage.code === 'en' ? 'Hello! How can I help you today?' :
            selectedLanguage.code === 'hi' ? 'नमस्ते! मैं आज आपकी क्या सहायता कर सकता हूं?' :
            selectedLanguage.code === 'mr' ? 'नमस्कार! मी तुम्हाली आज कशी मदत करू शकतो?' :
            selectedLanguage.code === 'kn' ? 'ನಮಸ್ಕಾರ! ನಾನು ಇಂದು ನಿಮಗು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?' :
            'నమస్కారం! నేను ఈ రోజు మీకు ఎలా సహాయం చేయగలను?',
      sender: 'bot',
      timestamp: new Date(),
      language: selectedLanguage.code
    };
    setMessages([welcomeMessage]);
  }, [selectedLanguage]);
  
 const handleSendMessage = async () => {
  if (!input.trim()) return;

  const userMessage: Message = {
    id: Date.now().toString(),
    text: input,
    sender: 'user',
    timestamp: new Date(),
    language: selectedLanguage.code
  };

  setMessages(prev => [...prev, userMessage]);
  setInput('');
  setIsTyping(true);

  /* ✅ STEP 1 → First check FAQ locally */
  const faqResponse = nlpService.processMessage(input);

  if (faqResponse && faqResponse.text) {
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: faqResponse.text,
      sender: 'bot',
      timestamp: new Date(),
      language: faqResponse.language,
      confidence: faqResponse.confidence
    };

    setMessages(prev => [...prev, botMessage]);
    setSuggestions(faqResponse.suggestions || []);
    setIsTyping(false);

    analyticsService.trackQuery(userMessage);
    analyticsService.trackQuery(botMessage);

    return; // ✅ stop here if FAQ answer found
  }

  /* ✅ STEP 2 → If FAQ not found → call backend API */
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: data.reply || "Sorry, I couldn’t understand your question.",
      sender: "bot",
      timestamp: new Date(),
      language: selectedLanguage.code,
    };

    setMessages(prev => [...prev, botMessage]);

    analyticsService.trackQuery(userMessage);
    analyticsService.trackQuery(botMessage);

  } catch (error) {
    console.error(error);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "Server error. Please try again later.",
      sender: "bot",
      timestamp: new Date(),
      language: selectedLanguage.code,
    };

    setMessages(prev => [...prev, botMessage]);
  }

  setIsTyping(false);
};
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice input is not supported in your browser');
      return;
    }
    
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = selectedLanguage.code === 'en' ? 'en-US' :
                      selectedLanguage.code === 'hi' ? 'hi-IN' :
                      selectedLanguage.code === 'mr' ? 'mr-IN' :
                      selectedLanguage.code === 'kn' ? 'kn-IN' :
                      'te-IN';
    
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };
    
    recognition.onerror = () => {
      setIsListening(false);
      alert('Voice recognition error. Please try again.');
    };
    
    recognition.start();
  };
  
  const handleTextToSpeech = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in your browser');
      return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedLanguage.code === 'en' ? 'en-US' :
                     selectedLanguage.code === 'hi' ? 'hi-IN' :
                     selectedLanguage.code === 'mr' ? 'mr-IN' :
                     selectedLanguage.code === 'kn' ? 'kn-IN' :
                     'te-IN';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">College Assistant</h1>
              <p className="text-xs text-gray-400">AI-Powered Student Query System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <select
              value={selectedLanguage.code}
              onChange={(e) => {
                const lang = languages.find(l => l.code === e.target.value);
                if (lang) setSelectedLanguage(lang);
              }}
              className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code} className="bg-gray-800">
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div className={`flex items-start space-x-2 max-w-[70%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' ? 'bg-blue-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <div className={`rounded-2xl px-4 py-2 ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/10 backdrop-blur-lg text-white border border-white/20'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                    {message.sender === 'bot' && (
                      <button
                        onClick={() => handleTextToSpeech(message.text)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    )}
                    {message.confidence !== undefined && (
                      <span className="text-xs text-gray-400">
                        {Math.round(message.confidence * 100)}% match
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-4 py-2 border border-white/20">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {suggestions.length > 0 && (
        <div className="bg-black/20 backdrop-blur-lg border-t border-white/10 p-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-gray-400 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setInput(suggestion)}
                  className="bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1 rounded-full transition-colors border border-white/20"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-black/20 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleVoiceInput}
              className={`p-2 rounded-lg transition-colors ${
                isListening 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'
              }`}
            >
              <Mic className="w-5 h-5" />
            </button>
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={selectedLanguage.code === 'en' ? 'Type your question...' :
                        selectedLanguage.code === 'hi' ? 'अपना प्रश्न टाइप करें...' :
                        selectedLanguage.code === 'mr' ? 'तुमचा प्रश्न टाइप करा...' :
                        selectedLanguage.code === 'kn' ? 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಟಾಈಪ್ ಮಾಡಿ...' :
                        'మీ ప్రశ్నను టైప్ చేయండి...'}
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isTyping}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};