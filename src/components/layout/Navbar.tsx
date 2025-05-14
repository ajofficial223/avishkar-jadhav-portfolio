
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Direct click-to-section handling with manual scrolling (more reliable)
  const handleSmoothScroll = useCallback((e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    
    // Close the mobile menu regardless
    setIsMobileMenuOpen(false);
    
    // If we're on the same page, do direct scrolling
    if (location.pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${targetId}`);
    }
  }, [location.pathname, navigate]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const navLinks = [
    { name: 'Home', path: '/#hero', targetId: 'hero' },
    { name: 'Skills', path: '/#skills', targetId: 'skills' },
    { name: 'Services', path: '/#services', targetId: 'services' },
    { name: 'Portfolio', path: '/#portfolio', targetId: 'portfolio' },
    { name: 'Experience', path: '/#experience', targetId: 'experience' },
    { name: 'Contact', path: '/#contact', targetId: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-500/90 backdrop-blur-md shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <span className="text-gradient">AJ</span><span className="text-white">Design</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleSmoothScroll(e, link.targetId)}
              className="text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-gradient-purple-blue after:transition-all after:duration-300"
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
          className="md:hidden text-white hover:text-neon-purple z-50"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Fixed position with proper z-index */}
      <div 
        className={`fixed inset-0 bg-dark-400/95 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center h-full px-6 py-20 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => handleSmoothScroll(e, link.targetId)}
              className="text-white text-xl py-2 text-center hover:text-neon-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/hire-me"
            className="bg-gradient-purple-blue text-white px-5 py-3 rounded-full text-center hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300 mt-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
