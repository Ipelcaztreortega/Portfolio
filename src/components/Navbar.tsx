import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevY, setPrevY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < prevY || y < 50);
      setPrevY(y);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [prevY]);

  const linkClass =
    'nav-link block text-xs font-medium tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors duration-200 cursor-pointer';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm font-medium tracking-wider">IPO</span>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'projects', 'experience', 'contact'].map((s) => (
              <Link key={s} to={s} spy smooth offset={-56} duration={500} className={linkClass}>
                {s}
              </Link>
            ))}
            <a
              href="../../public/irvin_ortega_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Resume ↗
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="font-mono text-xs tracking-widest">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-1/3 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="w-2/3 bg-white flex flex-col items-start justify-center px-10 gap-8">
            {['about', 'projects', 'experience', 'contact'].map((s) => (
              <Link
                key={s}
                to={s}
                spy
                smooth
                offset={-56}
                duration={500}
                className={`${linkClass} text-base`}
                onClick={() => setIsOpen(false)}
              >
                {s}
              </Link>
            ))}
            <a
              href="../../public/irvin_ortega_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} text-base`}
              onClick={() => setIsOpen(false)}
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
