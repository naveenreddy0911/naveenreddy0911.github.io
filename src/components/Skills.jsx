import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { skills } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const tints = [
  'from-indigo-500 to-sky-500',
  'from-fuchsia-500 to-indigo-500',
  'from-sky-500 to-emerald-400',
  'from-amber-400 to-rose-400',
  'from-violet-500 to-fuchsia-500',
  'from-teal-400 to-sky-500',
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title="My"
          accent="toolkit"
          description="Languages, frameworks and practices I use to ship dependable software."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 100} className="h-full">
              <div className="group h-full rounded-3xl border border-black/5 bg-white/70 p-7 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="flex items-center gap-4">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl bg-linear-to-br text-white shadow-md shadow-indigo-500/15 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${tints[i % tints.length]}`}
                  >
                    <FontAwesomeIcon icon={group.icon} />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="cursor-default rounded-xl border border-black/5 bg-canvas px-3 py-1.5 text-sm font-medium text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:text-indigo-600 hover:shadow-md hover:shadow-indigo-500/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
