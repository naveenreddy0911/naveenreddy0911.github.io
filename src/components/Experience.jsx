import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { experience } from '../data'
import Highlight from './Highlight'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Tag from './Tag'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've"
          accent="worked"
          description="Building backend services, data pipelines and AI evaluation tooling with cross-functional teams."
        />

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[11px] w-px bg-linear-to-b from-indigo-400 via-fuchsia-300 to-transparent sm:left-[19px]"
          />
          <ol className="relative space-y-10 pl-8 sm:pl-12">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.company} delay={i * 120} className="relative">
                <span className="absolute top-8 -left-8 grid size-6 place-items-center sm:-left-12 sm:size-10">
                  {job.current && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-indigo-400/30" />
                  )}
                  <span className="relative grid size-6 place-items-center rounded-full border-4 border-canvas bg-linear-to-br from-indigo-500 to-fuchsia-500 text-[10px] text-white shadow-md sm:size-10 sm:text-sm">
                    <FontAwesomeIcon icon={faBriefcase} className="hidden sm:block" />
                  </span>
                </span>

                <article className="group rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold tracking-tight text-ink">{job.role}</h3>
                        {job.current && (
                          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-200">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-gradient animate-gradient mt-1 font-serif text-2xl italic">{job.company}</p>
                    </div>
                    <div className="space-y-1 text-sm text-muted sm:text-right">
                      <p className="inline-flex items-center gap-2 font-mono text-xs">
                        <FontAwesomeIcon icon={faCalendar} className="text-indigo-300" />
                        {job.period}
                      </p>
                      <p className="flex items-center gap-2 text-xs sm:justify-end">
                        <FontAwesomeIcon icon={faLocationDot} className="text-indigo-300" />
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed text-muted">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-indigo-300 transition-colors duration-300 group-hover:bg-indigo-500" />
                        <span>
                          <Highlight text={point} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
