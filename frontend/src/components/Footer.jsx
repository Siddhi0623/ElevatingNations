const Logo = () => (
  <div className="flex flex-col items-start leading-none select-none shrink-0">
    <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-gray-700 font-medium">Elevating</span>
    <span className="font-serif text-[1.35rem] tracking-[0.28em] font-semibold uppercase text-gray-900 leading-tight">Nations</span>
    <div className="flex items-center gap-1.5 mt-[3px]">
      <span className="block w-5 h-px bg-gray-500" />
      <span className="font-sans text-[8px] tracking-[0.22em] uppercase text-gray-600 font-medium">CIC</span>
      <span className="block w-5 h-px bg-gray-500" />
    </div>
  </div>
)

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="shrink-0">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8l10 7 10-7" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="shrink-0">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 14.92z" />
  </svg>
)

/* Brand-coloured icons matching the design */
const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.6" strokeLinecap="round" className="shrink-0">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="#555" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="#1877F2" className="shrink-0">
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.883v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="#0A66C2" className="shrink-0">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-200/60">
      {/* Main footer row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 py-6 flex flex-col md:flex-row md:items-center gap-6 md:gap-0">

        {/* Col 1 – Logo + tagline side by side */}
        <div className="flex items-center gap-6 md:w-[38%]">
          <Logo />
          <p className="text-gray-500 text-[13px] leading-snug">
            Safe homes. Real support. Fresh starts.
          </p>
        </div>

        {/* Col 2 – Contact info (centered, icons fixed-width for alignment) */}
        <div className="md:w-[34%] flex justify-center">
          <div className="flex flex-col gap-3">
            <a
              href="mailto:elevatingnationscic@hotmail.com"
              className="flex items-center gap-2 text-gray-600 text-[13px] hover:text-gold transition-colors"
            >
              <span className="flex items-center justify-center w-[22px] h-[22px] shrink-0"><EmailIcon /></span>
              elevatingnationscic@hotmail.com
            </a>
            <span className="flex items-center gap-2 text-gray-400 text-[13px]">
              <span className="flex items-center justify-center w-[22px] h-[22px] shrink-0"><PhoneIcon /></span>
              Phone number coming soon
            </span>
          </div>
        </div>

        {/* Col 3 – Social media */}
        <div className="md:w-[28%] flex justify-end">
          {/* Inner block is left-aligned so icons + text stay consistent */}
          <div className="flex flex-col gap-2.5">
            <a
              href="https://instagram.com/elevatingnationscic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-gray-700 hover:text-gold transition-colors duration-200"
              aria-label="Elevating Nations CIC on Instagram"
            >
              <span className="flex items-center justify-center w-[22px] h-[22px] shrink-0"><InstagramIcon /></span>
              @elevatingnationscic
            </a>
            <div className="flex items-center gap-2 text-[13px]">
              <span className="flex items-center justify-center w-[22px] h-[22px] shrink-0"><FacebookIcon /></span>
              <span className="text-gray-500">Facebook: <span className="italic text-gray-400">Launching soon</span></span>
            </div>
            <div className="flex items-center gap-2 text-[13px]">
              <span className="flex items-center justify-center w-[22px] h-[22px] shrink-0"><LinkedInIcon /></span>
              <span className="text-gray-500">LinkedIn: <span className="italic text-gray-400">Launching soon</span></span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-200/60 py-4 text-center">
        <p className="text-gray-400 text-xs">
          © 2025 Elevating Nations CIC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
