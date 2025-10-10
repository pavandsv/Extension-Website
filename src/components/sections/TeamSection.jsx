'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Pratik Modi", role: "CEO", img: "/team/pratikmodi.webp" },
  { name: "Paras Shah", role: "CTO", img: "/team/paras.webp" },
  { name: "Nishant Modi", role: "Operations Manager", img: "/team/nishant.webp" },
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
    <section className="relative w-full py-16 bg-gradient-to-r from-[#f3f6ff] via-[#eef2ff] to-[#f7f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
          Our Leadership Team
        </h2>

        <div className="bg-blue-100 rounded-lg py-4 px-6 sm:px-10 mb-12 shadow-sm">
          <p className="text-base sm:text-lg text-gray-900">
            With over 20 years of combined experience, we’ve got a well-seasoned team at the helm.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              ref={(el) => (memberRefs.current[i] = el)}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full max-w-[300px]"
            >
              {/* Image - Larger & Edge-to-Edge */}
              <div className="w-full bg-white">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[320px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info Section */}
              <div className="bg-blue-100 py-4 px-4">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
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
