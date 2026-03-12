import { motion } from 'motion/react';
import { useState } from 'react';
import { Shirt, Baby, GraduationCap, Heart, PawPrint } from 'lucide-react';
import { CatalogModal } from './CatalogModal';

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface CategoriesSectionProps {
  images: {
    womenDress: string;
    girlDress: string;
    uniform: string;
    plush: string;
    petClothes: string;
  };
}

export function CategoriesSection({ images }: CategoriesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const catalogData = {
    'Vestidos para Mujer': [
      { name: 'Vestido de Gala Elegante', material: 'Tela Suplex', image: 'imagenes/VESTIDOMUJERUNO.jpeg' },
      { name: 'Vestido de Gala para fiesta', material: 'Seda y Encaje', image:'imagenes/VESTIDODOMUJERDOS.jpeg' },
    ],
    'Vestidos para Niñas': [
      { name: 'Vestido Princesa Azul', material: 'Tul y Satén', image: 'imagenes/VESTIDONIÑAUNO.jpeg' },
      { name: 'Vestido de Fiesta Infantil', material: 'Algodón con Bordados', image: 'imagenes/VESTIDONIÑADOS.jpeg' },
    ],
    'Uniformes': [
      { name: 'Uniforme Escolar', material: 'Dacron Antifluido', image: 'imagenes/UNIFORMEOASIS.jpeg' },
      { name: 'Uniforme Corporativo', material: 'Drill Stretch', image: 'imagenes/UNIFORMEMADREDEDIOS.jpeg' },
    ],
    'Peluches Personalizados': [
      { name: 'Capibara', material: 'Felpa Premium', image: 'imagenes/CAPIBARA.jpeg' },
      { name: 'Peluche Personalizado', material: 'Felpa Suave', image: 'imagenes/MUÑECOS.jpeg' },
    ],
    'Ropa para Mascotas': [
      { name: 'Sueter para Perro', material: 'Lana Polar', image: 'imagenes/ROPAPERROSDOS.jpeg' },
      { name: 'Ropa Elegante para Mascota', material: 'Algodón Premium', image: 'imagenes/ROPAPERROUNO.jpeg' },
    ],
  };

  const categories: Category[] = [
    {
      title: 'Vestidos para Mujer',
      description: 'Diseños elegantes y personalizados para cada ocasión especial',
      icon: <Shirt className="w-8 h-8" />,
      image: images.womenDress,
    },
    {
      title: 'Vestidos para Niñas',
      description: 'Creaciones únicas llenas de color y fantasía para las más pequeñas',
      icon: <Baby className="w-8 h-8" />,
      image: images.girlDress,
    },
    {
      title: 'Uniformes',
      description: 'Escolares, universitarios y corporativos. Calidad y profesionalismo',
      icon: <GraduationCap className="w-8 h-8" />,
      image: images.uniform,
    },
    {
      title: 'Peluches Personalizados',
      description: 'Compañeros suaves y tiernos diseñados con amor',
      icon: <Heart className="w-8 h-8" />,
      image: images.plush,
    },
    {
      title: 'Ropa para Mascotas',
      description: 'Prendas cómodas y adorables para tus mejores amigos',
      icon: <PawPrint className="w-8 h-8" />,
      image: images.petClothes,
    },
  ];

  return (
    <section id="catalogo" className="py-24 bg-white">
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
            Nuestro <span className="text-[#EC4899]">Catálogo</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Descubre nuestra amplia gama de productos diseñados especialmente para ti
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCategory(category.title)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#EC4899] p-2 rounded-full">
                      {category.icon}
                    </div>
                    <h3
                      className="text-2xl"
                      style={{ fontFamily: 'var(--font-elegant)' }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm text-gray-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {category.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute top-4 right-4 bg-white text-[#EC4899] px-4 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Ver más
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Catalog Modal */}
      <CatalogModal
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        category={selectedCategory || ''}
        products={selectedCategory ? catalogData[selectedCategory as keyof typeof catalogData] : []}
      />
    </section>
  );
}