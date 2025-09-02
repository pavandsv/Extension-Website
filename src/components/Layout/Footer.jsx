// src/components/Footer.jsx
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
        
        {/* Company Logos */}
        <div className="flex flex-col items-center space-y-4 w-full">
          <a
            href="https://company-one.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo/DSV-Corp-Logo.png"
              alt="Company One"
              className="h-10 rounded-md hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://company-two.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo/FristineInfoLogo.png"
              alt="Company Two"
              className="h-10 rounded-md hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://company-three.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo/FI-Digital-Logo.png"
              alt="Company Three"
              className="h-10 rounded-md hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm text-center">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 justify-center">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Additional Logo Column */}
        <div className="flex flex-col items-center space-y-4 w-full">
          <h3 className="text-xl font-semibold mb-3">Our Partner</h3>
          <a
            href="https://partner-website.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo/zohopartner.jpg"
              alt="Partner Logo"
              className="h-10 rounded-md hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

      </div>

      {/* Bottom Text */}
      {/* <div className="mt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </div> */}
    </footer>
  );
}
