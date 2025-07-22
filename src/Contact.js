import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'pg-auto-reply',      // Replace with your EmailJS service ID
      'template_v9729vj',     // Replace with your EmailJS template ID
      form,
      'QxuUEXFnptJIa3N6-'          // Replace with your EmailJS user/public key
    ).then(
      (result) => {
        setSubmitted(true);
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white relative">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h2>
        <AnimatePresence>
          {submitted ? (
            <motion.div
              key="success"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex flex-col items-center justify-center text-green-600 text-center text-lg font-semibold py-8"
            >
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 400, damping: 15 }}
                className="w-16 h-16 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </motion.svg>
              Thank you for reaching out! We’ll get back to you soon.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md animate-fadeIn"
            >
              <div>
                <label htmlFor="name" className="block text-left font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} aria-label="Name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-left font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} aria-label="Email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-left font-medium mb-1">Message</label>
                <textarea id="message" name="message" required rows="4" value={form.message} onChange={handleChange} aria-label="Message" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"></textarea>
              </div>
              <button type="submit" aria-label="Send Message" className="w-full bg-accent hover:bg-secondary text-primary font-semibold py-3 px-6 rounded transition-colors duration-300">Send Message</button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+923409674000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }}
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 1.7.44 3.29 1.21 4.67L2 22l5.49-1.18A9.96 9.96 0 0 0 12 22a10 10 0 0 0 0-20zm0 18c-1.47 0-2.87-.36-4.09-1.01l-.29-.16-3.26.7.7-3.18-.17-.3A7.97 7.97 0 1 1 20 12a7.96 7.96 0 0 1-8 8zm4.43-5.34c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.12-.12.27-.32.4-.48.13-.16.17-.28.25-.46.08-.18.04-.34-.02-.48-.06-.14-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.28-.22.22-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.65 4.2 3.61.59.2 1.05.32 1.41.41.59.15 1.13.13 1.56.08.48-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
        </svg>
      </a>
    </section>
  );
};

export default Contact; 
