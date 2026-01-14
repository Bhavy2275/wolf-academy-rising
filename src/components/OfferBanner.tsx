import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';

export default function OfferBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Animated Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="section-container relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-4 bg-primary/20 rounded-full"
            >
              <Zap size={40} className="text-primary" />
            </motion.div>
            <div>
              <h3 className="font-heading text-3xl md:text-5xl text-foreground">
                LIMITED-TIME <span className="text-gradient-gold">OFFER</span>
              </h3>
              <p className="font-body text-lg text-muted-foreground mt-2">
                Start your journey with zero commitment
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="font-heading text-3xl sm:text-5xl md:text-7xl text-primary animate-pulse mb-2 break-words">
              FIRST CLASS FREE
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-10 py-4 bg-gradient-gold text-primary-foreground font-heading text-base sm:text-lg tracking-widest rounded-lg glow-gold-intense hover:scale-105 transition-transform duration-300"
            >
              CLAIM NOW
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
