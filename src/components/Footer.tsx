import { Phone, Mail, Instagram, MapPin, Facebook } from 'lucide-react';
import wolfLogo from '@/assets/wolf-logo.jpg';

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const quickLinks = [
  { name: 'About Us', href: '/#about' },
  { name: 'Disciplines', href: '/#disciplines' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Schedule', href: '/#schedule' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={wolfLogo}
                alt="Wolf Academy India"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h4 className="font-heading text-2xl text-foreground">
                  WOLF <span className="text-primary">ACADEMY</span>
                </h4>
                <p className="font-body text-sm text-muted-foreground">JOIN THE PACK</p>
              </div>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed max-w-md mb-6">
              Bangalore's premier combat sports academy. Training champions in MMA, Boxing,
              BJJ, and Muay Thai. Where goals become reality.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/wolf_academy_india?igsh=MWF4Y2FlN3V3cjFtdg=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-elevated border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576344864392&mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-elevated border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/919319812158"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-surface-elevated border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="WhatsApp"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'whatsapp_click', {
                      event_category: 'conversion',
                      event_label: 'footer_social'
                    });
                  }
                }}
              >
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading text-lg text-foreground mb-6">QUICK LINKS</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-heading text-lg text-foreground mb-6">CONTACT</h5>
            <ul className="space-y-4">
              <li>
                <a href="tel:9319812158" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} />
                  <span className="font-body">+91 9319812158</span>
                </a>
              </li>
              <li>
                <a href="mailto:wolfacademyindia@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} />
                  <span className="font-body text-sm">wolfacademyindia@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/wolf_academy_india?igsh=MWF4Y2FlN3V3cjFtdg==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={18} />
                  <span className="font-body">@wolf_academy_india</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="font-body text-sm">The School of Raya Hennaur, Bagalur Road, Dasanayakanahalli, Bengaluru - 562149</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-body text-sm text-muted-foreground">
                © {new Date().getFullYear()} Wolf Academy India. All rights reserved.
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Proudly serving Dasanayakanahalli, Bagalur Road, and North Bangalore.
              </p>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              Train Hard. <span className="text-primary">Fight Easy.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
