import React from 'react';

interface HeroProps {
  imageUrl: string | null;
  isLoading: boolean;
}

export const Hero: React.FC<HeroProps> = ({ imageUrl, isLoading }) => {
  return (
    <section 
      id="home" 
      className={`relative py-20 md:py-32 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${!imageUrl ? 'bg-cream-100' : ''}`}
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
    >
      {imageUrl && <div className="absolute inset-0 bg-brand-green/60 backdrop-blur-sm"></div>}
      
      <div className="relative container mx-auto px-6 text-center z-10">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 leading-tight transition-colors duration-500 ${imageUrl ? 'text-white' : 'text-brand-green'}`}>
          Unlock The Secret to Radiant Hair
        </h1>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 transition-colors duration-500 ${imageUrl ? 'text-cream-100' : 'text-brand-dark'}`}>
          Experience the pure, nourishing power of NOOR AL MADINAH, crafted with the finest natural ingredients to revitalize your hair from root to tip.
        </p>
        <a 
          href="#product" 
          className="bg-brand-gold text-brand-green font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Discover The Magic
        </a>
      </div>
    </section>
  );
};