import React, { useEffect } from 'react';
import { Paintbrush, PenTool, MonitorSmartphone, Brain } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Logo Design",
    description: "Create memorable and impactful brand identities with custom logo designs that capture your brand's essence.",
    icon: PenTool,
  },
  {
    title: "Branding & Identity",
    description: "Develop comprehensive brand guidelines and visual identity systems that establish consistency across all touchpoints.",
    icon: Paintbrush,
  },
  {
    title: "Social Media Design",
    description: "Craft engaging visual content for social media platforms that drives engagement and builds brand recognition.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI-Powered Visuals",
    description: "Leverage cutting-edge AI technology to create innovative and unique visual experiences that set your brand apart.",
    icon: Brain,
  }
];

const Services = () => {
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
    <section id="services" className="py-20 bg-dark-500">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-dark-300 border border-neon-purple/20 text-white/80 text-sm mb-4">
            What I Do
          </span>
          <h2 className="section-title mx-auto">My Quality Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 hover:translate-y-[-5px] hover-glow reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-purple-blue">
                <service.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              
              <Link to="/hire-me">
                <CustomButton variant="outline" size="sm">
                  Learn More
                </CustomButton>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
