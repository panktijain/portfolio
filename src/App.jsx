import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import WhyHireMe from './components/WhyHireMe';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <WhyHireMe />
          <CompetitiveProgramming />
        </main>
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
