import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Footer from './Footer';
import Certifications from './Certifications';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Section = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

function LandingPage() {
  React.useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-out-cubic' });
  }, []);
  return (
    <main className="bg-gray-100 min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <Section><Hero /></Section>
      <svg className="w-full h-8" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 80L1440 0V80H0Z" fill="#f8fafc"/></svg>
      <Section delay={0.1}><About /></Section>
      <div className="h-12 w-full bg-gradient-to-b from-white to-background" />
      <Section delay={0.2}><Products /></Section>
      <svg className="w-full h-8" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L1440 80V0H0Z" fill="#f8fafc"/></svg>
      <div className="h-12 w-full bg-gradient-to-b from-background to-white" />
      <Section delay={0.25}><Certifications /></Section>
      <Section delay={0.3}><Contact /></Section>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
