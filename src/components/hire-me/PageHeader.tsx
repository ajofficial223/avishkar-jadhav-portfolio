
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PageHeader = () => {
  return (
    <>
      <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 reveal">
        <ArrowLeft size={18} className="mr-2" />
        Back to Home
      </Link>
      
      <div className="text-center mb-16 reveal">
        <span className="inline-block px-4 py-1.5 rounded-full bg-dark-300 border border-neon-purple/20 text-white/80 text-sm mb-4">
          Start a Project
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold section-title mx-auto">Let's Work Together</h1>
        <p className="text-white/70 max-w-2xl mx-auto mt-6">
          Ready to bring your vision to life? Fill out the form below with details about your project, and I'll get back to you as soon as possible to discuss how we can collaborate.
        </p>
      </div>
    </>
  );
};

export default PageHeader;
