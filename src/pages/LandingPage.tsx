import React from 'react';
import { Bot, Globe, Users, TrendingUp, Shield, Zap, ArrowRight, Star, MessageSquare, Brain } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multilingual Support',
      description: 'English, Hindi, Marathi, Kannada, Telugu - Communicate in your preferred language'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered NLP',
      description: 'Advanced natural language processing for intelligent query understanding'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Student Focused',
      description: 'Designed specifically for Indian college students and their needs'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Instant responses with sub-second query processing'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and usage analytics for administrators'
    }
  ];
  
  const stats = [
    { number: '5+', label: 'Languages Supported' },
    { number: '10K+', label: 'Queries Handled Daily' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Availability' }
  ];
  
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Computer Science Student',
      content: 'This chatbot helped me find information about scholarships in seconds. The multilingual support is amazing!',
      rating: 5
    },
    {
      name: 'Rahul Kumar',
      role: 'Mechanical Engineering Student',
      content: 'I can ask questions in Hindi and get instant answers. It feels like talking to a real person.',
      rating: 5
    },
    {
      name: 'Dr. Anjali Patel',
      role: 'College Administrator',
      content: 'The analytics dashboard gives us valuable insights into student queries. It has reduced our support workload significantly.',
      rating: 5
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-purple-500/30">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">AI-Powered Student Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
              <span className="gradient-text">Smart India</span><br />
              Chatbot System
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent multilingual chatbot for Indian colleges. Answering student queries in 5 languages with 95% accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.hash = '#chat'}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Try Chatbot</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>View Demo</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </section>
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to transform student support services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Speak Your Language
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Break language barriers with our comprehensive multilingual support
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: 'English', flag: '🇺🇸', speakers: '1.5B+' },
              { name: 'Hindi', flag: '🇮🇳', speakers: '600M+' },
              { name: 'Marathi', flag: '🇮🇳', speakers: '83M+' },
              { name: 'Kannada', flag: '🇮🇳', speakers: '44M+' },
              { name: 'Telugu', flag: '🇮🇳', speakers: '82M+' }
            ].map((lang, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">{lang.flag}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{lang.name}</h3>
                <p className="text-sm text-gray-400">{lang.speakers} speakers</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Trusted by Students
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See what our users have to say about their experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Ready to Transform Student Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students already using our intelligent chatbot system
          </p>
          <button 
            onClick={() => window.location.hash = '#chat'}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <Bot className="w-5 h-5" />
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};