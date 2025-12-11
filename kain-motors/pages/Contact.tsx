import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      
      {/* Header */}
      <div className="bg-brand-slate/20 py-16 border-b border-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Ready to find your next car? We're here to help you every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-brand-slate/20 rounded-xl border border-brand-slate/50">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Our Location</h3>
                    <p className="text-brand-gray">123 Speedway Blvd</p>
                    <p className="text-brand-gray">Automotive District, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-brand-slate/20 rounded-xl border border-brand-slate/50">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone Number</h3>
                    <p className="text-brand-gray">Sales: +1 (555) 123-4567</p>
                    <p className="text-brand-gray">Service: +1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-brand-slate/20 rounded-xl border border-brand-slate/50">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email Address</h3>
                    <p className="text-brand-gray">sales@kainmotors.com</p>
                    <p className="text-brand-gray">support@kainmotors.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-brand-slate/30 rounded-2xl border border-brand-slate/50 overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-brand-dark/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                  <span className="text-white font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-red" />
                    Open Google Maps
                  </span>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                alt="Map Background"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
              />
            </div>
          </div>

          {/* Form Side */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;