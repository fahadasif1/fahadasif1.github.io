import React from 'react';
import { CONTACT_CONTENT } from '../constants';

export const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16">
      {/* Contact Info */}
      <div>
        <h2 className="font-serif text-4xl text-primary mb-6">{CONTACT_CONTENT.heading}</h2>
        <p className="text-secondary text-lg mb-8">{CONTACT_CONTENT.text}</p>
        
        <div className="mb-12">
          <a 
            href={`mailto:${CONTACT_CONTENT.email}`} 
            className="text-xl md:text-2xl text-accent border-b border-accent/50 pb-1 hover:text-white hover:border-white transition-colors"
          >
            {CONTACT_CONTENT.email}
          </a>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-secondary mb-4">Follow Me</h3>
          <div className="flex space-x-6">
            {CONTACT_CONTENT.socials.map((social) => (
              <a 
                key={social.platform} 
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-accent transition-colors"
                aria-label={social.platform}
              >
                <i data-lucide={social.iconName} className="w-6 h-6"></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-widest text-secondary mb-2">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full bg-surface border border-white/10 p-4 text-primary focus:border-accent focus:outline-none transition-colors"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-widest text-secondary mb-2">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full bg-surface border border-white/10 p-4 text-primary focus:border-accent focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs uppercase tracking-widest text-secondary mb-2">Message</label>
          <textarea 
            id="message" 
            rows={5}
            className="w-full bg-surface border border-white/10 p-4 text-primary focus:border-accent focus:outline-none transition-colors"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full py-4 bg-primary text-background uppercase tracking-widest font-bold hover:bg-accent transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};