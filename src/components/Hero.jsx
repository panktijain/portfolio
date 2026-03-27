import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["MERN Stack Developer", "Full Stack Engineer", "AI Tools Builder", "Problem Solver"];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen pt-20 pb-12 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute rounded-full opacity-50 -top-40 -right-40 w-96 h-96 bg-dark-accent/20 dark:bg-dark-accent/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full opacity-50 top-40 -left-40 w-72 h-72 bg-purple-500/20 dark:bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 delay-500 rounded-full bottom-20 right-1/4 bg-indigo-400/15 dark:bg-indigo-500/10 blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="container content-center px-4 mx-auto text-center sm:px-6 sm:text-left">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          
          <motion.div 
            className="flex flex-col justify-center order-2 space-y-6 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Role Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-light-accent/10 dark:bg-dark-accent/15 text-light-accent dark:text-dark-accent border border-light-accent/20 dark:border-dark-accent/20">
                <span className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></span>
                Open to Internships & Freelance
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-lg font-medium tracking-widest uppercase sm:text-xl md:text-2xl text-light-accent dark:text-dark-accent">
              Hello, World! I am
            </motion.h2>
            <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl text-light-text dark:text-dark-text">
              Pankti Jain
            </motion.h1>
            <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-400 min-h-[2.5rem] sm:min-h-[3rem]">
              I'm a <span className="pr-1 border-r-4 text-light-accent dark:text-dark-accent border-dark-accent animate-pulse">{text}</span>
            </motion.h3>
            
            <motion.p variants={itemVariants} className="max-w-lg mt-4 text-base leading-relaxed sm:text-lg md:text-xl text-slate-600 dark:text-slate-400">
              I build scalable full-stack applications with the MERN stack and modern APIs. I enjoy turning complex workflows into clean, reliable products with measurable impact.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col flex-wrap justify-center gap-3 pt-4 sm:flex-row sm:gap-4 sm:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3 font-medium text-center text-white transition-all duration-300 rounded-full shadow-lg bg-light-accent dark:bg-dark-accent shadow-light-accent/30 dark:shadow-dark-accent/20 hover:scale-105 hover:shadow-xl"
              >
                View Projects
              </a>
              <a 
                href="PanktiJain_CV.pdf" 
                download
                className="flex items-center justify-center px-8 py-3 font-medium transition-all duration-300 rounded-full outline-none glass text-light-text dark:text-dark-text hover:bg-slate-100 dark:hover:bg-white/5 hover:scale-105 focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download CV
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 font-medium text-center transition-all duration-300 rounded-full glass text-light-text dark:text-dark-text hover:bg-slate-100 dark:hover:bg-white/5 hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
            
            {/* Social Links Mini */}
            <motion.div variants={itemVariants} className="flex justify-center pt-8 space-x-5 sm:justify-start">
              <a href="https://github.com/panktijain" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 text-slate-500 hover:text-light-accent dark:hover:text-dark-accent hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/pankti-jain" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 text-slate-500 hover:text-light-accent dark:hover:text-dark-accent hover:scale-110">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:panktijain1109@gmail.com" className="transition-all duration-300 text-slate-500 hover:text-light-accent dark:hover:text-dark-accent hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </motion.div>
            
          </motion.div>
          
          <motion.div 
            className="flex justify-center order-1 lg:order-2 lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-light-accent/30 dark:border-dark-accent/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-purple-500/20 dark:border-purple-600/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Avatar */}
              <div className="absolute p-1 overflow-hidden rounded-full shadow-2xl inset-8 bg-gradient-to-tr from-light-accent to-purple-500 dark:from-dark-accent dark:to-purple-800">
                 <div className="flex items-center justify-center w-full h-full overflow-hidden bg-white rounded-full dark:bg-dark-bg">
                    <img src="/pankti-formal-image.png" alt="Pankti Jain" loading="lazy" className="object-cover w-full h-full rounded-2xl" />
                 </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
        <span className="mb-2 text-sm text-slate-500 dark:text-slate-400">Scroll Down</span>
        <svg className="w-5 h-5 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};

export default Hero;
