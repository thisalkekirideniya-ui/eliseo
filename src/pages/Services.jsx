import { useEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { categories } from '../data/services'

const bg = (url) => ({
  backgroundImage: `linear-gradient(180deg, rgba(59,42,34,0.45), rgba(59,42,34,0.65)), url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const Services = () => {
  const [active, setActive] = useState(categories[0].slug)
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-[55vh] flex items-end pb-16 px-6 md:px-10 bg-brown"
        style={bg('https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1800&q=80')}
      >
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <Eyebrow light>Our Services</Eyebrow>
            <h1 className="font-serif text-4xl md:text-6xl text-cream-50">
              A Ritual For <span className="italic text-rose">Every Need</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STICKY CATEGORY NAV */}
      <div className="sticky top-[72px] md:top-[84px] z-30 bg-cream-50/95 backdrop-blur-md border-b border-blush">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar py-4">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className={`whitespace-nowrap text-xs md:text-sm tracking-luxe uppercase pb-1 border-b transition-colors ${
                  active === cat.slug
                    ? 'text-mauve border-mauve'
                    : 'text-brown-faint border-transparent hover:text-brown'
                }`}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORY SECTIONS */}
      {categories.map((cat, index) => (
        <section
          key={cat.slug}
          id={cat.slug}
          ref={(el) => (sectionRefs.current[cat.slug] = el)}
          className={`py-20 md:py-28 px-6 md:px-10 scroll-mt-40 ${
            index % 2 === 1 ? 'bg-blush-light' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <Reveal
              direction={index % 2 === 1 ? 'left' : 'right'}
              className="lg:col-span-2 lg:sticky lg:top-52"
            >
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-full h-full border border-rose-dark hidden lg:block" />
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="relative w-full h-64 md:h-80 object-cover bg-blush"
                  loading="lazy"
                />
              </div>
              <Eyebrow>{`0${index + 1}`}</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl mb-3">{cat.name}</h2>
              <p className="text-brown-soft font-light leading-relaxed">{cat.tagline}</p>
            </Reveal>

            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {cat.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 0.05}>
                  <div className="flex items-center justify-between gap-4 py-4 border-b border-brown/10">
                    <h4 className="font-serif text-lg">{item.name}</h4>
                    <span className="font-serif text-mauve text-lg whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section
        className="relative py-28 md:py-32 px-6 text-center bg-brown"
        style={bg('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1800&q=80')}
      >
        <Reveal className="max-w-2xl mx-auto">
          <Eyebrow light center>Not Sure Where to Start?</Eyebrow>
          <h2 className="font-serif text-3xl md:text-5xl text-cream-50 leading-tight mb-6">
            Let Our Artists <span className="italic text-rose">Guide You</span>
          </h2>
          <p className="text-cream-50/75 font-light mb-10 max-w-lg mx-auto">
            Book a complimentary consultation and we&apos;ll design the perfect ritual
            for your needs.
          </p>
          <Button to="/contact" variant="light">Book a Consultation</Button>
        </Reveal>
      </section>
    </div>
  )
}

export default Services
