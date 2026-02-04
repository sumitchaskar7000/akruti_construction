import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  showButtons?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "WE MAKE IT HAPPEN",
  subtitle =
  "One of the leading Developers renowned for its leadership and excellence in Real Estate Development.",
  backgroundImage = "/images/home_bg.jpg",
  showButtons = true,
}) => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      aria-label="Hero section showcasing brand vision"
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="text-center md:text-left text-white space-y-5 md:space-y-6 order-2 md:order-1">
          <img
            src="/images/logo/logo.png"
            alt="Akruti Construction Real Estate Logo"
            className="w-32 sm:w-40 md:w-52 mx-auto md:mx-0 drop-shadow-xl"
          />

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#D7B56D]">
            Building Trust, Delivering Excellence
          </h2>

          {showButtons && (
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
              <Link to="/about">
                <Button variant="primary" className="text-sm sm:text-base md:text-lg px-5 py-3">
                  View Our Profile
                </Button>
              </Link>

              <Link to="/projects">
                <Button variant="outline" className="text-sm sm:text-base md:text-lg px-5 py-3">
                  Explore Projects
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="text-white text-center md:text-right space-y-4 order-1 md:order-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#D7B56D]">
            {title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl mx-auto md:ml-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};