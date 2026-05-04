import { Link } from "react-router-dom";
import { BUSINESS_DETAILS, SOCIAL_LINKS } from "../constants/businessInfo";

export default function FooterSection() {
  return (
    <footer className="bg-[#0B0B0B] text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8 mb-8">
          
          {/* Column 1: Branding & Socials */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              {BUSINESS_DETAILS.name}
            </h2>
            <div className="flex items-center gap-4 mt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5A623] hover:text-[#13AFFE] transition duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#" className="hover:text-[#13AFFE] transition">Home</a></li>
              <li><a href="/#about" className="hover:text-[#13AFFE] transition">About Us</a></li>
              <li><a href="/#whychoose" className="hover:text-[#13AFFE] transition">Why Choose</a></li>
              <li><Link to="/#gallery" className="hover:text-[#13AFFE] transition">Gallery</Link></li>
              <li><a href="/#contact" className="hover:text-[#13AFFE] transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Business Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Info</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-semibold mb-1">Opening Hours</p>
                <ul className="space-y-1">
                  {BUSINESS_DETAILS.openingHours.map((item) => (
                    <li key={item.day}>
                      <span className="text-white font-medium">{item.day}: </span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-1">
                <p>
                  <span className="text-white font-semibold">Phone:</span>{" "}
                  <a href={BUSINESS_DETAILS.phoneHref} className="hover:text-[#13AFFE] transition">
                    {BUSINESS_DETAILS.phone}
                  </a>
                </p>
                <p>
                  <span className="text-white font-semibold">Email:</span>{" "}
                  <a href={BUSINESS_DETAILS.emailHref} className="hover:text-[#13AFFE] transition break-all">
                    {BUSINESS_DETAILS.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-[#13AFFE] transition">Terms & Conditions</Link>
            <span className="text-gray-700">|</span>
            <Link to="/privacy" className="hover:text-[#13AFFE] transition">Privacy Policy</Link>
          </div>

          <p className="font-semibold">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#13AFFE] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}