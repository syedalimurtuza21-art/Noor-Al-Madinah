
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-cream-200/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-green tracking-wider">
          NOOR AL MADINAH
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-brand-dark hover:text-brand-green transition-colors duration-300">Home</a>
          <a href="#benefits" className="text-brand-dark hover:text-brand-green transition-colors duration-300">Benefits</a>
          <a href="#product" className="text-brand-dark hover:text-brand-green transition-colors duration-300">Shop</a>
          <a href="#contact" className="text-brand-dark hover:text-brand-green transition-colors duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};
