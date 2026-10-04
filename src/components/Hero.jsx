import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBriefcase,
  faDownload,
  faGraduationCap,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { marquee, profile, socials } from '../data'

function Typewriter({ words }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? 45 : 90
    let next = () =>
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))

    if (!deleting && text === word) {
      delay = 1800
      next = () => setDeleting(true)
    } else if (deleting && text === '') {
      delay = 350
      next = () => {
        setDeleting(false)
        setIndex((i) => i + 1)
      }
    }

    const timeout = setTimeout(next, delay)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span className="font-mono text-indigo-600">
      {text}
      <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-indigo-500" />
    </span>
  )
}

function Photo() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="grid size-full place-items-center rounded-[1.6rem] bg-linear-to-br from-indigo-100 via-fuchsia-50 to-sky-100">
        <span className="text-gradient animate-gradient font-serif text-8xl italic">{profile.initials}</span>
      </div>
    )
  }

  return (
    <img
      src={profile.photo}
      alt={profile.name}
      onError={() => setFailed(true)}
      className="size-full rounded-[1.6rem] object-cover transition-transform duration-700 group-hover:scale-105"
    />
  )
}

function FloatingBadge({ icon, title, subtitle, className, delay }) {
  return (
    <div
      className={`glass animate-float absolute flex items-center gap-3 rounded-2xl border border-white/80 px-4 py-3 shadow-xl shadow-indigo-500/10 ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-linear-to-br from-indigo-500 to-fuchsia-500 text-sm text-white">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="text-left leading-tight">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block text-xs text-muted">{subtitle}</span>
      </span>
    </div>
  )
}

export default function Hero() {
  const enter = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <section id="home" className="relative flex min-h-svh flex-col justify-center pt-28 pb-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="order-2 lg:order-1">
          <div
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-700"
            style={enter(0)}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Currently AI Engineer @ Ascendion
          </div>

          <h1
            className="animate-fade-up mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl"
            style={enter(100)}
          >
            Hi, I&apos;m{' '}
            <span className="text-gradient animate-gradient pr-2 font-serif font-normal italic">Naveen</span>
            <span className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_1s_2]">👋</span>
          </h1>

          <p className="animate-fade-up mt-5 text-xl text-muted sm:text-2xl" style={enter(200)}>
            <Typewriter words={profile.roles} />
          </p>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted" style={enter(300)}>
            {profile.intro}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3" style={enter(400)}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/25"
            >
              View my work
              <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/10"
            >
              Get in touch
            </a>
            <a
              href={profile.resume}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-muted transition-colors hover:text-indigo-600"
            >
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
              Resume
            </a>
          </div>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-5" style={enter(500)}>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-black/5 bg-white/70 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
            <span className="h-6 w-px bg-black/10" />
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <FontAwesomeIcon icon={faLocationDot} className="text-indigo-400" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="animate-fade-up order-1 mx-auto lg:order-2" style={enter(250)}>
          <div className="group relative w-60 sm:w-72 lg:w-80">
            <div className="animate-spin-slow absolute -inset-6 rounded-full bg-linear-to-tr from-indigo-300 via-fuchsia-200 to-sky-300 opacity-70 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] border border-white bg-white/80 p-2 shadow-2xl shadow-indigo-500/15 transition-transform duration-700 group-hover:-rotate-1">
              <div className="size-full overflow-hidden rounded-[1.6rem]">
                <Photo />
              </div>
            </div>
            <FloatingBadge
              icon={faGraduationCap}
              title="IIT Kharagpur"
              subtitle="M.Tech & B.Tech"
              className="top-8 -left-10 hidden sm:flex"
              delay="0s"
            />
            <FloatingBadge
              icon={faBriefcase}
              title="AI Engineer"
              subtitle="Ascendion"
              className="-right-10 bottom-10 hidden sm:flex"
              delay="-3s"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="animate-fade-up mx-auto mt-14 hidden h-10 w-6 justify-center rounded-full border-2 border-black/15 pt-2 transition-colors hover:border-indigo-400 md:flex"
        style={enter(800)}
      >
        <span className="animate-scroll-dot block h-2 w-1 rounded-full bg-indigo-500" />
      </a>

      <div className="animate-fade-up mask-fade mt-12 overflow-hidden border-y border-black/5 bg-white/40 py-4" style={enter(700)}>
        <div className="animate-marquee flex w-max gap-10 hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-sm whitespace-nowrap text-muted">
              {item}
              <span className="size-1 rounded-full bg-indigo-300" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
