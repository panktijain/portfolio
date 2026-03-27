import AnimatedSection from './AnimatedSection';

const Achievements = () => {
  const achievements = [
    {
      title: "3rd Position - Entrepreneurial Bootcamp",
      subtitle: "Awarded by LPU's E-Cell for innovative project work",
      date: "Sep 2024",
      icon: "🥉",
      type: "Achievement"
    }
  ];

  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 Generative AI Certified Professional",
      issuer: "Oracle University",
      date: "Oct 2025",
      icon: "☁️"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Data Science Certified Professional",
      issuer: "Oracle University",
      date: "Oct 2025",
      icon: "📊"
    },
    {
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle University",
      date: "Oct 2025",
      icon: "🧠"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Apr 2025",
      icon: "🌐"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Achievements Column */}
          <AnimatedSection>
            <div>
              <h2 className="text-3xl font-bold text-light-text dark:text-dark-text inline-block border-b-4 border-light-accent dark:border-dark-accent pb-2 mb-10 flex items-center">
                <span className="mr-3">🌟</span> Achievements
              </h2>

              <div className="space-y-6">
                {achievements.map((item, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl flex items-start space-x-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">{item.subtitle}</p>
                      <span className="text-xs font-semibold text-light-accent dark:text-dark-accent uppercase tracking-wider">{item.date}</span>
                      {item.description && (
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certificates Column */}
          <AnimatedSection delay={0.15}>
            <div>
              <h2 className="text-3xl font-bold text-light-text dark:text-dark-text inline-block border-b-4 border-light-accent dark:border-dark-accent pb-2 mb-10 flex items-center">
                <span className="mr-3">📜</span> Certifications
              </h2>

              <div className="space-y-6">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl flex items-center space-x-6 group hover:translate-x-2 hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center text-3xl shrink-0 group-hover:bg-light-accent group-hover:text-white dark:group-hover:bg-dark-accent transition-colors">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{cert.title}</h3>
                      <div className="flex items-center space-x-3 mt-2 text-sm">
                        <span className="font-semibold text-slate-600 dark:text-slate-400">{cert.issuer}</span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="text-light-accent dark:text-dark-accent">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
