import { scrollToSection } from '../utils/scroll'

export default function OurApproach() {
  return (
    <section id="work-with-us" className="relative min-h-[520px] flex items-center overflow-hidden">

      {/* Full-width background image */}
      <div className="absolute inset-0 bg-[#5C5940]" />
      <img
        src="/images/door.webp"
        alt="Bright doorway interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — solid olive on left where text is, fading to clear image on right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #49483A 0%, #49483A 32%, rgba(73,72,58,0.88) 42%, rgba(73,72,58,0.45) 54%, rgba(73,72,58,0) 66%)',
        }}
      />

      {/* Text content */}
      <div className="relative z-10 w-full px-8 sm:px-14 lg:px-20 py-16 lg:py-24">
        <div className="max-w-md">
          <p className="text-gold uppercase tracking-widest2 text-xs font-medium mb-5">Our Approach</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] leading-snug text-white mb-6">
            Stability begins with a safe foundation.
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-10">
            We believe stable housing is the foundation for rebuilding lives. We work collaboratively with councils, charities, landlords, and community organisations to restore dignity, independence, and long-term stability.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            className="inline-block btn-gold"
          >
            Get In Touch
          </a>
        </div>
      </div>

    </section>
  )
}
