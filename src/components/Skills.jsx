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
        { name: "MongoDB & MySQL / PostgreSQL", level: 85 },
        { name: "Vercel & Render", level: 80 },
        { name: "Android Studio", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Data Structures & Algorithms", level: 95 },
        { name: "Object Oriented Programming", level: 90 },
        { name: "Git & GitHub", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20">
      <div className="container px-6 mx-auto md:px-12">

        <div className="mb-16 text-center">
          <h2 className="relative inline-block pb-2 text-3xl font-bold border-b-4 md:text-5xl text-light-text dark:text-dark-text border-light-accent dark:border-dark-accent">
            Technical Arsenal
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-600 dark:text-slate-400">
            A comprehensive overview of the programming languages, frameworks, and databases I use to build robust applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-8 transition-transform duration-300 glass rounded-2xl hover:-translate-y-2">
              <h3 className="flex items-center mb-6 text-xl font-bold text-light-accent dark:text-dark-accent">
                <span className="w-8 h-1 mr-3 rounded-full bg-light-accent dark:bg-dark-accent"></span>
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
          <h3 className="mb-6 text-xl font-semibold text-slate-800 dark:text-slate-200">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem-Solving", "Team Player", "Adaptability", "Leadership"].map((skill, idx) => (
              <span
                key={idx}
                className="px-6 py-2 text-sm font-medium transition-colors duration-300 rounded-full cursor-default glass text-light-text dark:text-dark-text hover:bg-light-accent hover:text-white dark:hover:bg-dark-accent"
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
