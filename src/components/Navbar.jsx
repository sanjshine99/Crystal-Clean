import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
// Import the social links from your separate file
import { SOCIAL_LINKS } from "../constants/businessInfo"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);

  const dropdownRef = useRef(null);
  const homeDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setShowDropdown(false);
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target)) setShowHomeDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileMenuClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileHomeOpen(false);
  };

  const services = [
    { name: "Paint Protection Film Installation", path: "/paint-protection-film-installation" },
    { name: "Ceramic Coating", path: "/ceramiccoating" },
    { name: "Polishing", path: "/polishing" },
    { name: "Car Detailing", path: "/deepclean" },
  ];

  const homeLinks = [
    { name: "About Us", path: "/#about" },
    { name: "Why Choose", path: "/#whychoose" },
  ];

  // Reusable Social Icons Component mapping from your imported data
  const SocialIcons = ({ className }) => (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors"
          >
            <Icon size={social.name === "YouTube" ? 22 : 20} />
          </a>
        );
      })}
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-['Poppins'] ${
        scrolled
          ? "bg-white/90 dark:bg-[#0E0E0E]/90 backdrop-blur-md shadow-xl py-2 border-b border-gray-200 dark:border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo-white.png"
              alt="Logo"
              className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 ${
                scrolled ? "dark:invert-0 invert" : "invert-0"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden xl:flex items-center gap-8 font-bold transition-colors ${
            scrolled ? "text-gray-800 dark:text-white" : "text-white"
          }`}
        >
          {/* Home Dropdown */}
          <div className="relative" ref={homeDropdownRef}>
            <button
              onClick={() => setShowHomeDropdown((prev) => !prev)}
              className="flex items-center gap-1 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors focus:outline-none"
            >
              Home
              <FiChevronDown className={`transition-transform duration-300 ${showHomeDropdown ? "rotate-180" : ""}`} />
            </button>

            {showHomeDropdown && (
              <div className="absolute left-0 top-full mt-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl w-52 py-3 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                <HashLink
                  to="/#"
                  className="block px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-[#F5A623]/10 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors"
                  onClick={() => setShowHomeDropdown(false)}
                >
                  Home
                </HashLink>
                {homeLinks.map((item, index) => (
                  <HashLink
                    key={index}
                    to={item.path}
                    className="block px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-[#F5A623]/10 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors"
                    onClick={() => setShowHomeDropdown(false)}
                  >
                    {item.name}
                  </HashLink>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="flex items-center gap-1 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors focus:outline-none"
            >
              Services
              <FiChevronDown className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`} />
            </button>

            {showDropdown && (
              <div className="absolute left-0 top-full mt-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl w-60 py-3 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-[#F5A623]/10 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <HashLink to="/#gallery" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors">
            Gallery
          </HashLink>

          <HashLink to="/#contact" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors">
            Contact
          </HashLink>
        </nav>

        {/* Right Side Socials & CTA */}
        <div className="flex items-center gap-6">
          <SocialIcons className={`hidden xl:flex ${scrolled ? "text-gray-800 dark:text-white" : "text-white"}`} />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <div className="hidden xl:block">
              <HashLink to="/#contact">
                <button className="px-7 py-2.5 bg-[#F5A623] text-[#0E0E0E] font-bold rounded-full transition-all duration-300 hover:bg-[#13AFFE] hover:text-white shadow-lg transform hover:-translate-y-0.5">
                  Get In Touch
                </button>
              </HashLink>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-[#0E0E0E] dark:text-white bg-gray-100 dark:bg-white/5"
                  : "text-white bg-white/10 backdrop-blur-md"
              }`}
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0E0E0E] px-6 py-10 space-y-8 shadow-2xl border-t border-gray-100 dark:border-white/5 animate-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col gap-6">
            <div className="space-y-4">
              <button
                onClick={() => setMobileHomeOpen((prev) => !prev)}
                className="flex justify-between w-full items-center text-2xl font-bold text-gray-900 dark:text-white"
              >
                Home
                <FiChevronDown className={`transition-transform duration-300 ${mobileHomeOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileHomeOpen && (
                <div className="pl-5 space-y-5 border-l-2 border-[#F5A623]">
                  <HashLink to="/#" className="block text-gray-600 dark:text-gray-400 font-semibold text-xl" onClick={handleMobileMenuClick}>Home</HashLink>
                  {homeLinks.map((item, index) => (
                    <HashLink key={index} to={item.path} className="block text-gray-600 dark:text-gray-400 font-semibold text-xl" onClick={handleMobileMenuClick}>{item.name}</HashLink>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex justify-between w-full items-center text-2xl font-bold text-gray-900 dark:text-white"
              >
                Services
                <FiChevronDown className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-5 space-y-5 border-l-2 border-[#F5A623]">
                  {services.map((item, index) => (
                    <Link key={index} to={item.path} className="block text-gray-600 dark:text-gray-400 font-semibold text-xl" onClick={handleMobileMenuClick}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <HashLink to="/#gallery" className="text-2xl font-bold text-gray-900 dark:text-white" onClick={handleMobileMenuClick}>Gallery</HashLink>
            <HashLink to="/#contact" className="text-2xl font-bold text-gray-900 dark:text-white" onClick={handleMobileMenuClick}>Contact</HashLink>
          </nav>

          <div className="pt-6 border-t border-gray-100 dark:border-white/5">
            <SocialIcons className="justify-center mb-8 text-gray-900 dark:text-white" />
            <HashLink to="/#contact" onClick={handleMobileMenuClick} className="block">
              <button className="w-full py-4 bg-[#F5A623] text-[#0E0E0E] font-black rounded-2xl text-lg uppercase tracking-widest shadow-xl">
                Get a Quote
              </button>
            </HashLink>
          </div>
        </div>
      )}
    </header>
  );
}