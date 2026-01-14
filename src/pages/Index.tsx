import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Disciplines from '@/components/Disciplines';
import Gallery from '@/components/Gallery';
import Schedule from '@/components/Schedule';
import LocationMap from '@/components/LocationMap';
import OfferBanner from '@/components/OfferBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import FAQ from '@/components/FAQ';

import GoogleReviews from '@/components/GoogleReviews';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Home"
        description="Bangalore's premier combat sports academy. Train with National Champions in MMA, Boxing, BJJ, Muay Thai. Kids & Adult programs available."
        keywords="MMA Bangalore, Boxing classes, BJJ training, Muay Thai, Kids MMA, Wolf Academy"
      />
      <Header />
      <Hero />
      <About />
      <Disciplines />
      <Gallery />
      <OfferBanner />
      <GoogleReviews />
      <Schedule />
      <LocationMap />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
