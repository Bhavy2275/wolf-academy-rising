import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-gym.jpg';
import wolfLogo from '@/assets/wolf-logo.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wolf Academy Training Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src={wolfLogo}
            alt="Wolf Academy India Logo"
            className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full border-4 border-primary glow-gold-intense object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 tracking-tight"
        >
          WHERE GOALS BECOME
          <span className="block text-gradient-gold text-shadow-gold">REALITY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Delhi's Premier Combat Sports Academy. Train MMA, Boxing, BJJ, Muay Thai 
          with National Champions. Unleash your inner warrior.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-gold text-primary-foreground font-heading text-lg tracking-widest rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 animate-glow-pulse"
          >
            <span className="relative z-10">JOIN THE PACK</span>
            <div className="absolute inset-0 bg-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#disciplines"
            className="inline-flex items-center justify-center px-10 py-5 border-2 border-primary text-primary font-heading text-lg tracking-widest rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            EXPLORE PROGRAMS
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '5+', label: 'Disciplines' },
            { value: '4x', label: 'National Gold' },
            { value: '500+', label: 'Athletes Trained' },
            { value: '3+', label: 'Age Groups' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-heading text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
              <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
