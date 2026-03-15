const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Kotlin", level: 85 },
        { name: "C/C++", level: 85 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "PHP", level: 70 },
      ]
    },
    {
      title: "Frontend, Mobile & Frameworks",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Jetpack Compose", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "XML", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Express.js", level: 75 },
        { name: "jQuery", level: 70 },
      ]
    },
    {
      title: "Databases & Others",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL / PostgreSQL", level: 85 },
        { name: "Android Studio", level: 85 },
        { name: "postman", level: 80 },
        { name: "Data Structures & Algorithms", level: 95 },
        { name: "Object Oriented Programming", level: 90 },
        { name: "Git & GitHub", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text inline-block relative border-b-4 border-light-accent dark:border-dark-accent pb-2">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the programming languages, frameworks, and databases I use to build robust applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-light-accent dark:text-dark-accent mb-6 flex items-center">
                <span className="w-8 h-1 bg-light-accent dark:bg-dark-accent mr-3 rounded-full"></span>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-light-accent to-purple-500 dark:from-dark-accent dark:to-purple-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem-Solving", "Team Player", "Adaptability", "Leadership"].map((skill, idx) => (
              <span
                key={idx}
                className="px-6 py-2 glass text-sm font-medium text-light-text dark:text-dark-text rounded-full hover:bg-light-accent hover:text-white dark:hover:bg-dark-accent transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
