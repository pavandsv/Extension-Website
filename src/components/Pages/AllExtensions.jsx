"use client";
import { useEffect, useRef, useState } from "react";
import products from "@/app/data/Products";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const [showNameTooltip, setShowNameTooltip] = useState(false);

  useEffect(() => {
    const isNameTruncated =
      nameRef.current && nameRef.current.scrollWidth > nameRef.current.offsetWidth;
    setShowNameTooltip(isNameTruncated);
  }, []);

  return (
    <Link
      href={`/extension-details/${product.href}`}
      target="_blank"
      rel="noopener noreferrer"
      // unified card height across the grid
      className="group block w-full h-[360px] sm:h-[380px] md:h-[400px]"
    >
      <div className="relative bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.03] transform transition-transform duration-300 flex flex-col overflow-hidden w-full h-full p-0">
        {/* Image (full width, no gap) */}
        <div className="h-[68%] w-full overflow-hidden rounded-t-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Area */}
        <div className="h-[32%] w-full bg-blue-100 flex flex-col justify-center items-center text-center px-4 py-3 rounded-b-xl shadow-inner">
          {/* Name */}
          <div className="relative w-full">
            <h3
              ref={nameRef}
              className="font-bold text-base text-gray-800 truncate whitespace-nowrap"
            >
              {product.name}
            </h3>

            {showNameTooltip && (
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-normal max-w-xs w-max text-center pointer-events-none">
                {product.name}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="relative w-full mt-1">
            <p
              ref={descRef}
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


const AllExtensions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const filtered = products.filter(({ name, desc, product }) => {
    const q = searchTerm.toLowerCase();
    const matchesText = name.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
    const matchesFilter = filterBy ? product === filterBy : true;
    return matchesText && matchesFilter;
  });

  return (
    <section
      id="extensions"
      className="relative py-16 w-full bg-gradient-to-r from-[#f3f6ff] via-[#eef2ff] to-[#f7f9ff]"
    >
      {/* mirror header’s outer padding */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* mirror header’s inner max width container */}
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl text-center font-bold mb-10 text-gray-800">
            Our Featured Extensions
          </h2>

          {/* Search + Filter */}
          <div
            className="
              flex flex-col md:flex-row md:justify-end 
              items-stretch md:items-center 
              gap-3 md:gap-4 mb-8
            "
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full md:w-64
                px-3 py-2 rounded-lg border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-400 
                placeholder-gray-500 transition text-sm
              "
            />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="
                w-full md:w-48
                px-3 py-2 rounded-lg border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-blue-400 
                transition text-sm
              "
            >
              <option value="">All Products</option>
              <option value="crm">Zoho CRM</option>
              <option value="desk">Zoho Desk</option>
              <option value="recruit">Zoho Recruit</option>
              <option value="books">Zoho Books</option>
            </select>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllExtensions;
