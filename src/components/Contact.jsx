import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCopy, faEnvelope, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { profile, socials } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timeout)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="animate-gradient rounded-[2.5rem] bg-linear-to-r from-indigo-300 via-fuchsia-300 to-sky-300 bg-[length:200%_200%] p-px shadow-2xl shadow-indigo-500/10">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white/90 px-6 py-16 text-center backdrop-blur-xl sm:px-16">
              <div aria-hidden="true" className="bg-dots mask-radial absolute inset-0 opacity-70" />
              <div className="relative">
                <p className="flex items-center justify-center gap-3 font-mono text-xs tracking-[0.25em] text-indigo-500 uppercase">
                  <span>05</span>
                  <span className="h-px w-10 bg-indigo-300" />
                  <span>Contact</span>
                </p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                  Let&apos;s build something{' '}
                  <span className="text-gradient animate-gradient pr-1 font-serif font-normal italic">great</span>{' '}
                  together.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  Whether it&apos;s a role, a project, or a conversation about backend systems and AI evaluation,
                  I&apos;d love to hear from you.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/25"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Say hello
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-indigo-400" />
                    <span className="truncate font-mono text-xs sm:text-sm">{profile.email}</span>
                    <span
                      className={`grid size-6 place-items-center rounded-full text-xs transition-colors ${
                        copied ? 'bg-emerald-50 text-emerald-600' : 'bg-canvas text-muted'
                      }`}
                    >
                      <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                    </span>
                  </button>
                </div>
                <p
                  aria-live="polite"
                  className={`mt-3 h-5 text-xs text-emerald-600 transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
                >
                  {copied ? 'Email copied to clipboard' : ''}
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid size-12 place-items-center rounded-full border border-black/5 bg-white text-lg text-muted transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                      <FontAwesomeIcon icon={s.icon} />
                    </a>
                  ))}
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
                  <FontAwesomeIcon icon={faLocationDot} className="text-indigo-400" />
                  Based in {profile.location}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
