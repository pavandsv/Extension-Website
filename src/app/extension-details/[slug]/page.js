"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import products from "@/app/data/Products";

gsap.registerPlugin(ScrollTrigger);

export default function ExtensionDetailPage() {
  const TinyArrow = ({ className = "w-4 h-4 text-blue-600" }) => (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 10.5 L8 16 L8 12 L2 16 L2 4 L8 8 L8 4 Z" fill="white" />
      <path d="M17 10.5 L8.5 14.8 L8.5 6.2 Z" />
    </svg>
  );

  const { slug } = useParams();
const productData = products.find((p) => p.href === `/${slug}`);

  // Track if viewport is md and up
  const [isMdUp, setIsMdUp] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(min-width: 768px)");

    const update = (e) => setIsMdUp(e.matches);

    // Initial
    setIsMdUp(mq.matches);

    // Listen for changes
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      // Safari fallback
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  React.useEffect(() => {
    if (!productData) return;

    // Hero animations
    gsap.from(".hero-text", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-img", {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });

    // Feature animations
    const cards = gsap.utils.toArray(".feature-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -160 : 160,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });

    return () => {
      gsap.killTweensOf(cards);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [productData]);

  if (!productData)
    return (
      <div className="text-center text-gray-600 p-8">Product not found</div>
    );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0b1a38] via-[#0f2352] to-[#0a2a6a]">
      {/* Decorative gradient glows */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-cyan-400/20 blur-[130px]" />

      {/* Subtle grid pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Background product image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${productData.image})`,
          backgroundSize: "70%",
          backgroundPosition: "right -10% top 30%",
          backgroundRepeat: "no-repeat",
          filter: "blur(80px) brightness(1.2) contrast(0.85) saturate(0.9)",
          opacity: 0.08,
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-14">
        <div className="hero-text flex-1">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-cyan-200 ring-1 ring-white/10">
            Premium Extension
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-sm">
              {String(productData.name)}
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl leading-relaxed text-blue-100/90">
            {String(productData.desc)}
          </p>

          {/* Action buttons */}
          <div className="hero-cta mt-8 flex flex-wrap gap-4">
            <a
              href={productData.helpdoc}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-cyan-50 transition focus:outline-none"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/30 to-cyan-400/30 blur-sm"></span>
              <span className="relative rounded-xl border border-white/15 bg-white/5 px-6 py-3 backdrop-blur-md hover:bg-white/10">
                Help Documentation
              </span>
            </a>

            <a
              href={productData.buynow}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_10px_30px_-10px_rgba(8,145,178,0.7)] transition group-hover:scale-[1.02]"></span>
              <span className="relative px-6 py-3">Buy Now</span>
            </a>
          </div>
        </div>

        <div className="hero-img flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 blur-xl" />
            <img
              src={productData.image}
              alt={String(productData.name)}
              className="w-96 md:w-[30rem] rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>

          <div className="mt-10 flex flex-col items-center gap-6">
            {productData.keyfeatures.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card w-full max-w-xl p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/40 to-cyan-400/40"
                style={{
                  marginLeft: isMdUp ? `calc(${idx} * min(7vw, 84px))` : 0,
                }}
              >
                <div className="flex items-start gap-3 rounded-2xl bg-white/7 backdrop-blur-md px-5 py-4 ring-1 ring-white/10 hover:ring-cyan-300/30 transition">
                  <div className="flex-shrink-0 mt-1">
                    <TinyArrow className="w-4 h-4 text-blue-600" />
                  </div>

                  <p className="text-base md:text-lg font-medium leading-relaxed text-blue-50">
                    {String(feature)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a2a6a] to-transparent" />
    </div>
  );
}
