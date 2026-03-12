import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const whatsappNumber = '3103980187';
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-4xl mb-4"
              style={{ fontFamily: 'var(--font-elegant)' }}
            >
              <span className="text-[#EC4899]">ZO</span>
              <span className="text-white">NI</span>
            </h3>
            <p
              className="text-gray-400 mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Confección personalizada que refleja tu esencia. Cada pieza es única, como tú.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EC4899] p-3 rounded-full hover:bg-white hover:text-[#EC4899] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#EC4899] p-3 rounded-full hover:bg-white hover:text-[#EC4899] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xl mb-4 text-[#EC4899]"
              style={{ fontFamily: 'var(--font-elegant)' }}
            >
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'var(--font-sans)' }}>
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-[#EC4899] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-gray-400 hover:text-[#EC4899] transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#personalizacion" className="text-gray-400 hover:text-[#EC4899] transition-colors">
                  Personalización
                </a>
              </li>
              <li>
                <a href="#uniformes" className="text-gray-400 hover:text-[#EC4899] transition-colors">
                  Uniformes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-[#EC4899] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xl mb-4 text-[#EC4899]"
              style={{ fontFamily: 'var(--font-elegant)' }}
            >
              Nuestros Servicios
            </h4>
            <ul className="space-y-3 text-gray-400" style={{ fontFamily: 'var(--font-sans)' }}>
              <li>Vestidos para Mujer</li>
              <li>Vestidos para Niñas</li>
              <li>Uniformes Escolares</li>
              <li>Uniformes Corporativos</li>
              <li>Peluches Personalizados</li>
              <li>Ropa para Mascotas</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-xl mb-4 text-[#EC4899]"
              style={{ fontFamily: 'var(--font-elegant)' }}
            >
              Contacto
            </h4>
            <ul className="space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#EC4899] mt-1" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EC4899] transition-colors"
                >
                  +57 {whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#EC4899] mt-1" />
                <span>contacto@zoni.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#EC4899] mt-1" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              © {currentYear} ZONI. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              Hecho con <span className="text-[#EC4899]">❤</span> en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
