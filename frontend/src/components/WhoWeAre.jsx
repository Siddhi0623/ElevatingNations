function ImagePlaceholder({ label, filename, hint }) {
  return (
    <div className="w-full h-full bg-[#E8DFD0] flex items-center justify-center text-center p-8 min-h-[320px]">
      <div>
        <p className="text-[#8B7355] text-sm font-medium mb-1">{label}</p>
        <code className="text-[#8B7355] text-xs opacity-70 block">{filename}</code>
        {hint && <p className="text-[#8B7355] text-xs opacity-60 mt-1">{hint}</p>}
      </div>
    </div>
  )
}

export default function WhoWeAre() {
  return (
    <section id="about-us" className="bg-cream flex flex-col lg:flex-row min-h-[420px]">
      {/* Left – image */}
      <div className="lg:w-[45%] relative overflow-hidden min-h-[320px] lg:min-h-full">
        <div className="absolute inset-0">
          <ImagePlaceholder
            label="Who We Are Image Placeholder"
            filename="public/images/who-we-are.jpg"
            hint="Mother and child looking out window, warm tones"
          />
        </div>
        <img
          src="/images/who-we-are.jpg"
          alt="Mother and child"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right – text */}
      <div className="lg:w-[55%] flex items-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14">
        <div className="max-w-lg">
          <p className="label-gold mb-3">Who We Are</p>
          <h2 className="font-serif text-xl sm:text-2xl lg:text-[1.6rem] leading-snug text-gray-900 mb-4">
            Elevating Nations CIC is a UK-based organisation focused on providing safe transitional accommodation and support pathways for women, families, and young people transitioning from unsafe or unstable environments.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-7">
            Our aim is to create safe, stable, and dignified housing solutions that help individuals and families rebuild with confidence, independence, and long-term stability.
          </p>
          <a href="#what-we-do" className="btn-gold inline-block">Learn More</a>
        </div>
      </div>
    </section>
  )
}
