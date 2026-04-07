"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

function ThoughtBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm Minh's virtual assistant. I can help answer questions about his experience, expertise, or how to get in touch. How can I help you today?",
    sender: "assistant",
    timestamp: new Date(),
  },
]

const quickReplies = [
  "Tell me about Minh's background",
  "What are his areas of expertise?",
  "How can I contact him?",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes("background") || lowerMessage.includes("about") || lowerMessage.includes("who")) {
      return "Minh is a 3rd-year Information Management Systems student in Sydney, Australia, aspiring to become a CIO. He focuses on data-driven decision-making, translating complex technical constraints into business risks and opportunities. He's currently interning at Ausbiz, working on AI implementation and business assessments."
    }
    
    if (lowerMessage.includes("expertise") || lowerMessage.includes("skill") || lowerMessage.includes("specialize")) {
      return "Minh's areas of expertise include Communication, Agile/Scrum Methodologies, Supply Chain Risk Management, and Point-of-Sale Systems. He's proficient in English (IELTS 7.0) and skilled at navigating multicultural environments, having experience in both Vietnam and Australia."
    }
    
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email") || lowerMessage.includes("touch")) {
      return "You can reach Minh at tmdharrys12@gmail.com. He's also active on LinkedIn. Feel free to use the contact section below or connect with him directly for opportunities in AI, business strategy, or technology leadership."
    }
    
    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("career")) {
      return "Minh is currently an Intern at Ausbiz (March 2026-present) focusing on Agentic AI and business assessments. Previously, he worked as a Waiter at Old Quarter Cafe (2023-2025), developing multitasking skills in high-pressure environments, and volunteered with Sai Gon Children's Charity (2021-2022) working with children with autism."
    }
    
    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio")) {
      return "Minh is currently building a personal digital twin using RAG pipelines to demonstrate his understanding of modern data retrieval and LLM integration. At Ausbiz, he's working on Agentic AI systems that autonomously suggest solutions based on real-time data analysis."
    }
    
    if (lowerMessage.includes("ai") || lowerMessage.includes("agentic") || lowerMessage.includes("technology")) {
      return "Minh believes the CIO role will shift from managing infrastructure to managing 'Intelligence.' At Ausbiz, he works with Agentic AI—systems that don't just flag delays but proactively suggest rerouting or inventory adjustments. His focus is on ensuring AI agents are ethical, secure, and aligned with human objectives."
    }
    
    if (lowerMessage.includes("leadership") || lowerMessage.includes("management") || lowerMessage.includes("style")) {
      return "Minh's leadership style emphasizes radical empathy and tailored communication. His volunteer work with children with autism taught him that everyone processes information differently—a good leader adapts their 'interface' to match their team's 'protocol.'"
    }
    
    if (lowerMessage.includes("supply chain") || lowerMessage.includes("risk")) {
      return "For supply chain risk management, Minh combines qualitative risk assessments with quantitative data modeling. He identifies single points of failure and applies Agile methodologies to create pivot points in procurement processes."
    }
    
    return "Thanks for your question! Minh is an IMS student aspiring to be a CIO, focusing on AI implementation and business strategy. Feel free to ask about his background, expertise, projects, or how to get in touch. For detailed discussions, reach him at tmdharrys12@gmail.com."
  }

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(content),
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        <ThoughtBubbleIcon className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <ThoughtBubbleIcon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">Chat with Minh</h3>
                <p className="text-xs text-muted-foreground">Virtual Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-secondary-foreground rounded-bl-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground px-4 py-2.5 rounded-2xl rounded-bl-sm">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-primary/50 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-secondary text-foreground placeholder:text-muted-foreground px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
