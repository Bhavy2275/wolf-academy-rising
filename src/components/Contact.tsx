import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const disciplines = ['MMA', 'Boxing', 'BJJ', 'Muay Thai', 'Strength & Conditioning', 'Kids MMA'];
const inquiryTypes = ['Pricing', 'Schedule', 'Personal Training', 'Trial Class', 'Other'];

export default function Contact() {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    discipline: '',
    inquiry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const FORMSPREE_ID = 'xdaovpjz';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_form_submit', {
            event_category: 'conversion',
            event_label: formData.discipline,
            inquiry_type: formData.inquiry
          });
        }
        toast({
          title: "Inquiry Sent!",
          description: "We've received your message and will get back to you shortly.",
        });
        setFormData({ name: '', phone: '', discipline: '', inquiry: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly via phone.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface relative">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-sm tracking-[0.3em] text-primary mb-4">GET IN TOUCH</h2>
            <h3 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              START YOUR <span className="text-gradient-gold">JOURNEY</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
              Ready to transform your life through martial arts? Book your free trial class
              or ask us anything. Our team typically responds within 24 hours.
            </p>

            <div className="space-y-6 mb-10">
              <a
                href="tel:9319812158"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-heading text-sm text-muted-foreground">Call Us</p>
                  <p className="font-heading text-lg text-foreground">+91 9319812158</p>
                </div>
              </a>

              <a
                href="mailto:wolfacademyindia@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-heading text-sm text-muted-foreground">Email Us</p>
                  <p className="font-heading text-lg text-foreground">wolfacademyindia@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/wolf_academy_india?igsh=MWF4Y2FlN3V3cjFtdg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="font-heading text-sm text-muted-foreground">Follow Us</p>
                  <p className="font-heading text-lg text-foreground">@wolf_academy_india</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-heading text-sm text-muted-foreground">Location</p>
                  <p className="font-heading text-lg text-foreground">Bangalore, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-card border border-border rounded-2xl">
              <h4 className="font-heading text-2xl text-foreground mb-6">Book Your Free Class</h4>

              <div className="space-y-5">
                <div>
                  <label className="font-heading text-sm text-muted-foreground block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="font-heading text-sm text-muted-foreground block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="font-heading text-sm text-muted-foreground block mb-2">
                    Select Discipline *
                  </label>
                  <select
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Choose a discipline</option>
                    {disciplines.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-heading text-sm text-muted-foreground block mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-heading text-sm text-muted-foreground block mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-heading text-lg tracking-wider rounded-lg glow-gold hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
