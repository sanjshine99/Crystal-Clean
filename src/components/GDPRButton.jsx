import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GDPRConsent() {
  const [visible, setVisible] = useState(false); // Show consent banner
  const [accepted, setAccepted] = useState(null); // true/false/null
  const [showIcon, setShowIcon] = useState(false); // Show cookie icon

  // Brand color constant
  const brandBlue = '#13AFFE';

  useEffect(() => {
    const consent = localStorage.getItem("gdprConsent");
    if (consent === "true" || consent === "false") {
      setAccepted(consent === "true");
      setShowIcon(true); // show cookie icon if previously chosen
    } else {
      setVisible(true); // no previous choice
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdprConsent", "true");
    setAccepted(true);
    setVisible(false);
    setShowIcon(true);
  };

  const handleReject = () => {
    localStorage.setItem("gdprConsent", "false");
    setAccepted(false);
    setVisible(false);
    setShowIcon(true);
  };

  const handleIconClick = () => {
    // Reopen consent banner
    setVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      {visible && (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 text-center md:right-6 md:left-auto max-w-full md:max-w-xs p-4 rounded-lg 
                         shadow-lg z-50 transition-colors duration-500
                         bg-white dark:bg-gray-900 border border-black/5 dark:border-white/5">
          <p className="text-sm mb-2 text-center text-black dark:text-white">
            We use cookies to improve your experience.{" "}
          </p>
          <p className="mb-3">
            <Link
              to="/privacy"
              className="underline hover:opacity-80"
              style={{ color: brandBlue }}
            >
              See our Privacy Policy
            </Link>

          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleReject}
              className="text-white px-4 py-2 rounded text-sm hover:opacity-90 transition"
              style={{ backgroundColor: brandBlue }}
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="bg-[#F5A623] text-gray-900 px-4 py-2 rounded text-sm 
                         hover:bg-[#ecd74c] transition"
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Cookie Icon (smaller size) */}
      {showIcon && !visible && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <button
            onClick={handleIconClick}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg border border-white 
                       flex items-center justify-center hover:scale-105 transition cursor-pointer"
            style={{ backgroundColor: brandBlue }}
            title="Cookie Preferences"
          >
            <img
              src="/revisit.svg" // Use your cookie icon
              alt="Cookie Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
}