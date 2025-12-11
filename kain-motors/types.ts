export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
  category: 'Sedan' | 'SUV' | 'Sport' | 'Truck';
  fuel: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  transmission: 'Automatic' | 'Manual';
}

export interface NavLink {
  label: string;
  path: string;
}
