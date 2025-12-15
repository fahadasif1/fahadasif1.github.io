import React from 'react';
import { PORTFOLIO_IMAGES } from '../constants';

export const Gallery = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl text-primary mb-4">Selected Works</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        {/* Filter buttons removed as requested */}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_IMAGES.map((photo) => (
          <div 
            key={photo.id} 
            className="group relative aspect-[4/5] overflow-hidden bg-surface cursor-pointer"
          >
            <img 
              src={photo.url} 
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
              <span className="text-accent text-xs uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {photo.category}
              </span>
              <h3 className="text-primary font-serif text-2xl italic translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};