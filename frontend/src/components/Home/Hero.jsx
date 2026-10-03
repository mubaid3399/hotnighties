import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import asset from '../../assets/asset'

const Hero = () => {
  const banners = [asset.banner1, asset.banner2, asset.banner3]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const trackRef = useRef(null)
  const dotsRef = useRef([])
  const startXRef = useRef(0)
  const dxRef = useRef(0)
  const draggingRef = useRef(false)

  // Auto-play (pauses on hover or while dragging)
  useEffect(() => {
    if (isHovered || isDragging) return
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearTimeout(timer)
  }, [currentIndex, isHovered, isDragging, banners.length])

  // Springy slide + dot animation
  useEffect(() => {
    gsap.to(trackRef.current, {
      xPercent: -100 * currentIndex,
      x: 0,
      duration: 1.4,
      ease: 'elastic.out(1, 0.8)',
    })

    dotsRef.current.forEach((dot, i) => {
      gsap.to(dot, {
        width: i === currentIndex ? 32 : 10,
        duration: 0.9,
        ease: 'elastic.out(1, 0.6)',
      })
    })
  }, [currentIndex])

  // ---- Drag / swipe handlers ----
  const handlePointerDown = (e) => {
    draggingRef.current = true
    setIsDragging(true)
    startXRef.current = e.clientX
    dxRef.current = 0
    gsap.killTweensOf(trackRef.current)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return
    const dx = e.clientX - startXRef.current
    dxRef.current = dx
    gsap.set(trackRef.current, { x: dx })
  }

  const handlePointerUp = (e) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    setIsDragging(false)

    const dx = dxRef.current
    const threshold = e.currentTarget.offsetWidth * 0.15 // 15% of the width

    if (dx < -threshold) {
      setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    } else if (dx > threshold) {
      setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
    } else {
      // Not dragged far enough: spring back to the current slide
      gsap.to(trackRef.current, {
        x: 0,
        xPercent: -100 * currentIndex,
        duration: 0.8,
        ease: 'elastic.out(1, 0.8)',
      })
    }
  }

  return (
    <section className="w-full px-2 sm:px-3 mt-3 mb-6">
      <div
        className="w-full overflow-hidden rounded-2xl sm:rounded-3xl select-none touch-pan-y cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Slides */}
        <div ref={trackRef} className="flex w-full will-change-transform">
          {banners.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Banner ${index + 1}`}
              draggable={false}
              className="min-w-full h-[180px] sm:h-[180px] md:h-[200px] lg:h-[250px] xl:h-[400px] object-cover object-center"
            />
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            ref={(el) => (dotsRef.current[index] = el)}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{ width: index === 0 ? 32 : 10 }}
            className={`h-2.5 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero