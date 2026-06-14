export default function Hero() {
  return (
    <section id="home" className="bg-cream min-h-[90vh] flex flex-col lg:flex-row">
      {/* Left – text */}
      <div className="flex-1 flex items-center px-8 sm:px-12 lg:px-20 py-20 lg:py-0 lg:max-w-[48%]">
        <div className="max-w-lg">
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

      {/* Right – image */}
      <div className="lg:flex-1 min-h-[50vh] lg:min-h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[#E8DDD0]" />
        <img
          src="/images/hero-living-room.webp"
          alt="Warm, modern living room"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
