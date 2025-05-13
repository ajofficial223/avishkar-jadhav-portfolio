import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/hire-me/PageHeader';
import HireMeForm from '@/components/hire-me/HireMeForm';
import ConnectOptions from '@/components/hire-me/ConnectOptions';
import { Toaster } from '@/components/ui/toaster';

const HireMe = () => {
  useEffect(() => {
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

    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-500 text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container">
          <PageHeader />
          
          <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 reveal">
            <HireMeForm />
          </div>
          
          <ConnectOptions />
        </div>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default HireMe;
