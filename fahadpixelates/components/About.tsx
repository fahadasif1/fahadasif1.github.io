import React from 'react';
import { ABOUT_CONTENT } from '../constants';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative">
        <div className="relative z-10 border border-white/10 p-2">
          <img 
            src={ABOUT_CONTENT.profileImage} 
            alt="Photographer Profile" 
            className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        {/* Decorate rectangle */}
        <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent/30 z-0 hidden md:block"></div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2">
        <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8">
          {ABOUT_CONTENT.heading}
        </h2>
        
        <div className="space-y-6 text-secondary text-lg leading-relaxed font-light">
          {ABOUT_CONTENT.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Stats Grid - Only render if there are stats */}
        {ABOUT_CONTENT.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8">
            {ABOUT_CONTENT.stats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <span className="block text-3xl md:text-4xl font-serif text-accent mb-2">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};