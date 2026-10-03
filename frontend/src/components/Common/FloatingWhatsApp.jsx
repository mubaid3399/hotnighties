import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { cartItems, isCartOpen } = useContext(ShopContext);
  const location = useLocation();

  const cartItemIds = Object.keys(cartItems || {});
  const hasCartItems = cartItemIds.length > 0;
  // Detect if CartReminder pill is currently visible at the bottom of the screen
  const isCartReminderVisible = hasCartItems && !isCartOpen && location.pathname !== '/checkout';

  const whatsappNumber = "923065363744";
  const defaultMessage = "Hi Hotnighties! I'd like to ask a question.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className={`fixed right-4 left-auto sm:left-6 sm:right-auto z-[50] flex items-center group transition-all duration-300 ease-out ${isCartReminderVisible ? 'bottom-[82px] sm:bottom-6' : 'bottom-5 sm:bottom-6'
        }`}
    >
      {/* Tooltip on desktop hover */}
      <div
        className={`hidden sm:flex items-center absolute left-16 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-gray-100 whitespace-nowrap transition-all duration-300 pointer-events-none ${showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
      >
        <span>Chat on WhatsApp</span>
        <span className="ml-1 text-[11px] text-emerald-600 font-bold">0306 5363744</span>
      </div>

      {/* Pulsing Ripple Background */}
      <span className="absolute inline-flex h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hotnighties on WhatsApp (0306 5363744)"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:bg-[#20ba59] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.61C9.37 7.61 9.12 7.67 8.91 7.9C8.7 8.13 8.1 8.69 8.1 9.83C8.1 10.97 8.93 12.07 9.04 12.23C9.16 12.38 10.68 14.73 13 15.73C13.56 15.97 14 16.12 14.34 16.23C14.9 16.41 15.41 16.38 15.81 16.32C16.26 16.25 17.19 15.75 17.38 15.22C17.57 14.69 17.57 14.23 17.51 14.14C17.45 14.04 17.3 13.98 17.07 13.87C16.85 13.76 15.75 13.22 15.54 13.14C15.34 13.06 15.19 13.02 15.04 13.25C14.89 13.48 14.46 14.04 14.33 14.19C14.2 14.34 14.07 14.36 13.85 14.25C13.62 14.14 12.89 13.9 12.02 13.12C11.34 12.51 10.88 11.76 10.75 11.53C10.62 11.3 10.74 11.18 10.85 11.07C10.95 10.97 11.08 10.8 11.2 10.66C11.31 10.53 11.35 10.43 11.43 10.28C11.5 10.12 11.47 9.99 11.41 9.88C11.35 9.76 10.89 8.63 10.7 8.18C10.51 7.72 10.33 7.79 10.18 7.78C10.05 7.78 9.89 7.61 9.53 7.61Z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
