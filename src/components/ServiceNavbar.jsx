import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { SOCIAL_LINKS } from "../constants/businessInfo"; 

export default function ServiceNavbar() {
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target)) {
        setShowHomeDropdown(false);
      }
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
    { name: "Ceramic Coating", path: "/ceramic-coating" },
    { name: "Polishing", path: "/polishing" },
    { name: "Car Detailing", path: "/car-detailing" },
  ];

  const homeLinks = [
    { name: "About Us", path: "/#about" },
    { name: "Why Choose", path: "/#whychoose" },
  ];

  // Social Links Component mapping from your external businessInfo data
  const SocialLinks = ({ className }) => (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map((social, index) => {
        const Icon = social.icon;
        return (
          <a 
            key={index} 
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/90 dark:bg-[#0E0E0E]/90 backdrop-blur-md shadow-xl py-2 border-b border-gray-200 dark:border-white/10"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo-white.png"
              alt="Logo"
              className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 ${scrolled ? "dark:invert-0 invert" : "invert-0"
                }`}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className={`hidden xl:flex items-center gap-8 font-bold ${scrolled ? "text-gray-800 dark:text-white" : "text-white"}`}>
          <div className="relative" ref={homeDropdownRef}>
            <button onClick={() => setShowHomeDropdown(!showHomeDropdown)} className="flex items-center gap-1 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors focus:outline-none">
              Home <FiChevronDown className={`transition-transform ${showHomeDropdown ? "rotate-180" : ""}`} />
            </button>
            {showHomeDropdown && (
              <div className="absolute left-0 top-full mt-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl w-52 py-3 z-50 overflow-hidden">
                <HashLink to="/#" className="block px-6 py-3 text-sm font-semibold text-gray-700 dark:text-white hover:bg-[#F5A623]/10 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors" onClick={() => setShowHomeDropdown(false)}>Main Home</HashLink>
                {homeLinks.map((link, i) => (
                  <HashLink key={i} to={link.path} className="block px-6 py-3 text-sm font-semibold text-gray-700 dark:text-white hover:bg-[#F5A623]/10 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors" onClick={() => setShowHomeDropdown(false)}>{link.name}</HashLink>
                ))}
              </div>
            )}
          </div>

          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-1 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors focus:outline-none">
              Services <FiChevronDown className={`transition-transform ${showDropdown ? "rotate-180" : ""}`} />
            </button>
            {showDropdown && (
              <div className="absolute left-0 top-full mt-4 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl w-60 py-3 z-50 overflow-hidden">
                {services.map((item, index) => (
                  <Link key={index} to={item.path} className="block px-6 py-3 text-sm font-semibold text-gray-700 dark:text-white hover:bg-[#F5A623]/10 hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors" onClick={() => setShowDropdown(false)}>{item.name}</Link>
                ))}
              </div>
            )}
          </div>
          <HashLink to="/review" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors">Review</HashLink>
          <HashLink to="/#gallery" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors">Gallery</HashLink>
          <HashLink to="/#contact" className="hover:text-[#13AFFE] dark:hover:text-[#F5A623] transition-colors">Contact</HashLink>
        </nav>

        {/* Right Side Icons & CTA */}
        <div className="flex items-center gap-6">
          <SocialLinks className={`hidden xl:flex ${scrolled ? "text-gray-800 dark:text-white" : "text-white"}`} />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden xl:block">
              <HashLink to="/#contact">
                <button className="px-7 py-2.5 bg-[#F5A623] text-[#0E0E0E] font-bold rounded-full transition-all duration-300 hover:bg-[#13AFFE] hover:text-white shadow-lg">
                  Get In Touch
                </button>
              </HashLink>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className={`xl:hidden p-2 rounded-lg ${scrolled ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-white/5" : "text-gray-900 bg-gray-100"}`}>
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0E0E0E] px-6 py-10 space-y-8 shadow-2xl border-t border-gray-100 dark:border-white/5">
          <nav className="flex flex-col gap-6">
            <div className="space-y-4">
              <button onClick={() => setMobileHomeOpen(!mobileHomeOpen)} className="flex justify-between w-full items-center text-2xl font-bold text-gray-900 dark:text-white">
                Home <FiChevronDown className={`transition-transform ${mobileHomeOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileHomeOpen && (
                <div className="pl-5 space-y-5 border-l-2 border-[#F5A623]">
                  <HashLink to="/#" className="block text-gray-600 dark:text-gray-400 font-semibold text-xl" onClick={handleMobileMenuClick}>Main Home</HashLink>
                  {homeLinks.map((link, i) => (
                    <HashLink key={i} to={link.path} className="block text-gray-600 dark:text-gray-400 font-semibold text-xl" onClick={handleMobileMenuClick}>{link.name}</HashLink>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex justify-between w-full items-center text-2xl font-bold text-gray-900 dark:text-white">
                Services <FiChevronDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-5 space-y-5 border-l-2 border-[#F5A623]">
                  {services.map((item, index) => (
                    <Link key={index} to={item.path} className="block text-gray-600 dark:text-gray-400 font-semibold text-xl" onClick={handleMobileMenuClick}>{item.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <HashLink to="/review" className="text-2xl font-bold text-gray-900 dark:text-white" onClick={handleMobileMenuClick}>
              Review
            </HashLink>
            <HashLink to="/#gallery" className="text-2xl font-bold text-gray-900 dark:text-white" onClick={handleMobileMenuClick}>Gallery</HashLink>
            <HashLink to="/#contact" className="text-2xl font-bold text-gray-900 dark:text-white" onClick={handleMobileMenuClick}>Contact</HashLink>
          </nav>

          <div className="pt-6 border-t border-gray-100 dark:border-white/5">
            <SocialLinks className="justify-center mb-6 text-gray-900 dark:text-white" />
            <HashLink to="/#contact" onClick={handleMobileMenuClick}>
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