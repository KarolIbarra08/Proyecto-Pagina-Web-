import { motion } from 'motion/react';
import { Heart, Users, Award, Sparkles } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Pasión',
      description: 'Amor por cada puntada y detalle en nuestras creaciones',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Cercanía',
      description: 'Trabajamos mano a mano contigo para crear tu diseño perfecto',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Calidad',
      description: 'Materiales premium y confección artesanal en cada pieza',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Exclusividad',
      description: 'Diseños únicos que reflejan tu personalidad',
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
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
            Sobre <span className="text-[#EC4899]">ZONI</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Una historia de pasión, dedicación y amor por el diseño y la confección personalizada.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 md:p-12 mb-16 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-3xl mb-6"
                style={{ fontFamily: 'var(--font-elegant)' }}
              >
                Nuestra <span className="text-[#EC4899]">Historia</span>
              </h3>
              <div
                className="space-y-4 text-gray-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <p>
                  ZONI es una empresa creada por <strong>Sonia Narváez Muñoz</strong>, una mujer de 44 años, 
                  caracterizada por ser emprendedora, perseverante y luchadora. Nació en la ciudad de Cali, 
                  donde inició su experiencia laboral en una empresa de confección.
                </p>
                <p>
                  Fue allí donde descubrió su pasión por el diseño y la elaboración de prendas, 
                  motivándose a aprender cada día más y a formarse profesionalmente en el área 
                  hasta comenzar su camino como diseñadora.
                </p>
                <p>
                  Gracias a su dedicación, esfuerzo constante y espíritu emprendedor, logró consolidar 
                  su propio taller de confección, el cual actualmente cuenta con una amplia variedad de 
                  maquinaria especializada: máquinas planas, estampadoras, bordadoras, collarín y 
                  fileteadora, lo que le permite ofrecer productos de alta calidad y totalmente 
                  personalizados.
                </p>
                <p>
                  En la actualidad, ZONI se encuentra ubicada en el municipio de <strong>Piendamó - Cauca</strong>, 
                  desde donde continúa creciendo como una empresa comprometida con la creatividad, 
                  la calidad artesanal y la satisfacción de sus clientes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <p className="text-4xl text-[#EC4899] mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                  500+
                </p>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  Clientes Felices
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <p className="text-4xl text-[#EC4899] mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                  100%
                </p>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  Personalizable
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <p className="text-4xl text-[#EC4899] mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                  1000+
                </p>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  Diseños Creados
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <p className="text-4xl text-[#EC4899] mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                  5★
                </p>
                <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  Calificación
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-[#EC4899] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4
                  className="text-xl mb-3"
                  style={{ fontFamily: 'var(--font-elegant)' }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-gray-600 text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}