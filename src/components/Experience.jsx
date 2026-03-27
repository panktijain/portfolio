import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const experiences = [
    {
      title: "InternshipHub - Multi-Role Internship Management Platform",
      organization: "Freelancing",
      date: "Oct 2025 - Nov 2025",
      type: "Freelancing",
      description: "Built a secure multi-role platform (Admin, Supervisor, Student), delivered modules for applications, verification, announcements, user management, and real-time messaging; improved workflow navigation by 30% and reduced manual effort by 40%.",
    },
    {
      title: "Summer Training - MERN Full Stack Development",
      organization: "Certificate Program",
      date: "Jun 2025 - Jul 2025",
      type: "Training",
      description: "Engineered full-stack applications with MongoDB, Express, React, and Node.js; improved workflow effectiveness by 45% and optimized responsiveness and REST service performance by 40%.",
    },
    {
      title: "Bachelor of Technology - Computer Science and Engineering",
      organization: "Lovely Professional University, Punjab, India",
      date: "Aug 2023 - Present",
      type: "Education",
      description: "CGPA: 7.5",
    },
    {
      title: "Intermediate",
      organization: "Christu Jyothi Convent Sr. Sec. School, Uttar Pradesh, India",
      date: "Apr 2022 - Mar 2023",
      type: "Education",
      description: "CGPA: 6.8",
    },
    {
      title: "Matriculation",
      organization: "Christu Jyothi Convent Sr. Sec. School, Uttar Pradesh, India",
      date: "Apr 2020 - Mar 2021",
      type: "Education",
      description: "CGPA: 8.4",
    }
  ];

  return (
    <section id="experience" className="relative py-20">
      <div className="container px-6 mx-auto md:px-12">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="relative inline-block pb-2 text-3xl font-bold border-b-4 md:text-5xl text-light-text dark:text-dark-text border-light-accent dark:border-dark-accent">
              Journey So Far
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-slate-600 dark:text-slate-400">
              My educational background and technical training experiences.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 w-1 transform left-4 md:left-1/2 bg-slate-200 dark:bg-slate-700 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className={`relative flex items-center justify-between md:justify-normal w-full overflow-hidden ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-light-accent dark:bg-dark-accent transform md:-translate-x-1/2 translate-y-1 md:translate-y-0 z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                  
                  {/* Content Box */}
                  <div className="w-full md:w-5/12 ml-12 md:ml-0 glass p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${exp.type === 'Freelancing' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : exp.type === 'Training' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                      {exp.type}
                    </span>
                    
                    <h3 className="mb-1 text-xl font-bold text-slate-800 dark:text-slate-100">{exp.title}</h3>
                    <h4 className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">{exp.organization}</h4>
                    
                    <div className="flex items-center mb-4 text-xs text-light-accent dark:text-dark-accent">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {exp.date}
                    </div>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-300">
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
