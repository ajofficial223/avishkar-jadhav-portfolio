
import React, { useState, useEffect } from 'react';
import { Send, AlertTriangle } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { toast } from '@/components/ui/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { supabase, isSupabaseConnected } from '@/lib/supabase';

const HireMeForm = () => {
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
  const [isOfflineMode, setIsOfflineMode] = useState(true);
  
  // Check Supabase connection status on mount
  useEffect(() => {
    setIsOfflineMode(!isSupabaseConnected());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to send data to webhook
  const sendToWebhook = async (data: any) => {
    try {
      const response = await fetch('https://testingperpose05.app.n8n.cloud/webhook/Form Submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'hire-me',
          timestamp: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        console.error('Webhook submission failed:', response.statusText);
      } else {
        console.log('Webhook submission successful');
      }
    } catch (error) {
      console.error('Error submitting to webhook:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the request data
      const requestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        details: formData.details,
        created_at: new Date().toISOString()
      };
      
      // Send data to webhook regardless of Supabase connection
      await sendToWebhook(requestData);
      
      if (isOfflineMode) {
        // Save to localStorage if Supabase is not connected
        // Get existing requests or initialize empty array
        const existingRequests = JSON.parse(localStorage.getItem('project_requests') || '[]');
        existingRequests.push(requestData);
        localStorage.setItem('project_requests', JSON.stringify(existingRequests));
        
        toast({
          title: "Project request saved locally",
          description: "Your request has been saved locally. Please connect to Supabase for online submissions.",
        });
        
        // Reset form after successful submission
        resetForm();
      } else {
        // If Supabase is available, use it
        const { error } = await supabase!
          .from('project_requests')
          .insert([requestData]);
        
        if (error) {
          console.error('Error submitting form:', error);
          throw error;
        }
        
        toast({
          title: "Project request submitted!",
          description: "Thank you for your interest in working with me. I'll contact you soon to discuss your project.",
        });
        
        // Reset form after successful submission
        resetForm();
      }
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
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      details: ''
    });
  };

  return (
    <>
      {isOfflineMode && (
        <Alert className="mb-6 bg-dark-300 border-yellow-600">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="text-yellow-600">Offline Mode</AlertTitle>
          <AlertDescription className="text-white/70">
            Database is not connected. Your form submissions will be saved locally until a connection is established.
          </AlertDescription>
        </Alert>
      )}
      
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
            isGlowing={!isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'} 
            {!isSubmitting && <Send className="w-4 h-4" />}
          </CustomButton>
        </div>
      </form>
    </>
  );
};

export default HireMeForm;
