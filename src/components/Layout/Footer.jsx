import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full py-10">
      {/* Consistent container like Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">

          {/* Left: Company Logos */}
          <div className="flex flex-col items-center md:items-start space-y-5 w-full md:w-auto">
            <a
              href="https://company-two.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              style={{ marginLeft: "-5px" }}
            >
              <img
                src="/logo/FristineInfoLogo.png"
                alt="Fristine Infotech"
                className="h-10 object-contain hover:opacity-80 transition-opacity mx-auto md:mx-0"
              />
            </a>

            <a
              href="https://company-one.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/logo/DSV-Corp-Logo.png"
                alt="DSV Corp"
                className="h-10 object-contain hover:opacity-80 transition-opacity mx-auto md:mx-0"
              />
            </a>

            <a
              href="https://company-three.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/logo/FI-Digital-Logo.png"
                alt="FI Digital"
                className="h-10 object-contain hover:opacity-80 transition-opacity mx-auto md:mx-0"
              />
            </a>
          </div>

          {/* Middle: Quick Links & Follow Us */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-20 w-full md:w-auto text-center md:text-left">
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-5 justify-center md:justify-start text-gray-400">
                <a href="#" className="hover:text-white">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="hover:text-white">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-white">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-white">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Partner */}
          <div className="flex flex-col items-center md:items-end space-y-4 w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-3">Our Partner</h3>
            <a
              href="https://partner-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="/logo/zohopartner.jpg"
                alt="Zoho Partner"
                className="h-10 object-contain hover:opacity-80 transition-opacity mx-auto md:mx-0"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
