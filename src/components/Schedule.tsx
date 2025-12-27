import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const scheduleData = {
  'Ages 3-7': [
    { day: 'Mon', time: '4:00 PM', class: 'Little Warriors (MMA Basics)' },
    { day: 'Wed', time: '4:00 PM', class: 'Little Warriors (MMA Basics)' },
    { day: 'Sat', time: '10:00 AM', class: 'Kids Fun Fitness' },
  ],
  'Ages 7-13': [
    { day: 'Mon', time: '5:00 PM', class: 'Kids MMA' },
    { day: 'Tue', time: '5:00 PM', class: 'Kids Boxing' },
    { day: 'Wed', time: '5:00 PM', class: 'Kids MMA' },
    { day: 'Thu', time: '5:00 PM', class: 'Kids BJJ' },
    { day: 'Fri', time: '5:00 PM', class: 'Kids Muay Thai' },
    { day: 'Sat', time: '11:00 AM', class: 'Kids All Styles' },
  ],
  'Adults': [
    { day: 'Mon', time: '6:30 AM', class: 'Morning Striking' },
    { day: 'Mon', time: '7:00 PM', class: 'MMA' },
    { day: 'Tue', time: '7:00 PM', class: 'Boxing' },
    { day: 'Wed', time: '6:30 AM', class: 'BJJ Fundamentals' },
    { day: 'Wed', time: '7:00 PM', class: 'Muay Thai' },
    { day: 'Thu', time: '7:00 PM', class: 'BJJ' },
    { day: 'Fri', time: '7:00 PM', class: 'Open Mat / Sparring' },
    { day: 'Sat', time: '9:00 AM', class: 'S&C / Conditioning' },
    { day: 'Sun', time: '10:00 AM', class: 'Open Training' },
  ],
};

type AgeGroup = keyof typeof scheduleData;

export default function Schedule() {
  const [activeTab, setActiveTab] = useState<AgeGroup>('Adults');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="schedule" className="py-24 bg-background relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-sm tracking-[0.3em] text-primary mb-4">CLASS TIMES</h2>
          <h3 className="font-heading text-4xl md:text-6xl text-foreground">
            WEEKLY <span className="text-gradient-gold">SCHEDULE</span>
          </h3>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(Object.keys(scheduleData) as AgeGroup[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 font-heading text-sm tracking-widest rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-gold text-primary-foreground glow-gold'
                  : 'bg-surface-elevated border border-border text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          key={activeTab}
          className="max-w-4xl mx-auto"
        >
          <div className="grid gap-4">
            {scheduleData[activeTab].map((item, index) => (
              <motion.div
                key={`${item.day}-${item.time}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-surface-elevated rounded-lg group-hover:bg-primary/10 transition-colors">
                    <span className="font-heading text-lg text-primary">{item.day}</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.class}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 font-heading text-xs tracking-wider text-primary border border-primary rounded-lg opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  BOOK NOW
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * Schedule subject to change. Contact us for private training sessions.
        </motion.p>
      </div>
    </section>
  );
}
