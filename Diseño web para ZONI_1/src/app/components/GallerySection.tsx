import { motion } from 'motion/react';
import { useState } from 'react';

interface Design {
  name: string;
  material: string;
  image: string;
}

interface GallerySectionProps {
  designs: Design[];
}

export function GallerySection({ designs }: GallerySectionProps) {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-white">
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
            Nuestros <span className="text-[#EC4899]">Diseños</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Explora algunos de los diseños que hemos creado con amor para nuestros clientes
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={design.image}
                  alt={design.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Design Info - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className="text-xl mb-1"
                    style={{ fontFamily: 'var(--font-elegant)' }}
                  >
                    {design.name}
                  </h3>
                  <p
                    className="text-sm text-gray-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Material: {design.material}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <div className="bg-white text-[#EC4899] px-6 py-3 rounded-full" style={{ fontFamily: 'var(--font-sans)' }}>
                    Ver más
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for selected design */}
        {selectedDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDesign(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
            >
              <img
                src={selectedDesign.image}
                alt={selectedDesign.name}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              <div className="p-6 bg-gradient-to-r from-pink-50 to-white">
                <h3
                  className="text-2xl mb-2 text-[#EC4899]"
                  style={{ fontFamily: 'var(--font-elegant)' }}
                >
                  {selectedDesign.name}
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <strong>Material:</strong> {selectedDesign.material}
                </p>
              </div>
              <button
                className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#EC4899] hover:text-white transition-colors duration-300"
                onClick={() => setSelectedDesign(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}