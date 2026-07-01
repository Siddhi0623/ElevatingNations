import { Link } from 'react-router-dom'
import { scrollToSection } from '../utils/scroll'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden -mt-[88px] pt-[88px]">

      {/* Full-width background image */}
      <div className="absolute inset-0 bg-[#E8DDD0]" />
      <img
        src="/images/hero-living-room.webp"
        alt="Warm, modern living room"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'right 65%' }}
      />

      {/* Gradient overlay — solid cream on left where text is, sharp fade to clear on right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #F7F3EC 0%, #F7F3EC 36%, rgba(247,243,236,0.7) 46%, rgba(247,243,236,0.15) 56%, rgba(247,243,236,0) 64%)',
        }}
      />

      {/* Text content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-24 lg:py-0">
        <div className="max-w-xl">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.1] text-gray-900 mb-5">
            Safe homes.<br />
            Real support.<br />
            Fresh starts.
          </h1>

          <div className="w-10 h-0.5 bg-gold mb-7" />

          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
            Supporting women, families and young people through safe transitional accommodation and support pathways.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/work-with-us" className="btn-gold">Work With Us</Link>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
              className="btn-outline"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
