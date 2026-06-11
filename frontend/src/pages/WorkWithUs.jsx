import Contact from '../components/Contact'

/* ─── Hero banner ─────────────────────────────────────────────────── */
function WWUHero() {
  return (
    <section className="bg-cream min-h-screen flex flex-col lg:flex-row">
      {/* Left – text */}
      <div className="flex-1 flex items-center px-8 sm:px-16 lg:px-24 py-24 lg:py-0 lg:max-w-[55%]">
        <div className="max-w-xl">
          <p className="text-gold uppercase tracking-widest2 text-xs font-medium mb-5">Work With Us</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4rem] leading-[1.1] text-gray-900 mb-5">
            Partner with us<br />to make a<br />difference.
          </h1>
          <div className="w-10 h-0.5 bg-gold mb-7" />
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            We collaborate with councils, charities, landlords, and community organisations to provide safe homes and real support for those who need it most.
          </p>
        </div>
      </div>

      {/* Right – image panel */}
      <div className="lg:flex-1 min-h-[50vh] lg:min-h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFE8DA] via-[#E8DDD0] to-[#D4C9B8] flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-[#8B7355] text-sm font-medium mb-1">Work With Us — Hero Image</p>
            <code className="text-[#8B7355] text-xs opacity-70">public/images/work-with-us-hero.jpg</code>
          </div>
        </div>
        <img
          src="/images/work-with-us-hero.jpg"
          alt="Work with us"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

/* ─── Who We Work With ────────────────────────────────────────────── */
const partners = [
  { title: 'Local Councils & Authorities', img: '/images/partner-councils.jpg',    placeholder: 'bg-[#C8BFB0]' },
  { title: 'Charities & Nonprofits',       img: '/images/partner-charities.jpg',   placeholder: 'bg-[#B8C0B0]' },
  { title: 'Landlords & Property Owners',  img: '/images/partner-landlords.jpg',   placeholder: 'bg-[#C0B8A8]' },
  { title: 'Referral Organisations',       img: '/images/partner-referrals.jpg',   placeholder: 'bg-[#B0BAC0]' },
  { title: 'Sponsors & Funders',           img: '/images/partner-sponsors.jpg',    placeholder: 'bg-[#C4B8A8]' },
  { title: 'Community Organisations',      img: '/images/partner-community.jpg',   placeholder: 'bg-[#B8C4B8]' },
]

function WhoWeWorkWith() {
  return (
    <section className="bg-cream py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold uppercase tracking-[0.2em] text-xs font-medium text-center mb-3">Who We Work With</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 text-center mb-12 leading-snug">
          Building partnerships that matter.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map(({ title, img, placeholder }) => (
            <div
              key={title}
              className="group relative overflow-hidden aspect-[4/3] cursor-default"
            >
              {/* Placeholder gradient shown when image is missing */}
              <div className={`absolute inset-0 ${placeholder}`} />

              {/* Actual image */}
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark gradient overlay — always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-white text-lg leading-snug">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ────────────────────────────────────────────────── */
const steps = [
  { number: '01', title: 'Get in Touch', description: 'Fill in our enquiry form or email us directly. Tell us who you are and how you would like to work together.' },
  { number: '02', title: 'Initial Conversation', description: 'We will arrange a call or meeting to understand your needs and explore how we can best support each other.' },
  { number: '03', title: 'Agreement & Onboarding', description: 'We formalise our partnership with clear terms and expectations, ensuring a smooth and professional process.' },
  { number: '04', title: 'Ongoing Collaboration', description: 'We maintain regular communication and reporting to ensure the partnership continues to deliver real impact.' },
]

function HowItWorks() {
  return (
    <section className="bg-[#EAE4D8] py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold uppercase tracking-widest2 text-xs font-medium text-center mb-3">How It Works</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 text-center mb-12 leading-snug">
          A simple, transparent process.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col gap-4">
              <span className="font-serif text-4xl text-gold/40 leading-none">{number}</span>
              <h3 className="font-serif text-lg text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Our Commitment ──────────────────────────────────────────────── */
function OurCommitment() {
  return (
    <section className="bg-olive min-h-[340px] flex flex-col lg:flex-row">
      {/* Left – text */}
      <div className="lg:w-[55%] flex items-center px-8 sm:px-14 lg:px-20 py-14 lg:py-20">
        <div className="max-w-lg">
          <p className="text-gold uppercase tracking-widest2 text-xs font-medium mb-5">Our Commitment</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.4rem] leading-snug text-white mb-6">
            Integrity, dignity, and long-term impact.
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-8">
            We are committed to transparent, professional partnerships built on trust. Every relationship we form is driven by our mission to provide safe, stable homes and meaningful support to those who need it most.
          </p>
          <a
            href="#contact"
            className="inline-block border border-gold text-gold uppercase tracking-widest text-xs px-7 py-3.5 hover:bg-gold hover:text-white transition-colors duration-200"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Right – image */}
      <div className="lg:w-[45%] relative overflow-hidden min-h-[280px] lg:min-h-full">
        <div className="absolute inset-0 bg-[#5C5940] flex items-center justify-center text-center p-6">
          <div>
            <p className="text-[#C4A96A] text-xs font-medium">Commitment Image</p>
            <code className="text-[#C4A96A] text-[10px] opacity-70 block mt-1">public/images/commitment.jpg</code>
          </div>
        </div>
        <img
          src="/images/commitment.jpg"
          alt="Our commitment"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function WorkWithUs() {
  return (
    <>
      <WWUHero />
      <WhoWeWorkWith />
      <HowItWorks />
      <OurCommitment />
      <Contact />
    </>
  )
}
