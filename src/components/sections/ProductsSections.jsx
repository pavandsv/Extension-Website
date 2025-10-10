"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import products from "@/app/data/Products";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const nameRef = useRef(null);
  const [showNameTooltip, setShowNameTooltip] = useState(false);

  useEffect(() => {
    const isNameTruncated =
      nameRef.current &&
      nameRef.current.scrollWidth > nameRef.current.offsetWidth;
    setShowNameTooltip(isNameTruncated);
  }, []);

  return (
    <Link
      href={`/extension-details/${product.href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-[280px]" // ✅ Reduced height
    >
      <div className="relative bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.02] transform transition-transform duration-300 p-2 flex flex-col overflow-hidden w-full h-full">
        {/* Image Section */}
        <div className="h-[65%] w-full overflow-hidden pt-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

        {/* Text Section */}
        <div style={{"padding":"30px"}} className="h-[35%] w-full bg-blue-100 flex flex-col justify-center items-center text-center rounded-b-xl shadow-inner">
          <div className="relative w-full">
            <h3
              ref={nameRef}
              className="font-bold text-base text-gray-800 truncate whitespace-nowrap"
            >
              {product.name}
            </h3>

            {/* Tooltip on hover if truncated */}
            {showNameTooltip && (
              <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-normal max-w-xs w-max text-center pointer-events-none">
                {product.name}
              </div>
            )}
          </div>

          <div className="w-full mt-1">
            <p
              className="text-gray-700 text-sm overflow-hidden line-clamp-2"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.desc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProducSections = () => {
  const splitIndex =
    products.length <= 3 ? products.length : Math.ceil(products.length / 2);
  const row1 = products.slice(0, splitIndex);
  const row2 = products.slice(splitIndex);

  const renderSlides = (items) =>
    items.map((product, i) => (
      <SwiperSlide key={i} className="px-2">
        <ProductCard product={product} />
      </SwiperSlide>
    ));

  return (
    <section
      id="extensions"
      className="relative py-16 w-full bg-gradient-to-r from-[#f3f6ff] via-[#eef2ff] to-[#f7f9ff]"
    >
      {/* Consistent container with header/footer */}
      <div
        style={{ paddingTop: "15px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 "
      >
        <h2
          style={{ paddingBottom: "15px" }}
          className="text-4xl text-center font-bold mb-10 text-gray-800"
        >
          Our Featured Extensions
        </h2>

        <div className="w-full space-y-10">
          {" "}
          {/*Reduced gap between sliders */}
          {/*Top Slider */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={3}
              spaceBetween={18} //Slightly reduced card gap
              loop={true}
              navigation={{ nextEl: ".top-next", prevEl: ".top-prev" }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ paddingBottom: "20px" }}
            >
              {renderSlides(row1)}
            </Swiper>

            {/* Navigation Buttons */}
            <button
              style={{ cursor: "pointer" }}
              className="top-prev absolute left-2 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-2xl text-gray-700 hover:text-indigo-600 transition"
            >
              ◀
            </button>
            <button
              style={{ cursor: "pointer" }}
              className="top-next absolute right-2 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-2xl text-gray-700 hover:text-indigo-600 transition"
            >
              ▶
            </button>
          </div>
          {/* 🔹 Bottom Slider */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={3}
              spaceBetween={18}
              loop={true}
              navigation={{ nextEl: ".bottom-next", prevEl: ".bottom-prev" }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ paddingBottom: "20px" }}
            >
              {renderSlides(row2)}
            </Swiper>

            {/* Navigation Buttons */}
            <button
              style={{ cursor: "pointer" }}
              className="bottom-prev absolute left-2 sm:-left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-2xl text-gray-700 hover:text-indigo-600 transition"
            >
              ◀
            </button>
            <button
              style={{ cursor: "pointer" }}
              className="bottom-next absolute right-2 sm:-right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-2xl text-gray-700 hover:text-indigo-600 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProducSections;
