import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    img: '/images/logo.png',
    title: 'About Us',
    text: 'PrimeGrip Exports is a Sialkot, Pakistan-based manufacturer specializing in custom tweezers and precision tools. We combine decades of craftsmanship with modern technology to deliver products tailored to your brand, with a focus on quality, reliability, and client satisfaction.'
  },
  {
    img: '/images/A7401545.JPG',
    title: 'Our Mission',
    text: "To deliver world-class custom tweezers and precision tools tailored to your brand's needs. We believe in quality, innovation, and client-focused solutions."
  },
  {
    img: '/images/A7401511.JPG',
    title: 'Why Choose Us?',
    text: 'We offer end-to-end customization, from design and branding to packaging, ensuring your products stand out in the market.'
  },
  {
    img: '/images/A7401498.JPG',
    title: 'Global Reach',
    text: 'Trusted by businesses worldwide, our commitment to excellence and reliability makes us your ideal export partner.'
  }
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((current - 1 + slides.length) % slides.length);
  }, [current]);
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((current + 1) % slides.length);
  }, [current]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [current, isPaused, nextSlide]);

  const imgVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeIn' },
    }),
  };

  const textVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeIn' },
    }),
  };

  return (
    <section id="about" className="py-16 px-4 bg-background font-mont">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:space-x-10">
        <div 
          className="relative w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ minHeight: '22rem' }}
        >
          <button onClick={prevSlide} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-accent transition z-10">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={slides[current].img}
              src={slides[current].img}
              alt={slides[current].title}
              className="rounded-lg shadow-lg object-cover w-full h-80 md:h-[28rem]"
              custom={direction}
              variants={imgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <button onClick={nextSlide} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full shadow p-2 hover:bg-accent transition z-10">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={slides[current].title}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="inline-block w-full"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{slides[current].title}</h2>
              <p className="text-lg mb-4 text-primary">{slides[current].text}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
                className={`h-3 w-3 rounded-full ${idx === current ? 'bg-accent' : 'bg-secondary'} transition`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 