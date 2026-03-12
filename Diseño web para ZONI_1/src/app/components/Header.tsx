import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Personalización', href: '#personalizacion' },
    { name: 'Uniformes', href: '#uniformes' },
    { name: 'Mascotas', href: '#mascotas' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-4xl tracking-wider" style={{ fontFamily: 'var(--font-elegant)' }}>
              <span className="text-[#EC4899]">ZO</span>
              <span className="text-black">NI</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-700 hover:text-[#EC4899] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-[#EC4899] text-white px-6 py-2.5 rounded-full hover:bg-black transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contáctanos
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#EC4899] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 animate-in fade-in slide-in-from-top-5 duration-300">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-3 text-gray-700 hover:text-[#EC4899] transition-colors border-b border-gray-100"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="block mt-4 text-center bg-[#EC4899] text-white px-6 py-2.5 rounded-full hover:bg-black transition-all duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contáctanos
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
