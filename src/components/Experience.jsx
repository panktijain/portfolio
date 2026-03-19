import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const experiences = [
    {
      title: "Data Structures & Algorithms Summer Training",
      organization: "Hitbullseye (LPU)",
      date: "Jun 2025 - Jul 2025",
      type: "Training",
      description: "Completed intensive DSA training. Gained hands-on experience with arrays, linked lists, stacks, queues, trees, graphs, recursion, and problem-solving using Java.",
    },
    {
      title: "Bachelor of Technology - Computer Science and Engineering",
      organization: "Lovely Professional University (LPU), Punjab, India",
      date: "Aug 2023 - Present",
      type: "Education",
      description: "Pursuing B.Tech CSE. Current CGPA: 8.14",
    },
    {
      title: "Intermediate (Class 12)",
      organization: "D.A.V School Thermal, Panipat",
      date: "Apr 2022 - Mar 2023",
      type: "Education",
      description: "Completed with 80%.",
    },
    {
      title: "Matriculation (Class 10)",
      organization: "D.A.V School Thermal, Panipat",
      date: "Apr 2020 - Mar 2021",
      type: "Education",
      description: "Completed with 84.8%.",
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text inline-block relative border-b-4 border-light-accent dark:border-dark-accent pb-2">
              Journey So Far
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My educational background and technical training experiences.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className={`relative flex items-center justify-between md:justify-normal w-full overflow-hidden ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-light-accent dark:bg-dark-accent transform md:-translate-x-1/2 translate-y-1 md:translate-y-0 z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                  
                  {/* Content Box */}
                  <div className="w-full md:w-5/12 ml-12 md:ml-0 glass p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${exp.type === 'Training' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                      {exp.type}
                    </span>
                    
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{exp.title}</h3>
                    <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">{exp.organization}</h4>
                    
                    <div className="flex items-center text-xs text-light-accent dark:text-dark-accent mb-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {exp.date}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {exp.description}
                    </p>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
