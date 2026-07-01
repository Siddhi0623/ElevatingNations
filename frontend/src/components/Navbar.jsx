import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Logo = () => (
  <div className="flex flex-col items-center leading-[1.25] select-none">
    <span className="font-sans text-[10px] font-normal uppercase text-gray-700" style={{ letterSpacing: '0.28em' }}>
      Elevating
    </span>
    <div className="flex items-center gap-0">
      <span className="text-gray-500 text-[11px] font-light leading-none">-</span>
      <span className="font-serif text-[1.15rem] font-semibold uppercase text-gray-900 mx-[3px]" style={{ letterSpacing: '0.42em' }}>
        Nations
      </span>
      <span className="text-gray-500 text-[11px] font-light leading-none">-</span>
    </div>
    <div className="flex items-center gap-1.5 mt-[1px]">
      <span className="block w-[18px] h-px bg-gray-500" />
      <span className="font-sans text-[8.5px] uppercase text-gray-600 font-normal" style={{ letterSpacing: '0.28em' }}>
        CIC
      </span>
      <span className="block w-[18px] h-px bg-gray-500" />
    </div>
  </div>
)

/* Navigation items:
   - scrollTo: scroll to this section ID on the home page
   - route:    navigate to this route path instead */
const navItems = [
  { label: 'Home',         scrollTo: 'home' },
  { label: 'About Us',     scrollTo: 'about-us' },
  { label: 'What We Do',   scrollTo: 'what-we-do' },
  { label: 'Work With Us', route: '/work-with-us' },
  { label: 'Contact',      scrollTo: 'contact' },
  { label: 'Book a Call',  scrollTo: 'booking', cta: true },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleClick = (item) => (e) => {
    e.preventDefault()
    setMobileOpen(false)

    if (item.route) {
      // Pure page navigation
      navigate(item.route)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Scroll-to-section behaviour
    // Uses window.scrollTo (scrollIntoView is blocked by overflow-x:clip on the app wrapper)
    // Wrapped in setTimeout so it fires after React's re-render cycle
    const scrollToSection = () => {
      setTimeout(() => {
        const el = document.getElementById(item.scrollTo)
        if (el) {
          const top = el.offsetTop - 88 // subtract sticky navbar height
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 50)
    }

    if (pathname !== '/') {
      // Leave the Work With Us page first, then scroll once home is mounted
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(item.scrollTo)
        if (el) {
          const top = el.offsetTop - 88
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 150)
    } else {
      scrollToSection()
    }
  }

  const isActive = (item) => {
    if (item.route) return pathname === item.route
    return pathname === '/'
  }

  const linkClass = (item) =>
    `uppercase text-[11px] font-semibold tracking-[0.18em] transition-colors duration-200 cursor-pointer ${
      isActive(item) && (item.scrollTo === 'home' || item.route)
        ? 'text-gold relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-px after:bg-gold'
        : 'text-gray-800 hover:text-gold'
    }`

  return (
    <nav className="sticky top-0 z-50 bg-cream/60 backdrop-blur-[6px]">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between h-[88px]">

        {/* Logo → always goes home */}
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.cta ? (
                <a
                  href="#"
                  onClick={handleClick(item)}
                  className="btn-gold py-2.5 px-5 text-[10px]"
                >
                  {item.label}
                </a>
              ) : (
                <a href="#" onClick={handleClick(item)} className={linkClass(item)}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-gray-200/60 px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={handleClick(item)}
              className={`block py-3 uppercase tracking-[0.18em] text-xs font-semibold border-b border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                item.cta
                  ? 'text-gold'
                  : isActive(item) && (item.scrollTo === 'home' || item.route)
                  ? 'text-gold'
                  : 'text-gray-700 hover:text-gold'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
