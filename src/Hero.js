import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[70vh] md:min-h-[90vh] lg:min-h-screen overflow-hidden font-mont px-2 md:px-8"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-20 z-10"></div>
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 py-16 animate-fadeIn max-w-3xl">
        <a href="#contact" className="inline-block bg-accent hover:bg-secondary transition-colors duration-300 text-primary font-semibold py-3 px-8 rounded-full shadow-lg">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero; 
