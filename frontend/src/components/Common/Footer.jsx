import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
import asset from '../../assets/asset';

const Footer = () => {
  return (
    <footer className="bg-[#501524] text-white pt-16 pb-8 border-t border-[#3a0f1a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col">
            <Link to="/" className="mb-6 inline-block bg-white p-2 rounded-xl w-fit">
              <img src={asset.logo} alt="Hotnighties Logo" className="w-24 sm:w-28" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Discover unparalleled comfort and seductive elegance with Hotnighties. We curate the finest intimate apparel to make you feel confident and beautiful every single day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#3a0f1a] flex items-center justify-center text-white hover:bg-white hover:text-[#501524] transition-colors duration-300">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#3a0f1a] flex items-center justify-center text-white hover:bg-white hover:text-[#501524] transition-colors duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#3a0f1a] flex items-center justify-center text-white hover:bg-white hover:text-[#501524] transition-colors duration-300">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide uppercase text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span> Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span> Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide uppercase text-white">Customer Care</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span> FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span> Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span> Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2"></span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide uppercase text-white">Stay in the Loop</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 mb-8">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-2.5 bg-[#3a0f1a] text-white border border-[#6b1d31] rounded-lg focus:outline-none focus:border-white transition-colors placeholder-gray-400 text-sm"
                required
              />
              <button 
                type="submit" 
                className="px-5 py-2.5 bg-white text-[#501524] font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail size={16} className="mr-3 text-white flex-shrink-0" />
                support@hotnighties.com
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone size={16} className="mr-3 text-white flex-shrink-0" />
                +1 (555) 123-4567
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#6b1d31] mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hotnighties. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {/* Payment Badges */}
            <div className="w-11 h-7 bg-white rounded flex items-center justify-center px-1 shadow-sm">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeiv-i1V9_U42xfhGc3-zGrCfUSkAzE1vMCqB0lQSjUDQLztRRuP40wtq&s=10" alt="Visa" className="w-full h-full object-contain" />
            </div>
            <div className="w-11 h-7 bg-white rounded flex items-center justify-center px-1 shadow-sm">
              <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="Mastercard" className="w-full h-full object-contain" />
            </div>
            <div className="w-11 h-7 bg-white rounded flex items-center justify-center px-1 shadow-sm">
              <img src="https://download.logo.wine/logo/PayPal/PayPal-Logo.wine.png" alt="Amex" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;