import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Automated Blogging System",
      date: "Apr 2025 - Aug 2025",
      problem: "Manual blog production was slow and inconsistent for SEO-focused publishing goals.",
      solution: "Engineered a fully automated SEO blogging workflow with URL and user-input pipelines, AI-generated content and visuals, and a Streamlit-based editor with one-click publishing.",
      impact: "Enabled 100+ blogs/month, increased publishing speed by nearly 3x, and maintained 99.9% uptime with robust fallback and logging mechanisms.",
      features: [
        "Google Gemini + Hugging Face content and image generation",
        "Streamlit interface for preview, edit, and publish",
        "Daily auto-post scheduler with reliability safeguards"
      ],
      tags: ["Python", "Streamlit", "Gemini API", "Hugging Face", "REST APIs"],
      github: "https://github.com/panktijain",
      icon: "🤖"
    },
    {
      title: "Hospital Management System",
      date: "Dec 2024 - Mar 2025",
      problem: "Hospitals needed secure, efficient workflows for patient records, appointments, and inter-department operations.",
      solution: "Built and optimized a full-stack management platform with JWT-protected scheduling, dynamic booking workflows, analytics, Maps integration, and AI-assisted decision support.",
      impact: "Handled 500+ patient records and 100+ daily appointments, improved operational flow by nearly 30%, reduced unauthorized access by 99%, and improved admin efficiency by 40%.",
      features: [
        "JWT access control and appointment automation",
        "Google Maps API integration for precise navigation",
        "OpenAI-powered assistance for admin workflows"
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/panktijain",
      icon: "🏥"
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text inline-block relative border-b-4 border-light-accent dark:border-dark-accent pb-2">
              Featured Projects
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Impact-driven projects focusing on real-world problems, clean architecture, and measurable outcomes.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <div className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                
                {/* Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-light-accent/20 to-purple-500/20 dark:from-dark-accent/20 dark:to-purple-500/20 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="text-4xl mb-4">{project.icon}</div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{project.title}</h3>
                </div>
                
                <span className="text-sm font-semibold text-light-accent dark:text-dark-accent mb-4 inline-block">{project.date}</span>
                
                {/* Problem → Solution → Impact */}
                <div className="space-y-3 mb-6 flex-grow">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400">Problem</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">Solution</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">{project.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Impact</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">{project.impact}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      Source Code
                    </a>
                    
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-light-accent dark:text-dark-accent hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        Live Preview
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
              <a 
                href="https://github.com/panktijain?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 glass text-light-text dark:text-dark-text font-medium rounded-full hover:bg-slate-100 dark:hover:bg-white/5 hover:scale-105 transition-all duration-300"
              >
                See More on GitHub →
              </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
