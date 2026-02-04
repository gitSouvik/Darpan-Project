import Icon from '@/components/ui/AppIcon';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 'feature_availability',
    icon: 'ClockIcon',
    title: '24/7 Availability',
    description: 'Connect with astrologers anytime, anywhere, day or night.',
  },
  {
    id: 'feature_verified',
    icon: 'ShieldCheckIcon',
    title: 'Verified Astrologers',
    description: 'All our astrologers are certified and thoroughly vetted experts.',
  },
  {
    id: 'feature_secure',
    icon: 'LockClosedIcon',
    title: 'Secure Payments',
    description: 'Safe and encrypted transactions for your peace of mind.',
  },
  {
    id: 'feature_clients',
    icon: 'UsersIcon',
    title: '10,000+ Happy Clients',
    description: 'Trusted by thousands for accurate predictions and guidance.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal will-animate">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium tracking-wide mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            Your Trusted Astrology Partner
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the difference with Bhavishya Darpan's premium services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`text-center scroll-reveal will-animate`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex w-20 h-20 bg-gradient-to-br from-secondary to-warning rounded-full items-center justify-center text-secondary-foreground mb-6 shadow-lg">
                <Icon name={feature.icon as any} size={36} variant="solid" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}