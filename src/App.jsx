import React, { useContext, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error('ThemeContext is undefined. Ensure ThemeProvider is wrapping the App component.');
    return null;
  }
  const [{ themeName }] = context;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Smoother, slightly longer animations
      once: false, // Allow animations to repeat on scroll up/down
      easing: 'ease-in-out-cubic', // Smoother easing
      offset: 80, // Trigger animations a bit earlier
      mirror: true, // Animate out while scrolling past
      anchorPlacement: 'top-bottom', // More natural trigger
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className='loading-screen'>
        <div className='spinner' />
      </div>
    );
  }

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <div className='section'>
          <About />
        </div>
        <div className='section'>
          <Projects />
        </div>
        <div className='section'>
          <Skills />
        </div>
        <div className='section'>
          <Contact />
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
