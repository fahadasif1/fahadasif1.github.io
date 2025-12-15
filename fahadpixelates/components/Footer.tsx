import React from 'react';
import { SITE_CONFIG } from '../constants';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-background text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-secondary text-sm">
          &copy; {SITE_CONFIG.year} {SITE_CONFIG.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};