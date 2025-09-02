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
    const isDescTruncated =
      descRef.current && descRef.current.scrollHeight > descRef.current.clientHeight;
    setShowNameTooltip(isNameTruncated);
  }, []);

  return (
    <Link
      href={`/extension-details/${product.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-[300px]"
    >
      <div className="relative bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.03] transform transition-transform duration-300 p-2 flex flex-col overflow-hidden w-full h-full">
        {/* Image */}
        <div className="h-[70%] w-full overflow-hidden pt-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

        {/* Text Area */}
        <div className="h-[30%] w-full bg-blue-100 flex flex-col justify-center items-center text-center px-3 py-2 rounded-b-xl">
          {/* Name */}
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
    const matchesText =
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy ? product === filterBy : true;
    return matchesText && matchesFilter;
  });

  return (
    <section
      id="extensions"
      className="py-16 px-4 sm:px-6 md:px-10 bg-blue-50 w-full"
    >
      {/* Heading */}
      <h2 className="text-4xl text-center font-bold mb-10 text-gray-800">
        Our Featured Extensions
      </h2>

      {/* Search + Filter */}
      <div
        className="
          w-full max-w-7xl mx-auto
          flex flex-col md:flex-row
          md:justify-end
          items-stretch md:items-center
          gap-3 md:gap-4
          mb-8
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllExtensions;
