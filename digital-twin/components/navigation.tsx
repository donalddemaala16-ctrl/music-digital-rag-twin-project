"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
        <Link href="/" className="text-foreground font-semibold tracking-tight text-lg">
          DTM
        </Link>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-wider"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <Link
          href="#contact"
          className="text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  )
}
