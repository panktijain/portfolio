import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const CountUp = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const step = end / (duration * 60);
          const animate = () => {
            start += step;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyHireMe = () => {
  const valueProps = [
    {
      icon: "🔗",
      title: "End-to-End Builder",
      description: "From React frontends to Node.js/Express APIs and MongoDB databases — I build complete, production-ready web applications independently.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "🧠",
      title: "Strong DSA Foundation",
      description: "200+ LeetCode problems solved with a 100-day streak badge. I write efficient, optimized code backed by algorithmic thinking.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "🚀",
      title: "Ship Fast, Ship Right",
      description: "MERN stack fluency means I can go from idea to deployed product quickly — with clean architecture, JWT auth, and CI/CD pipelines.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: "📚",
      title: "Always Learning",
      description: "Currently exploring Machine Learning (NPTEL certified), Generative AI & Prompt Engineering, and system design patterns.",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const stats = [
    { value: 3, suffix: "+", label: "Production Projects" },
    { value: 200, suffix: "+", label: "LeetCode Problems" },
    { value: 8, suffix: "+", label: "Technologies" },
    { value: 100, suffix: "", label: "Day Streak Badge" }
  ];

  return (
    <section id="why-hire-me" className="py-20 relative bg-white dark:bg-dark-bg overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-light-text dark:text-dark-text inline-block relative border-b-4 border-light-accent dark:border-dark-accent pb-2">
              Why Hire Me
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Here's what I bring to the table — and why I'd be a strong addition to your team.
            </p>
          </div>
        </AnimatedSection>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {valueProps.map((prop, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.12}>
              <motion.div 
                className="glass p-8 rounded-2xl relative overflow-hidden group cursor-default h-full"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${prop.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-4xl mt-1 group-hover:scale-110 transition-transform duration-300">{prop.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{prop.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{prop.description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Row */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-extrabold text-light-accent dark:text-dark-accent mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyHireMe;
