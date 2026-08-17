import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiHeart, FiUsers, FiStar, FiCheck, FiPlus } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import Counter from '../components/Counter'
import HeroSlider from '../components/HeroSlider'
import TestimonialSlider from '../components/TestimonialSlider'
import Flourish from '../components/Flourish'
import { categories } from '../data/services'

const bg = (url) => ({
  backgroundImage: `linear-gradient(180deg, rgba(59,42,34,0.35), rgba(59,42,34,0.55)), url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const marqueeWords = [
  'Hair Services',
  'Grooming',
  'Glam-Up',
  'Relax & Rejuvenate',
  'Waxing',
  'Luxury Redefined',
]

const features = [
  {
    icon: FiAward,
    title: 'Certified Experts',
    text: 'Our stylists and therapists are internationally trained in the latest techniques.',
  },
  {
    icon: FiHeart,
    title: 'Premium Products',
    text: 'Only the finest, cruelty-free formulations touch your hair and skin.',
  },
  {
    icon: FiUsers,
    title: 'Tranquil Ambience',
    text: 'A private, softly-lit sanctuary designed for complete relaxation.',
  },
  {
    icon: FiStar,
    title: 'Personalised Care',
    text: 'Every ritual is tailored to you — never a one-size-fits-all experience.',
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
]

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <HeroSlider />

      {/* MARQUEE */}
      <div className="relative bg-brown overflow-hidden py-5 border-y border-gold/30">
        <div className="flex w-max animate-marquee">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              className="flex items-center font-script italic text-2xl md:text-3xl text-gold mx-8 whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* WELCOME / ABOUT PREVIEW */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="right" className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border border-gold hidden md:block" />
            <img
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80"
              alt="Stylist at work inside Eliseo Beauty Lounge"
              className="relative w-full h-[420px] md:h-[520px] object-cover bg-blush"
              loading="lazy"
            />
            <div className="hidden md:flex absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-brown text-cream-50 flex-col items-center justify-center text-center border border-gold/40 shadow-[0_20px_50px_rgba(59,42,34,0.35)]">
              <span className="font-serif text-3xl text-gold">8+</span>
              <span className="text-[10px] tracking-luxe uppercase mt-1 text-cream-50/70 leading-tight px-4">
                Years of Artistry
              </span>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              Where Beauty Meets <span className="italic text-mauve">Serenity</span>
            </h2>
            <p className="text-brown-soft font-light leading-relaxed mb-8 max-w-lg">
              Eliseo Beauty Lounge was founded on a simple belief — that true luxury lies
              in stillness, precision and care. Every treatment here is an unhurried
              ritual, performed by artists devoted to their craft, in a space designed to
              quiet the mind as much as it transforms the look.
            </p>
            <ul className="space-y-4 mb-10">
              {['Internationally certified specialists', 'Curated premium product houses', 'Private, softly-lit treatment suites'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-brown font-light">
                    <span className="w-6 h-6 rounded-full bg-brown text-gold flex items-center justify-center shrink-0">
                      <FiCheck size={13} />
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <Button to="/about" variant="outline">Discover Our Story</Button>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-blush-light">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow center>What We Offer</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Our Signature <span className="italic text-mauve">Services</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 0.08}>
                <Link
                  to={`/services#${cat.slug}`}
                  className="group relative block h-80 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${cat.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: '#907275',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/95 via-brown/40 to-brown/5" />
                  <div className="absolute inset-3 border border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none" />
                  <span className="absolute top-5 left-5 font-serif italic text-gold/90 text-sm tracking-wide">
                    0{i + 1}
                  </span>
                  <div className="relative h-full flex flex-col justify-end p-5">
                    <span className="h-px w-8 bg-gold mb-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <h3 className="font-serif text-xl text-cream-50 mb-1">{cat.name}</h3>
                    <p className="text-cream-50/70 text-xs font-light mb-3 leading-relaxed">
                      {cat.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold text-xs tracking-luxe uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View services <FiArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow center>Why Eliseo</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              The <span className="italic text-mauve">Difference</span> You Feel
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1} className="text-center px-2 group">
                <div className="relative w-16 h-16 mx-auto rounded-full bg-brown flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  <span className="absolute inset-0 rounded-full border border-gold/50 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500" />
                  <f.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl mb-3">{f.title}</h3>
                <p className="text-brown-soft font-light text-sm leading-relaxed">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20 md:py-28 px-6 md:px-10 bg-brown text-cream-50 overflow-hidden bg-grain">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 0%, rgba(176,141,87,0.18), transparent 60%)',
          }}
        />
        <Reveal className="relative flex justify-center mb-14">
          <Flourish light />
        </Reveal>
        <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { to: 8, suffix: '+', label: 'Years of Excellence' },
            { to: 1200, suffix: '+', label: 'Happy Clients' },
            { to: 15, suffix: '', label: 'Expert Artists' },
            { to: 30, suffix: '+', label: 'Signature Services' },
          ].map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className="relative px-2 md:border-l md:first:border-l-0 md:border-gold/20"
            >
              <p className="font-serif text-4xl md:text-6xl text-gold">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-xs md:text-sm tracking-luxe uppercase text-cream-50/70">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow center>The Gallery</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Moments of <span className="italic text-mauve">Elegance</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-40 gap-4">
            {gallery.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 0.06}
                className={
                  i === 0
                    ? 'md:col-span-2 md:row-span-2'
                    : i === 3
                    ? 'md:col-span-2'
                    : ''
                }
              >
                <div className="group relative overflow-hidden h-72 md:h-full">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: '#D5C6CB',
                    }}
                  />
                  <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/40 transition-colors duration-500" />
                  <div className="absolute inset-2.5 border border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none" />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-cream-50/70 text-cream-50 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <FiPlus size={16} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-blush-light">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow center>Client Love</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              Loved By Those <span className="italic text-mauve">We Pamper</span>
            </h2>
          </Reveal>
          <Reveal>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="relative py-28 md:py-36 px-6 text-center bg-brown"
        style={bg('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=80')}
      >
        <div className="absolute inset-4 md:inset-10 border border-gold/40 pointer-events-none" />
        <Reveal className="relative max-w-2xl mx-auto">
          <Eyebrow gold center>Reserve Your Ritual</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-cream-50 leading-tight mb-6">
            Your Moment of <span className="italic text-gold">Luxury</span> Awaits
          </h2>
          <p className="text-cream-50/75 font-light mb-10 max-w-lg mx-auto">
            Step into Eliseo Beauty Lounge and let our artists craft an experience made
            entirely for you.
          </p>
          <Button to="/contact" variant="light">Book Your Appointment</Button>
        </Reveal>
      </section>
    </div>
  )
}

export default Home
