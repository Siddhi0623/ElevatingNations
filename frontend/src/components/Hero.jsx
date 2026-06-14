export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Full-width background image */}
      <div className="absolute inset-0 bg-[#E8DDD0]" />
      <img
        src="/images/hero-living-room.webp"
        alt="Warm, modern living room"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — opaque cream on the left, fades to transparent on the right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #F7F3EC 0%, #F7F3EC 42%, rgba(247,243,236,0.85) 58%, rgba(247,243,236,0) 75%)',
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
            <a href="#work-with-us" className="btn-gold">Work With Us</a>
            <a href="#contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </div>

    </section>
  )
}
