import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Award, Target } from 'lucide-react';
import founderImage from '@/assets/founder-portrait.jpg';

const achievements = [
  { icon: Trophy, title: '4x Boxing National Gold Medalist', description: 'Dominating the national boxing circuit' },
  { icon: Medal, title: 'BJJ Gold Medalist', description: 'Bangalore Open & SJJIF Champion' },
  { icon: Award, title: 'MMA Open Championship Gold', description: 'Proven in the cage' },
  { icon: Target, title: 'Elite Combat Coach', description: 'Training champions since 2018' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="Kartike Yadav - Founder of Wolf Academy India"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 -translate-x-4 -translate-y-4 max-w-md mx-auto" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:right-12 bg-card border border-border p-6 rounded-xl shadow-xl glow-gold"
            >
              <div className="font-heading text-4xl text-primary">4x</div>
              <div className="font-body text-sm text-muted-foreground">National Champion</div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-heading text-sm tracking-[0.3em] text-primary mb-4">MEET THE FOUNDER</h2>
            <h3 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              KARTIKE <span className="text-gradient-gold">YADAV</span>
            </h3>

            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              A warrior forged through relentless competition and unwavering discipline.
              Kartike's journey from the ring to founding Wolf Academy represents his mission:
              to create world-class fighters and transform lives through combat sports.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-elevated border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <achievement.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm text-foreground">{achievement.title}</h4>
                    <p className="font-body text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2">
              <p className="font-body text-lg italic text-foreground">
                "Every champion was once a contender who refused to give up."
              </p>
              <cite className="font-heading text-sm text-primary mt-2 block">— Kartike Yadav</cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
