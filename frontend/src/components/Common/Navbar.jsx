import { useEffect, useRef, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ShoppingBag, ChevronDown } from "lucide-react";
import asset from "../../assets/asset";
import { ShopContext } from "../../context/ShopContext";
import lingerieImg from "../../assets/catagoryies/Sexy-Lingerie-Online-Shopping-in-Pakistan-2_result_large.webp";
import nightwearImg from "../../assets/catagoryies/Ladies-Nightwear-Sleepwear-Nighty-Online-Shopping-in-Pakistan_result_large.webp";
import undergarmentsImg from "../../assets/catagoryies/Undergarments-NN-02_large.webp";

const announcements = [
  "Get 30% off on your first order!",
  "Discover our Summer Collection",
  "Free shipping on orders above $50",
  "Explore our latest arrivals.",
  "Limited-time offers. Shop today!",
];

const megaMenuData = {
  quickLinks: [
    { name: "ALL CATEGORIES", path: "/collections" },
    { name: "ALL PRODUCTS", path: "/shop" },
    { name: "ACCESSORIES", path: "/accessories" },
    { name: "PAKISTANI DRESSES", path: "/pakistani-dresses" },
  ],
  columns: [
    {
      title: "LINGERIE",
      path: "/collections/sexy-lingerie",
      image: lingerieImg,
      items: [
        { name: "Bathrobe", path: "/collections/ladies-bathrobe" },
        { name: "Bikini", path: "/collections/ladies-bikini" },
        { name: "Body Shaper", path: "/collections/body-shaper" },
        { name: "Body Stocking", path: "/collections/body-stocking" },
        { name: "Leg Stocking", path: "/collections/leg-stocking" },
        { name: "Stocking", path: "/collections/stocking" },
      ],
    },
    {
      title: "NIGHTWEAR",
      path: "/collections/ladies-nightwear",
      image: nightwearImg,
      items: [
        { name: "Gown", path: "/collections/ladies-gown" },
        { name: "Nightdress", path: "/collections/ladies-nightdress" },
        { name: "Nighty", path: "/collections/ladies-nighty" },
        { name: "Nighty Sets", path: "/collections/ladies-nighty-sets" },
      ],
    },
    {
      title: "UNDERGARMENTS",
      path: "/collections/ladies-undergarments",
      image: undergarmentsImg,
      items: [
        { name: "Bra", path: "/collections/classic-bra" },
        { name: "Bra Panty Sets", path: "/collections/bra-panty-sets" },
        { name: "Camisole", path: "/collections/camisole" },
        { name: "Panty", path: "/collections/ladies-panty" },
      ],
    },
  ],
};

