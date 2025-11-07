import React from 'react';

interface ProductSectionProps {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

const products = [
    { name: "Hair Oil Spray Bottle", description: "Standard Size", price: 500 },
    { name: "Small Hair Oil Spray Bottle", description: "Travel Size", price: 250 },
    { name: "Nourishing Hair Serum", description: "For Extra Shine", price: 300 },
];

export const ProductSection: React.FC<ProductSectionProps> = ({ imageUrl, isLoading, error }) => {
  return (
    <section id="product" className="py-20 bg-cream-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="aspect-square bg-cream-200 rounded-lg shadow-2xl flex items-center justify-center p-4">
              {isLoading && (
                <div className="animate-pulse w-full h-full bg-gray-300 rounded-md flex flex-col items-center justify-center text-brand-dark">
                  <svg className="w-12 h-12 mb-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-semibold">Generating product image...</p>
                   <p className="text-sm">Our AI is creating a unique image for you.</p>
                </div>
              )}
              {error && (
                <div className="text-center text-red-600 p-4">
                  <p className="font-bold">Image Generation Failed</p>
                  <p>{error}</p>
                </div>
              )}
              {imageUrl && !isLoading && (
                <img src={imageUrl} alt="NOOR AL MADINAH Hair Oil" className="w-full h-full object-cover rounded-md" />
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-4">
              NOOR AL MADINAH
            </h2>
            <p className="text-2xl text-brand-dark font-semibold mb-6">
              The Essence of Pure Hair Care
            </p>
            <p className="text-brand-dark mb-8 leading-relaxed">
              Our premium hair oil is a meticulously crafted blend of 100% natural ingredients, designed to deeply nourish your hair and scalp. Free from harsh chemicals and synthetic fragrances, it's the perfect daily ritual for achieving visibly healthier, more beautiful hair.
            </p>
            
            <div className="w-full">
              <div className="space-y-4">
                {products.map((product, index) => (
                    <div key={index} className="flex justify-between items-center bg-cream-200/70 p-4 rounded-lg shadow-sm border border-transparent transition-all duration-300 hover:shadow-md hover:border-brand-gold/50">
                        <div>
                            <p className="font-bold text-lg text-brand-dark">{product.name}</p>
                            <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                            <p className="text-xl font-bold text-brand-green">₹{product.price}</p>
                        </div>
                    </div>
                ))}
              </div>
               <a 
                href="#contact"
                className="inline-block text-center w-full md:w-auto mt-8 bg-brand-green text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-green-800 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Contact to Buy
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};