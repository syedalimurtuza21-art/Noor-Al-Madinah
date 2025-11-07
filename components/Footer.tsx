
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-green text-cream-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">NOOR AL MADINAH</h3>
        <p className="mb-2">
          Discover natural beauty. Discover yourself.
        </p>
        <div className="border-t border-cream-100/30 my-6 max-w-md mx-auto"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <p className="font-semibold">
                Address: <span className="font-normal">Malakpet, Chanchalguda</span>
            </p>
            <p className="font-semibold">
                Phone: <a href="tel:6305196084" className="font-normal hover:text-brand-gold transition-colors">6305196084</a>
            </p>
             <p className="font-semibold">
                Website: <a href="http://www.nooralmadinah.com" target="_blank" rel="noopener noreferrer" className="font-normal hover:text-brand-gold transition-colors">www.nooralmadinah.com</a>
            </p>
        </div>
        <div className="mt-8 text-sm text-cream-100/70">
          &copy; {new Date().getFullYear()} NOOR AL MADINAH. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
