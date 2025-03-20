
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll to section when navigating via hash links
    const handleHashLinkClick = () => {
      const { hash } = window.location;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Check for hash on initial load
    handleHashLinkClick();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashLinkClick);

    return () => {
      // Cleanup
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
      window.removeEventListener('hashchange', handleHashLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
