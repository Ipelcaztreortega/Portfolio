import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldHideNavbar = currentScrollPos > prevScrollPos && currentScrollPos > 50;

      setIsScrolled(shouldHideNavbar);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <nav className={`bg-white shadow-md font-sGrotesk fixed top-0 left-0 w-full z-50 transition-transform duration-300 transform ${isScrolled ? "-translate-y-full" : "translate-y-0"}`} style={{ backdropFilter: "blur(10px)" }}>
        <div className="flex justify-between items-center h-16 p-4 mt-4">

          {/* Logo */}
          <img className="w-10 ml-2" src="/images/bookz.png" alt="reading Book Logo" />

          {/* Hamburger menu button for small screens */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <img
                className={`w-10 ${isOpen ? 'hidden' : 'block'}`}
                src="/images/menu-burger2.png"
                alt="menu"
              />
              <img
                className={`w-10 ${isOpen ? 'block' : 'hidden'}`}
                src="/images/cross.png"
                alt="close"
              />
            </button>
          </div>

          {/* This div will be hidden on small screens */}
          <div className={`hidden md:flex md:flex-row md:items-center md:ml-auto`}>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={550} className="block mt-4 md:mt-0 text-gray-600 hover:text-red-900 font-bold mx-2">
              About
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={550} className="block mt-4 md:mt-0 text-gray-600 hover:text-red-900 font-bold mx-2">
              Projects
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={550} className="block mt-4 md:mt-0 text-gray-600 hover:text-red-900 font-bold mx-2">
              Contact
            </Link>
            <a href="./IrvinPelcaztreOrtegaResumeMx2.pdf" target="_blank" rel="noopener noreferrer" className="block mt-4 md:mt-0 text-gray-600 hover:text-red-900 font-bold mx-2">
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay for smaller screens */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex ">
          <div className="w-full bg-black opacity-50" onClick={toggleMenu}></div>
          <div className="w-full bg-white p-4 relative flex flex-col items-center justify-center">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-600 focus:outline-none">
              <img className="w-8" src="/images/cross.png" alt="close" />
            </button>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={650} className=" block mt-4 text-gray-600 hover:text-red-900  font-bold mx-2">
              About
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={650} className="block mt-4 text-gray-600 hover:text-red-900 font-bold mx-2">
              Projects
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={650} className="block mt-4 text-gray-600 hover:text-red-900 font-bold mx-2">
              Contact
            </Link>
            <a href="./IrvinPelcaztreOrtegaResumeMx2.pdf" target="_blank" rel="noopener noreferrer" className="block mt-4 text-gray-600 hover:text-red-900 font-bold mx-2">
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
