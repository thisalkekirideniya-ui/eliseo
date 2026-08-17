import { FiInstagram, FiFacebook, FiFeather, FiHeart, FiShield } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import Flourish from '../components/Flourish'
import { team } from '../data/team'

const initials = (name) => {
  const parts = name.split(' ')
  return parts[0][0] + parts[parts.length - 1][0]
}

const bg = (url) => ({
  backgroundImage: `linear-gradient(180deg, rgba(59,42,34,0.45), rgba(59,42,34,0.65)), url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const values = [
  {
    icon: FiFeather,
    title: 'Artistry',
    text: 'Every service is treated as a craft — precise, intentional, and personal to you.',
  },
  {
    icon: FiHeart,
    title: 'Care',
    text: 'We listen first. Your comfort and confidence guide every ritual we perform.',
  },
  {
    icon: FiShield,
    title: 'Integrity',
    text: 'Honest advice, premium products, and hygiene standards you can always trust.',
  },
]

const AboutUs = () => {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 px-6 md:px-10 bg-brown"
        style={bg('https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=1800&q=80')}
      >
        <div className="max-w-7xl mx-auto w-full">
          <Reveal>
            <Eyebrow light>About Us</Eyebrow>
            <h1 className="font-serif text-4xl md:text-6xl text-cream-50">
              The Story Behind <span className="italic text-rose">Eliseo</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="right" className="relative order-2 md:order-1">
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-rose-dark hidden md:block" />
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80"
              alt="Interior of Eliseo Beauty Lounge"
              className="relative w-full h-[420px] md:h-[520px] object-cover bg-blush"
              loading="lazy"
            />
          </Reveal>

          <Reveal direction="left" delay={0.1} className="order-1 md:order-2">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              Born From a Love of <span className="italic text-mauve">Quiet Luxury</span>
            </h2>
            <p className="text-brown-soft font-light leading-relaxed mb-5 max-w-lg">
              Eliseo Beauty Lounge began with a simple frustration — that true, unhurried
              luxury was becoming hard to find. Our founder envisioned a lounge where
              every client is treated as the only client; where hair, skin and self-care
              rituals are performed with the patience of an artisan, not the pace of an
              assembly line.
            </p>
            <p className="text-brown-soft font-light leading-relaxed max-w-lg">
              Today, that vision lives on across every treatment room — from our
              signature hair studio to our private waxing suites — each designed to let
              you exhale the moment you walk in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-blush-light">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow center>Our Values</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              What Guides <span className="italic text-mauve">Every Ritual</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="bg-cream-50 p-10 h-full border border-blush hover:border-rose-dark transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-blush flex items-center justify-center mb-6">
                    <v.icon size={20} className="text-mauve" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
                  <p className="text-brown-soft font-light leading-relaxed text-sm">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT BANNER */}
      <section className="py-20 px-6 md:px-10 bg-forest">
        <Reveal className="max-w-4xl mx-auto text-center">
          <p className="font-script italic text-2xl md:text-4xl text-cream-50 leading-relaxed">
            &ldquo;Our mission is to give every guest an unhurried hour of beauty, calm
            and confidence — in a space as considered as the care we give.&rdquo;
          </p>
          <p className="mt-6 text-rose text-xs tracking-luxe uppercase">
            Eliseo De Silva — Founder
          </p>
        </Reveal>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow center>Meet The Artists</Eyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              The Hands Behind Your <span className="italic text-mauve">Transformation</span>
            </h2>
            <Flourish />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="group relative h-full bg-brown text-cream-50 px-7 py-10 flex flex-col items-center text-center border border-brown hover:border-gold/70 transition-colors duration-500">
                  <span className="absolute top-5 right-5 font-serif italic text-gold/40 text-xs">
                    {String(member.years).padStart(2, '0')} yrs
                  </span>

                  <div className="relative w-24 h-24 rounded-full border border-gold/50 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105">
                    <span className="absolute inset-1.5 rounded-full border border-gold/20" />
                    <span className="font-serif text-3xl text-gold">{initials(member.name)}</span>
                  </div>

                  <h3 className="font-serif text-xl text-cream-50">{member.name}</h3>
                  <p className="text-rose text-xs tracking-luxe uppercase mt-2">{member.role}</p>

                  <span className="h-px w-8 bg-gold/60 my-5" />

                  <p className="text-cream-50/60 text-xs font-light leading-relaxed">
                    {member.specialty}
                  </p>

                  <div className="flex gap-2 mt-6 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <span className="w-8 h-8 rounded-full border border-cream-50/20 flex items-center justify-center text-cream-50/80 hover:text-gold hover:border-gold/60 transition-colors">
                      <FiInstagram size={13} />
                    </span>
                    <span className="w-8 h-8 rounded-full border border-cream-50/20 flex items-center justify-center text-cream-50/80 hover:text-gold hover:border-gold/60 transition-colors">
                      <FiFacebook size={13} />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32 px-6 md:px-10">
        <Reveal className="max-w-5xl mx-auto bg-blush rounded-none px-8 py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Ready to Experience <span className="italic text-mauve">Eliseo</span>?
          </h2>
          <p className="text-brown-soft font-light mb-8 max-w-md mx-auto">
            Come meet our artists and discover a ritual made entirely for you.
          </p>
          <Button to="/contact" variant="primary">Book an Appointment</Button>
        </Reveal>
      </section>
    </div>
  )
}

export default AboutUs
