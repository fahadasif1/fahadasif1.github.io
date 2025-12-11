import React from 'react';
import { Car, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-slate pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center">
                <Car className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold text-white uppercase">
                Kain Motors
              </span>
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed">
              Premium pre-owned vehicles for the discerning driver. Experience excellence in every mile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-gray hover:text-brand-red transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-red transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-brand-gray">
              <li><Link to="/" className="hover:text-white transition-colors">Inventory</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Financing</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-4 text-sm text-brand-gray">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-brand-red">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-brand-gray">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span>123 Speedway Blvd,<br/>Automotive District, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span>sales@kainmotors.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-slate pt-8 text-center">
          <p className="text-xs text-brand-gray">
            &copy; {new Date().getFullYear()} Kain Motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;