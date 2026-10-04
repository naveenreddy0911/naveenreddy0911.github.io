export default function Tag({ children }) {
  return (
    <span className="rounded-full border border-black/5 bg-white/70 px-3 py-1 font-mono text-[11px] font-medium text-muted transition-colors duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
      {children}
    </span>
  )
}
