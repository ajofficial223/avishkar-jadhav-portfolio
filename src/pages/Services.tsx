
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';
import { ChevronLeft, ExternalLink } from 'lucide-react';

const serviceItems = [
  {
    title: "Logo Design",
    description: "Professional and memorable logos that capture your brand's essence and values.",
    image: "https://images.unsplash.com/photo-1557939574-a2cb399f443f?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Poster Design",
    description: "Eye-catching posters that communicate your message clearly and effectively.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Social Media Post Design",
    description: "Engaging social media graphics optimized for each platform to boost your online presence.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Thumbnail Design",
    description: "Clickable thumbnails that boost engagement and views for your videos and content.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Typographic Poster",
    description: "Creative type-focused designs that communicate your message with visual impact.",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "AI Dish Generation",
    description: "Innovative AI-generated visuals for unique and creative food presentation concepts.",
    image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?auto=format&fit=crop&w=800&h=600"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-dark-500 text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <Link to="/#portfolio" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-6">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">My Services</h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Discover the complete range of design services I offer to help elevate your brand and visual communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden hover-scale group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  
                  <a 
                    href="https://in.linkedin.com/in/avishkar-jadhav-" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-neon-purple hover:text-neon-blue transition-colors"
                  >
                    Contact for details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <Link to="/hire-me">
              <CustomButton size="lg" isGlowing>
                Hire Me Now
              </CustomButton>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
