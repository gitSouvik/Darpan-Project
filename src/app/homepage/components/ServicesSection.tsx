import Icon from '@/components/ui/AppIcon';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'service_horoscope',
    icon: 'SparklesIcon',
    title: 'Daily Horoscope',
    description: 'Get personalized daily predictions based on your zodiac sign and planetary positions.',
  },
  {
    id: 'service_consultation',
    icon: 'UserGroupIcon',
    title: 'Personal Consultation',
    description: 'One-on-one sessions with expert astrologers for in-depth life guidance and solutions.',
  },
  {
    id: 'service_kundli',
    icon: 'HeartIcon',
    title: 'Kundli Matching',
    description: 'Comprehensive compatibility analysis for marriage and relationships using Vedic astrology.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal will-animate">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-card-foreground tracking-tight mb-4">
            Explore Our Offerings
          </h2>
          <p className="text-lg text-card-foreground/70 max-w-2xl mx-auto">
            Comprehensive astrology services to guide you through life's journey
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-background border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-300 group hover:border-primary/50 scroll-reveal will-animate`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon name={service.icon as any} size={32} variant="solid" />
              </div>
              <h3 className="font-serif text-2xl text-card-foreground mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-card-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}