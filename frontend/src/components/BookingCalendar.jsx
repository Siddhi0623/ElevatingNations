import { useState, useEffect } from 'react'

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]
const DAY_LABELS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

/* ── London timezone helpers ──────────────────────────────────── */

// Current London time as "HH:MM" (24-hour)
function londonHHMM() {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Europe/London',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

// Current London date as "YYYY-MM-DD"
function londonDateStr() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/London' })
}

// JS Date → "YYYY-MM-DD" using the date's own year/month/date values
function datePart(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

// Earliest bookable time for a given date (null = no slots left today)
function getMinTime(date) {
  if (!date || datePart(date) !== londonDateStr()) return '10:00'
  const [h, m] = londonHHMM().split(':').map(Number)
  const buffered = h * 60 + m + 30                      // 30-min booking buffer
  const rounded  = Math.ceil(buffered / 15) * 15        // snap to next 15 min
  const rh = Math.floor(rounded / 60)
  const rm = rounded % 60
  if (rh >= 16) return null                              // past 4 pm — no slots
  const candidate = `${String(rh).padStart(2, '0')}:${String(rm).padStart(2, '0')}`
  return candidate < '10:00' ? '10:00' : candidate
}

// Current London time as a friendly display string ("2:30 pm")
function londonClockDisplay() {
  return new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Europe/London',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

/* ── Calendar helpers ─────────────────────────────────────────── */

function buildGrid(year, month) {
  const firstDay  = new Date(year, month, 1)
  const lastDate  = new Date(year, month + 1, 0).getDate()
  const startOff  = (firstDay.getDay() + 6) % 7   // Mon-first
  const cells     = Array(startOff).fill(null)
  for (let d = 1; d <= lastDate; d++) cells.push(new Date(year, month, d))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

function selectable(date) {
  if (!date) return false
  const dp    = datePart(date)
  const today = londonDateStr()
  if (dp < today) return false                       // past date (London)
  if (date.getDay() === 0) return false              // Sunday
  if (dp === today && getMinTime(date) === null) return false  // today but past 4 pm
  return true
}

function sameDay(a, b) {
  return a && b && a.toDateString() === b.toDateString()
}

function fmtLong(date) {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  })
}

// "HH:MM" (24h) → "2:30 PM"
function fmtTime(val) {
  if (!val) return ''
  const [h, m] = val.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour   = h % 12 || 12
  return `${hour}:${String(m).padStart(2, '0')} ${period}`
}

/* ── Shared input style ───────────────────────────────────────── */
const INPUT =
  'w-full border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors duration-200'

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

/* ── Component ────────────────────────────────────────────────── */
export default function BookingCalendar() {
  const now = new Date()
  const [year,       setYear]       = useState(now.getFullYear())
  const [month,      setMonth]      = useState(now.getMonth())
  const [pickedDate, setPickedDate] = useState(null)
  const [timeVal,    setTimeVal]    = useState('')     // "HH:MM" 24h
  const [timeError,  setTimeError]  = useState('')
  const [step,       setStep]       = useState('pick') // 'pick' | 'form' | 'done'
  const [form,       setForm]       = useState({ name: '', email: '', note: '' })
  const [busy,       setBusy]       = useState(false)

  // Live London clock — updates every minute
  const [londonClock, setLondonClock] = useState(londonClockDisplay)
  useEffect(() => {
    const id = setInterval(() => setLondonClock(londonClockDisplay()), 60_000)
    return () => clearInterval(id)
  }, [])

  const cells          = buildGrid(year, month)
  const atEarliestMonth = year === now.getFullYear() && month === now.getMonth()
  const minTime        = pickedDate ? getMinTime(pickedDate) : '10:00'
  const noSlotsToday   = pickedDate && datePart(pickedDate) === londonDateStr() && minTime === null

  const prevMonth = () => {
    if (atEarliestMonth) return
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const pickDate = (d) => {
    if (!selectable(d)) return
    setPickedDate(d)
    setTimeVal('')
    setTimeError('')
  }

  const handleTimeChange = (e) => {
    const val = e.target.value
    setTimeVal(val)
    if (!val) { setTimeError(''); return }
    if (val < (minTime || '10:00')) {
      setTimeError(`Please choose a time from ${fmtTime(minTime || '10:00')} onwards (London time).`)
    } else if (val > '16:00') {
      setTimeError('Please choose a time before 4:00 PM (London time).')
    } else {
      setTimeError('')
    }
  }

  const handleContinue = () => {
    if (canContinue) setStep('form')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBusy(true)
    setTimeout(() => { setBusy(false); setStep('done') }, 900)
  }

  const goBack = () => setStep('pick')

  const pickedTimeDisplay = fmtTime(timeVal)
  const canContinue = !!pickedDate && !!timeVal && !timeError && !noSlotsToday

  const navBtn = [
    'w-8 h-8 flex items-center justify-center rounded text-gray-400 transition-colors duration-150',
    'hover:text-gold hover:bg-gold/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold',
    'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-400',
  ].join(' ')

  /* ── Confirmed ────────────────────────────────────────────────── */
  if (step === 'done') {
    return (
      <section id="booking" className="bg-cream py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="label-gold mb-4">Booking Confirmed</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight mb-4">Thank You.</h2>
          <div className="w-10 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Your free consultation has been scheduled for:
          </p>
          <p className="font-serif text-xl text-gray-900 mb-1">{fmtLong(pickedDate)}</p>
          <p className="text-gold font-medium text-sm mb-6">{pickedTimeDisplay} · Europe / London</p>
          <p className="text-gray-400 text-sm">
            A confirmation will be sent to{' '}
            <span className="text-gray-600">{form.email}</span>.
          </p>
        </div>
      </section>
    )
  }

  /* ── Booking form ─────────────────────────────────────────────── */
  if (step === 'form') {
    return (
      <section id="booking" className="bg-cream py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-md mx-auto">
          <p className="label-gold mb-3 text-center">Free Consultation</p>
          <h2 className="font-serif text-3xl text-gray-900 leading-snug mb-8 text-center">Your details.</h2>
          <div className="bg-white/70 border border-gray-200/60 p-6 sm:p-8">
            <div className="mb-5 pb-5 border-b border-gray-100">
              <p className="text-[10px] uppercase tracking-widest2 text-gold font-medium mb-1">Your appointment</p>
              <p className="font-serif text-base text-gray-900">{fmtLong(pickedDate)}</p>
              <p className="text-gold text-sm mt-0.5">{pickedTimeDisplay} · Europe / London</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className={INPUT}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className={INPUT}
              />
              <textarea
                placeholder="Brief message (optional)"
                rows={3}
                value={form.note}
                onChange={e => setForm({ ...form, note: e.target.value })}
                className={`${INPUT} resize-none`}
              />
              <button
                type="submit"
                disabled={busy}
                className="btn-gold py-3 mt-1 disabled:opacity-60"
              >
                {busy ? 'Booking…' : 'Confirm Booking'}
              </button>
              <button
                type="button"
                onClick={goBack}
                className="text-gray-400 text-xs hover:text-gold transition-colors text-center mt-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                ← Change date or time
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }

  /* ── Calendar + time picker ───────────────────────────────────── */
  return (
    <section id="booking" className="bg-cream py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="label-gold mb-3">Free Consultation</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 leading-snug mb-4">
            Book a free consultation.
          </h2>
          <div className="w-8 h-0.5 bg-gold mx-auto mb-5" />
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
            Available Monday – Saturday, 10 am – 4 pm.
            All times are in <span className="text-gold font-medium">Europe / London</span> time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">

          {/* ── Calendar ── */}
          <div className="bg-white/70 border border-gray-200/60 p-6 w-full lg:w-[380px] shrink-0">
            <div className="flex items-center justify-between mb-5">
              <button onClick={prevMonth} disabled={atEarliestMonth} className={navBtn} aria-label="Previous month">
                <ChevronLeft />
              </button>
              <span className="font-serif text-base text-gray-900 select-none">
                {MONTH_NAMES[month]} {year}
              </span>
              <button onClick={nextMonth} className={navBtn} aria-label="Next month">
                <ChevronRight />
              </button>
            </div>

            <div className="grid grid-cols-7 mb-1">
              {DAY_LABELS.map(d => (
                <div
                  key={d}
                  className={`text-center text-[10px] font-semibold uppercase tracking-wider py-1 ${
                    d === 'Sun' ? 'text-gray-300' : 'text-gray-400'
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-0.5">
              {cells.map((date, i) => {
                const ok  = selectable(date)
                const sel = sameDay(date, pickedDate)
                return (
                  <button
                    key={i}
                    disabled={!ok}
                    onClick={() => pickDate(date)}
                    aria-label={date ? fmtLong(date) : undefined}
                    aria-pressed={sel || undefined}
                    className={[
                      'h-9 w-full text-sm rounded transition-colors duration-150',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                      !date   && 'invisible pointer-events-none',
                      sel     && 'bg-gold text-white font-semibold',
                      !sel && ok  && 'text-gray-700 hover:bg-gold/10 hover:text-gold cursor-pointer',
                      !sel && !ok && date && 'text-gray-200 cursor-not-allowed',
                    ].filter(Boolean).join(' ')}
                  >
                    {date?.getDate()}
                  </button>
                )
              })}
            </div>

            <p className="text-gray-400 text-[11px] text-center mt-4">
              Timezone: Europe / London (GMT / BST)
            </p>
          </div>

          {/* ── Time picker — always visible ── */}
          <div className="bg-white/70 border border-gray-200/60 p-6 w-full lg:w-[280px] shrink-0 flex flex-col gap-4">

            {/* London clock */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest2 text-gold font-medium mb-0.5">London Time Now</p>
                <p className="font-serif text-lg text-gray-900">{londonClock}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B5923A" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>

            {/* Date label or prompt */}
            <div>
              <p className="text-[10px] uppercase tracking-widest2 text-gold font-medium mb-1">Select a Time</p>
              <p className="font-serif text-sm text-gray-900 leading-snug">
                {pickedDate ? fmtLong(pickedDate) : 'Choose a date first'}
              </p>
            </div>

            {/* No-slots-left message */}
            {noSlotsToday && (
              <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-3 py-2">
                All slots for today have passed. Please select another date.
              </p>
            )}

            {/* Time input */}
            {!noSlotsToday && (
              <div>
                <input
                  type="time"
                  min={minTime || '10:00'}
                  max="16:00"
                  step="900"
                  value={timeVal}
                  disabled={!pickedDate}
                  onChange={handleTimeChange}
                  aria-label="Preferred time (London time, 10:00 AM to 4:00 PM)"
                  className={[
                    'w-full border px-3 py-3 text-sm outline-none transition-colors duration-200 bg-white',
                    'focus:border-gold focus:ring-1 focus:ring-gold/30',
                    pickedDate
                      ? 'border-gray-200 text-gray-700 cursor-pointer'
                      : 'border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50',
                  ].join(' ')}
                />
                {pickedDate && !timeVal && (
                  <p className="text-gray-400 text-[11px] mt-1.5">
                    Enter any time between {fmtTime(minTime || '10:00')} – 4:00 PM
                  </p>
                )}
                {timeVal && !timeError && (
                  <p className="text-gold text-xs mt-1.5 font-medium">
                    ✓ {pickedTimeDisplay} · Europe / London
                  </p>
                )}
                {timeError && (
                  <p className="text-red-500 text-xs mt-1.5">{timeError}</p>
                )}
              </div>
            )}

            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className="btn-gold py-3 w-full disabled:opacity-40 disabled:cursor-not-allowed mt-auto"
            >
              Continue to Booking
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
