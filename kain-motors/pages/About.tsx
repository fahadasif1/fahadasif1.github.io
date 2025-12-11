import React from 'react';
import { Users, Target, Clock, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      
      {/* Header */}
      <div className="bg-brand-slate/20 py-20 border-b border-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Legacy</h1>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Redefining the automotive dealership experience through transparency, quality, and passion since 2010.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-red/20 transform translate-x-4 translate-y-4 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800" 
                alt="Dealership Showroom" 
                className="relative rounded-2xl shadow-2xl z-10"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">More Than Just a Dealership</h2>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Kain Motors began with a simple mission: to connect enthusiasts with machines that inspire. What started as a small family garage has evolved into the region's premier destination for luxury and performance vehicles.
              </p>
              <p className="text-brand-gray mb-8 leading-relaxed">
                We believe buying a car should be as exciting as driving one. That's why we've stripped away the high-pressure tactics and hidden fees, replacing them with honest advice and transparent pricing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Certified Quality</h4>
                    <p className="text-sm text-brand-gray">Only top 1% of vehicles make it to our lot.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Transparent Pricing</h4>
                    <p className="text-sm text-brand-gray">No hidden dealer fees or surprises.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15k+</div>
              <div className="text-brand-dark font-medium">Cars Sold</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-brand-dark font-medium">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">12</div>
              <div className="text-brand-dark font-medium">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-brand-dark font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Why Choose Kain Motors</h2>
            <p className="text-brand-gray">Built on a foundation of trust and integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-slate/20 p-8 rounded-2xl border border-brand-slate hover:border-brand-red/50 transition-colors">
              <Users className="w-10 h-10 text-brand-red mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Customer First</h3>
              <p className="text-brand-gray">
                We prioritize long-term relationships over quick sales. Our team is dedicated to finding the perfect match for your lifestyle.
              </p>
            </div>
            <div className="bg-brand-slate/20 p-8 rounded-2xl border border-brand-slate hover:border-brand-red/50 transition-colors">
              <Target className="w-10 h-10 text-brand-red mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Precision Selection</h3>
              <p className="text-brand-gray">
                We don't just sell any car. We curate a collection of vehicles that meet our exacting standards for mechanical and aesthetic condition.
              </p>
            </div>
            <div className="bg-brand-slate/20 p-8 rounded-2xl border border-brand-slate hover:border-brand-red/50 transition-colors">
              <Clock className="w-10 h-10 text-brand-red mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Efficient Process</h3>
              <p className="text-brand-gray">
                Your time is valuable. Our streamlined digital paperwork and express delivery options get you on the road faster.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;