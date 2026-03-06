import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Mic, Volume2, Globe } from "lucide-react";
import type { Message, ChatSession, Language } from "../types";

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "mr", name: "Marathi", flag: "🇮🇳" },
  { code: "kn", name: "Kannada", flag: "🇮🇳" },
  { code: "te", name: "Telugu", flag: "🇮🇳" },
];

interface ChatInterfaceProps {
  onSessionUpdate?: (session: ChatSession) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  onSessionUpdate,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(languages[0]);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  /* Welcome message */
  useEffect(() => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text:
        selectedLanguage.code === "en"
          ? "Hello! How can I help you today?"
          : selectedLanguage.code === "hi"
          ? "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?"
          : selectedLanguage.code === "mr"
          ? "नमस्कार! मी तुमची कशी मदत करू शकतो?"
          : selectedLanguage.code === "kn"
          ? "ನಮಸ್ಕಾರ! ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
          : "నమస్కారం! నేను మీకు ఎలా సహాయం చేయగలను?",
      sender: "bot",
      timestamp: new Date(),
      language: selectedLanguage.code,
    };

    setMessages([welcomeMessage]);
  }, [selectedLanguage]);

  /* 🔥 OpenAI API */
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
      language: selectedLanguage.code,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          language: selectedLanguage.code,
        }),
      });

      const data = await res.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || "Sorry, I could not understand.",
        sender: "bot",
        timestamp: new Date(),
        language: selectedLanguage.code,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API error:", error);
    }

    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  /* 🎤 Voice */
  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice not supported");
      return;
    }

    const SpeechRecognition: any = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang =
      selectedLanguage.code === "en"
        ? "en-US"
        : selectedLanguage.code === "hi"
        ? "hi-IN"
        : selectedLanguage.code === "mr"
        ? "mr-IN"
        : selectedLanguage.code === "kn"
        ? "kn-IN"
        : "te-IN";

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: any) => {
      setInput(event.results[0][0].transcript);
    };

    recognition.start();
  };

  /* 🔊 Text to speech */
  const handleTextToSpeech = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="flex flex-col h-screen bg-slate-900">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="text-purple-400" />
          <h1 className="text-white font-bold">College Assistant</h1>
        </div>

        <select
          value={selectedLanguage.code}
          onChange={(e) =>
            setSelectedLanguage(
              languages.find((l) => l.code === e.target.value) || languages[0]
            )
          }
          className="bg-gray-800 text-white p-1 rounded"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex mb-3 ${
              m.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="max-w-[70%]">
              <div
                className={`p-3 rounded-xl ${
                  m.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                {m.text}
              </div>
              <div className="text-xs text-gray-400">
                {formatTime(m.timestamp)}
              </div>
              {m.sender === "bot" && (
                <button
                  onClick={() => handleTextToSpeech(m.text)}
                  className="text-gray-400"
                >
                  <Volume2 size={14} />
                </button>
              )}
            </div>
          </div>
        ))}

        {isTyping && <p className="text-gray-400">Typing...</p>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10 flex space-x-2">
        <button
          onClick={handleVoiceInput}
          className={`p-2 rounded ${
            isListening ? "bg-red-500" : "bg-gray-700"
          }`}
        >
          <Mic />
        </button>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 p-2 rounded bg-gray-800 text-white"
          placeholder="Ask anything..."
        />

        <button
          onClick={handleSendMessage}
          className="bg-purple-500 p-2 rounded"
        >
          <Send />
        </button>
      </div>
    </div>
  );
};