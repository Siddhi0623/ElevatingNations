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
    'w-full border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-gold transition-colors duration-200'

  return (
    <section id="contact" className="py-0" style={{ backgroundColor: '#EDE8DF' }}>
      <div className="flex flex-col lg:flex-row min-h-[420px]">
        {/* Left – heading */}
        <div className="lg:w-[28%] flex items-center px-8 sm:px-12 lg:px-14 py-10 lg:py-14">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-gray-900 mb-4">
              Let's build brighter futures together.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We welcome enquiries from councils, charities, landlords, referral partners and sponsors.
            </p>
          </div>
        </div>

        {/* Center – form */}
        <div className="lg:w-[44%] flex items-center px-8 sm:px-12 lg:px-10 py-10 lg:py-14">
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-2.5 mb-2.5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                type="text"
                name="organisation"
                placeholder="Organisation"
                value={form.organisation}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-2.5 mb-2.5">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            {/* Row 3 */}
            <select
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
              required
              className={`${inputClass} mb-2.5 text-gray-400`}
            >
              <option value="" disabled>Enquiry Type</option>
              <option value="housing">Housing Referral</option>
              <option value="partnership">Partnership / Council</option>
              <option value="landlord">Landlord Enquiry</option>
              <option value="charity">Charity / Community Org</option>
              <option value="sponsorship">Sponsorship</option>
              <option value="general">General Enquiry</option>
            </select>
            {/* Row 4 */}
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className={`${inputClass} mb-3 resize-none`}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full btn-gold py-3 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
            </button>

            {status === 'success' && (
              <p className="text-green-700 text-sm mt-3 text-center">
                Thank you! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-3 text-center">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>

        {/* Right – image */}
        <div className="lg:w-[28%] relative overflow-hidden min-h-[280px] lg:min-h-full">
          <div className="absolute inset-0 bg-[#E8DFD0]" />
          <img
            src="/images/contact-corner.webp"
            alt="Warm interior corner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
