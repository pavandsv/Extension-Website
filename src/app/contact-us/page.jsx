"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const contactCards = [
  {
    title: "Pune Office",
    value:
      "Fristine Infotech Pvt Ltd, 4th floor,Main Hinjawadi- Wakad Road, Hinjawadi, Pune, Maharashtra 411057",
    icon: <Building2 className="w-7 h-7 text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    title: "Mumbai Office",
    value:
      "M.P. Modi, 326/F, Old Post Office Lane, Mangaldas Market,Mumbai, Maharashtra-400002",
    icon: <Building2 className="w-7 h-7 text-blue-600" />,
    iconBg: "bg-green-100",
  },
  {
    title: "Chennai Office",
    value:
      "Location No: 3/1075, 1st Floor, Agasthiyarpatti,Tirunelveli, Tamilnadu-627428",
    icon: <Building2 className="w-7 h-7 text-blue-600" />,
    iconBg: "bg-green-100",
  },
  {
    title: "Bangalore Office",
    value:
      "#39, NGEF Lane, 2nd Floor, Suite No.-697, Indiranagar,Bangalore, Karnataka-560038",
    icon: <Building2 className="w-7 h-7 text-blue-600" />,
    iconBg: "bg-green-100",
  },
  {
    title: "Email Us",
    value: "admin@fristinetech.com",
    icon: <Mail className="w-7 h-7 text-purple-600" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Call Us",
    value: "+91-8591044966",
    icon: <Phone className="w-7 h-7 text-yellow-600" />,
    iconBg: "bg-yellow-100",
  },
];

export default function EnhancedContactUs() {
  const formRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 80%" },
      }
    );

    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        }
      );
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900">Get in Touch</h2>
        <div className="flex justify-center mt-2">
          <div className="w-20 h-1 bg-blue-500 rounded-full" />
        </div>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg">
          Have questions or need assistance? We’re here to help. Reach out to us
          through any of the options below.
        </p>
      </div>

      {/* Image + Form */}
   <div className="grid md:grid-cols-1 items-center px-4 md:px-8">
  <div
    ref={formRef}
    className="rounded-2xl overflow-hidden border border-gray-100 bg-white"
  >
    <iframe
      title="Zoho Extension Website - Contact Form"
      src="https://forms.zohopublic.com/dsvcorp1/form/ZohoExtensionWebsiteContactForm/formperma/iGZC7PsSDpE2qA2onHYrzzOkz1PbyszciRAo_q_o_ck"
      frameBorder="0"
      loading="lazy"
      allowFullScreen
      className="w-full h-[1050px]"
    />
  </div>
</div>


      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-4xl mx-auto">
        {contactCards.map((card, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300"
          >
            <div
              className={`${card.iconBg} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow`}
            >
              {card.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h4>
            <p className="text-gray-600 mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="mt-16 max-w-6xl mx-auto">
        <iframe
          className="w-full h-96 rounded-2xl shadow-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6561402148454!2d73.74304897465375!3d18.58953496706506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb00722d2bf1%3A0xe454902d6111c23c!2sFristine%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752479072628!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </section>
  );
}
