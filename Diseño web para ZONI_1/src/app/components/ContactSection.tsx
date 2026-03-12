import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const whatsappNumber = '3103980187';

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Teléfono debe tener 10 dígitos';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Crear mensaje para WhatsApp
      const message = `Hola ZONI! 👋\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Limpiar formulario
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Limpiar error del campo al escribir
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleWhatsAppClick = () => {
    const message = '¡Hola ZONI! Me gustaría obtener más información sobre sus servicios de confección personalizada.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-white">
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
            <span className="text-[#EC4899]">Contáctanos</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Estamos aquí para hacer realidad tus diseños. Escríbenos y te asesoraremos personalmente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-3xl mb-6"
                style={{ fontFamily: 'var(--font-elegant)' }}
              >
                Hablemos de tu <span className="text-[#EC4899]">proyecto</span>
              </h3>
              <p
                className="text-gray-600 mb-8"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Cada diseño comienza con una conversación. Cuéntanos tu visión y la haremos realidad.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#EC4899] text-white p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1" style={{ fontFamily: 'var(--font-elegant)' }}>
                    WhatsApp
                  </h4>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#EC4899] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    +57 {whatsappNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#EC4899] text-white p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1" style={{ fontFamily: 'var(--font-elegant)' }}>
                    Email
                  </h4>
                  <a
                    href="mailto:kt.ibarra@unimayor.edu.co"
                    className="text-gray-600 hover:text-[#EC4899] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    kt.ibarra@unimayor.edu.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#EC4899] text-white p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg mb-1" style={{ fontFamily: 'var(--font-elegant)' }}>
                    Ubicación
                  </h4>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-sans)' }}>
                    Piendamó - Cauca
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <MessageCircle className="w-6 h-6" />
              Chatea con nosotros en WhatsApp
            </button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 outline-none transition-all`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 outline-none transition-all`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 outline-none transition-all`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:border-[#EC4899] focus:ring-2 focus:ring-[#EC4899]/20 outline-none transition-all resize-none`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#EC4899] text-white px-8 py-4 rounded-full hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <Send className="w-5 h-5" />
                Enviar mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}