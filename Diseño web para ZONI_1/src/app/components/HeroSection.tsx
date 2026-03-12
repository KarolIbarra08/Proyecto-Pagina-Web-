import { motion } from 'motion/react';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl"
              style={{ fontFamily: 'var(--font-elegant)' }}
            >
              <span className="text-black">Diseños que</span>
              <br />
              <span className="text-[#EC4899]">reflejan tu esencia</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Confección personalizada de ropa femenina, vestidos únicos, uniformes y más. 
              Cada pieza es diseñada especialmente para ti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('#personalizacion')}
                className="bg-[#EC4899] text-white px-8 py-4 rounded-full text-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Personaliza tu diseño
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Vestidos elegantes ZONI"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <p className="text-3xl" style={{ fontFamily: 'var(--font-elegant)' }}>
                <span className="text-[#EC4899]">100%</span>
              </p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
                Personalizable
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFC0CB] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#EC4899] rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}
