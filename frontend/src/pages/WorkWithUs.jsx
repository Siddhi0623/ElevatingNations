import Contact from '../components/Contact'
import { scrollToSection } from '../utils/scroll'

/* ─── Hero banner ─────────────────────────────────────────────────── */
function WWUHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-[88px] pt-[88px]">

      {/* Cream base so no flash before image loads */}
      <div className="absolute inset-0 bg-cream" />

      {/* Full-section background image — covers edge to edge with no white gaps */}
      <img
        src="/images/hero-updated.webp"
        alt="Work with us"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center center' }}
      />

      {/* Small patch to cover the AI watermark in the bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 w-28 h-28 z-10"
        style={{
          background: 'radial-gradient(circle at 90% 90%, rgba(210,198,182,1) 0%, rgba(210,198,182,0.7) 40%, rgba(210,198,182,0) 70%)',
        }}
      />

      {/* Left-to-right gradient overlay: strong white behind text, fades to near-clear on right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.82) 18%, rgba(255,255,255,0.55) 40%, rgba(255,255,255,0.20) 60%, rgba(255,255,255,0.10) 75%, rgba(255,255,255,0.05) 85%)',
        }}
      />

      {/* Text content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-24 lg:py-0">
        <div className="max-w-[600px]">
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

    </section>
  )
}

/* ─── Who We Work With ────────────────────────────────────────────── */
const partners = [
  { title: 'Local Councils & Authorities', img: '/images/who-we-are-1.webp', placeholder: 'bg-[#C8BFB0]' },
  { title: 'Charities & Nonprofits',       img: '/images/who-we-are-2.webp', placeholder: 'bg-[#B8C0B0]' },
  { title: 'Landlords & Property Owners',  img: '/images/who-we-are-3.webp', placeholder: 'bg-[#C0B8A8]' },
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
    <section className="relative min-h-[340px] flex items-center overflow-hidden">

      {/* Dark base fallback */}
      <div className="absolute inset-0 bg-olive" />

      {/* Full-width background image */}
      <img
        src="/images/commitment.webp"
        alt="Our commitment"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center center' }}
      />

      {/* Left-to-right dark overlay: opaque behind text, clears on right so image stays sharp */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(73,72,58,0.88) 0%, rgba(73,72,58,0.82) 20%, rgba(73,72,58,0.60) 40%, rgba(73,72,58,0.25) 58%, rgba(73,72,58,0.05) 72%, rgba(73,72,58,0) 80%)',
        }}
      />

      {/* Text content */}
      <div className="relative z-10 w-full px-8 sm:px-14 lg:px-20 py-14 lg:py-20">
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
            onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            className="inline-block border border-gold text-gold uppercase tracking-widest text-xs px-7 py-3.5 hover:bg-gold hover:text-white active:scale-[0.97] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Start a Conversation
          </a>
        </div>
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
