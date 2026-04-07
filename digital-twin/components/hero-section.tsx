"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-4xl">
        <div className="mb-8">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            IMS Student & Aspiring CIO
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance">
          Dao Tuan Minh
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
          <span className="text-foreground font-medium italic">Bridging technology and business strategy.</span>{" "}
          Information Management Systems student focused on AI implementation, supply chain optimization, 
          and data-driven decision making.
        </p>
        
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Currently interning at Ausbiz focusing on Agentic AI and business assessments. 
          Based in Sydney, Australia, I translate complex technical constraints into business 
          opportunities, ensuring technology serves corporate strategy.
        </p>
        
        <div className="flex items-center gap-6 mb-16">
          <Link 
            href="https://www.linkedin.com/in/tu%E1%BA%A5n-minh-%C4%91%C3%A0o-5815ba3b5/" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link 
            href="https://github.com" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link 
            href="mailto:tmdharrys12@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
        
        <button 
          onClick={() => {
            document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm font-mono uppercase tracking-wider">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}
