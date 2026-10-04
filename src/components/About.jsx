import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faGraduationCap, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { achievements, education, profile, stats } from '../data'
import { useInView, usePrefersReducedMotion } from '../hooks'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function CountUp({ value }) {
  const [ref, inView] = useInView()
  const reduced = usePrefersReducedMotion()
  const [, digits, suffix] = value.match(/^([\d.]+)(.*)$/)
  const target = parseFloat(digits)
  const decimals = (digits.split('.')[1] || '').length
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const start = performance.now()
    const duration = reduced ? 1 : 1800
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setCurrent(target * (1 - Math.pow(1 - t, 4)))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, reduced])

  return (
    <span ref={ref}>
      {current.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="About" title="A bit" accent="about me" />

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur-sm sm:p-10">
              <p className="font-serif text-3xl leading-snug text-ink italic sm:text-4xl">
                “I turn requirements into reliable, well-tested software.”
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">{profile.summary}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                  <span className="text-gradient animate-gradient text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <CountUp value={stat.value} />
                  </span>
                  <span className="mt-3 text-sm leading-snug text-muted">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-ink">
                <span className="grid size-9 place-items-center rounded-xl bg-indigo-50 text-sm text-indigo-500">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                Education
              </h3>
            </Reveal>
            <div className="space-y-4">
              {education.map((item, i) => (
                <Reveal key={item.degree} delay={i * 120}>
                  <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                    <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-linear-to-b from-indigo-500 to-fuchsia-500 transition-transform duration-500 group-hover:scale-y-100" />
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-ink">{item.degree}</p>
                        <p className="text-sm text-muted">{item.field}</p>
                      </div>
                      <span className="rounded-full bg-indigo-50 px-3 py-1 font-mono text-xs font-medium text-indigo-600">
                        {item.grade}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-ink/80">{item.school}</p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faCalendar} className="text-indigo-300" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faLocationDot} className="text-indigo-300" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-ink">
                <span className="grid size-9 place-items-center rounded-xl bg-fuchsia-50 text-sm text-fuchsia-500">
                  <FontAwesomeIcon icon={achievements[0].icon} />
                </span>
                Achievements
              </h3>
            </Reveal>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <Reveal key={item.title} delay={i * 120}>
                  <div className="group flex gap-5 rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-fuchsia-500/10">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-amber-300 to-rose-400 text-lg text-white shadow-md shadow-rose-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.highlights.map((h) => (
                          <span key={h} className="rounded-full bg-amber-50 px-3 py-1 font-mono text-xs font-medium text-amber-700">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
