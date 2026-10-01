import { useEffect, useRef, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ShoppingBag } from "lucide-react";
import asset from "../../assets/asset";
import { ShopContext } from "../../context/ShopContext";

const announcements = [
  "Get 30% off on your first order!",
  "Discover our Summer Collection",
  "Free shipping on orders above $50",
  "Explore our latest arrivals.",
  "Limited-time offers. Shop today!",
];

const Navbar = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useContext(ShopContext);
  const cartCount = getCartCount();

  const messageRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);
  const floatingCartRef = useRef(null);
  const mobileHeaderRef = useRef(null);
  const lastScrollY = useRef(0);

  // ==========================================
  // Sticky Navbar & Floating Cart Animation
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Desktop Nav & Floating Cart
      if (currentScrollY > 100) {
        gsap.to(navRef.current, {
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(floatingCartRef.current, {
          scale: 1,
          autoAlpha: 1,
          duration: 0.4,
          ease: "back.out(1.5)"
        });
      } else {
        gsap.to(navRef.current, {
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(floatingCartRef.current, {
          scale: 0.5,
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }

      // Mobile Header Smart Sticky (Hide on scroll down, show on scroll up)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling Down -> Hide
          gsap.to(mobileHeaderRef.current, { yPercent: -100, duration: 0.3, ease: "power2.inOut" });
        } else {
          // Scrolling Up -> Show
          gsap.to(mobileHeaderRef.current, { yPercent: 0, duration: 0.3, ease: "power2.out", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" });
        }
      } else {
        // At Top
        gsap.to(mobileHeaderRef.current, { yPercent: 0, duration: 0.3, ease: "power2.out", boxShadow: "none" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // ==========================================
  // Announcement carousel
  // ==========================================
  useEffect(() => {
    const element = messageRef.current;

    if (!element) return;

    let timeout;

    const rotateMessage = () => {
      gsap.to(element, {
        x: 100,
        autoAlpha: 0,
        duration: 0.45,
        ease: "power2.in",
        onComplete: () => {
          setCurrentMessage((prev) => (prev + 1) % announcements.length);

          gsap.set(element, {
            x: -90,
            autoAlpha: 0,
          });

          gsap.to(element, {
            x: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "back.out(2.5)",
            onComplete: () => {
              timeout = setTimeout(rotateMessage, 2500);
            },
          });
        },
      });
    };

    // Initial entrance
    gsap.fromTo(
      element,
      {
        x: -90,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "back.out(2.5)",
        onComplete: () => {
          timeout = setTimeout(rotateMessage, 2500);
        },
      }
    );

    return () => {
      clearTimeout(timeout);
      gsap.killTweensOf(element);
    };
  }, []);

  // ==========================================
  // Mobile menu - close animation
  // ==========================================
  const closeMobileMenu = () => {
    // Hamburger → normal
    gsap.to(line1Ref.current, {
      rotate: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(line2Ref.current, {
      opacity: 1,
      duration: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(line3Ref.current, {
      rotate: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // Slide menu back to the left with spring effect
    gsap.to(mobileMenuRef.current, {
      x: "-100%",
      duration: 0.5,
      ease: "back.in(1.2)",
    });

    setMobileMenuOpen(false);
  };

  // ==========================================
  // Mobile menu toggle
  // ==========================================
  const handleMenuToggle = () => {
    const nextState = !mobileMenuOpen;

    setMobileMenuOpen(nextState);

    if (nextState) {
      // Normal hamburger → X
      gsap.to(line1Ref.current, {
        rotate: 45,
        y: 8,
        duration: 0.3,
        ease: "power2.inOut",
      });

      gsap.to(line2Ref.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.inOut",
      });

      gsap.to(line3Ref.current, {
        rotate: -45,
        y: -8,
        duration: 0.3,
        ease: "power2.inOut",
      });

      // Slide menu from left → right with spring effect
      gsap.to(mobileMenuRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "back.out(1.5)",
      });
    } else {
      closeMobileMenu();
    }
  };

  // ==========================================
  // Close menu when clicking a link
  // ==========================================
  const handleNavLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <>
      <header className="relative w-full bg-white">
      {/* ======================================
          Announcement Bar
      ======================================= */}
      <div className="flex h-8 w-full items-center justify-center overflow-hidden bg-black px-4 text-white">
        <p
          ref={messageRef}
          className="text-center !text-[0.65rem] font-medium tracking-wide sm:text-[0.8rem] md:text-sm"
        >
          {announcements[currentMessage]}
        </p>
      </div>

      {/* ======================================
          Desktop Header
      ======================================= */}
      <div className="hidden bg-white px-6 py-4 md:flex md:items-center md:justify-between md:px-12">
        {/* Desktop Logo */}
        <Link to="/" aria-label="Home">
          <img
            src={asset.logo}
            className="w-30"
            alt="Logo"
          />
        </Link>

        {/* Desktop Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping cart"
          className="relative text-[#501524] transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          <ShoppingBag
            size={25}
            strokeWidth={1.8}
          />
          {cartCount > 0 && (
            <span className="absolute -right-1.5 -bottom-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#501524] text-xs font-bold text-white">
              <p className="text-[0.6rem]">{cartCount}</p>
            </span>
          )}  
        </button>
      </div>

      </header>

      {/* ======================================
          Mobile Header (Smart Sticky)
      ======================================= */}
      <div ref={mobileHeaderRef} className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 py-4 md:hidden w-full">
        {/* Hamburger */}
        <button
          type="button"
          onClick={handleMenuToggle}
          aria-label={
            mobileMenuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={mobileMenuOpen}
          className="flex flex-col gap-1.5 focus:outline-none"
        >
          <span
            ref={line1Ref}
            className="block h-0.5 w-6 origin-center bg-[#501524]"
          />

          <span
            ref={line2Ref}
            className="block h-0.5 w-4 bg-[#501524]"
          />

          <span
            ref={line3Ref}
            className="block h-0.5 w-6 origin-center bg-[#501524]"
          />
        </button>

        {/* Mobile Logo */}
        <Link
          to="/"
          aria-label="Home"
          className="flex flex-1 justify-center"
        >
          <img
            src={asset.mobileLogo}
            className="w-12"
            alt="Mobile Logo"
          />
        </Link>

        {/* Mobile Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping cart"
          className="relative text-[#501524] transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          <ShoppingBag
            size={25}
            strokeWidth={1.8}
          />
          {cartCount > 0 && (
            <span className="absolute -right-1.5 -bottom-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#501524] text-xs font-bold text-white">
              <p className="text-[0.6rem]">{cartCount}</p>
            </span>
          )}
        </button>
      </div>

      {/* ======================================
          Mobile Side Drawer (Full Height)
      ======================================= */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 left-0 top-0 z-[60] w-[80%] -translate-x-full bg-[#501524] shadow-2xl md:hidden"
        style={{ height: "100vh" }}
      >
        {/* Close button at top */}
        <div className="flex items-center justify-between border-b border-[#3a0f1a] px-6 py-4">
          <h3 className="text-lg font-semibold text-white"></h3>
          <button
            onClick={closeMobileMenu}
            className="text-white hover:text-gray-200"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={handleNavLinkClick}
              className="border-b border-[#3a0f1a] px-6 py-4 font-medium text-white transition-colors hover:bg-[#3a0f1a] last:border-b-0"
            >
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "font-bold text-white text-lg"
                      : "text-white text-sm"
                  }
                >
                  {link.name}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* ======================================
          Desktop Navigation
      ======================================= */}
      <nav ref={navRef} className="sticky top-0 z-50 hidden w-full bg-[#501524] md:block">
        <div className="flex min-h-12 items-center justify-center px-4">
          <div className="flex items-center justify-center gap-5 sm:gap-8 md:gap-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className="group relative whitespace-nowrap py-4 text-sm font-medium text-white sm:text-base"
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-3 left-1/2 h-[1px] -translate-x-1/2 bg-white transition-all duration-300 ${
                        isActive
                          ? "w-[60%]"
                          : "w-0 group-hover:w-[60%]"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* ======================================
          Floating Cart (Appears on Scroll)
      ======================================= */}
      <div 
        ref={floatingCartRef}
        className="fixed bottom-6 right-6 z-[60] opacity-0 invisible"
        style={{ transform: "scale(0.5)" }}
      >
        <button
          onClick={() => setIsCartOpen(true)}
          aria-label="Floating shopping cart"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#501524] text-white shadow-2xl hover:bg-[#6b1d31] hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <ShoppingBag size={24} strokeWidth={2} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[0.65rem] font-bold text-white shadow-sm border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;