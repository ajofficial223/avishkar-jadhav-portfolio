
import React, { useEffect, useState } from 'react';
import { Phone, Mail, Send, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

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
    <section id="contact" className="section-container">
      <div className="text-center mb-16 reveal">
        <span className="inline-block px-4 py-1.5 rounded-full bg-dark-300 border border-neon-purple/20 text-white/80 text-sm mb-4">
          Get in Touch
        </span>
        <h2 className="section-title mx-auto">Let's Work Together</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="reveal">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-dark-300 mr-4">
                  <Mail className="text-neon-purple" size={20} />
                </div>
                <div>
                  <p className="text-white/70 mb-1">Email</p>
                  <a 
                    href="mailto:avishkarjadhavofficial@gmail.com" 
                    className="text-white hover:text-neon-purple transition-colors"
                  >
                    avishkarjadhavofficial@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-dark-300 mr-4">
                  <Phone className="text-neon-purple" size={20} />
                </div>
                <div>
                  <p className="text-white/70 mb-1">Phone</p>
                  <a 
                    href="tel:+919881223980" 
                    className="text-white hover:text-neon-purple transition-colors"
                  >
                    +91 9881223980
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-medium mb-4">Follow Me</h4>
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
                  href="https://linkedin.com/in/Avishkar Jadhav" 
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
        
        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/70 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/70 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                  placeholder="Your message"
                  required
                />
              </div>
              
              <CustomButton 
                type="submit" 
                size="lg"
                className="w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
