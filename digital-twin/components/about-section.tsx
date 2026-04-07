export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            About
          </h2>
        </div>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a 3rd-year Information Management Systems student based in Sydney, Australia, 
              I&apos;m building the foundation for a career as a CIO. My focus is on the intersection of{" "}
              <span className="text-foreground font-medium">
                artificial intelligence, supply chain management, and business strategy
              </span>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I believe in data-driven decision-making and translating complex technical constraints 
              into business risks and opportunities. My studies in IMS allow me to bridge the gap 
              between technical IT requirements and business management, ensuring technology serves 
              the overarching corporate strategy.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Currently, I&apos;m building a personal digital twin using RAG pipelines to demonstrate 
              my understanding of modern data retrieval and LLM integration. I stay current with 
              rapidly evolving technology through hands-on projects beyond university theory.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Areas of Expertise
              </h3>
              <ul className="space-y-2 text-foreground">
                <li>Communication</li>
                <li>Agile/Scrum Methodologies</li>
                <li>Supply Chain Risk Management</li>
                <li>Point-of-Sale Systems</li>
                <li>English (IELTS 7.0)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Education
              </h3>
              <div className="space-y-2 text-foreground">
                <p>BSc Information Management Systems</p>
                <p className="text-sm text-muted-foreground">3rd Year Student</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Certifications
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li>IELTS 7.0</li>
                <li>National Excellent Student Selection</li>
                <li>Kids with Autism Training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
