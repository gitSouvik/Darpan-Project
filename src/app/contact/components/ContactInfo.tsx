import Icon from '@/components/ui/AppIcon';

interface ContactDetail {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const contactDetails: ContactDetail[] = [
  {
    id: 'contact_address',
    icon: 'MapPinIcon',
    label: 'Our Location',
    value: '123 Astrology Plaza, Connaught Place, New Delhi - 110001',
  },
  {
    id: 'contact_phone',
    icon: 'PhoneIcon',
    label: 'Phone Number',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    id: 'contact_email',
    icon: 'EnvelopeIcon',
    label: 'Email Address',
    value: 'hello@astrotalk.com',
    href: 'mailto:hello@astrotalk.com',
  },
  {
    id: 'contact_whatsapp',
    icon: 'ChatBubbleLeftRightIcon',
    label: 'WhatsApp',
    value: '+91 98765 43210',
    href: 'https://wa.me/919876543210',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6 scroll-reveal will-animate delay-200">
      <div>
        <h3 className="font-serif text-2xl text-foreground mb-2 tracking-tight">
          Get In Touch
        </h3>
        <p className="text-foreground/60">
          We're here to help you 24/7. Reach out through any of these channels.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail) => (
          <div
            key={detail.id}
            className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
              <Icon name={detail.icon as any} size={24} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground/60 mb-1">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-foreground font-medium">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-4 bg-success text-success-foreground rounded-full font-semibold hover:bg-success/90 transition-all shadow-lg hover:shadow-xl text-center"
      >
        <span className="inline-flex items-center gap-2">
          <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}