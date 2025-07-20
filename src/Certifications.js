import React from 'react';

const certifications = [
  {
    img: '/images/iso9001.png',
    title: 'ISO 9001:2015 Certified',
    desc: 'Quality management system certified for international standards.'
  },
  {
    img: '/images/ce.png',
    title: 'CE Marked Products',
    desc: 'Products conform to European health, safety, and environmental protection standards.'
  },
  {
    img: '/images/pakistan.png',
    title: 'Made in Pakistan',
    desc: 'Proudly manufactured in Sialkot, Pakistan.'
  },
  {
    img: '/images/private-label.png',
    title: 'Private Label Exporter',
    desc: 'Specialists in custom branding and private label exports.'
  },
];

const Certifications = () => (
  <section className="py-16 px-4 bg-background font-mont">
    <div className="max-w-5xl mx-auto text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Certifications & Standards</h2>
      <p className="text-lg text-primary">Our commitment to quality and compliance is recognized worldwide.</p>
    </div>
    <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-4">
      {certifications.map((cert) => (
        <div key={cert.title} className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-xl shadow-md p-6 flex flex-col items-center">
          <img src={cert.img} alt={cert.title + ' badge'} loading="lazy" className="h-16 w-16 mb-4 object-contain" onError={e => {e.target.onerror=null; e.target.src='https://cdn-icons-png.flaticon.com/512/190/190411.png'}} />
          <h3 className="text-lg font-semibold text-primary mb-2">{cert.title}</h3>
          <p className="text-sm text-primary">{cert.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications; 