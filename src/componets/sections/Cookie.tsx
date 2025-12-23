"use client";
import React from "react";

interface CookieProps {
  visible: boolean;
  onClose: () => void;
}

const Cookie: React.FC<CookieProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    onClose();
  };

  const handleManage = () => {
    alert("Open cookie preferences settings...");
  };

  return (
    <div className="fixed bottom-4 right-4 max-w-md w-full bg-white shadow-lg rounded-xl p-4 border border-gray-200 z-50">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        Cookies Notice
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        We use cookies to improve and personalize your browsing experience. By
        continuing to browse this website, you allow the use of mandatory
        cookies. Cookies help us tailor ATPL Websites to your personal needs,
        improve user-friendliness, gain customer feedback, and communicate with
        you elsewhere on the internet.
      </p>
      <p className="text-xs text-gray-500 mb-4">
        You can decline cookies in your browser settings, but some features may
        not work properly if disabled.
      </p>
      <div className="flex justify-end gap-3">
        <button
          onClick={handleManage}
          className="px-4 py-2 text-sm rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100"
        >
          Manage
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 text-sm rounded-lg cursor-pointer bg-gradient-to-r duration-300 from-[#261b7d] to-[#7a0706] hover:from-[#7a0706] hover:to-[#261b7d]"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default Cookie;
