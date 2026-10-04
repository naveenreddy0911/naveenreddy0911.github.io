export default function Highlight({ text }) {
  return text.split(/(\d+(?:\.\d+)?(?:%|\+))/g).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}
