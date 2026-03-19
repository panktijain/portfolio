import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      label: "Email",
      value: "manavsinghla123@gmail.com",
      href: "mailto:manavsinghla123@gmail.com",
      color: "group-hover:text-red-500 dark:group-hover:text-red-400"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      ),
      label: "Phone",
      value: "+91 8307834817",
      href: "tel:+918307834817",
      color: "group-hover:text-green-500 dark:group-hover:text-green-400"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      ),
      label: "LinkedIn",
      value: "manav-singhla",
      href: "https://linkedin.com/in/manav-singhla/",
      color: "group-hover:text-blue-500 dark:group-hover:text-blue-400"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
      ),
      label: "GitHub",
      value: "ManavSinghla",
      href: "https://github.com/ManavSinghla",
      color: "group-hover:text-purple-500 dark:group-hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative bg-light-accent dark:bg-dark-bg text-white dark:text-dark-text border-t border-purple-500/30">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="max-w-2xl mx-auto text-blue-100 dark:text-slate-400">
              I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a 
              href="mailto:manavsinghla123@gmail.com"
              className="px-10 py-4 bg-white text-light-accent dark:bg-dark-accent dark:text-white font-bold rounded-full hover:scale-105 shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              Say Hello 👋
            </a>
            <a 
              href="/ManavSingla_CV.pdf" 
              download
              className="px-10 py-4 bg-transparent border-2 border-white dark:border-dark-accent text-white dark:text-dark-accent font-bold rounded-full hover:scale-105 hover:bg-white/10 dark:hover:bg-dark-accent/10 transition-all duration-300 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Resume
            </a>
          </div>
        </AnimatedSection>
        
        {/* Contact Method Cards */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
            {contactMethods.map((method, idx) => (
              <a 
                key={idx}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group glass !bg-white/10 dark:!bg-slate-800/40 p-6 rounded-2xl text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 block"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 dark:bg-slate-700/50 mb-3 mx-auto transition-colors ${method.color}`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{method.label}</h3>
                <p className="text-sm text-blue-100 dark:text-slate-400 break-all">{method.value}</p>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Manav Singla. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Tailwind CSS ❤️</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
