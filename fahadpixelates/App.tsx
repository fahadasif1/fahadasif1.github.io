import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// This is a single-page scrolling portfolio.
// The data for the website is located in `constants.ts`. 
// Edit that file to change images, text, and links.

export default function App() {
  
  // Initialize Lucide icons
  useEffect(() => {
    // @ts-ignore - Lucide is loaded via CDN in index.html
    if (window.lucide) {
      // @ts-ignore
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-primary">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        {/* Added scroll-mt-28 to account for fixed navbar height when scrolling */}
        <section id="gallery" className="scroll-mt-28 py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <Gallery />
        </section>

        <section id="about" className="scroll-mt-28 bg-surface py-24 px-4 md:px-8">
          <About />
        </section>

        <section id="contact" className="scroll-mt-28 py-24 px-4 md:px-8 max-w-3xl mx-auto">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}