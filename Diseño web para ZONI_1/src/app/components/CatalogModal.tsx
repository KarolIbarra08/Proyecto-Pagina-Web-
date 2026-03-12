import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface Product {
  name: string;
  material: string;
  image: string;
}

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  products: Product[];
}

export function CatalogModal({ isOpen, onClose, category, products }: CatalogModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FFC0CB] to-[#EC4899] p-6 flex justify-between items-center">
            <h2
              className="text-3xl text-white"
              style={{ fontFamily: 'var(--font-elegant)' }}
            >
              {category}
            </h2>
            <button
              onClick={onClose}
              className="bg-white text-[#EC4899] w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-pink-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3
                      className="text-xl mb-2 text-[#EC4899]"
                      style={{ fontFamily: 'var(--font-elegant)' }}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span
                        className="text-sm"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        <strong>Material:</strong> {product.material}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
