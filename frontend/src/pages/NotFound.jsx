import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Home, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const railRef = useRef(null);
  const worldRef = useRef(null);

  useEffect(() => {
    document.title = "404 - Page Not Found | Hotnighties";

    // GSAP Stagger Entrance for Text and Actions
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, []);

  // Subtle interactive 3D mouse parallax on desktop
  const handleMouseMove = (e) => {
    if (!containerRef.current || !railRef.current || !worldRef.current) return;
    if (window.innerWidth < 768) return; // skip on mobile for smoothness

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    const targetRotX = -30 - y * 14;
    const targetRotY = -30 + x * 14;

    gsap.to([railRef.current, worldRef.current], {
      rotateX: targetRotX,
      rotateY: targetRotY,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!railRef.current || !worldRef.current) return;
    gsap.to([railRef.current, worldRef.current], {
      rotateX: -30,
      rotateY: -30,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  // Generate 20 stamps: 10 '4's and 10 '0's with alternating indices
  const stamps = [];
  for (let i = 0; i < 10; i++) {
    stamps.push({ val: '4', type: 'four', index: i * 2 + 1 });
    stamps.push({ val: '0', type: 'zero', index: i * 2 + 2 });
  }

  return (
    <div className="w-full bg-white min-h-[calc(100vh-200px)] flex flex-col justify-center items-center px-4 py-8 sm:py-14">
      {/* ========================================================
          1. 3D Rolling Box & Rail Stage
         ======================================================== */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="notfound-3d-scene w-full max-w-2xl cursor-grab active:cursor-grabbing"
      >
        {/* Soft Ambient Depth Glow */}
        <div className="notfound-ambient-glow" />

        {/* The 20-Stamp Conveyor Floor Rail */}
        <div ref={railRef} className="notfound-rail">
          {stamps.map((stamp) => (
            <div
              key={stamp.index}
              className={`notfound-stamp stamp-${stamp.type}`}
              style={{
                animationDelay: `${stamp.index * -2000 - 300}ms`,
              }}
            >
              {stamp.val}
            </div>
          ))}
        </div>

        {/* The 3D World with Rolling Cube */}
        <div ref={worldRef} className="notfound-world">
          <div className="notfound-forward">
            <div className="notfound-box">
              <div className="notfound-wall" />
              <div className="notfound-wall" />
              <div className="notfound-wall" />
              <div className="notfound-wall" />
              <div className="notfound-wall" />
              <div className="notfound-wall" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. Content & Brand Navigation
         ======================================================== */}
      <div ref={textRef} className="max-w-xl mx-auto text-center mt-6 sm:mt-8 px-2">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#501524]/10 text-[#501524] text-xs font-bold tracking-widest uppercase mb-3">
          <span>Error 404</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#501524]" />
          <span>Page Not Found</span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
          Lost in the Silk & Lace?
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          The page or intimate apparel you are looking for might have slipped away, been renamed, or is temporarily out of stock.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 w-full max-w-md mx-auto">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#501524] hover:bg-[#3a0f1a] text-white px-6 py-3.5 rounded font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <Home size={16} />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#501524] text-gray-800 hover:text-[#501524] px-6 py-3.5 rounded font-semibold text-sm transition-all duration-300 active:scale-95"
          >
            <ShoppingBag size={16} />
            <span>Explore Shop</span>
          </Link>
        </div>

        {/* Quick Collections Shortcuts */}
        <div className="border-t border-gray-100 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Popular Collections
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/shop"
              className="text-xs font-medium text-gray-600 hover:text-[#501524] bg-gray-50 hover:bg-[#501524]/5 border border-gray-200 hover:border-[#501524]/30 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
            >
              <span>Nighties</span>
              <ArrowRight size={11} />
            </Link>
            <Link
              to="/shop"
              className="text-xs font-medium text-gray-600 hover:text-[#501524] bg-gray-50 hover:bg-[#501524]/5 border border-gray-200 hover:border-[#501524]/30 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
            >
              <span>Featured Bras</span>
              <ArrowRight size={11} />
            </Link>
            <Link
              to="/shop"
              className="text-xs font-medium text-gray-600 hover:text-[#501524] bg-gray-50 hover:bg-[#501524]/5 border border-gray-200 hover:border-[#501524]/30 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
            >
              <span>Comfort Panties</span>
              <ArrowRight size={11} />
            </Link>
            <a
              href="https://wa.me/923065363744?text=Hi%20Hotnighties!%20I%20need%20help%20finding%20a%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#25D366] hover:text-[#20ba59] bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
            >
              <MessageCircle size={12} />
              <span>WhatsApp Help</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
