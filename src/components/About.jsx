const About = () => {
  return (
    <section id="about" className="py-20 relative bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text inline-block relative border-b-4 border-light-accent dark:border-dark-accent pb-2">
            About Me
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-light-accent to-purple-500 dark:from-dark-accent dark:to-purple-800 p-1">
               <img src="/Manav%20Formal%20Image.png" alt="Manav Singla" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
          <div className="md:w-2/3 text-lg text-slate-600 dark:text-slate-300 space-y-4">
             <p>
               Hello! I'm Manav Singla, a passionate and dedicated Computer Science student with a strong foundation in full-stack web development and problem-solving. My journey in tech started with a curiosity for how things work on the internet, which quickly evolved into a deep interest in software engineering.
             </p>
             <p>
               My goal is to build scalable, efficient, and user-friendly applications that solve real-world problems. Whether it's crafting responsive frontends with React or building robust backends with Node.js and MongoDB, I love the process of bringing ideas to life through code.
             </p>
             <p>
               I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a solid grasp of fundamental data structures and algorithms, primarily using Java and C++. I'm constantly learning new technologies and best practices to stay ahead in this ever-evolving field.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
