import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-dark-bg">
      <div className="container px-6 mx-auto md:px-12">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="relative inline-block pb-2 text-3xl font-bold border-b-4 md:text-5xl text-light-text dark:text-dark-text border-light-accent dark:border-dark-accent">
              About Me
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="flex flex-col items-center max-w-4xl gap-12 mx-auto md:flex-row">
          <AnimatedSection className="relative md:w-1/3" delay={0.1}>
            <div className="p-1 overflow-hidden shadow-2xl aspect-square rounded-2xl bg-gradient-to-tr from-light-accent to-purple-500 dark:from-dark-accent dark:to-purple-800">
               <img src="/pankti-formal-image.png" alt="Pankti Jain" loading="lazy" className="object-cover w-full h-full rounded-2xl" />
            </div>
          </AnimatedSection>
          <AnimatedSection className="space-y-4 text-lg md:w-2/3 text-slate-600 dark:text-slate-300" delay={0.2}>
             <p>
               Hello! I'm Pankti Jain, a Computer Science undergraduate at Lovely Professional University and a developer focused on building practical, user-centered web platforms.
             </p>
             <p>
               I work primarily with JavaScript, React, Node.js, Express.js, MongoDB, and MySQL, and I enjoy creating complete workflows from clean interfaces to secure backend systems.
             </p>
             <p>
               Alongside technical work, I value analytical thinking, time management, and leadership. I aim to build products that improve efficiency, reduce manual effort, and deliver reliable results at scale.
             </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
