import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Java", level: 88 },
        { name: "Node.js", level: 86 },
        { name: "HTML", level: 92 },
        { name: "CSS", level: 90 },
        { name: "PHP", level: 75 },
      ]
    },
    {
      title: "Frameworks",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "NodeJS", level: 86 },
        { name: "Express.js", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 84 },
        { name: "MongoDB", level: 88 },
        { name: "Git/GitHub", level: 90 },
        { name: "Cursor", level: 80 },
        { name: "Postman", level: 86 },
        { name: "Figma", level: 78 },
        { name: "REST APIs", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20">
      <div className="container px-6 mx-auto md:px-12">

        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="relative inline-block pb-2 text-3xl font-bold border-b-4 md:text-5xl text-light-text dark:text-dark-text border-light-accent dark:border-dark-accent">
              Technical Arsenal
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-slate-600 dark:text-slate-400">
              A comprehensive overview of the programming languages, frameworks, and databases I use to build robust applications.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <div className="p-8 transition-all duration-300 glass rounded-2xl hover:-translate-y-2 hover:shadow-2xl">
                <h3 className="flex items-center mb-6 text-xl font-bold text-light-accent dark:text-dark-accent">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => {
                    const skillKey = `${idx}-${sIdx}`;
                    return (
                      <div 
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(skillKey)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group cursor-default"
                      >
                        <div className="flex justify-between mb-1.5">
                          <span className={`text-sm font-medium transition-colors duration-200 ${hoveredSkill === skillKey ? 'text-light-accent dark:text-dark-accent' : 'text-slate-700 dark:text-slate-300'}`}>
                            {skill.name}
                          </span>
                          <span className={`text-sm font-semibold transition-all duration-200 ${hoveredSkill === skillKey ? 'text-light-accent dark:text-dark-accent scale-110' : 'text-slate-500 dark:text-slate-400'}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            className="bg-gradient-to-r from-light-accent to-purple-500 dark:from-dark-accent dark:to-purple-500 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: sIdx * 0.08, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Soft Skills Tags */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="mb-6 text-xl font-semibold text-slate-800 dark:text-slate-200">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Analytical Thinking", "Time Management", "Task Management", "Attention to Detail", "Leadership & Initiative-Taking", "Adaptability"].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-full cursor-default glass text-light-text dark:text-dark-text hover:bg-light-accent hover:text-white dark:hover:bg-dark-accent hover:scale-105 hover:shadow-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Skills;
