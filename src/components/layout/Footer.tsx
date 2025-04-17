
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const handleSmoothScroll = (e, targetId) => {
    // Only handle smooth scroll if we're on the homepage
    if (location.pathname === '/') {
      e.preventDefault();
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark-400 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              AJ<span className="text-white">Design</span>
            </Link>
            <p className="text-white/60 mt-4 max-w-md">
              Dynamic and innovative graphic designer with expertise in visual design, branding, and AI-powered creativity.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="/#skills" 
                  onClick={(e) => handleSmoothScroll(e, 'skills')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="/#services" 
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/#portfolio" 
                  onClick={(e) => handleSmoothScroll(e, 'portfolio')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <address className="not-italic text-white/60">
              <p className="mb-2">Email: <a href="mailto:avishkarjadhavofficial@gmail.com" className="hover:text-white transition-colors">avishkarjadhavofficial@gmail.com</a></p>
              <p>Phone: <a href="tel:+919881223980" className="hover:text-white transition-colors">+91 9881223980</a></p>
            </address>

            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white/80 mb-3">Connect With Me</h5>
              <div className="flex space-x-3">
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

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} AJDesign. All rights reserved.</p>
          <p className="text-white/40 text-sm mt-2 md:mt-0">
            Designed with <span className="text-neon-purple">❤</span> by Avishkar Jadhav
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
