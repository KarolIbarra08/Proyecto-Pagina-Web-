import { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoriesSection } from './components/CategoriesSection';
import { PersonalizationSection } from './components/PersonalizationSection';
import { UniformsSection } from './components/UniformsSection';
import { PlushSection } from './components/PlushSection';
import { PetsSection } from './components/PetsSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Rutas absolutas desde public
  const images = {
    hero: '/imagenes/DISEÑADORA.jpeg',
    womenDress: '/imagenes/VESTIDOMUJERUNO.jpeg',
    girlDress: '/imagenes/VESTIDONIÑAUNO.jpeg',
    uniform: '/imagenes/UNIFORMEOASIS.jpeg', 
    plush: '/imagenes/CAPIBARA.jpeg',
    petClothes: '/imagenes/ROPAPERROUNO.jpeg',
    corporate: '/imagenes/UNIFORMEMADREDEDIOS.jpeg',
  };

  const designs = [
    {
      name: 'Vestido de Noche Elegante',
      material: 'Seda y Encaje',
      image: '/imagenes/VESTIDOMUJERUNO.jpeg',
    },
    {
      name: 'Vestido de Fiesta Infantil',
      material: 'Tul y Satén',
      image: '/imagenes/VESTIDONIÑADOS.jpeg',
    },
    {
      name: 'Uniforme Escolar Completo',
      material: 'Dacron Antifluido',
      image: '/imagenes/UNIFORMEOASIS.jpeg',
    },
    {
      name: 'Peluche Personalizado',
      material: 'Felpa Premium',
      image: '/imagenes/CAPIBARA.jpeg',
    },
    {
      name: 'Ropa para Mascota',
      material: 'Lana Polar',
      image: '/imagenes/ROPAPERROUNO.jpeg',
    },
    {
      name: 'Vestido de Gala',
      material: 'Satén y Chiffon',
      image: '/imagenes/VESTIDODOMUJERDOS.jpeg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection heroImage={images.hero} />

        <CategoriesSection
          images={{
            womenDress: images.womenDress,
            girlDress: images.girlDress,
            uniform: images.uniform, //
            plush: images.plush,
            petClothes: images.petClothes,
          }}
        />

        <PersonalizationSection />

        <GallerySection designs={designs} />

        <UniformsSection
          uniformImage="/imagenes/UNIFORMEOASIS.jpeg"
          corporateImage="/imagenes/UNIFORMEMADREDEDIOS.jpeg"
        />

        <PlushSection plushImage={images.plush} />

        <PetsSection petImage={images.petClothes} />

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}