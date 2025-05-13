import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

// Use the correct path to the uploaded profile image
const profileImage = "/lovable-uploads/020c5ea4-1c26-4425-b8c3-1ba28ac2d4c8.png";

const Hero = () => {
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
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-neon-purple/5 via-transparent to-transparent opacity-70"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent opacity-70"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-dark-300/80 border border-neon-purple/20 text-white/80 text-sm backdrop-blur-sm reveal">
                <span className="mr-2">👋</span> Hello, I am
              </div>
              
              <h1 className="font-bold reveal">
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-white">Avishkar Jadhav</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl text-gradient mt-2 block">
                  Creative Graphic Designer
                </span>
              </h1>
              
              <p className="text-white/70 text-lg max-w-xl reveal">
                Dynamic and innovative graphic designer with expertise in visual design, branding, and AI-powered creativity.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center reveal">
                <Link to="/hire-me">
                  <CustomButton size="lg" isGlowing className="group">
                    Hire Me
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </CustomButton>
                </Link>
                
                <div className="flex items-center gap-3 ml-2">
                  <a 
                    href="https://instagram.com/ajdesign_ig" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="https://pinterest.com/ajdesign_official" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Pinterest"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href="https://in.linkedin.com/in/avishkar-jadhav-" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end reveal">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-purple-blue opacity-20 blur-3xl animate-pulse-slow"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-white/10 p-2 bg-dark-400/50 backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Avishkar Jadhav" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-neon-purple/30 animate-pulse-slow"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-neon-blue/20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
