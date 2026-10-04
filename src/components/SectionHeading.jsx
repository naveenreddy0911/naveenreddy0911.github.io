import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, accent, description }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-indigo-500">
        <span>{index}</span>
        <span className="h-px w-10 bg-linear-to-r from-indigo-400 to-transparent" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {title}{' '}
        <span className="text-gradient animate-gradient pr-1 font-serif font-normal italic">{accent}</span>
      </h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>}
    </Reveal>
  )
}
