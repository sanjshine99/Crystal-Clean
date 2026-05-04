import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* Scroll Effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileMenuClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const services = [
    { name: "Paint Protection Film Installation", path: "/paint-protection-film-installation" },
    { name: "Ceramic Coating", path: "/ceramiccoating" },
    { name: "Polishing", path: "/polishing" },
    { name: "Deep Clean", path: "/deepclean" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white dark:bg-[#0E0E0E] shadow-xl py-2"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Uses 'invert' to turn white logo black when scrolled on light mode */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo-white.png"
              alt="Logo"
              className="h-12 md:h-18 w-auto object-contain transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden xl:flex items-center gap-8 font-bold transition-colors ${scrolled
            ? "text-[#0E0E0E] dark:text-white"
            : "text-white" // Always white over the video
            }`}
        >
          <HashLink to="/#" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition">
            Home
          </HashLink>

          <HashLink to="/#about" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition">
            About Us
          </HashLink>

          {/* Desktop Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center gap-1 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition focus:outline-none"
            >
              Services
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`}
              />
            </button>

            {showDropdown && (
              <div className="absolute left-0 top-full mt-4 bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-gray-800 rounded-lg shadow-2xl w-56 py-3 z-50">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-6 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-[#13AFFE] hover:text-white dark:hover:bg-[#F5A623] dark:hover:text-[#0E0E0E] transition"
                    onClick={() => setShowDropdown(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <HashLink to="/#whychoose" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition">
            Why Choose
          </HashLink>

          <HashLink to="/review" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition">
            Review
          </HashLink>

          <HashLink to="/#gallery" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition">
            Gallery
          </HashLink>

          <HashLink to="/#contact" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition">
            Contact
          </HashLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <HashLink to="/#contact">
              <button className="px-6 py-2.5 hover:bg-[#13AFFE] bg-[#F5A623] dark:text-[#0E0E0E] dark:hover:bg-[#e6c700] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
                Get In Touch
              </button>
            </HashLink>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden p-2 rounded-md transition-colors ${scrolled
              ? "text-[#0E0E0E] dark:text-white"
              : "text-white" // White over video
              }`}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0E0E0E] px-6 py-8 space-y-6 shadow-2xl border-t border-gray-100 dark:border-gray-800 animate-fade-in-down">
          <HashLink to="/#" className="block text-xl font-bold text-[#0E0E0E] dark:text-white" onClick={handleMobileMenuClick}>
            Home
          </HashLink>

          <HashLink to="/#about" className="block text-xl font-bold text-[#0E0E0E] dark:text-white" onClick={handleMobileMenuClick}>
            About Us
          </HashLink>

          {/* Mobile Services */}
          <div className="space-y-4">
            <button
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex justify-between w-full items-center text-xl font-bold text-[#0E0E0E] dark:text-white"
            >
              Services
              <FiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 space-y-4 border-l-4 border-[#13AFFE] dark:border-[#F5A623]">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-gray-600 dark:text-gray-400 font-medium text-lg"
                    onClick={handleMobileMenuClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <HashLink to="/review" className="block text-xl font-bold text-[#0E0E0E] dark:text-white" onClick={handleMobileMenuClick}>
            Review
          </HashLink>

          <HashLink to="/#gallery" className="block text-xl font-bold text-[#0E0E0E] dark:text-white" onClick={handleMobileMenuClick}>
            Gallery
          </HashLink>

          <HashLink to="/#contact" className="block text-xl font-bold text-[#0E0E0E] dark:text-white" onClick={handleMobileMenuClick}>
            Contact
          </HashLink>

          <HashLink to="/#contact" onClick={handleMobileMenuClick}>
            <button className="w-full py-4 bg-[#13AFFE] dark:bg-[#F5A623] text-white dark:text-[#0E0E0E] font-black rounded-xl text-lg uppercase tracking-widest transition-transform active:scale-95">
              Get a Quote
            </button>
          </HashLink>
        </div>
      )}
    </header>
  );
}