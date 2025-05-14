
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { toast } from '@/components/ui/use-toast';
import { getSupabase } from '@/lib/supabase';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
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
          formType: 'contact',
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
      // Get the Supabase client
      const supabase = getSupabase();
      
      // Prepare the contact message data
      const contactMessage = { 
        name: formData.name,
        email: formData.email,
        message: formData.message,
        created_at: new Date().toISOString()
      };
      
      // Send data to webhook regardless of Supabase connection
      await sendToWebhook(contactMessage);
      
      if (!supabase) {
        // If Supabase is not initialized, save to localStorage
        const existingMessages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        localStorage.setItem('contact_messages', JSON.stringify([...existingMessages, contactMessage]));
        
        toast({
          title: "Message saved locally",
          description: "Your message has been saved locally. Connect to Supabase to enable online submissions.",
        });
      } else {
        // Insert the contact form data into Supabase
        const { data, error } = await supabase
          .from('contact_messages')
          .insert([contactMessage]);
        
        if (error) {
          console.error('Error submitting contact form:', error);
          throw error;
        }
        
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      }
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Message could not be sent",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6 reveal" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full bg-dark-300 border border-dark-200 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block p-2.5"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full bg-dark-300 border border-dark-200 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block p-2.5"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-dark-300 border border-dark-200 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block p-2.5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <CustomButton 
        type="submit" 
        size="lg" 
        className="w-full group"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </CustomButton>
    </form>
  );
};

export default ContactForm;
