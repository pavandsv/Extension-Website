'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section
      ref={ctaRef}
      className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-gray-900 py-25 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Supercharge Your Zoho Suite?</h2>
      <p className="mb-6 text-lg">
        Get in touch with us to build or install a Zoho extension tailored to your business.
      </p>
      <a
        href="/contact-us"
        className="inline-block bg-indigo-600 text-white font-bold px-8 py-3 rounded-full hover:bg-indigo-700 transition"
      >
        Contact Us
      </a>
    </section>
  );
};

export default CallToAction;
