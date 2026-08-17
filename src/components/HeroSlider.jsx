import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Eyebrow from './Eyebrow'
import Button from './Button'
import { heroBanners } from '../data/heroBanners'

const AUTOPLAY_MS = 6000

const variants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0.6 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0.6 }),
}

const HeroSlider = () => {
  const [[index, direction], setSlide] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const count = heroBanners.length
  const timerRef = useRef(null)

  const go = useCallback((dir) => {
    setSlide(([i]) => [(i + dir + count) % count, dir])
  }, [count])

  const goTo = (target) => {
    setSlide(([i]) => [target, target > i ? 1 : -1])
  }

  useEffect(() => {
    if (paused || count <= 1) return
    timerRef.current = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, go, count])

  const slide = heroBanners[index]

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-brown"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: 'tween', duration: 0.7, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.4 } }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) go(1)
            else if (info.offset.x > 80) go(-1)
          }}
          className="absolute inset-0 flex items-center justify-center text-center px-6 cursor-grab active:cursor-grabbing"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(59,42,34,0.4), rgba(59,42,34,0.58)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="max-w-4xl mx-auto pointer-events-none select-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Eyebrow light center>{slide.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-serif text-cream-50 text-5xl sm:text-6xl md:text-7xl leading-[1.05]"
            >
              {slide.titleItalic ? (
                <>
                  {slide.title.replace(slide.titleItalic, '').trim()}
                  <br />
                  <span className="italic text-gold">{slide.titleItalic}</span>
                </>
              ) : (
                slide.title
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-cream-50/80 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
            >
              {slide.ctaText && (
                <Button to={slide.ctaLink} variant="light">
                  {slide.ctaText}
                </Button>
              )}
              {slide.ctaText2 && (
                <Button to={slide.ctaLink2} variant="ghost">
                  {slide.ctaText2}
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            aria-label="Previous banner"
            onClick={() => go(-1)}
            className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-cream-50/40 items-center justify-center text-cream-50 hover:bg-gold hover:border-gold hover:text-brown transition-colors"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            aria-label="Next banner"
            onClick={() => go(1)}
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-cream-50/40 items-center justify-center text-cream-50 hover:bg-gold hover:border-gold hover:text-brown transition-colors"
          >
            <FiChevronRight size={18} />
          </button>

          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {heroBanners.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to banner ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold' : 'w-1.5 bg-cream-50/40'
                }`}
              />
            ))}
          </div>
        </>
      )}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-50/70 z-10"
      >
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  )
}

export default HeroSlider
