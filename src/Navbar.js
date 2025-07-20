import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://www.instagram.com/primegrip_exports/',
    label: 'Instagram',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/+923409674000',
    label: 'WhatsApp',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2A10 10 0 0 0 2 12c0 1.7.44 3.29 1.21 4.67L2 22l5.49-1.18A9.96 9.96 0 0 0 12 22a10 10 0 0 0 0-20zm0 18c-1.47 0-2.87-.36-4.09-1.01l-.29-.16-3.26.7.7-3.18-.17-.3A7.97 7.97 0 1 1 20 12a7.96 7.96 0 0 1-8 8zm4.43-5.34c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.12-.12.27-.32.4-.48.13-.16.17-.28.25-.46.08-.18.04-.34-.02-.48-.06-.14-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.28-.22.22-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.65 4.2 3.61.59.2 1.05.32 1.41.41.59.15 1.13.13 1.56.08.48-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
  },
  {
    href: 'https://facebook.com/',
    label: 'Facebook',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 z-50 bg-[#F5F3EF] shadow-md font-mont transition-all duration-300`}
      animate={scrolled ? { paddingTop: 4, paddingBottom: 4, height: 48, boxShadow: '0 2px 16px 0 rgba(30,41,59,0.10)' } : { paddingTop: 10, paddingBottom: 10, height: 64, boxShadow: '0 4px 24px 0 rgba(30,41,59,0.15)' }}
      style={{ willChange: 'padding, height, box-shadow' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4" style={{ height: '100%' }}>
        <a href="/" className="flex items-center" aria-label="Home">
          <img
            src="/images/mainicon.png"
            alt="PrimeGrip Exports Logo"
            className="h-24 w-24 max-h-full max-w-full object-contain p-1"
            style={{ display: 'block' }}
          />
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="font-medium transition-transform duration-200 hover:scale-110" style={{ color: '#1c2533' }} aria-label="Home">Home</a>
          <a href="#about" className="font-medium transition-transform duration-200 hover:scale-110" style={{ color: '#1c2533' }} aria-label="About">About</a>
          <a href="#products" className="font-medium transition-transform duration-200 hover:scale-110" style={{ color: '#1c2533' }} aria-label="Products">Products</a>
          <a href="#contact" className="font-medium transition-transform duration-200 hover:scale-110" style={{ color: '#1c2533' }} aria-label="Contact">Contact</a>
        </div>
        {/* Social Icons Desktop */}
        <div className="hidden md:flex space-x-4 ml-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{ color: '#1c2533' }}
              className="transition-transform duration-200 hover:scale-125 hover:text-accent"
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <motion.span
            className="block w-7 h-1 bg-[#CEAE9D] rounded mb-1"
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          <motion.span
            className="block w-7 h-1 bg-[#CEAE9D] rounded mb-1"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-7 h-1 bg-[#CEAE9D] rounded"
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        </button>
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-64 h-full bg-primary shadow-lg flex flex-col items-center pt-24 space-y-8 md:hidden z-50"
            >
              <button
                className="absolute top-4 right-4 text-3xl text-accent focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              <a href="/" className="font-medium text-lg transition-transform duration-200 hover:scale-110" style={{ color: '#CEAE9D' }} aria-label="Home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="font-medium text-lg transition-transform duration-200 hover:scale-110" style={{ color: '#CEAE9D' }} aria-label="About" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#products" className="font-medium text-lg transition-transform duration-200 hover:scale-110" style={{ color: '#CEAE9D' }} aria-label="Products" onClick={() => setMenuOpen(false)}>Products</a>
              <a href="#contact" className="font-medium text-lg transition-transform duration-200 hover:scale-110" style={{ color: '#CEAE9D' }} aria-label="Contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    style={{ color: menuOpen ? '#CEAE9D' : '#1c2533' }}
                    className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
