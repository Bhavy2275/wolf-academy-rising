import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const disciplines = [
  {
    name: 'MMA',
    fullName: 'Mixed Martial Arts',
    description: 'Complete combat system combining striking, grappling, and ground fighting. Train like a UFC pro.',
    color: 'from-red-500/20 to-transparent',
    stats: ['Striking', 'Grappling', 'Submissions'],
  },
  {
    name: 'BJJ',
    fullName: 'Brazilian Jiu-Jitsu',
    description: 'The gentle art of ground control. Learn to submit opponents regardless of size or strength.',
    color: 'from-blue-500/20 to-transparent',
    stats: ['Ground Game', 'Submissions', 'Defense'],
  },
  {
    name: 'BOXING',
    fullName: 'Western Boxing',
    description: 'The sweet science. Develop devastating hands, footwork, and ring IQ with champion coaches.',
    color: 'from-primary/20 to-transparent',
    stats: ['Power Punches', 'Footwork', 'Defense'],
  },
  {
    name: 'MUAY THAI',
    fullName: 'Thai Boxing',
    description: 'The art of eight limbs. Master kicks, knees, elbows, and the clinch game.',
    color: 'from-orange-500/20 to-transparent',
    stats: ['8 Limbs', 'Clinch', 'Power'],
  },
  {
    name: 'S&C',
    fullName: 'Strength & Conditioning',
    description: 'Athletic performance training designed to build fighters. Explosive power meets endurance.',
    color: 'from-green-500/20 to-transparent',
    stats: ['Strength', 'Explosiveness', 'Endurance'],
  },
];

export default function Disciplines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="disciplines" className="py-24 bg-background relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-sm tracking-[0.3em] text-primary mb-4">WHAT WE TEACH</h2>
          <h3 className="font-heading text-4xl md:text-6xl text-foreground">
            MASTER YOUR <span className="text-gradient-gold">DISCIPLINE</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-radial ${discipline.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8">
                <div className="mb-6">
                  <h4 className="font-heading text-4xl md:text-5xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {discipline.name}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mt-1">{discipline.fullName}</p>
                </div>

                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {discipline.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {discipline.stats.map((stat) => (
                    <span
                      key={stat}
                      className="px-3 py-1 text-xs font-heading tracking-wider bg-surface-elevated border border-border rounded-full text-muted-foreground"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 font-heading text-sm tracking-wider text-primary group-hover:text-gold-light transition-colors"
                >
                  START TRAINING
                  <svg
                    className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 scale-[1.02] group-hover:scale-100 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
