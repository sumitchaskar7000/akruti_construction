import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Projects",
      dropdown: [
        { path: "/projects/ongoing", label: "Ongoing Projects" },
        { path: "/projects/upcoming", label: "Upcoming Projects" },
        { path: "/projects/completed", label: "Completed Projects" },
      ],
    },
    {
      label: "Company",
      dropdown: [
        { path: "/about", label: "About Us" },
        { path: "/leadership", label: "Leadership" },
        { path: "/life", label: "Life @ Company" },
        { path: "/channel-partners", label: "Channel Partners" },
      ],
    },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10 ${isScrolled ? "bg-black/70 backdrop-blur-2xl shadow-lg" : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-14 md:h-16" : "h-20 md:h-24"
            }`}
        >
          {/* LEFT - Contact visible only on desktop */}
          <div className="hidden md:flex items-center space-x-4 text-white text-sm">
            <span className="opacity-80">📞 +91 7219347783</span>
            <Link
              to="/contact"
              className="px-3 py-1.5 border border-white/20 text-white rounded-md hover:bg-white/10 transition"
            >
              Contact
            </Link>
          </div>

          {/* CENTER LOGO ALWAYS VISIBLE */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/images/logo/logo.png"
              className={`mx-auto transition-all duration-500 ${isScrolled ? "h-10 md:h-12" : "h-14 md:h-16"
                }`}
              alt="Logo"
            />
          </Link>

          {/* RIGHT SIDE → About + Menu */}
          <div className="flex items-center space-x-4 text-white">
            <Link className="hidden md:block hover:text-gray-300" to="/about">
              About Us
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <div className="space-y-1">
                <span
                  className={`block w-5 h-0.5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all ${isMenuOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="absolute right-4 top-full w-64 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-4 mt-2 space-y-3">

            {/* Mobile contact placed inside menu */}
            <div className="md:hidden text-white text-sm space-y-2">
              <p>📞 +91 9175339136</p>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center px-3 py-2 border border-white/20 rounded-md bg-white/10"
              >
                Contact Now
              </Link>
            </div>

            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="mb-2">
                  <div className="flex justify-between items-center px-3 py-2 text-white">
                    <span>{item.label}</span>
                    <span className="text-xs opacity-80">▼</span>
                  </div>

                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-1.5 text-white/80 hover:bg-white/10 rounded-md"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-white/90 hover:bg-white/10 rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
