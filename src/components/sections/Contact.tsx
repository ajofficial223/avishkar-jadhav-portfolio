
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
