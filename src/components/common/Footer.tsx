import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'footer_home', label: 'Home', href: '/homepage' },
    { id: 'footer_services', label: 'Services', href: '/homepage#services' },
    { id: 'footer_astrologers', label: 'Astrologers', href: '/homepage#astrologers' },
    { id: 'footer_contact', label: 'Contact', href: '/homepage#contact' },
  ];

  const importantLinks = [
    { id: 'footer_about', label: 'About Us', href: '#' },
    { id: 'footer_privacy', label: 'Privacy Policy', href: '#' },
    { id: 'footer_terms', label: 'Terms & Conditions', href: '#' },
    { id: 'footer_refund', label: 'Refund Policy', href: '#' },
  ];

  const socialLinks = [
    { id: 'social_instagram', icon: 'GlobeAltIcon', href: '#', label: 'Instagram' },
    { id: 'social_facebook', icon: 'GlobeAltIcon', href: '#', label: 'Facebook' },
    { id: 'social_twitter', icon: 'GlobeAltIcon', href: '#', label: 'Twitter' },
    { id: 'social_whatsapp', icon: 'ChatBubbleLeftRightIcon', href: 'https://wa.me/919876543210', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <Icon name="SparklesIcon" size={20} variant="solid" />
              </div>
              <span className="font-serif text-2xl font-semibold text-card-foreground">
                Bhavishya Darpan
              </span>
            </div>
            <p className="text-sm text-card-foreground/60 mb-4">
              Your trusted platform for authentic astrology consultations with verified experts available 24/7.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="block text-sm text-card-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Important Links</h3>
            <nav className="space-y-2">
              {importantLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="block text-sm text-card-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-card-foreground/70">
              <div className="flex items-start gap-2">
                <Icon name="PhoneIcon" size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="EnvelopeIcon" size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:hello@astrotalk.com" className="hover:text-primary transition-colors">
                  hello@astrotalk.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={16} className="mt-1 flex-shrink-0" />
                <span>123 Astrology Plaza, New Delhi - 110001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-card-foreground/60">
            © {currentYear} Bhavishya Darpan. All rights reserved. | Trusted by 10,000+ users worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}