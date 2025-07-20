import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 text-center relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <span className="font-semibold">&copy; {new Date().getFullYear()} PrimeGrip Exports. All rights reserved.</span>
      <div className="mt-2 text-xs text-gray-300">
        <a href="/" title="tweezers icons" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Crafting Custom Tools. Exporting Excellence.</a>
      </div>
    </div>
    <img src="/images/logo.png" alt="PrimeGrip Logo Watermark" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 h-32 w-32 object-contain pointer-events-none select-none" />
  </footer>
);

export default Footer; 