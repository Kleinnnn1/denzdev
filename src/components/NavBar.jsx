import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/dark.svg';

const links = [
  { href: '#about', label: 'About' },
  //   { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#hire-me', label: 'Contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <a href="#" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="" className="navbar-logo-mark" />
        Denzel<span>.</span>
      </a>

      <button
        type="button"
        className="navbar-toggle"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <ul className={isOpen ? 'is-open' : ''}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;