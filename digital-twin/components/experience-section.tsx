import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    period: "Mar 2026 — Present",
    title: "Intern",
    company: "Ausbiz",
    companyUrl: "#",
    description:
      "Focusing on AI implementation and business assessments. Working with Agentic AI to create autonomous systems that proactively solve problems and suggest solutions based on real-time data analysis.",
    skills: ["Agentic AI", "Business Assessment", "RAG Pipelines", "Data Analysis"],
  },
  {
    period: "Dec 2023 — Dec 2025",
    title: "Waiter",
    company: "Old Quarter Cafe",
    companyUrl: "#",
    description:
      "Managed high-pressure environments with dozens of simultaneous orders using strict prioritization models. Developed multitasking abilities and customer service excellence while maintaining quality standards.",
    skills: ["Multitasking", "Customer Service", "Time Management", "Problem Solving"],
  },
  {
    period: "Nov 2021 — Jan 2022",
    title: "Autism Volunteer",
    company: "Sai Gon Children's Charity CIO",
    companyUrl: "#",
    description:
      "Developed patience, empathy, and adaptive communication skills working with children with autism. Learned the importance of tailored communication and understanding diverse processing styles.",
    skills: ["Empathy", "Adaptive Communication", "Patience", "Team Collaboration"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-px bg-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            Experience
          </h2>
        </div>
        
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[180px_1fr] gap-4 py-6 border-b border-border/50 last:border-0"
            >
              <span className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </span>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  {exp.title}
                  <span className="text-primary mx-2">·</span>
                  <Link 
                    href={exp.companyUrl}
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
