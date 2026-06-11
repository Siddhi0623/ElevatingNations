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

          {/* Gold divider */}
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
        <img
          src="/images/hero-living-room.jpg"
          alt="Warm, modern living room"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
        />
        {/* Placeholder shown if image is missing */}
        <div
          className="absolute inset-0 bg-[#E8DFD0] hidden items-center justify-center text-center p-8"
          style={{ display: 'none' }}
        >
          <p className="text-gray-500 text-sm">
            <span className="block text-2xl mb-2">🏠</span>
            Place your hero image here<br />
            <code className="text-xs mt-1 block text-gray-400">public/images/hero-living-room.jpg</code>
            <span className="text-xs block mt-1 text-gray-400">Recommended: bright, modern living room in warm neutral tones</span>
          </p>
        </div>
        {/* Fallback gradient background always visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFE8DA] via-[#E8DDD0] to-[#D4C9B8] flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-[#8B7355] text-sm font-medium mb-1">Hero Image Placeholder</p>
            <p className="text-[#8B7355] text-xs opacity-70">Replace with your image at:</p>
            <code className="text-[#8B7355] text-xs opacity-70">public/images/hero-living-room.jpg</code>
          </div>
        </div>
        {/* Actual image overlays the placeholder */}
        <img
          src="/images/hero-living-room.jpg"
          alt="Warm, modern living room"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
