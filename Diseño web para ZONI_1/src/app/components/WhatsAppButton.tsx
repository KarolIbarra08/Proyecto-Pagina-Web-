import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = '3103980187';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Mostrar el botón después de 2 segundos
    setTimeout(() => setIsVisible(true), 2000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const message = '¡Hola ZONI! Me gustaría obtener más información sobre sus servicios de confección personalizada.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
            aria-label="Contactar por WhatsApp"
          >
            {/* Icon Container */}
            <div className="p-4">
              <MessageCircle className="w-7 h-7" />
            </div>

            {/* Expandable Text */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pr-4 whitespace-nowrap overflow-hidden"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Chatea con nosotros
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse Animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-green-500 rounded-full"
            />
          </button>

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-2 -right-2 bg-[#EC4899] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-lg"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            1
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
