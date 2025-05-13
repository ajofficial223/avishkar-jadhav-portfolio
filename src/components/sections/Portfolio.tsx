import React, { useEffect, useState } from 'react';
import CustomButton from '../ui/CustomButton';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfd8bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    title: "Logo Design Collection",
    category: "Logo Design",
    image: "https://images.unsplash.com/photo-1629429407759-11716d8f4462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    title: "AI-Generated Artwork",
    category: "AI Visuals",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
  }
];

const categories = ["All", "Branding", "Logo Design", "Social Media", "AI Visuals"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

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
    <section id="portfolio" className="py-20 bg-dark-400">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-dark-300 border border-neon-purple/20 text-white/80 text-sm mb-4">
            My Work
          </span>
          <h2 className="section-title mx-auto">Recent Works</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                ? 'bg-gradient-purple-blue text-white' 
                : 'bg-dark-300 text-white/70 hover:text-white hover:bg-dark-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <span className="text-neon-purple text-sm font-medium block mb-2">{project.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <CustomButton variant="outline" size="sm">
                    View Details
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <Link to="/services" className="inline-flex items-center">
            <CustomButton size="lg" className="group">
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </CustomButton>
          </Link>
          <p className="text-white/50 mt-4 text-sm">Discover all the design services I offer</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
