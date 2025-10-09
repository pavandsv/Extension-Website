"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[90vh] md:h-[85vh] flex items-center justify-center overflow-hidden m-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/logo/hero-bg.png" // replace with your actual background image path
          alt="Zoho Extensions Hero Background"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Soft dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight">
          Explore Our <span className="text-indigo-300">Zoho Extensions</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Smart tools built to power up your Zoho experience across CRM, Desk,
          Recruit, and more.
        </p>
        <a
          href="#extensions"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
        >
          Browse Extensions
        </a>
      </div>

      {/* Decorative blurred gradient blobs for premium touch */}
      <div className="absolute -bottom-10 -left-20 w-72 h-72 bg-indigo-400 opacity-30 blur-3xl rounded-full" />
      <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-500 opacity-30 blur-3xl rounded-full" />
    </section>
  );
};

export default HeroSection;
