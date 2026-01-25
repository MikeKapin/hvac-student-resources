import React, { useState, useRef, useEffect } from 'react';
import { Send, BookOpen, AlertTriangle, User, Bot, Upload, Search, ToggleLeft, ToggleRight } from 'lucide-react';
import { moduleInfo } from './data/index.js';
import InstallPrompt from './components/InstallPrompt.jsx';
import CSAGasSearchTool from './components/CSAGasSearchTool.jsx';
import { registerServiceWorker, isRunningStandalone } from './utils/pwa.js';

const CSAGasTutorApp = () => {
  const [viewMode, setViewMode] = useState('search'); // 'search' or 'chat'
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your Gas Technician AI Tutor. I'm here to help you understand concepts from G3 and G2 certification modules. Ask me about gas codes, safety procedures, installation techniques, or any specific topics. What would you like to learn about today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedModule, setSelectedModule] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isPWA, setIsPWA] = useState(false);
  const messagesEndRef = useRef(null);

  const quickTopics = [
    "Gas pressure calculations",
    "Pipe sizing formulas",
    "Venting requirements",
    "Leak testing procedures",
    "CO safety limits",
    "Appliance clearances",
    "Code violations",
    "Emergency shutdown",
    "PPE requirements",
    "Natural gas vs propane",
    "Ohm's law applications",
    "CSA B149.1 requirements"
  ];

  const moduleCategories = [
    { id: 1, title: "Safety", icon: "🛡️", description: "PPE & Safety Protocols" },
    { id: 2, title: "Tools", icon: "🔧", description: "Equipment & Testing" },
    { id: 3, title: "Gas Properties", icon: "⛽", description: "Handling & Properties" },
    { id: 4, title: "Codes", icon: "📋", description: "Regulations & Acts" },
    { id: 5, title: "Electricity", icon: "⚡", description: "Basic Electrical" },
    { id: 6, title: "Drawings", icon: "📐", description: "Technical Plans" },
    { id: 7, title: "Relations", icon: "🤝", description: "Customer Service" },
    { id: 8, title: "Piping", icon: "🔩", description: "Systems & Tubing" },
    { id: 9, title: "Appliances", icon: "🏠", description: "Gas Equipment" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    registerServiceWorker();
    setIsPWA(isRunningStandalone());
  }, []);

  const callNetlifyAI = async (userMessage) => {
    setIsTyping(true);

    try {
      const moduleId = selectedModule ? parseInt(selectedModule) : null;

      // Get conversation history for context (last 10 messages)
      const conversationHistory = messages.slice(-10).map(msg => ({
        type: msg.type,
        content: msg.content
      }));

      const response = await fetch('/.netlify/functions/gas-tech-tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          moduleId: moduleId,
          conversationHistory: conversationHistory
        })
      });

      if (!response.ok) {
        throw new Error(`AI service error: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'AI service returned an error');
      }

      let responseContent = data.response;

      // Add module context if available
      if (data.moduleContext && data.responseType === 'module_specific') {
        responseContent = `**${data.moduleContext} - Module ${moduleId}**\n\n${responseContent}`;
      }

      // Add follow-up suggestions for general responses
      if (data.responseType === 'general') {
        responseContent += "\n\n💡 **Tip:** Select a specific module from the sidebar for more targeted information!";
      }

      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: responseContent,
        timestamp: new Date(),
        moduleContext: data.moduleContext
      }]);
      setIsTyping(false);

    } catch (error) {
      console.error('Error calling AI:', error);

      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: "I apologize, but I'm having trouble connecting to the AI service right now. Please try again in a moment. If the problem persists, you can still use the Search Mode to browse course materials.",
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        content: inputMessage,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newMessage]);
      callNetlifyAI(inputMessage);
      setInputMessage('');
    }
  };

  const handleQuickTopic = (topic) => {
    setInputMessage(`Explain ${topic}`);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files]);

    const fileMessage = {
      id: messages.length + 1,
      type: 'user',
      content: `📁 Uploaded: ${files.map(f => f.name).join(', ')}`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, fileMessage]);

    setTimeout(() => {
      callNetlifyAI(`I've uploaded module materials: ${files.map(f => f.name).join(', ')}. Please help me understand this content.`);
    }, 500);
  };

  const getModuleTitle = (moduleId) => {
    const module = moduleInfo.find(m => m.id.toString() === moduleId);
    return module ? module.title : 'All Modules';
  };

  // If in search mode, render the search tool
  if (viewMode === 'search') {
    return (
      <>
        <div className="relative">
          {/* Mode Toggle Button */}
          <button
            onClick={() => setViewMode('chat')}
            className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-lg"
            style={{ backgroundColor: '#CC785C', color: 'white' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#d68969'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#CC785C'}
          >
            <ToggleRight size={20} />
            Switch to Chat Mode
          </button>
          <CSAGasSearchTool />
        </div>
        <InstallPrompt />
      </>
    );
  }

  return (
    <>
    <div className="flex h-screen" style={{ backgroundColor: '#1F1F1F' }}>
      {/* Sidebar */}
      <div className="w-80 flex flex-col" style={{ backgroundColor: '#2A2A2A', borderRight: '1px solid #3F3F3F' }}>
        <div className="p-4" style={{ borderBottom: '1px solid #3F3F3F' }}>
          <h1 className="text-xl font-bold flex items-center gap-2" style={{ color: '#E8E8E8' }}>
            <BookOpen style={{ color: '#CC785C' }} />
            Gas Tech AI Tutor
          </h1>
          <p className="text-sm mt-1" style={{ color: '#A0A0A0' }}>Free AI-powered learning assistant</p>
          {isPWA && (
            <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(204, 120, 92, 0.2)', color: '#CC785C' }}>
              📱 Installed
            </span>
          )}
          <p className="text-xs mt-2" style={{ color: '#A0A0A0' }}>by Mike Kapin</p>
        </div>

        {/* Module Selection */}
        <div className="p-4" style={{ borderBottom: '1px solid #3F3F3F' }}>
          <label className="block text-sm font-medium mb-2" style={{ color: '#E8E8E8' }}>Select Module</label>
          <select
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
            className="w-full p-2 rounded-md text-sm"
            style={{
              backgroundColor: '#1F1F1F',
              color: '#E8E8E8',
              border: '1px solid #3F3F3F',
              outline: 'none'
            }}
          >
            <option value="">All Modules</option>
            {moduleInfo.map(module => (
              <option key={module.id} value={module.id}>
                Module {module.id}: {module.title}
              </option>
            ))}
          </select>
          {selectedModule && (
            <p className="text-xs mt-1" style={{ color: '#A0A0A0' }}>
              {moduleInfo.find(m => m.id.toString() === selectedModule)?.description}
            </p>
          )}
        </div>

        {/* File Upload */}
        <div className="p-4" style={{ borderBottom: '1px solid #3F3F3F' }}>
          <label className="block text-sm font-medium mb-2" style={{ color: '#E8E8E8' }}>Upload Module Materials</label>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            className="w-full text-sm"
            style={{ color: '#A0A0A0' }}
          />
          {uploadedFiles.length > 0 && (
            <div className="mt-2">
              <p className="text-xs" style={{ color: '#A0A0A0' }}>{uploadedFiles.length} file(s) uploaded</p>
            </div>
          )}
        </div>

        {/* Quick Topics */}
        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="text-sm font-medium mb-3" style={{ color: '#E8E8E8' }}>Quick Topics</h3>
          <div className="space-y-2">
            {quickTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => handleQuickTopic(topic)}
                className="w-full text-left p-2 text-sm rounded-md transition-colors"
                style={{ color: '#A0A0A0', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3F3F3F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Safety Notice */}
        <div className="p-4" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', borderTop: '1px solid rgba(255, 193, 7, 0.3)' }}>
          <div className="flex items-start gap-2">
            <AlertTriangle size={16} style={{ color: '#FFC107', marginTop: '2px' }} />
            <div>
              <p className="text-xs font-medium" style={{ color: '#FFC107' }}>Safety Reminder</p>
              <p className="text-xs" style={{ color: '#A0A0A0' }}>Always follow current codes and manufacturer instructions. This AI tutor supplements but doesn't replace official training.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4" style={{ backgroundColor: '#2A2A2A', borderBottom: '1px solid #3F3F3F' }}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold" style={{ color: '#E8E8E8' }}>
                {selectedModule ? `Module ${selectedModule}: ${getModuleTitle(selectedModule)}` : 'Gas Technician Help'}
              </h2>
              <p className="text-sm" style={{ color: '#A0A0A0' }}>Ask questions about gas codes, safety, installation, and more</p>
            </div>
            <button
              onClick={() => setViewMode('search')}
              className="px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 text-sm"
              style={{ backgroundColor: '#CC785C', color: 'white' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#d68969'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#CC785C'}
            >
              <ToggleLeft size={16} />
              Search Mode
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: message.type === 'user' ? '#CC785C' : '#4CAF50' }}
                >
                  {message.type === 'user' ? <User size={16} style={{ color: 'white' }} /> : <Bot size={16} style={{ color: 'white' }} />}
                </div>
                <div
                  className="rounded-lg p-3"
                  style={{
                    backgroundColor: message.type === 'user' ? '#CC785C' : '#2A2A2A',
                    color: '#E8E8E8',
                    border: message.type === 'user' ? 'none' : '1px solid #3F3F3F'
                  }}
                >
                  <div className="chat-message whitespace-pre-wrap">{message.content}</div>
                  <div className="text-xs mt-1" style={{ color: message.type === 'user' ? 'rgba(255,255,255,0.7)' : '#A0A0A0' }}>
                    {message.timestamp.toLocaleTimeString()}
                    {message.moduleContext && (
                      <span className="ml-2 px-2 py-1 rounded text-xs" style={{ backgroundColor: '#3F3F3F', color: '#A0A0A0' }}>
                        {message.moduleContext}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4CAF50' }}>
                <Bot size={16} style={{ color: 'white' }} />
              </div>
              <div className="rounded-lg p-3" style={{ backgroundColor: '#2A2A2A', border: '1px solid #3F3F3F' }}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#A0A0A0' }}></div>
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#A0A0A0', animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#A0A0A0', animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4" style={{ backgroundColor: '#2A2A2A', borderTop: '1px solid #3F3F3F' }}>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about gas codes, installation procedures, safety requirements..."
              className="flex-1 p-3 rounded-lg"
              style={{
                backgroundColor: '#1F1F1F',
                color: '#E8E8E8',
                border: '1px solid #3F3F3F',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="p-3 rounded-lg transition-colors"
              style={{
                backgroundColor: inputMessage.trim() ? '#CC785C' : '#3F3F3F',
                color: 'white',
                cursor: inputMessage.trim() ? 'pointer' : 'not-allowed'
              }}
              onMouseEnter={(e) => { if (inputMessage.trim()) e.target.style.backgroundColor = '#d68969'; }}
              onMouseLeave={(e) => { if (inputMessage.trim()) e.target.style.backgroundColor = '#CC785C'; }}
            >
              <Send size={20} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {quickTopics.slice(0, 4).map((topic, index) => (
              <button
                key={index}
                onClick={() => handleQuickTopic(topic)}
                className="text-xs px-2 py-1 rounded transition-colors"
                style={{ backgroundColor: '#3F3F3F', color: '#A0A0A0' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4F4F4F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3F3F3F'}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    <InstallPrompt />
    </>
  );
};

export default CSAGasTutorApp;
