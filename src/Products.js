import React from 'react';

const products = [
  {
    title: 'Beauty Tweezers',
    icon: '💄',
    desc: ' High-precision tweezers for beauty professionals and brands.',
    img: '/images/A7401543.JPG'
  },
  {
    title: 'Precision Tool Sets',
    icon: '🛠️',
    desc: ' Comprehensive sets of precision tools for various applications, crafted for quality and durability.',
    img: '/images/A7401498.JPG'
  },
  {
    title: 'Private Label & Custom Packaging',
    icon: '📦',
    desc: ' Custom branding and packaging solutions for your business.',
    img: '/images/A7401511.JPG'
  }
];

const Products = () => (
  <section id="products" className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.title} className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-xl shadow-md p-8 flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <img src={product.img} alt={product.title + ' product image'} loading="lazy" className="mb-4 rounded-md shadow object-cover h-32 w-full" />
            <div className="text-5xl mb-4">{product.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600">{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products; 