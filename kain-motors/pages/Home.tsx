import React from 'react';
import { ArrowRight, Star, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURED_CARS } from '../data';
import CarCard from '../components/CarCard';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Car Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-bold text-xs uppercase tracking-widest mb-6">
              Premium Dealership
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Drive Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">Dream Today</span>
            </h1>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-lg">
              Experience the thrill of the open road with our curated collection of high-performance and luxury vehicles. Quality inspected. Driver approved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#inventory" className="bg-brand-red text-white px-8 py-4 rounded-full font-display font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-600/30 text-center">
                Browse Inventory
              </a>
              <Link to="/contact" className="px-8 py-4 rounded-full font-display font-semibold text-white border border-white/20 hover:bg-white/10 transition-all text-center">
                Sell Your Car
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Trust Signals */}
      <section className="py-20 bg-brand-dark border-b border-brand-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-slate/20 border border-brand-slate/50 hover:border-brand-red/30 transition-colors">
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">150-Point Inspection</h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Every vehicle undergoes a rigorous mechanical and safety inspection before hitting our showroom floor.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-slate/20 border border-brand-slate/50 hover:border-brand-red/30 transition-colors">
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">5-Star Experience</h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Our concierge-level service ensures a seamless buying process from test drive to delivery.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-brand-slate/20 border border-brand-slate/50 hover:border-brand-red/30 transition-colors">
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">Best Price Guarantee</h3>
              <p className="text-brand-gray text-sm leading-relaxed">
                Competitive market pricing means you get the best value without the hassle of negotiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="inventory" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Latest Arrivals</h2>
              <p className="text-brand-gray">Hand-picked vehicles added this week.</p>
            </div>
            <Link to="/contact" className="group flex items-center gap-2 text-brand-red font-medium hover:text-white transition-colors">
              View Full Inventory <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_CARS.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-slate/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to upgrade your ride?</h2>
          <p className="text-lg text-brand-gray mb-10">
            Get a fair trade-in value and drive away in your dream car today. 
            Financing options available for all credit types.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-brand-red text-white px-8 py-4 rounded-full font-display font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
              Schedule a Visit
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-full font-display font-semibold text-white border border-brand-slate bg-brand-dark hover:bg-brand-slate transition-all">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;