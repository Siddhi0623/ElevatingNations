function ImgPlaceholder({ label, filename }) {
  return (
    <div className="w-full h-full bg-[#5C5940] flex items-center justify-center text-center p-4 min-h-[200px]">
      <div>
        <p className="text-[#C4A96A] text-xs font-medium">{label}</p>
        <code className="text-[#C4A96A] text-[10px] opacity-70 block mt-1">{filename}</code>
      </div>
    </div>
  )
}

export default function OurApproach() {
  return (
    <section id="work-with-us" className="bg-olive flex flex-col lg:flex-row min-h-[520px]">
      {/* Left – text */}
      <div className="lg:w-[50%] flex items-center px-8 sm:px-14 lg:px-20 py-16 lg:py-24">
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
            className="inline-block border border-gold text-gold uppercase tracking-widest text-xs px-7 py-3.5 hover:bg-gold hover:text-white transition-colors duration-200"
          >
            Our Approach
          </a>
        </div>
      </div>

      {/* Right – two images */}
      <div className="lg:w-[50%] grid grid-cols-2 min-h-[380px] lg:min-h-full">
        {/* Image 1 */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImgPlaceholder
              label="Approach Image 1"
              filename="public/images/approach-1.jpg"
            />
          </div>
          <img
            src="/images/approach-1.jpg"
            alt="Bright doorway interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Image 2 */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImgPlaceholder
              label="Approach Image 2"
              filename="public/images/approach-2.jpg"
            />
          </div>
          <img
            src="/images/approach-2.jpg"
            alt="Calm interior space"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
