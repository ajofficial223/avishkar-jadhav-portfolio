import React from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-400">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 reveal">
            Contact Me
          </h2>
          <p className="text-white/70 text-lg reveal">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 reveal">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-dark-300 rounded">
                  <Mail className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white">Email</h5>
                  <p className="text-white/60">avishkarjadhavofficial@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-dark-300 rounded">
                  <Phone className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white">Phone</h5>
                  <p className="text-white/60">+91 9881223980</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-dark-300 rounded">
                  <MapPin className="w-5 h-5 text-neon-purple" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white">Location</h5>
                  <p className="text-white/60">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6 reveal">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-300 border border-dark-200 text-white text-sm rounded-lg focus:ring-neon-purple focus:border-neon-purple block p-2.5"
                  placeholder="Your Name"
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
                  required
                />
              </div>
              <CustomButton size="lg" className="w-full group">
                Send Message
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
