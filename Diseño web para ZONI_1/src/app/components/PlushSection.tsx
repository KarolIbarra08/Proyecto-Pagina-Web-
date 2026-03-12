import { motion } from 'motion/react';
import { Heart, Gift, Sparkles, Star } from 'lucide-react';

interface PlushSectionProps {
  plushImage: string;
}

export function PlushSection({ plushImage }: PlushSectionProps) {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hechos con Amor',
      description: 'Cada peluche es confeccionado a mano con dedicación',
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Regalo Perfecto',
      description: 'Ideal para ocasiones especiales y momentos únicos',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Personalizable',
      description: 'Agrega nombres, colores y detalles especiales',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Materiales Premium',
      description: 'Suaves, seguros y de la más alta calidad',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-elegant)' }}
          >
            Peluches <span className="text-[#EC4899]">Personalizados</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Compañeros suaves y tiernos diseñados especialmente para ti o tus seres queridos
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3
                className="text-3xl mb-4"
                style={{ fontFamily: 'var(--font-elegant)' }}
              >
                Compañeros <span className="text-[#EC4899]">Especiales</span>
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Nuestros peluches personalizados son perfectos para regalar en cumpleaños, 
                baby showers, aniversarios o simplemente para demostrar tu cariño. 
                Cada uno es único y está lleno de amor.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 text-[#EC4899]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4
                      className="text-lg mb-2"
                      style={{ fontFamily: 'var(--font-elegant)' }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-[#EC4899] text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Ordena tu peluche
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={plushImage}
                alt="Peluches personalizados"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#EC4899]/30 to-transparent"></div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-6 right-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-[#EC4899]" />
                  <div>
                    <p className="text-2xl" style={{ fontFamily: 'var(--font-elegant)' }}>
                      <span className="text-[#EC4899]">100%</span>
                    </p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
                      Handmade
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-full shadow-xl"
              >
                <p className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  ⭐ <span className="text-[#EC4899]">Materiales hipoalergénicos</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Options Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3
            className="text-3xl mb-8 text-center"
            style={{ fontFamily: 'var(--font-elegant)' }}
          >
            Opciones de <span className="text-[#EC4899]">Personalización</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">🐻</span>
              </div>
              <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                Animales
              </h4>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Osos, conejos, perros y más
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">🎨</span>
              </div>
              <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                Colores
              </h4>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Elige tus colores favoritos
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">✨</span>
              </div>
              <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                Bordados
              </h4>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Nombres y mensajes especiales
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">👗</span>
              </div>
              <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                Vestuario
              </h4>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Ropa y accesorios únicos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
