"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const clients = [
  { name: "ZWISS", logo: "/client/kwizz.png" },
  { name: "GEN", logo: "/client/gen.jpg" },
  { name: "EXION", logo: "/client/exion.jpg" },
  { name: "KOBARU", logo: "/client/kobaru2.jpeg" },
  { name: "GLO", logo: "/client/glo.png" },
  { name: "NOVA", logo: "/client/nova.jpeg" },
  { name: "ALPHA", logo: "/client/alpha.png" },
  { name: "OMEGA", logo: "/client/omega.png" },
];

export default function ClientSection() {
  const trackRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const speed = 50; // pixels per second

    // Duplicate content for seamless loop
    track.innerHTML += track.innerHTML;
    track.style.flexDirection = "row-reverse";

    const singleSetWidth = track.scrollWidth / 2;

    // GSAP animation moving RIGHT
    animRef.current = gsap.to(track, {
      x: `+=${singleSetWidth}`,
      duration: singleSetWidth / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % singleSetWidth),
      },
    });

    // Attach hover listeners to each card
    const cards = track.querySelectorAll(".client-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => animRef.current?.pause());
      card.addEventListener("mouseleave", () => animRef.current?.resume());
    });

    return () => {
      animRef.current?.kill();
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () =>
          animRef.current?.pause()
        );
        card.removeEventListener("mouseleave", () =>
          animRef.current?.resume()
        );
      });
    };
  }, []);

  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70" />

      {/* Fade masks */}
      <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
        Our Trusted Clients
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12 text-center">
        We are proud to have collaborated with these incredible brands. Their
        trust in us fuels our passion for excellence.
      </p>

      <div className="overflow-hidden relative">
        <div
          ref={trackRef}
          className="flex gap-8 px-4"
          style={{ willChange: "transform" }}
        >
          {clients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="client-card backdrop-blur-md bg-white/30 border border-white/40 p-4 rounded-xl shadow-lg flex flex-col items-center min-w-[140px] transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white/50 my-4"
              style={{
                boxShadow: "0 -2px 4px rgba(0,0,0,0.06), var(--tw-shadow)",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-110"
              />
              <span className="mt-2 font-medium text-gray-800 text-sm">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
