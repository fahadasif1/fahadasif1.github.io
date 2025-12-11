import React, { useState } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Car className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold tracking-tight text-white uppercase leading-none">
                Kain
              </span>
              <span className="text-xs font-sans text-brand-gray tracking-widest uppercase">
                Motors
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <RouterNavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-display text-sm font-medium tracking-wide transition-all duration-200 hover:text-brand-red ${
                      isActive ? 'text-brand-red' : 'text-brand-gray'
                    }`
                  }
                >
                  {link.label}
                </RouterNavLink>
              ))}
              <Link
                to="/contact"
                className="bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-display font-medium text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              >
                Book Test Drive
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-brand-gray hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-b border-brand-slate animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-4 rounded-md text-base font-medium font-display ${
                    isActive ? 'text-white bg-brand-slate' : 'text-brand-gray hover:text-white hover:bg-brand-slate/50'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-brand-red text-white px-3 py-4 rounded-md font-display font-medium text-base"
              >
                Book Test Drive
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;