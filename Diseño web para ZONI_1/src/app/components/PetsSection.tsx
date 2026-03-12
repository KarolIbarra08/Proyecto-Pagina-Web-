import { motion } from 'motion/react';
import { PawPrint, Heart, Shirt, Star } from 'lucide-react';

interface PetsSectionProps {
  petImage: string;
}

export function PetsSection({ petImage }: PetsSectionProps) {
  const features = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Ropa Cómoda',
      description: 'Diseños pensados para el confort de tu mascota',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Hechos con Amor',
      description: 'Cada prenda es confeccionada con materiales suaves',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Diseños Únicos',
      description: 'Personaliza el estilo de tu mejor amigo',
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: 'Todas las Tallas',
      description: 'Para perros y gatos de todos los tamaños',
    },
  ];

  return (
    <section id="mascotas" className="py-24 bg-gradient-to-br from-pink-50 to-white">
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
            Ropa para <span className="text-[#EC4899]">Mascotas</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Porque tu mejor amigo también merece lucir único y adorable
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={petImage}
                alt="Ropa para mascotas"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <PawPrint className="w-8 h-8 text-[#EC4899]" />
                  <div>
                    <p className="text-2xl" style={{ fontFamily: 'var(--font-elegant)' }}>
                      <span className="text-[#EC4899]">Confort</span>
                    </p>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
                      y estilo
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
                Moda <span className="text-[#EC4899]">Perruna</span>
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Confeccionamos ropa adorable y funcional para tus mascotas. Desde abrigos 
                para días fríos hasta vestidos y camisetas personalizadas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="text-[#EC4899] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
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
                Diseña para tu mascota
              </a>
            </div>
          </motion.div>
        </div>

        {/* Product Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3
            className="text-3xl mb-8 text-center"
            style={{ fontFamily: 'var(--font-elegant)' }}
          >
            Productos para <span className="text-[#EC4899]">Mascotas</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-10 h-10 text-[#EC4899]" />
              </div>
              <h4 className="text-xl mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                Ropa
              </h4>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Camisetas, vestidos, suéteres y abrigos
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-[#EC4899]" />
              </div>
              <h4 className="text-xl mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                Accesorios
              </h4>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Collares, bandanas y lazos personalizados
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PawPrint className="w-10 h-10 text-[#EC4899]" />
              </div>
              <h4 className="text-xl mb-2" style={{ fontFamily: 'var(--font-elegant)' }}>
                Especiales
              </h4>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Disfraces y prendas para ocasiones especiales
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
