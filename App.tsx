import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductSection } from './components/ProductSection';
import { Footer } from './components/Footer';
import { generateProductImage } from './services/geminiService';

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const url = await generateProductImage();
        setImageUrl(url);
      } catch (err) {
        console.error("Failed to generate image:", err);
        setError("Could not generate the product image. Please try refreshing the page.");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-cream-100 text-brand-dark">
      <Header />
      <main>
        <Hero imageUrl={imageUrl} isLoading={isLoading} />
        <Benefits />
        <ProductSection imageUrl={imageUrl} isLoading={isLoading} error={error} />
      </main>
      <Footer />
    </div>
  );
};

export default App;