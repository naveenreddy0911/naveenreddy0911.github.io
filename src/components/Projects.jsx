import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { projects, socials } from '../data'
import Highlight from './Highlight'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Tag from './Tag'

function ProjectCard({ project }) {
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <article
      onMouseMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/75 p-7 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 sm:p-9"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(480px circle at var(--x, 50%) var(--y, 50%), rgba(129, 140, 248, 0.13), transparent 60%)',
        }}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r transition-transform duration-700 group-hover:scale-x-100 ${project.accent}`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`grid size-14 place-items-center rounded-2xl bg-linear-to-br text-xl text-white shadow-lg shadow-indigo-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${project.accent}`}
        >
          <FontAwesomeIcon icon={project.icon} />
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="grid size-10 place-items-center rounded-full border border-black/5 bg-white text-muted transition-all hover:text-indigo-600 hover:shadow-md"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
          </a>
        )}
      </div>

      <h3 className="relative mt-6 text-2xl font-bold tracking-tight text-ink">{project.title}</h3>
      <p className="relative mt-1 text-sm text-muted">{project.subtitle}</p>

      <div className="relative mt-6 grid grid-cols-2 gap-3">
        {project.metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-black/5 bg-canvas/80 px-4 py-3">
            <p className="text-gradient animate-gradient text-2xl font-extrabold">{m.value}</p>
            <p className="text-xs text-muted">{m.label}</p>
          </div>
        ))}
      </div>

      <ul className="relative mt-6 flex-1 space-y-3">
        {project.points.map((point) => (
          <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-indigo-300 transition-colors duration-300 group-hover:bg-indigo-500" />
            <span>
              <Highlight text={point} />
            </span>
          </li>
        ))}
      </ul>

      <div className="relative mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const github = socials.find((s) => s.label === 'GitHub')

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Things I've"
          accent="built"
          description="A selection of work spanning backend engineering and real-time computer vision."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 150} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <a
            href={github.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <FontAwesomeIcon icon={faGithub} className="text-base" />
            More on GitHub
            <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
