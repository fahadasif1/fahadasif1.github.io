import React from 'react';
import { HERO_CONTENT } from '../constants';

export const Hero = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Dark overlay for text readability */}
        <img 
          src={HERO_CONTENT.backgroundImage} 
          alt="Hero background" 
          className="w-full h-full object-cover animate-fade-in scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
          {HERO_CONTENT.subtitle}
        </p>
        
        {/* H1 Title removed to avoid duplication with Navbar */}
        
        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <a 
            href={HERO_CONTENT.ctaLink}
            onClick={handleScroll}
            className="inline-block px-8 py-4 border border-primary/30 text-primary bg-black/20 hover:bg-primary hover:text-background backdrop-blur-sm transition-all duration-500 uppercase tracking-widest text-sm cursor-pointer"
          >
            {HERO_CONTENT.ctaText}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 z-20">
        <i data-lucide="arrow-down" className="text-primary w-6 h-6"></i>
      </div>
    </div>
  );
};