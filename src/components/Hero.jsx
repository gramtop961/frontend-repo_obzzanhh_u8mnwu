import React from 'react';

const Hero = ({ onShop }) => {
  return (
    <section className="relative">
      <div
        className="relative h-[70vh] w-full overflow-hidden"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=2069&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-xs text-yellow-400/90 mb-4">Refined • Distinguished • Timeless</p>
            <h1 className="text-4xl md:text-6xl font-semibold text-zinc-100 leading-tight">
              Elevate Your Ritual
            </h1>
            <p className="mt-4 text-zinc-300 text-lg">
              Discover curated tobacco blends and accessories crafted for discerning taste. Luxury packaged, responsibly sourced.
            </p>
            <div className="mt-8">
              <button onClick={onShop} className="px-6 py-3 bg-gradient-to-br from-yellow-500 to-amber-700 text-black font-semibold rounded-md shadow-lg ring-1 ring-yellow-300 hover:brightness-110 transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
