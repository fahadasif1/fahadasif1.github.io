import React from 'react';
import { Car } from '../types';
import { Fuel, Gauge, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="group bg-brand-slate/30 rounded-2xl overflow-hidden border border-brand-slate/50 hover:border-brand-red/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/10 flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
          <span className="text-xs font-bold text-white uppercase tracking-wider">{car.category}</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-lg font-display font-bold text-white mb-1">
            {car.year} {car.make} {car.model}
          </h3>
          <p className="text-2xl font-bold text-brand-red">
            ${car.price.toLocaleString()}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-brand-gray text-xs">
            <Gauge className="w-4 h-4" />
            <span>{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center gap-2 text-brand-gray text-xs">
            <Fuel className="w-4 h-4" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-brand-gray text-xs">
            <Zap className="w-4 h-4" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <Link 
          to="/contact" 
          className="mt-auto w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-brand-red hover:border-brand-red transition-all duration-300 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;