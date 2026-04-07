import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            Contact
          </h2>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-medium text-foreground text-balance">
            Interested in connecting? Let&apos;s discuss opportunities in AI implementation, 
            business strategy, or technology leadership.
          </h3>
          
          <div className="flex flex-col md:flex-row gap-6">
            <Link
              href="mailto:tmdharrys12@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline text-lg"
            >
              tmdharrys12@gmail.com
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/tu%E1%BA%A5n-minh-%C4%91%C3%A0o-5815ba3b5/"
              target="_blank"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
