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
      nameRef.current.scrollWidth > nameRef.current.offsetWidth;
    setShowNameTooltip(isNameTruncated);
  }, []);

  return (
    <Link
      href={`/extension-details/${product.href}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-[300px]"
    >
      <div className="relative bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.03] transform transition-transform duration-300 p-2 flex flex-col overflow-hidden w-full h-full">
        <div className="h-[70%] w-full overflow-hidden pt-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
        <div
          style={{ padding: "50px" }}
          className="h-[30%] w-full bg-blue-100 flex flex-col justify-center items-center text-center px-3 py-2 rounded-b-xl shadow-inner"
        >
          <div className="relative w-full">
            <h3
              ref={nameRef}
              className="font-bold text-lg text-gray-800 truncate whitespace-nowrap"
            >
              {product.name}
            </h3>
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
    <section id="extensions" className="relative py-16 px-0 bg-blue-50 w-full">
      <h2 className="text-4xl text-center font-bold mb-10 text-gray-800">
        Our Featured Extensions
      </h2>

      <div className="w-full space-y-16">
        <div className="relative px-4 sm:px-6 md:px-10">
          <Swiper
            style={{ paddingBottom: "20px" }}
            modules={[Autoplay, Navigation]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            navigation={{ nextEl: ".top-next", prevEl: ".top-prev" }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {renderSlides(row1)}
          </Swiper>

          <button
            style={{ cursor: "pointer" }}
            className="top-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full"
          >
            ◀
          </button>
          <button
            style={{ cursor: "pointer" }}
            className="top-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full"
          >
            ▶
          </button>
        </div>

        <div className="relative px-4 sm:px-6 md:px-10">
          <Swiper
            style={{ paddingBottom: "20px" }}
            modules={[Autoplay, Navigation]}
            slidesPerView={3}
            spaceBetween={20}
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
          >
            {renderSlides(row2)}
          </Swiper>

          <button
            style={{ cursor: "pointer" }}
            className="bottom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full"
          >
            ◀
          </button>
          <button
            style={{ cursor: "pointer" }}
            className="bottom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProducSections;
