"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section entrance
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Content (enters all together)
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2, // starts right after hero fade
        }
      );
    });
    return () => ctx.revert();
  }, []);

  // Smooth scroll behavior
  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.querySelector("#extensions");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden m-0"
    >
      {/*  Background image that fits perfectly */}
      <img
        src="/logo/hero-bg.png"
        alt="Zoho Extensions Hero Background"
        className="absolute inset-0 w-[90%] h-auto object-contain mx-auto left-1/2 -translate-x-1/2"
      />

      {/*  Original dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40 z-[1]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="
          relative z-10 text-center px-6 max-w-5xl mx-auto
          pt-20 sm:pt-0
        "
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight">
          Explore Our Zoho Extensions
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Smart tools built to power up your Zoho experience across CRM, Desk,
          Recruit, and more.
        </p>
        <button
          style={{ cursor: "pointer" }}
          onClick={handleScroll}
          className="inline-block bg-[#0066cc] hover:bg-[#0055aa] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
        >
          Browse Extensions
        </button>
      </div>

      {/* Decorative blurred gradient blobs */}
      <div className="absolute -bottom-10 -left-20 w-72 h-72 bg-[#0066cc]/40 opacity-30 blur-3xl rounded-full" />
      <div className="absolute top-0 -right-20 w-80 h-80 bg-[#0066cc]/40 opacity-30 blur-3xl rounded-full" />
    </section>
  );
};

export default HeroSection;
