'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Pratik Modi", role: "CEO", img: "/team/pratikmodi.webp" },
  { name: "Paras Shah", role: "CTO", img: "/team/paras.webp" },
  { name: "Nishant Modi", role: "Opertions Manager", img: "/team/nishant.webp" },
];

const TeamSection = () => {
  const memberRefs = useRef([]);

  useEffect(() => {
    memberRefs.current.forEach((el, i) => {
      if (!el) return;
      const direction = i % 2 === 0 ? -100 : 100;
      gsap.fromTo(
        el,
        { x: direction, opacity: 0 },
        {
          scrollTrigger: { trigger: el, start: 'top 85%' },
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
        }
      );
    });
  }, []);

  return (
    <section className="w-full bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
          Our Leadership Team
        </h2>

        <div className="bg-blue-100 rounded-lg py-4 px-6 sm:px-10 mb-10">
          <p className="text-base sm:text-lg text-black">
            With over 20 years of combined experience, we’ve got a well-seasoned team at the helm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              ref={el => (memberRefs.current[i] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden w-full max-w-xs mx-auto"
            >
              {/* Image wrapper: centers image and prevents cropping */}
              <div className="h-60 sm:h-56 w-full flex items-center justify-center bg-white">
                <img
                  src={member.img}
                  alt={member.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="bg-blue-100 py-4 px-4">
                <h3 className="text-lg font-bold text-black">{member.name}</h3>
                <p className="text-blue-800 uppercase tracking-wide text-sm font-semibold">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
