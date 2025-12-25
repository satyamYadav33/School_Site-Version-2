
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are SGN Assistant, an AI representative for S.G.N International School. 
        Context: Established 2006, CBSE school, 3000 students, 100 teachers, big sports grounds, dedicated prayer/cultural ground, small kids grass ground with swings, focus on practical learning.
        Question: ${userInput}`,
      });
      setAiResponse(response.text || "I'm sorry, I couldn't process that. Please contact our front desk.");
    } catch (err) {
      setAiResponse("I'm having trouble connecting right now. Please call us at +91-123-456-7890.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-blue-950 mb-6 italic">Get In Touch</h1>
            <p className="text-slate-500 max-w-2xl mx-auto">Whether you're looking for admission or have general inquiries, our doors are always open.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={24} />
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Call Us</h4>
                <p className="text-slate-600">+91 98765 43210</p>
                <p className="text-slate-600">+91 98765 43211</p>
              </div>

              <div className="p-8 bg-amber-50 rounded-[2rem] border border-amber-100">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-2xl flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Email Us</h4>
                <p className="text-slate-600">info@sgninternational.edu.in</p>
                <p className="text-slate-600">admissions@sgninternational.edu.in</p>
              </div>

              <div className="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={24} />
                </div>
                <h4 className="text-xl font-bold text-emerald-900 mb-2">Visit Us</h4>
                <p className="text-slate-600">School Campus, Academic Street,<br/>City Center Area, Pin-40001</p>
              </div>
            </div>

            {/* AI Assistant (Unique Interaction) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-950">SGN Smart Assistant</h3>
                    <p className="text-xs text-green-500 font-bold uppercase tracking-widest">Always Online</p>
                  </div>
                </div>

                <div className="min-h-[200px] bg-slate-50 rounded-3xl p-6 mb-6 text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {loading ? (
                    <div className="flex gap-2 items-center">
                      <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  ) : aiResponse || "Hello! Ask me anything about our curriculum, admissions, or campus facilities."}
                </div>

                <form onSubmit={handleAskAI} className="flex gap-4">
                  <input 
                    type="text" 
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your question (e.g., How big is the playground?)"
                    className="flex-1 bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-900 transition-all text-slate-800"
                  />
                  <button 
                    disabled={loading}
                    className="bg-blue-900 text-white px-8 rounded-2xl hover:bg-blue-800 transition-all disabled:opacity-50"
                  >
                    <Send size={24} />
                  </button>
                </form>
              </div>

              {/* Standard Form */}
              <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                <h3 className="text-2xl font-bold mb-6">Traditional Inquiry</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:bg-white/20 transition-all" />
                  <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:bg-white/20 transition-all" />
                  <textarea placeholder="Your Message" className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:bg-white/20 transition-all md:col-span-2 h-32" />
                  <button className="bg-amber-500 text-blue-950 font-bold uppercase tracking-widest py-4 rounded-xl md:col-span-2 hover:bg-amber-400 transition-all">Submit Inquiry</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
