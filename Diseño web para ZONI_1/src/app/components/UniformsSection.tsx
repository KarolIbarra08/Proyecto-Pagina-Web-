import { motion } from 'framer-motion';
import { Building, School, Briefcase, Users, GraduationCap, Sparkles, CheckCircle } from 'lucide-react';

interface UniformsSectionProps {
  uniformImage: string;      
  corporateImage: string;   
}

export function UniformsSection({ uniformImage, corporateImage }: UniformsSectionProps) {
  const uniformTypes = [
    {
      icon: <School className="w-8 h-8" />,
      title: 'Uniformes Escolares',
      description: 'Para preescolar, primaria y secundaria. Diseños cómodos y duraderos.',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Uniformes Universitarios',
      description: 'Profesionales y elegantes para instituciones de educación superior.',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Uniformes Corporativos',
      description: 'Empresariales y profesionales que reflejan la identidad de tu marca.',
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Entidades Públicas y Privadas',
      description: 'Uniformes especializados para instituciones y organizaciones.',
    },
  ];

  return (
    <section id="uniformes" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-elegant)' }}>
            <span className="text-[#EC4899]">Uniformes</span> Profesionales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-sans)' }}>
            Confección de uniformes para hombre y mujer con los más altos estándares de calidad
          </p>
        </motion.div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Imágenes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Uniforme Escolar */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={uniformImage} 
                alt="Uniformes escolares"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl" style={{ fontFamily: 'var(--font-elegant)' }}>
                  Uniformes Escolares
                </p>
              </div>
            </div>

            {/* Uniforme Corporativo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={corporateImage}  
                alt="Uniformes corporativos"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl" style={{ fontFamily: 'var(--font-elegant)' }}>
                  Uniformes Corporativos
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tipos de uniformes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {uniformTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-[#EC4899] group-hover:text-black transition-colors duration-300">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                      {type.title}
                    </h3>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                      {type.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#EC4899] text-white rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>Hombre y Mujer</h4>
              <p className="text-pink-100" style={{ fontFamily: 'var(--font-sans)' }}>Diseños adaptados para todos</p>
            </div>
            <div>
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>Personalización</h4>
              <p className="text-pink-100" style={{ fontFamily: 'var(--font-sans)' }}>Bordados y logos a medida</p>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>Calidad Premium</h4>
              <p className="text-pink-100" style={{ fontFamily: 'var(--font-sans)' }}>Telas resistentes y duraderas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}