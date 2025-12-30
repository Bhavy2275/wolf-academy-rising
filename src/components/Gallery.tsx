import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import bagsAndDummies from '../assets/bags-and-dummies.jpg';
import bags from '../assets/bags.jpg';
import barbellsPlates from '../assets/barbells-plates.jpg';
import basketball from '../assets/basketball.jpg';
import calithenicsArea from '../assets/calithenics-area.jpg';
import coachStudent from '../assets/coach-student.jpeg';
import coachStudent2 from '../assets/coach-student2.jpeg';
import cycles from '../assets/cycles.jpg';
import dumbles from '../assets/dumbles.jpg';
import heroGym from '../assets/hero-gym.jpg';
import mirrorArea from '../assets/mirror-area.jpg';
import moonboard from '../assets/moonboard.jpg';
import runningTrack from '../assets/running-track.jpg';
import seatingArea from '../assets/seating-area.jpg';
import sparring from '../assets/sparring.jpeg';
import tt from '../assets/tt.jpg';
import wholeGym from '../assets/whole-gym.jpg';

const galleryImages = [
  { src: wholeGym, alt: 'State of the art Facility', size: 'large' },
  { src: sparring, alt: 'Professional Sparring Sessions', size: 'tall' },
  { src: heroGym, alt: 'Premium Equipment', size: 'wide' },
  { src: coachStudent, alt: 'Personalized Coaching', size: 'standard' },
  { src: moonboard, alt: 'Moonboard Climbing', size: 'wide' },
  { src: runningTrack, alt: 'Indoor Running Track', size: 'wide' },
  { src: coachStudent2, alt: 'Expert Guidance', size: 'tall' },
  { src: mirrorArea, alt: 'Form Check Area', size: 'standard' },
  { src: calithenicsArea, alt: 'Calisthenics Zone', size: 'standard' },
  { src: bags, alt: 'Heavy Bags', size: 'standard' },
  { src: bagsAndDummies, alt: 'Combat Training Area', size: 'wide' },
  { src: barbellsPlates, alt: 'Free Weights', size: 'standard' },
  { src: dumbles, alt: 'Dumbbell Rack', size: 'standard' },
  { src: cycles, alt: 'Cardio Section', size: 'standard' },
  { src: seatingArea, alt: 'Lounge Area', size: 'standard' },
  { src: basketball, alt: 'Basketball Court', size: 'standard' },
  { src: tt, alt: 'Table Tennis', size: 'standard' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-24 bg-surface relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-sm tracking-[0.3em] text-primary mb-4">INSIDE THE DEN</h2>
          <h3 className="font-heading text-4xl md:text-6xl text-foreground">
            TRAIN LIKE A <span className="text-gradient-gold">CHAMPION</span>
          </h3>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grid-flow-dense">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.size === 'large' ? 'col-span-2 row-span-2' :
                image.size === 'tall' ? 'row-span-2' :
                  image.size === 'wide' ? 'col-span-2' : ''
                }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-heading text-sm tracking-wider text-foreground">{image.alt}</p>
              </div>

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-auto rounded-2xl border-2 border-primary glow-gold"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 p-2 bg-primary text-primary-foreground rounded-full hover:bg-gold-light transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
