import { FiInstagram, FiFacebook, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { categories } from '../data/services'
import Reveal from './Reveal'

const Footer = () => {
  return (
    <footer className="bg-forest text-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,#E7E5E7_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-20 pb-10">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-14 border-b border-cream-50/15">
            <div>
              <h3 className="font-serif text-3xl">Eliseo</h3>
              <p className="font-sans text-xs tracking-luxe uppercase text-rose mt-1 mb-5">
                Beauty Lounge
              </p>
              <p className="text-cream-50/70 text-sm leading-relaxed font-light max-w-xs">
                A sanctuary of refined beauty rituals — where timeless elegance meets
                modern artistry.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-50/30 flex items-center justify-center hover:bg-cream-50 hover:text-forest transition-colors"
                  aria-label="Instagram"
                >
                  <FiInstagram size={16} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-50/30 flex items-center justify-center hover:bg-cream-50 hover:text-forest transition-colors"
                  aria-label="Facebook"
                >
                  <FiFacebook size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-5 text-rose">Explore</h4>
              <ul className="space-y-3 text-sm font-light text-cream-50/75">
                <li><Link to="/" className="hover:text-cream-50 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-cream-50 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-cream-50 transition-colors">Services</Link></li>
                <li><Link to="/offers" className="hover:text-cream-50 transition-colors">Offers</Link></li>
                <li><Link to="/contact" className="hover:text-cream-50 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-5 text-rose">Services</h4>
              <ul className="space-y-3 text-sm font-light text-cream-50/75">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/services#${c.slug}`} className="hover:text-cream-50 transition-colors">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-5 text-rose">Visit Us</h4>
              <ul className="space-y-4 text-sm font-light text-cream-50/75">
                <li className="flex gap-3">
                  <FiMapPin className="mt-0.5 shrink-0" size={15} />
                  <span>24 Rosewood Avenue, Colombo 07, Sri Lanka</span>
                </li>
                <li className="flex gap-3">
                  <FiPhone className="mt-0.5 shrink-0" size={15} />
                  <span>+94 77 123 4567</span>
                </li>
                <li className="flex gap-3">
                  <FiMail className="mt-0.5 shrink-0" size={15} />
                  <span>hello@eliseobeautylounge.com</span>
                </li>
                <li className="flex gap-3">
                  <FiClock className="mt-0.5 shrink-0" size={15} />
                  <span>Tue – Sun, 9:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-cream-50/50 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Eliseo Beauty Lounge. All rights reserved.</p>
          <p>Crafted with care, for those who value beauty.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
