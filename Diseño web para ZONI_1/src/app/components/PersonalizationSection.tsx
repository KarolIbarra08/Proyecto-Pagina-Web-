import { motion } from 'motion/react';
import { Ruler, Palette, Sparkles, CheckCircle } from 'lucide-react';

export function PersonalizationSection() {
  const features = [
    {
      icon: <Ruler className="w-12 h-12" />,
      title: 'Talla Perfecta',
      description: 'Ajustamos cada prenda a tus medidas exactas para un calce perfecto',
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Color a Elección',
      description: 'Elige entre una amplia gama de colores o solicita tu tono favorito',
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Diseño Único',
      description: 'Personaliza detalles, bordados y acabados según tu estilo',
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Calidad Garantizada',
      description: 'Materiales premium y confección artesanal en cada pieza',
    },
  ];

  const steps = [
    'Consulta y asesoría personalizada',
    'Selección de diseño y materiales',
    'Toma de medidas y ajustes',
    'Confección artesanal',
    'Entrega de tu pieza única',
  ];

  return (
    <section id="personalizacion" className="py-24 bg-gradient-to-br from-pink-50 to-white">
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
            <span className="text-[#EC4899]">Personalización</span> Total
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Cada producto ZONI es creado especialmente para ti. Tu visión, nuestra experiencia.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="text-[#EC4899] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: 'var(--font-elegant)' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h3
            className="text-3xl mb-8 text-center"
            style={{ fontFamily: 'var(--font-elegant)' }}
          >
            Nuestro <span className="text-[#EC4899]">Proceso</span>
          </h3>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#EC4899] text-white rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {index + 1}
                </div>
                <p
                  className="text-lg text-gray-700"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {step}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
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
              Comienza tu diseño
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
