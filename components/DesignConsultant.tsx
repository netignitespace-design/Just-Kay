import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const DesignConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Aria, your design consultant. Tell me about your space, and I'll help you find the perfect couch or cushions." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Format history for Gemini
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await sendMessageToGemini(userMsg, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "I apologize, I didn't quite catch that." }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-stone-900 text-white p-4 rounded-full shadow-lg hover:bg-stone-800 transition-all duration-300 flex items-center gap-2 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-medium pr-1">Design Help</span>
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-full sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right border border-stone-200 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-stone-900 text-white rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="bg-stone-700 p-1.5 rounded-full">
                <Sparkles className="w-4 h-4 text-amber-200" />
            </div>
            <div>
              <h3 className="font-serif font-medium">Aria</h3>
              <p className="text-xs text-stone-400">Design Consultant</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-stone-800 text-white rounded-tr-none' 
                    : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-stone-200 shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-stone-400" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-stone-200 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about colors, styles..."
              className="flex-1 bg-stone-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-stone-400 focus:outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="bg-stone-900 text-white p-2 rounded-full hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
