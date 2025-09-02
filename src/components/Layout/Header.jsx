"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1 items-center">
          <a href="#" className="block h-10 w-auto overflow-hidden">
            <span className="sr-only">Your Company</span>
            <img
              src="/logo/DSV-Logo-blue.png"
              alt="DSV Corp"
              className="h-full object-contain"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop links */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/home"
            className={`text-sm/6 font-semibold ${pathname === "/home" ? "text-indigo-800" : "text-gray-900 hover:text-indigo-800"}`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`text-sm/6 font-semibold ${pathname === "/about-us" ? "text-indigo-800" : "text-gray-900 hover:text-indigo-800"}`}
          >
            About Us
          </Link>
          <Link
            href="/marketplace"
            className={`text-sm/6 font-semibold ${pathname === "/marketplace" ? "text-indigo-800" : "text-gray-900 hover:text-indigo-800"}`}
          >
            Marketplace
          </Link>
          <Link
            href="/contact-us"
            className={`text-sm/6 font-semibold ${pathname === "/contact-us" ? "text-indigo-800" : "text-gray-900 hover:text-indigo-800"}`}
          >
            Contact us
          </Link>
        </PopoverGroup>

        {/* Login */}
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-gray-900 hover:text-indigo-800">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-white shadow-md p-4 lg:hidden">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 text-gray-700"
            >
              <span className="sr-only">Close main menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="mt-4 space-y-2">
            <Link
              href="/home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-900 hover:text-indigo-800"
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-900 hover:text-indigo-800"
            >
              Marketplace
            </Link>
            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-900 hover:text-indigo-800"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 font-semibold text-gray-900 hover:text-indigo-800"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
