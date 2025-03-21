
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSmoothScroll = (e, targetId) => {
    // Only handle smooth scroll if we're on the homepage
    if (location.pathname === '/') {
      e.preventDefault();
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', targetId: 'hero' },
    { name: 'Skills', path: '/#skills', targetId: 'skills' },
    { name: 'Services', path: '/#services', targetId: 'services' },
    { name: 'Portfolio', path: '/#portfolio', targetId: 'portfolio' },
    { name: 'Experience', path: '/#experience', targetId: 'experience' },
    { name: 'Contact', path: '/#contact', targetId: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-500/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gradient">
          AJ<span className="text-white">Design</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleSmoothScroll(e, link.targetId)}
              className="text-white/70 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-gradient-purple-blue after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/hire-me"
            className="bg-gradient-purple-blue text-white px-5 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-neon-purple"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-400/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleSmoothScroll(e, link.targetId)}
                className="text-white/80 hover:text-white py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/hire-me"
              className="bg-gradient-purple-blue text-white px-5 py-2.5 rounded-full text-center hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
