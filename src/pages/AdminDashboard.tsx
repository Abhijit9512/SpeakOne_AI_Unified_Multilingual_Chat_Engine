import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { MessageSquare, Globe, TrendingUp, AlertCircle, Plus, Edit, Trash2, Search, Download } from 'lucide-react';
import type { FAQ, Analytics } from '../types';
import { NLPService } from '../lib/nlpService';

const COLORS = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export const AdminDashboard: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  
  const nlpService = NLPService.getInstance();
  
  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = () => {
    setFaqs(nlpService.getAllFAQs());
    // In a real app, this would come from an API
    setAnalytics({
      totalQueries: 15234,
      languageDistribution: {
        en: 8500,
        hi: 3200,
        mr: 1800,
        kn: 1200,
        te: 534
      },
      topQuestions: [
        { question: 'What is the admission process?', count: 450 },
        { question: 'What are the fees?', count: 380 },
        { question: 'When are exams?', count: 320 },
        { question: 'Hostel facilities', count: 280 },
        { question: 'Placement statistics', count: 250 }
      ],
      unansweredQueries: 45,
      intentDistribution: {
        Admissions: 3200,
        Fees: 2800,
        Courses: 2100,
        Exams: 1900,
        Results: 1500,
        Hostel: 1200,
        Placement: 1800,
        Scholarship: 900
      },
      dailyActivity: [
        { date: 'Mon', count: 320 },
        { date: 'Tue', count: 380 },
        { date: 'Wed', count: 420 },
        { date: 'Thu', count: 390 },
        { date: 'Fri', count: 450 },
        { date: 'Sat', count: 280 },
        { date: 'Sun', count: 180 }
      ]
    });
  };
  
  const categories = ['All', 'Admissions', 'Fees', 'Courses', 'Exams', 'Results', 'Hostel', 'Placement', 'Scholarship', 'Documents', 'General'];
  
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.intent.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.translations.en.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleDeleteFAQ = (id: string) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      nlpService.deleteFAQ(id);
      loadData();
    }
  };
  
  const handleSaveFAQ = (faq: FAQ) => {
    if (editingFaq) {
      nlpService.updateFAQ(faq.id, faq);
    } else {
      nlpService.addFAQ(faq);
    }
    setIsAddModalOpen(false);
    setEditingFaq(null);
    loadData();
  };
  
  const languageData = analytics ? Object.entries(analytics.languageDistribution).map(([lang, count]) => ({
    name: lang.toUpperCase(),
    value: count
  })) : [];
  
  const intentData = analytics ? Object.entries(analytics.intentDistribution).map(([intent, count]) => ({
    name: intent,
    value: count
  })) : [];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage chatbot knowledge base and analytics</p>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-white/10 backdrop-blur-lg rounded-lg p-1 w-fit">
          {['overview', 'faqs', 'analytics', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg capitalize transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <MessageSquare className="w-8 h-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">{analytics?.totalQueries.toLocaleString()}</span>
              </div>
              <p className="text-gray-400">Total Queries</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <Globe className="w-8 h-8 text-pink-400" />
                <span className="text-2xl font-bold text-white">{Object.keys(analytics?.languageDistribution || {}).length}</span>
              </div>
              <p className="text-gray-400">Languages</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold text-white">95%</span>
              </div>
              <p className="text-gray-400">Success Rate</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <AlertCircle className="w-8 h-8 text-yellow-400" />
                <span className="text-2xl font-bold text-white">{analytics?.unansweredQueries}</span>
              </div>
              <p className="text-gray-400">Unanswered</p>
            </div>
          </div>
        )}
        
        {/* FAQs Tab */}
        {activeTab === 'faqs' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="p-6 border-b border-white/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-gray-800">{cat}</option>
                    ))}
                  </select>
                </div>
                
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add FAQ</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Intent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Question (EN)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {filteredFaqs.map((faq) => (
                    <tr key={faq.id} className="hover:bg-white/5">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{faq.intent}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{faq.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">{faq.translations.en.question}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{faq.priority}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setEditingFaq(faq)}
                            className="text-purple-400 hover:text-purple-300"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteFAQ(faq.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Analytics Tab */}
        {activeTab === 'analytics' && analytics && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Language Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={languageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {languageData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Intent Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={intentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" angle={-45} textAnchor="end" height={80} />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                    <Bar dataKey="value" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Daily Activity</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={analytics.dailyActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Line type="monotone" dataKey="count" stroke="#ec4899" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Top Questions</h3>
              <div className="space-y-3">
                {analytics.topQuestions.map((q, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300">{q.question}</span>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">{q.count} queries</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-6">Settings</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confidence Threshold</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="40"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0%</span>
                  <span>40%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Auto-save Conversations</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Export Data</label>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export Analytics</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Add/Edit FAQ Modal */}
      {(isAddModalOpen || editingFaq) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              {editingFaq ? 'Edit FAQ' : 'Add New FAQ'}
            </h3>
            
            <FAQForm
              faq={editingFaq}
              onSave={handleSaveFAQ}
              onCancel={() => {
                setIsAddModalOpen(false);
                setEditingFaq(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface FAQFormProps {
  faq?: FAQ | null;
  onSave: (faq: FAQ) => void;
  onCancel: () => void;
}

const FAQForm: React.FC<FAQFormProps> = ({ faq, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Partial<FAQ>>({
    intent: faq?.intent || '',
    category: faq?.category || 'General',
    priority: faq?.priority || 1,
    keywords: faq?.keywords || [],
    synonyms: faq?.synonyms || [],
    translations: faq?.translations || {
      en: { question: '', answer: '' },
      hi: { question: '', answer: '' },
      mr: { question: '', answer: '' },
      kn: { question: '', answer: '' },
      te: { question: '', answer: '' }
    }
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFaq: FAQ = {
      id: faq?.id || Date.now().toString(),
      intent: formData.intent || '',
      category: formData.category || 'General',
      priority: formData.priority || 1,
      keywords: formData.keywords || [],
      synonyms: formData.synonyms || [],
      translations: formData.translations || {
        en: { question: '', answer: '' },
        hi: { question: '', answer: '' },
        mr: { question: '', answer: '' },
        kn: { question: '', answer: '' },
        te: { question: '', answer: '' }
      }
    };
    onSave(newFaq);
  };
  
  const updateTranslation = (lang: string, field: 'question' | 'answer', value: string) => {
    setFormData(prev => ({
      ...prev,
      translations: {
        en: { question: '', answer: '' },
        hi: { question: '', answer: '' },
        mr: { question: '', answer: '' },
        kn: { question: '', answer: '' },
        te: { question: '', answer: '' },
        ...prev.translations,
        [lang]: {
          question: field === 'question' ? value : (prev.translations?.[lang as keyof typeof prev.translations]?.question || ''),
          answer: field === 'answer' ? value : (prev.translations?.[lang as keyof typeof prev.translations]?.answer || '')
        }
      }
    }));
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Intent</label>
        <input
          type="text"
          value={formData.intent}
          onChange={(e) => setFormData(prev => ({ ...prev, intent: e.target.value }))}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="Admissions" className="bg-gray-800">Admissions</option>
          <option value="Fees" className="bg-gray-800">Fees</option>
          <option value="Courses" className="bg-gray-800">Courses</option>
          <option value="Exams" className="bg-gray-800">Exams</option>
          <option value="Results" className="bg-gray-800">Results</option>
          <option value="Hostel" className="bg-gray-800">Hostel</option>
          <option value="Placement" className="bg-gray-800">Placement</option>
          <option value="Scholarship" className="bg-gray-800">Scholarship</option>
          <option value="Documents" className="bg-gray-800">Documents</option>
          <option value="General" className="bg-gray-800">General</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Priority</label>
        <input
          type="number"
          min="1"
          max="10"
          value={formData.priority}
          onChange={(e) => setFormData(prev => ({ ...prev, priority: parseInt(e.target.value) }))}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      
      {/* English Translation */}
      <div className="border border-white/20 rounded-lg p-4">
        <h4 className="text-white font-medium mb-2">English</h4>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Question"
            value={formData.translations?.en?.question || ''}
            onChange={(e) => updateTranslation('en', 'question', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            placeholder="Answer"
            value={formData.translations?.en?.answer || ''}
            onChange={(e) => updateTranslation('en', 'answer', e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={3}
            required
          />
        </div>
      </div>
      
      {/* Other Languages */}
      {['hi', 'mr', 'kn', 'te'].map(lang => (
        <div key={lang} className="border border-white/20 rounded-lg p-4">
          <h4 className="text-white font-medium mb-2">
            {lang === 'hi' ? 'Hindi' : lang === 'mr' ? 'Marathi' : lang === 'kn' ? 'Kannada' : 'Telugu'}
          </h4>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Question"
              value={formData.translations?.[lang as keyof typeof formData.translations]?.question || ''}
              onChange={(e) => updateTranslation(lang, 'question', e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Answer"
              value={formData.translations?.[lang as keyof typeof formData.translations]?.answer || ''}
              onChange={(e) => updateTranslation(lang, 'answer', e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={3}
            />
          </div>
        </div>
      ))}
      
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          {faq ? 'Update' : 'Add'} FAQ
        </button>
      </div>
    </form>
  );
};