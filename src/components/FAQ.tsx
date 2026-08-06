import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
    {
        question: "Is Wolf Academy India suitable for complete beginners?",
        answer: "Absolutely! 90% of our students start with zero martial arts experience. Our coaches specialize in beginner-friendly training. No sparring is required until you feel ready, and we focus on building your confidence step by step."
    },
    {
        question: "Do you offer free trial classes in Bangalore?",
        answer: "Yes! We offer a completely free trial class so you can experience our training firsthand. Just fill out our contact form or call us at +91-9319812158 to book your free session."
    },
    {
        question: "What membership options are available at Wolf Academy?",
        answer: "We offer flexible membership plans to suit your schedule and budget. Choose from monthly, quarterly, or annual memberships. We also have special discounts for students and corporate groups. Contact us for current pricing."
    },
    {
        question: "Where is Wolf Academy India located in Bangalore?",
        answer: "We are located at The School of Raya Hennaur, Bagalur Road, Dasanayakanahalli, Bengaluru, Karnataka - 562149. We're easily accessible from North Bangalore and surrounding areas."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="faq" className="py-24 bg-surface relative overflow-hidden">
            <div className="section-container max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-sm tracking-[0.3em] text-primary mb-4">GOT QUESTIONS?</h2>
                    <h3 className="font-heading text-4xl md:text-5xl text-foreground">
                        FREQUENTLY <span className="text-gradient-gold">ASKED</span>
                    </h3>
                </motion.div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-card border border-border rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-elevated transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <HelpCircle size={20} className="text-primary" />
                                    </div>
                                    <span className="font-heading text-lg text-foreground pr-4">
                                        {faq.question}
                                    </span>
                                </div>
                                <ChevronDown
                                    size={24}
                                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2">
                                            <p className="font-body text-muted-foreground leading-relaxed pl-14">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="font-body text-muted-foreground mb-4">
                        Still have questions? We're here to help!
                    </p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary-foreground font-heading tracking-wider rounded-lg glow-gold hover:scale-105 transition-transform duration-300"
                    >
                        CONTACT US
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
