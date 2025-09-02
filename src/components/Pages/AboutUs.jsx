"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Premium AboutUs section with subtle glassmorphism, gradient backdrops, and refined animations
// No extra UI libraries required; uses Tailwind CSS + GSAP only.

const AboutUs = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const zohoHeadingRef = useRef(null);
  const zohoTextRef = useRef(null);
  const productRefs = useRef([]);
  const badgeRef = useRef(null);
  const zohoLogoTopRef = useRef(null);
  // ensure the array has stable length
  const products = [
    ["zohocrm.png", "Zoho CRM"],
    ["zohobooks.png", "Zoho Books"],
    ["zohomail.png", "Zoho Mail"],
    ["zohoprojects.png", "Zoho Projects"],
    ["zohodesk.png", "Zoho Desk"],
    ["zohopeople.png", "Zoho People"],
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power2.out" } });

    tl.fromTo(
      headingRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      .fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "<"
      )
      .fromTo(
        imageRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1 },
        "<"
      )
      .fromTo(
        badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 },
        "<"
      )
      .fromTo(
        zohoLogoTopRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1 },
        "+=0.3"
      )
      .fromTo(
        zohoHeadingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "<"
      )
      .fromTo(zohoTextRef.current, { opacity: 0 }, { opacity: 1 }, "<")
      .fromTo(
        productRefs.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08 },
        "<"
      );

    return () => tl.kill();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Decorative premium gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft radial backdrop */}
        <div className="absolute -top-20 -left-20 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-blue-200 via-sky-100 to-indigo-200 blur-3xl opacity-70" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-indigo-200 via-violet-100 to-fuchsia-200 blur-3xl opacity-60" />
        {/* subtle grid overlay */}
        <div className="absolute inset-0 [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
      </div>

      {/* SECTION: ABOUT DSV CORP */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-24 py-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-14">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs tracking-wide text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              DSV Group • Technology & Innovation
            </span>

            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
                About DSV Corporation
              </span>
            </h2>

            <p
              ref={textRef}
              className="mx-auto md:mx-0 max-w-2xl text-[1.05rem] leading-relaxed text-slate-700">
              DSV Corp is a group of companies. <strong>FI Digital</strong> &amp; <strong>Fristine Infotech</strong> are part of the DSV Group. We started with a simple idea—
              use technology to enrich everyday life. Today, we empower people and businesses with thoughtful design and robust engineering—and we’re proud to be recognized for our innovation and execution.
            </p>

            <img
              ref={badgeRef}
              src="/logo/zohopartner.jpg"
              alt="Zoho Premium Partner"
              className="w-44 md:w-52 mx-auto md:mx-0 mt-2 rounded-2xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"/>
          </div>

          {/* DSV Illustration */}
          <div ref={imageRef} className="relative flex justify-center md:justify-end">
            <div className="relative rounded-3xl border border-white/60 bg-white/60 p-4 shadow-xl backdrop-blur-md">
              <img
                src="/logo/about-us.png"
                alt="Illustration representing DSV Corp"
                className="w-72 md:w-[22rem] h-auto object-contain drop-shadow-xl rounded-2xl"
              />
              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-white/40 to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* HAIRLINE DIVIDER */}
      <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      {/* SECTION: WHAT IS ZOHO */}
      <section className="px-6 md:px-12 lg:px-16 xl:px-24 py-20 text-center">
        {/* Zoho Logo above heading */}
        <div className="mb-6">
          <img
            ref={zohoLogoTopRef}
            src="/logo/zoho.png"
            alt="Zoho Logo"
            className="w-40 md:w-48 mx-auto drop-shadow-sm"
          />
        </div>

        <h2
          ref={zohoHeadingRef}
          className="text-3xl md:text-4xl font-extrabold text-slate-900">
          <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
            What is Zoho?
          </span>
        </h2>

        <p
          ref={zohoTextRef}
          className="mx-auto mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-slate-700">
          Zoho Corporation is a global technology company offering a suite of 50+ cloud applications across CRM, email, finance, projects, and collaboration—built with privacy-first principles and designed to scale from startups to enterprises.
        </p>

        <div className="mx-auto mt-12 max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-wider text-slate-500">Popular Zoho applications</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 md:gap-6">
            {products.map(([img, label], index) => (
              <div
                key={label}
                ref={(el) => {
                  if (el) productRefs.current[index] = el;
                }}
                className="group relative flex flex-col items-center rounded-2xl border border-white/60 bg-white/60 p-4 shadow-md backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/70 to-transparent" />
                <img
                  src={`/logo/${img}`}
                  alt={label}
                  className="relative z-[1] mb-2 h-14 w-14 object-contain"
                />
                <span className="relative z-[1] text-sm font-semibold text-slate-800">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
