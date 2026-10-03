import { useRef, useContext, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const ProductCard = ({
  id,
  image = 'https://via.placeholder.com/400x500',
  title = 'Product Title',
  price = 0,
  oldPrice,
}) => {
  const cardRef = useRef(null)
  const buttonRef = useRef(null)
  const navigate = useNavigate()
  const { addToCart } = useContext(ShopContext)
  const [added, setAdded] = useState(false)

  const isTouchOrMobileRef = useRef(false)
  const isIntersectingRef = useRef(false)

  useEffect(() => {
    const checkIsTouchOrMobile = () => {
      if (typeof window === 'undefined') return false
      const isNarrow = window.innerWidth <= 1024
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches
      const hasNoHover = window.matchMedia('(hover: none)').matches
      const hasTouch = 'ontouchstart' in window || (navigator && navigator.maxTouchPoints > 0)
      return isNarrow || hasCoarsePointer || hasNoHover || hasTouch
    }

    let observer = null

    const initBehavior = () => {
      const isMobile = checkIsTouchOrMobile()
      isTouchOrMobileRef.current = isMobile

      if (observer) {
        observer.disconnect()
        observer = null
      }

      if (isMobile && cardRef.current && buttonRef.current) {
        // Mobile / Tablet: IntersectionObserver triggers Quick Add on scroll, soft scroll, and hold
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!buttonRef.current) return

              if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                isIntersectingRef.current = true
                gsap.to(buttonRef.current, {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.35,
                  ease: 'power2.out',
                  overwrite: 'auto',
                })
              } else if (!entry.isIntersecting || entry.intersectionRatio < 0.15) {
                isIntersectingRef.current = false
                gsap.to(buttonRef.current, {
                  y: 12,
                  autoAlpha: 0,
                  duration: 0.25,
                  ease: 'power2.in',
                  overwrite: 'auto',
                })
              }
            })
          },
          {
            threshold: [0, 0.2, 0.4],
            rootMargin: '0px 0px -4% 0px',
          }
        )

        observer.observe(cardRef.current)
      } else if (buttonRef.current) {
        // Desktop: Default to hidden so hover controls it
        isIntersectingRef.current = false
        gsap.set(buttonRef.current, {
          y: 15,
          autoAlpha: 0,
        })
      }
    }

    initBehavior()

    const handleResize = () => {
      initBehavior()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  // Mouse hover handlers for desktop
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }
  }

  const handleMouseLeave = () => {
    // If mobile/tablet where card is currently intersecting the viewport, do NOT hide on synthetic mouseLeave
    if (isTouchOrMobileRef.current && isIntersectingRef.current) {
      return
    }

    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 15,
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power2.in',
        overwrite: 'auto',
      })
    }
  }

  const handleTouchStart = () => {
    // Ensure button is immediately visible if user touches or taps on the card
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }
  }

  const displayPrice = typeof price === 'number' ? price : Number(price) || 0
  const displayOldPrice = oldPrice ? (typeof oldPrice === 'number' ? oldPrice : Number(oldPrice) || 0) : null

  return (
    <div
      ref={cardRef}
      onClick={() => id && navigate(`/product/${id}`)}
      onTouchStart={handleTouchStart}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col group cursor-pointer w-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f9f9] mb-3 flex items-center justify-center rounded-sm">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Quick Add Button (GSAP Animated: Desktop Hover + Mobile Scroll/Hold) */}
        <div
          ref={buttonRef}
          className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4 opacity-0 invisible translate-y-3 sm:translate-y-4 z-10"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              if (id) addToCart(id)
              setAdded(true)
              setTimeout(() => setAdded(false), 2000)
            }}
            className={`w-full py-2 sm:py-2.5 text-[11px] sm:text-[12px] md:text-[13px] font-semibold rounded cursor-pointer shadow-md sm:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95 ${
              added
                ? 'bg-[#501524] text-white'
                : 'bg-white text-gray-900 hover:bg-[#501524] hover:text-white'
            }`}
          >
            {added ? (
              <>
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>ADDED!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-gray-700 group-hover:text-inherit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                <span>QUICK ADD</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Details (Clean, Centered, Matching Site Font Hierarchy) */}
      <div className="text-center px-1">
        <h3 className="text-[12px] sm:text-[13px] text-gray-600 line-clamp-1 leading-snug font-medium">
          {title}
        </h3>

        <div className="mt-1 flex items-center justify-center gap-2">
          <p className="text-[13px] sm:text-[14px] font-bold text-gray-900">
            Rs.{displayPrice.toFixed(0)}
          </p>
          {displayOldPrice && displayOldPrice > displayPrice && (
            <p className="text-[11px] sm:text-[12px] text-gray-400 line-through">
              Rs.{displayOldPrice.toFixed(0)}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard