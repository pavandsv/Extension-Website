'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const features = [
  { title: 'Fast Delivery', desc: 'We ensure quick and safe product delivery.' },
  { title: '24/7 Support', desc: 'Always here to help you out.' },
  { title: 'Secure Payment', desc: 'Your data and money are safe with us.' },
];

const ContentFeatures = () => {
  const featRef = useRef(null);

  useEffect(() => {
    gsap.from(featRef.current.children, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="p-10 bg-gray-100 text-center py-25">
      <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
      <div ref={featRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentFeatures;
