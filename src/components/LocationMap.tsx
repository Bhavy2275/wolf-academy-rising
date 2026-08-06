import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function LocationMap() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="py-24 bg-surface relative">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-heading text-sm tracking-[0.3em] text-primary mb-4">FIND US</h2>
                    <h3 className="font-heading text-4xl md:text-6xl text-foreground">
                        OUR <span className="text-gradient-gold">LOCATION</span>
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full h-[450px] rounded-2xl overflow-hidden border border-border shadow-2xl relative"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.699615325935!2d77.668891!3d13.118206099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1b4c9a966e0f%3A0xa986bfb8a1671073!2sWolfacademyindia!5e0!3m2!1sen!2sin!4v1766926964144!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Wolf Academy India Location"
                    ></iframe>

                </motion.div>
            </div>
        </section>
    );
}
