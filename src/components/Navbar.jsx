import { useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons'
import { navLinks, profile } from '../data'
import { useScrollProgress, useScrollSpy } from '../hooks'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const active = useScrollSpy(sectionIds)
  const { progress, y } = useScrollProgress()
  const [open, setOpen] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })
  const linkRefs = useRef({})
  const scrolled = y > 24

  const measure = useCallback(() => {
    const el = linkRefs.current[active]
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true })
  }, [active])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-linear-to-r from-indigo-500 via-fuchsia-500 to-sky-500"
        style={{ transform: `scaleX(${progress})` }}
      />
      <nav
        className={`mx-3 mt-3 flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-500 sm:mx-6 xl:mx-auto ${
          scrolled || open ? 'glass border-white/70 shadow-lg shadow-indigo-500/5' : 'border-transparent'
        }`}
      >
        <a href="#home" onClick={() => setOpen(false)} className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-linear-to-br from-indigo-500 via-fuchsia-500 to-sky-500 font-serif text-lg text-white italic shadow-md shadow-indigo-500/20 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden text-sm leading-tight font-semibold sm:block">
            {profile.shortName}
            <span className="block text-xs font-normal text-muted">{profile.title}</span>
          </span>
        </a>

        <ul className="relative hidden items-center rounded-full border border-black/5 bg-white/50 p-1 md:flex">
          <li
            aria-hidden="true"
            className={`absolute top-1 bottom-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              indicator.ready ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ left: indicator.left, width: indicator.width }}
          />
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                ref={(el) => (linkRefs.current[link.id] = el)}
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative block rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                  active === link.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download={profile.resumeFileName}
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-white shadow-md shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/20 sm:inline-flex"
          >
            <FontAwesomeIcon icon={faDownload} className="text-xs" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-xl border border-black/5 bg-white/70 text-ink transition hover:bg-white md:hidden"
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      <div
        className={`mx-3 mt-2 overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mx-6 md:hidden ${
          open ? 'max-h-[28rem] border border-white/70 bg-white/95 opacity-100 shadow-lg backdrop-blur-xl' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col p-2">
          {navLinks.map((link, i) => (
            <li
              key={link.id}
              className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}`}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            >
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === link.id ? 'bg-white text-ink shadow-sm' : 'text-muted hover:bg-white/60 hover:text-ink'
                }`}
              >
                {link.label}
                {active === link.id && <span className="size-1.5 rounded-full bg-indigo-500" />}
              </a>
            </li>
          ))}
          <li className="p-2">
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-medium text-white"
            >
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
