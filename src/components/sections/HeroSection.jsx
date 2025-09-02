'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-gray-900 py-25 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Explore Our Zoho Extensions</h1>
        <p className="text-xl md:text-2xl mb-8">Smart tools built to power up your Zoho experience across CRM, Desk, Recruit, and more.</p>
        <a href="#extensions" className="inline-block bg-indigo-600 text-white font-bold px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300">Browse Extensions</a>
      </div>
    </section>
  );
};

export default HeroSection;
