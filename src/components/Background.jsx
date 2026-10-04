export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-dots mask-radial absolute inset-0" />
      <div className="animate-blob absolute -top-32 -left-24 size-[28rem] rounded-full bg-indigo-200/60 blur-3xl" />
      <div
        className="animate-blob absolute top-1/3 -right-32 size-[32rem] rounded-full bg-fuchsia-200/50 blur-3xl"
        style={{ animationDelay: '-7s' }}
      />
      <div
        className="animate-blob absolute -bottom-40 left-1/4 size-[30rem] rounded-full bg-sky-200/50 blur-3xl"
        style={{ animationDelay: '-14s' }}
      />
    </div>
  )
}
