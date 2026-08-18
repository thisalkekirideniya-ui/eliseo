import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import Eyebrow from './Eyebrow'
import Button from './Button'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-forest bg-grain flex items-center justify-center text-center px-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(176,141,87,0.22), transparent 60%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Eyebrow light center>Welcome to</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif text-cream-50 text-5xl sm:text-6xl md:text-7xl leading-[1.05]"
        >
          Eliseo Beauty
          <br />
          <span className="italic text-gold">Lounge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-cream-50/80 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          An intimate sanctuary of hair artistry, grooming, glam and rejuvenation —
          crafted for those who consider beauty a ritual, not a routine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button to="/contact" variant="light">Book Appointment</Button>
          <Button to="/services" variant="ghost">Explore Services</Button>
        </motion.div>
      </div>

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

export default Hero
