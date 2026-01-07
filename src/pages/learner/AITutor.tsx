import React, { useState, useRef, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const AITutor: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! I'm your AI Tutor. I can help you with Mathematics and Physical Sciences. Ask me anything!",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsTyping(true);

        // Mock AI response
        setTimeout(() => {
            const aiResponses = [
                "That's a great question! Let's break it down step by step.",
                "In physics, we often use Newton's laws to solve this kind of problem.",
                "Remember that for quadratic equations, you can use the formula x = (-b ± √(b² - 4ac)) / 2a.",
                "The periodic table organizes elements by atomic number and chemical properties.",
                "Here's a tip: try drawing a diagram first to visualize the problem."
            ];
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: randomResponse,
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <DashboardLayout userType="learner" headerTitle="AI Tutor">
            <div className="flex flex-col h-[calc(100vh-100px)] max-w-5xl mx-auto p-4 md:p-6 text-slate-900 dark:text-white">

                {/* Chat Area */}
                <div className="flex-1 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">

                    {/* Messages List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3 ${message.sender === 'user'
                                            ? 'bg-primary text-white rounded-tr-none'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                                        }`}
                                >
                                    <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                                    <span className={`text-[10px] block mt-1 opacity-70 ${message.sender === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                        <div className="relative flex items-end gap-2">
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Ask a question about Maths or Science..."
                                className="w-full bg-white dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded-xl px-4 py-3 pr-12 focus:ring-2 focus:ring-primary focus:border-transparent resize-none max-h-32 min-h-[50px] scrollbar-hide"
                                rows={1}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputText.trim() || isTyping}
                                className="absolute right-2 bottom-2 p-2 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-xl">send</span>
                            </button>
                        </div>
                        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">
                            AI Tutor can make mistakes. Consider checking important information.
                        </p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AITutor;
