"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="bg-white sticky top-0 z-50 shadow w-full">
      <nav aria-label="Global" className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="block h-12 w-auto overflow-hidden">
              <span className="sr-only">DSV Corp</span>
              <img
                src="/logo/DSV-Logo.png"
                alt="DSV Corp"
                className="h-full object-contain"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden ml-auto relative">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition"
            >
              <span className="sr-only">Toggle main menu</span>
              <Bars3Icon
                className={`h-6 w-6 transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90 text-indigo-700" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Mobile menu (fixed) */}
            {mobileMenuOpen && (
              <div className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 z-50 animate-slideDown">
                <nav className="flex flex-col p-4 space-y-2">
                  {/* Internal links use Next.js Link */}
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg font-semibold text-sm transition ${
                      pathname === "/"
                        ? "text-indigo-800 bg-indigo-50"
                        : "text-gray-800 hover:bg-indigo-50"
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    href="/marketplace"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg font-semibold text-sm transition ${
                      pathname === "/marketplace"
                        ? "text-indigo-800 bg-indigo-50"
                        : "text-gray-800 hover:bg-indigo-50"
                    }`}
                  >
                    Marketplace
                  </Link>

                  {/* External links use normal <a> for new tab */}
                  <a
                    href="https://dsvcorp.com.au/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 px-3 rounded-lg font-semibold text-sm text-gray-800 hover:bg-indigo-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </a>

                  <a
                    href="https://dsvcorp.com.au/contact/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 px-3 rounded-lg font-semibold text-sm text-gray-800 hover:bg-indigo-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            )}
          </div>

          {/* Desktop Links */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-auto">
            <Link
              href="/"
              className={`text-[16px] font-semibold ${
                pathname === "/"
                  ? "text-indigo-800"
                  : "text-gray-900 hover:text-indigo-800"
              }`}
            >
              Home
            </Link>

            <Link
              href="/marketplace"
              className={`text-[16px] font-semibold ${
                pathname === "/marketplace"
                  ? "text-indigo-800"
                  : "text-gray-900 hover:text-indigo-800"
              }`}
            >
              Marketplace
            </Link>

            {/* Open in new tab */}
            <a
              href="https://dsvcorp.com.au/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] font-semibold text-gray-900 hover:text-indigo-800"
            >
              About Us
            </a>

            <a
              href="https://dsvcorp.com.au/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] font-semibold text-gray-900 hover:text-indigo-800"
            >
              Contact Us
            </a>
          </PopoverGroup>
        </div>
      </nav>
    </header>
  );
}
