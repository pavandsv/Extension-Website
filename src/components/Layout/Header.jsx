"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // ✅ Redirect to /home when path is root
  useEffect(() => {
    if (pathname === "/") {
      router.replace("/home");
    }
  }, [pathname, router]);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="bg-white sticky top-0 z-50 shadow w-full">
      <nav
        aria-label="Global"
        className="w-full px-4 sm:px-6 lg:px-8"
      >
        {/* Center container for balanced layout */}
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/home" className="block h-10 w-auto overflow-hidden">
              <span className="sr-only">DSV Corp</span>
              <img
                src="/logo/DSV-Logo-blue.png"
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

            {/* Animated floating menu card */}
            {mobileMenuOpen && (
              <div className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 z-50 animate-slideDown">
                <nav className="flex flex-col p-4 space-y-2">
                  {[
                    { name: "Home", href: "/home" },
                    { name: "About Us", href: "/about-us" },
                    { name: "Marketplace", href: "/marketplace" },
                    { name: "Contact Us", href: "/contact-us" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 px-3 rounded-lg font-semibold text-sm transition ${
                        pathname === item.href
                          ? "text-indigo-800 bg-indigo-50"
                          : "text-gray-800 hover:bg-indigo-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Desktop Links */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-auto">
            <Link
              href="/home"
              className={`text-sm font-semibold ${
                pathname === "/home"
                  ? "text-indigo-800"
                  : "text-gray-900 hover:text-indigo-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-sm font-semibold ${
                pathname === "/about-us"
                  ? "text-indigo-800"
                  : "text-gray-900 hover:text-indigo-800"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/marketplace"
              className={`text-sm font-semibold ${
                pathname === "/marketplace"
                  ? "text-indigo-800"
                  : "text-gray-900 hover:text-indigo-800"
              }`}
            >
              Marketplace
            </Link>
            <Link
              href="/contact-us"
              className={`text-sm font-semibold ${
                pathname === "/contact-us"
                  ? "text-indigo-800"
                  : "text-gray-900 hover:text-indigo-800"
              }`}
            >
              Contact Us
            </Link>
          </PopoverGroup>
        </div>
      </nav>
    </header>
  );
}
