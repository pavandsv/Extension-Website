"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const HeroSection = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -80 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.querySelector("#extensions");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-6 sm:py-8 bg-[#f3f4f6]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className="relative max-w-7xl mx-auto min-h-[85vh] flex items-center justify-center overflow-hidden rounded-[15px] bg-[#f3f4f6]"
        >
          {/* background image wrapper */}
          <div className="absolute inset-0 rounded-[15px] overflow-hidden">
            <Image
              src="/logo/hero-bg.png"
              alt="Zoho Extensions Hero Background"
              fill
              sizes="100vw"
              className="object-cover object-center"
              style={{
                filter: "brightness(0.35)",
              }}
              priority
            />
          </div>

          {/* optional soft layer */}
          <div className="absolute inset-0 rounded-[56px] bg-white/5 pointer-events-none" />

          {/* content */}
          <div
            ref={contentRef}
            className="relative z-10 text-center px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto py-20 sm:py-24 md:py-28"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 leading-tight">
              Explore Our Zoho Extensions
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Smart tools built to power up your Zoho experience across CRM,
              Desk, Recruit, and more.
            </p>

            <button
              onClick={handleScroll}
              className="inline-block bg-[#0066cc] hover:bg-[#0055aa] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 cursor-pointer"
            >
              Browse Extensions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
