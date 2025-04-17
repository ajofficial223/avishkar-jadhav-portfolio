
import React from 'react';
import { Mail, Phone, Calendar } from 'lucide-react';

const ConnectOptions = () => {
  return (
    <div className="mt-16 text-center reveal">
      <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
        <a 
          href="mailto:avishkarjadhavofficial@gmail.com" 
          className="glass-card p-6 flex flex-col items-center justify-center hover-scale hover-glow"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-300 mb-4">
            <Mail className="text-neon-purple" size={20} />
          </div>
          <h3 className="text-lg font-medium mb-2">Email Me</h3>
          <p className="text-white/70 text-sm">avishkarjadhavofficial@gmail.com</p>
        </a>
        
        <a 
          href="tel:+919881223980" 
          className="glass-card p-6 flex flex-col items-center justify-center hover-scale hover-glow"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-300 mb-4">
            <Phone className="text-neon-purple" size={20} />
          </div>
          <h3 className="text-lg font-medium mb-2">Call Me</h3>
          <p className="text-white/70 text-sm">+91 9881223980</p>
        </a>
        
        <a 
          href="https://calendly.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass-card p-6 flex flex-col items-center justify-center hover-scale hover-glow"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-300 mb-4">
            <Calendar className="text-neon-purple" size={20} />
          </div>
          <h3 className="text-lg font-medium mb-2">Schedule a Call</h3>
          <p className="text-white/70 text-sm">Book a 30-min consultation</p>
        </a>
      </div>
    </div>
  );
};

export default ConnectOptions;
