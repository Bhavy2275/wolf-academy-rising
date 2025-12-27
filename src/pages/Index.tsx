import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Disciplines from '@/components/Disciplines';
import Gallery from '@/components/Gallery';
import Schedule from '@/components/Schedule';
import OfferBanner from '@/components/OfferBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Disciplines />
      <Gallery />
      <OfferBanner />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
