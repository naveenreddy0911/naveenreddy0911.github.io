import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { navLinks, profile } from '../data'
import { useScrollProgress } from '../hooks'

export default function Footer() {
  const { y } = useScrollProgress()

  return (
    <>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.shortName}.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition-colors hover:text-indigo-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <a
        href="#home"
        aria-label="Back to top"
        className={`fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full bg-ink text-white shadow-xl shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-1 hover:bg-indigo-600 ${
          y > 600 ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </>
  )
}
