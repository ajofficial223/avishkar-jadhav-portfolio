import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Mail, Phone, Send } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert the form data into Supabase
      const { data, error } = await supabase
        .from('project_requests')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            project_type: formData.projectType,
            budget: formData.budget,
            timeline: formData.timeline,
            details: formData.details,
            created_at: new Date().toISOString()
          }
        ]);
      
      if (error) {
        console.error('Error submitting form:', error);
        throw error;
      }
      
      toast({
        title: "Project request submitted!",
        description: "Thank you for your interest in working with me. I'll contact you soon to discuss your project.",
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        details: ''
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="min-h-screen bg-dark-500 text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
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
          
          <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 reveal">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-2">Full Name *</label>
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
                  <label htmlFor="email" className="block text-white/70 mb-2">Email Address *</label>
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white/70 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-white/70 mb-2">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                    required
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Branding & Identity">Branding & Identity</option>
                    <option value="Social Media Design">Social Media Design</option>
                    <option value="AI-Powered Visuals">AI-Powered Visuals</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-white/70 mb-2">Budget Range *</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                    required
                  >
                    <option value="" disabled>Select budget range</option>
                    <option value="₹1,000 - ₹5,000">₹1,000 - ₹5,000</option>
                    <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                    <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                    <option value="₹20,000+">₹20,000+</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-white/70 mb-2">Timeline *</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                    required
                  >
                    <option value="" disabled>Select timeline</option>
                    <option value="Less than a week">Less than a week</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="Ongoing">Ongoing project</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="details" className="block text-white/70 mb-2">Project Details *</label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all"
                  placeholder="Please describe your project, requirements, and goals in detail"
                  required
                />
              </div>
              
              <div className="flex justify-center">
                <CustomButton 
                  type="submit" 
                  size="lg"
                  className="min-w-[200px] flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                  isGlowing
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  <Send size={16} />
                </CustomButton>
              </div>
            </form>
          </div>
          
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HireMe;