const Navbar = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [womanDropdownOpen, setWomanDropdownOpen] = useState(false);
  const [mobileWomanOpen, setMobileWomanOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useContext(ShopContext);
  const cartCount = getCartCount();

  const messageRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);
  const megaMenuRef = useRef(null);
  const floatingCartRef = useRef(null);
  const mobileHeaderRef = useRef(null);
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef(null);

  // ==========================================
  // GSAP Driven Mega Menu Entrance/Exit
  // ==========================================
  useEffect(() => {
    const el = megaMenuRef.current;
    if (!el) return;

    if (womanDropdownOpen) {
      gsap.killTweensOf(el);
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: -10,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.32,
          ease: "power2.out",
          pointerEvents: "auto",
        }
      );

      const items = el.querySelectorAll(".mega-anim-item");
      if (items.length > 0) {
        gsap.killTweensOf(items);
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 8 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.25,
            stagger: 0.03,
            ease: "power2.out",
            delay: 0.04,
          }
        );
      }
    } else {
      gsap.killTweensOf(el);
      gsap.to(el, {
        autoAlpha: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [womanDropdownOpen]);

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
          ease: "power2.out",
        });
        gsap.to(floatingCartRef.current, {
          scale: 1,
          autoAlpha: 1,
          duration: 0.4,
          ease: "back.out(1.5)",
        });
      } else {
        gsap.to(navRef.current, {
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(floatingCartRef.current, {
          scale: 0.5,
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }

      // Mobile Header Smart Sticky (Hide on scroll down, show on scroll up)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          gsap.to(mobileHeaderRef.current, { yPercent: -100, duration: 0.3, ease: "power2.inOut" });
        } else {
          gsap.to(mobileHeaderRef.current, { yPercent: 0, duration: 0.3, ease: "power2.out", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" });
        }
      } else {
        gsap.to(mobileHeaderRef.current, { yPercent: 0, duration: 0.3, ease: "power2.out", boxShadow: "none" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "WOMAN", path: "/collections", hasMegaMenu: true },
    { name: "BRAS", path: "/collections/classic-bra" },
    { name: "NIGHTY", path: "/collections/ladies-nighty" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Hover handlers with debounce / buffer time
  const handleMouseEnterWoman = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setWomanDropdownOpen(true);
  };

  const handleMouseLeaveWoman = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setWomanDropdownOpen(false);
    }, 220);
  };

  const handleMouseEnterOtherLink = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setWomanDropdownOpen(false);
  };

  const handleMegaMenuLinkClick = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setWomanDropdownOpen(false);
  };

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

      gsap.to(mobileMenuRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "back.out(1.5)",
      });
    } else {
      closeMobileMenu();
    }
  };

  const handleNavLinkClick = () => {
    closeMobileMenu();
    handleMegaMenuLinkClick();
  };

  return (
    <>
      <header className="relative w-full bg-white">
        {/* Announcement Bar */}
        <div className="flex h-8 w-full items-center justify-center overflow-hidden bg-black px-4 text-white">
          <p
            ref={messageRef}
            className="text-center !text-[0.65rem] font-medium tracking-wide sm:text-[0.8rem] md:text-sm"
          >
            {announcements[currentMessage]}
          </p>
        </div>

        {/* Desktop Header */}
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

      {/* Mobile Header (Smart Sticky) */}
      <div ref={mobileHeaderRef} className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 py-4 md:hidden w-full">
        {/* Hamburger */}
        <button
          type="button"
          onClick={handleMenuToggle}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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

      {/* Mobile Side Drawer (Full Height) */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 left-0 top-0 z-[60] w-[80%] -translate-x-full bg-[#501524] shadow-2xl md:hidden flex flex-col"
        style={{ height: "100vh" }}
      >
        {/* Close button at top */}
        <div className="flex items-center justify-between border-b border-[#3a0f1a] px-6 py-4 flex-shrink-0">
          <span className="text-sm font-bold tracking-widest text-white uppercase">Menu</span>
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
        <nav className="flex flex-col overflow-y-auto flex-1 pb-10">
          {navLinks.map((link) => {
            if (link.hasMegaMenu) {
              return (
                <div key={link.name} className="border-b border-[#3a0f1a]">
                  <div className="flex items-center justify-between px-6 py-4">
                    <NavLink
                      to={link.path}
                      onClick={handleNavLinkClick}
                      className="font-medium text-white transition-colors flex-1"
                    >
                      {({ isActive }) => (
                        <span
                          className={
                            isActive
                              ? "font-bold text-white text-base tracking-wider"
                              : "text-white text-sm tracking-wider font-semibold"
                          }
                        >
                          {link.name}
                        </span>
                      )}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setMobileWomanOpen(!mobileWomanOpen)}
                      className="p-1 text-white hover:text-gray-300 cursor-pointer"
                      aria-label="Toggle woman categories"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${mobileWomanOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {/* Accordion Content for WOMAN */}
                  {mobileWomanOpen && (
                    <div className="bg-[#3a0f1a]/80 px-6 py-4 space-y-4 text-sm border-t border-[#3a0f1a]">
                      <div className="space-y-2 pb-3 border-b border-[#501524]">
                        {megaMenuData.quickLinks.map((ql) => (
                          <Link
                            key={ql.name}
                            to={ql.path}
                            onClick={handleNavLinkClick}
                            className="block font-bold text-xs tracking-wider text-pink-200 hover:text-white"
                          >
                            {ql.name}
                          </Link>
                        ))}
                      </div>

                      {megaMenuData.columns.map((col) => (
                        <div key={col.title} className="space-y-1.5 pt-2">
                          <Link
                            to={col.path}
                            onClick={handleNavLinkClick}
                            className="block font-bold text-xs tracking-wider text-white uppercase hover:text-pink-200"
                          >
                            {col.title}
                          </Link>
                          <div className="pl-3 space-y-1 border-l border-white/20">
                            {col.items.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={handleNavLinkClick}
                                className="block text-xs text-gray-300 hover:text-white py-0.5"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
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
                        ? "font-bold text-white text-base tracking-wider"
                        : "text-white text-sm tracking-wider font-semibold"
                    }
                  >
                    {link.name}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 hidden w-full bg-[#501524] md:block"
        onMouseLeave={handleMouseLeaveWoman}
      >
        <div className="flex min-h-12 items-center justify-center px-4">
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {navLinks.map((link) => {
              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.name}
                    className="relative flex items-center h-full"
                    onMouseEnter={handleMouseEnterWoman}
                    onMouseLeave={handleMouseLeaveWoman}
                  >
                    <NavLink
                      to={link.path}
                      onClick={handleMegaMenuLinkClick}
                      className="group relative flex items-center whitespace-nowrap py-4 text-sm font-semibold tracking-wider text-white sm:text-base cursor-pointer"
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>
                          <span
                            className={`absolute bottom-3 left-1/2 h-[2px] -translate-x-1/2 bg-white transition-all duration-300 ${isActive || womanDropdownOpen
                                ? "w-[60%]"
                                : "w-0 group-hover:w-[60%]"
                              }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onMouseEnter={handleMouseEnterOtherLink}
                  className="group relative whitespace-nowrap py-4 text-sm font-semibold tracking-wider text-white sm:text-base"
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute bottom-3 left-1/2 h-[2px] -translate-x-1/2 bg-white transition-all duration-300 ${isActive
                            ? "w-[60%]"
                            : "w-0 group-hover:w-[60%]"
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown with GSAP Animation */}
        <div
          ref={megaMenuRef}
          className="absolute left-0 top-full w-full bg-white shadow-2xl border-t border-gray-100 z-50 text-gray-900"
          onMouseEnter={handleMouseEnterWoman}
          onMouseLeave={handleMouseLeaveWoman}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Left Navigation Links */}
              <div className="col-span-3 flex flex-col space-y-4 pt-2 border-r border-gray-100 pr-6">
                {megaMenuData.quickLinks.map((ql) => (
                  <Link
                    key={ql.name}
                    to={ql.path}
                    onClick={handleMegaMenuLinkClick}
                    className="mega-anim-item text-xs font-black tracking-widest text-gray-900 hover:text-[#501524] transition-colors uppercase py-1"
                  >
                    {ql.name}
                  </Link>
                ))}
              </div>

              {/* 3 Categories with Banners */}
              <div className="col-span-9 grid grid-cols-3 gap-8">
                {megaMenuData.columns.map((col) => (
                  <div key={col.title} className="mega-anim-item flex flex-col">
                    {/* Banner Image */}
                    <Link
                      to={col.path}
                      onClick={handleMegaMenuLinkClick}
                      className="overflow-hidden rounded-md h-32 w-full mb-4 group block bg-gray-100 shadow-sm hover:opacity-95 transition-opacity"
                    >
                      <img
                        src={col.image}
                        alt={col.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {/* Title */}
                    <Link
                      to={col.path}
                      onClick={handleMegaMenuLinkClick}
                      className="text-xs font-black tracking-widest text-gray-900 hover:text-[#501524] mb-3 transition-colors uppercase"
                    >
                      {col.title}
                    </Link>

                    {/* Subcategory Links */}
                    <ul className="space-y-2">
                      {col.items.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            onClick={handleMegaMenuLinkClick}
                            className="text-sm font-semibold text-gray-800 hover:text-[#501524] transition-colors block py-0.5"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Cart (Appears on Scroll) */}
      <div
        ref={floatingCartRef}
        className="fixed bottom-6 right-6 z-[60] opacity-0 invisible hidden md:block"
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