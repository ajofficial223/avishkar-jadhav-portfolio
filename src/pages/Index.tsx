import React, { useEffect, useRef } from 'react';
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
  // Store observer reference to prevent recreation
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Only create the observer once
    if (!observerRef.current) {
      // Initialize intersection observer for reveal animations
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    }

    // Observe all reveal elements
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    // Handle initial hash navigation
    setTimeout(() => {
      const { hash } = window.location;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);

    return () => {
      // Cleanup observer on unmount
      if (observerRef.current) {
        elements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
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
