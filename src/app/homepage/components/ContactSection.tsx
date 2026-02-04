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

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            We're here to guide you 24/7. Reach out for consultations, questions, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {contactDetails.map((detail) => (
            <div
              key={detail.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <Icon name={detail.icon as any} size={28} />
                </div>
                <p className="text-sm font-medium text-foreground/60 mb-2">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-foreground hover:text-primary transition-colors font-semibold"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-foreground font-semibold">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.google.com/maps/dir//123+Astrology+Plaza,+Connaught+Place,+New+Delhi+-+110001"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <Icon name="MapPinIcon" size={20} variant="solid" />
            Show Directions
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-success text-success-foreground rounded-full font-semibold hover:bg-success/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}