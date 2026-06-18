import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ fullName: '', organisation: '', email: '', phone: '', enquiryType: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-gray-200 bg-white/95 px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-gold transition-colors duration-200'

  return (
    <>
      <section id="contact" className="relative overflow-hidden" style={{ backgroundColor: '#EDE8DF' }}>

        {/* Full-opacity background image — chair anchored bottom-right */}
        <img
          src="/images/gemini-watermark-removed.webp"
          alt="Warm interior"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'right bottom' }}
        />

        {/* Left-to-right overlay — heavy on left (text), clears completely on right (chair) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(237,232,223,0.95) 0%, rgba(237,232,223,0.92) 20%, rgba(237,232,223,0.80) 38%, rgba(237,232,223,0.45) 54%, rgba(237,232,223,0.08) 66%, rgba(237,232,223,0) 74%)',
          }}
        />

        {/* Content — max-width container so right 30–35% stays clear for the chair */}
        <div className="relative z-10 max-w-[1100px] mx-auto px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-20">

            {/* Left — heading */}
            <div className="lg:w-[260px] shrink-0 mb-10 lg:mb-0 flex flex-col justify-center">
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-gray-900 mb-4">
                Let's build brighter futures together.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We welcome enquiries from councils, charities, landlords, referral partners and sponsors.
              </p>
            </div>

            {/* Centre — compact form */}
            <div className="flex-1 max-w-[460px]">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} required className={inputClass} />
                  <input type="text" name="organisation" placeholder="Organisation" value={form.organisation} onChange={handleChange} className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className={inputClass} />
                  <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className={inputClass} />
                </div>
                <select name="enquiryType" value={form.enquiryType} onChange={handleChange} required className={`${inputClass} mb-2.5 text-gray-400`}>
                  <option value="" disabled>Enquiry Type</option>
                  <option value="housing">Housing Referral</option>
                  <option value="partnership">Partnership / Council</option>
                  <option value="landlord">Landlord Enquiry</option>
                  <option value="charity">Charity / Community Org</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="general">General Enquiry</option>
                </select>
                <textarea name="message" placeholder="Message" rows={4} value={form.message} onChange={handleChange} required className={`${inputClass} mb-3 resize-none`} />
                <button type="submit" disabled={status === 'sending'} className="w-full btn-gold py-3 disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
                </button>
                {status === 'success' && <p className="text-green-700 text-sm mt-3 text-center">Thank you! We'll be in touch soon.</p>}
                {status === 'error' && <p className="text-red-600 text-sm mt-3 text-center">Something went wrong. Please try again or email us directly.</p>}
              </form>
            </div>

          </div>
        </div>

      </section>
    </>
  )
}
