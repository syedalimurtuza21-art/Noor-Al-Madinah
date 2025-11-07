
import React from 'react';
import { LeafIcon, SparkleIcon, DropletIcon } from './icons';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <LeafIcon />,
      title: 'Promotes Hair Growth',
      description: 'Our unique blend of natural oils stimulates follicles and nourishes the scalp to encourage healthy, strong hair growth.',
    },
    {
      icon: <DropletIcon />,
      title: 'Reduces Dandruff & Dryness',
      description: 'Deeply moisturizes the scalp, combating dryness and flakiness, leaving your hair feeling refreshed and comfortable.',
    },
    {
      icon: <SparkleIcon />,
      title: 'Adds Natural Shine & Strength',
      description: 'Restores your hair\'s natural luster and reinforces each strand to prevent breakage, resulting in silky, resilient hair.',
    },
  ];

  return (
    <section id="benefits" className="bg-cream-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-green mb-12">
          Experience The Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-cream-100 p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4 text-brand-gold">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-green mb-2">{benefit.title}</h3>
              <p className="text-brand-dark">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
