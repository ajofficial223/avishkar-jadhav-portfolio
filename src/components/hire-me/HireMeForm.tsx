import React, { useState } from 'react';
import { Send } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import { toast } from '@/components/ui/use-toast';
import FormField from './form/FormField';
import OfflineAlert from './form/OfflineAlert';
import { projectTypeOptions, budgetOptions, timelineOptions } from './form/FormOptions';

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
  const [isOfflineMode, setIsOfflineMode] = useState(false); // Changed to false to hide the alert
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to send data to webhook
  const sendToWebhook = async (data: any): Promise<boolean> => {
    try {
      console.log('Sending data to webhook:', data);
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
        return false;
      } else {
        console.log('Webhook submission successful');
        return true;
      }
    } catch (error) {
      console.error('Error submitting to webhook:', error);
      return false;
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
      
      // Send data to webhook
      const webhookSuccess = await sendToWebhook(requestData);
      
      if (webhookSuccess) {
        // If webhook submission was successful
        toast({
          title: "Project request submitted!",
          description: "Thank you for your interest in working with me. I'll contact you soon to discuss your project.",
        });
        
        // Save to localStorage if needed for backup
        const existingRequests = JSON.parse(localStorage.getItem('project_requests') || '[]');
        existingRequests.push(requestData);
        localStorage.setItem('project_requests', JSON.stringify(existingRequests));
        
        // Reset form after successful submission
        resetForm();
      } else {
        throw new Error('Failed to submit form to webhook');
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
      <OfflineAlert isOfflineMode={isOfflineMode} />
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="name"
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
          
          <FormField
            id="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="phone"
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
          
          <FormField
            id="projectType"
            label="Project Type"
            type="select"
            value={formData.projectType}
            onChange={handleChange}
            placeholder="Select project type"
            options={projectTypeOptions}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="budget"
            label="Budget Range"
            type="select"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Select budget range"
            options={budgetOptions}
            required
          />
          
          <FormField
            id="timeline"
            label="Timeline"
            type="select"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="Select timeline"
            options={timelineOptions}
            required
          />
        </div>
        
        <FormField
          id="details"
          label="Project Details"
          type="textarea"
          value={formData.details}
          onChange={handleChange}
          placeholder="Please describe your project, requirements, and goals in detail"
          required
          rows={6}
        />
        
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
