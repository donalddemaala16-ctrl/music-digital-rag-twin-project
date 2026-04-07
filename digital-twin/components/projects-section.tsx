import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Personal Digital Twin",
    description:
      "Building a RAG-based digital twin using modern data retrieval and LLM integration to demonstrate practical AI implementation skills.",
    link: "#",
    tags: ["RAG Pipelines", "LLM Integration"],
  },
  {
    title: "Agentic AI Implementation",
    description:
      "Working on autonomous AI systems at Ausbiz that don't just flag problems, but proactively suggest solutions based on real-time data.",
    link: "#",
    tags: ["Agentic AI", "Business Intelligence"],
  },
  {
    title: "Supply Chain Risk Analysis",
    description:
      "Applying qualitative risk assessments and quantitative data modeling to identify single points of failure in procurement processes.",
    link: "#",
    tags: ["Risk Management", "Data Modeling"],
  },
]

const learnings = [
  {
    title: "Translating Technical Constraints into Business Opportunities",
    date: "2026",
  },
  {
    title: "Agile Methodologies in AI Project Management",
    date: "2026",
  },
  {
    title: "The Future CIO: Managing Intelligence, Not Just Infrastructure",
    date: "2025",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group block p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-secondary/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Learning Focus
            </h2>
          </div>
          
          <div className="space-y-4">
            {learnings.map((article, index) => (
              <Link
                key={index}
                href="#"
                className="group flex items-center justify-between py-3 border-b border-border/50 last:border-0 hover:border-primary/50 transition-colors"
              >
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </span>
                <span className="text-sm text-muted-foreground font-mono">
                  {article.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
