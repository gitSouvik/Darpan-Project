import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-accent to-primary/80 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="scroll-reveal will-animate">
          <Icon
            name="SparklesIcon"
            size={48}
            variant="solid"
            className="text-primary-foreground mx-auto mb-6"
          />
          <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground tracking-tight mb-6 leading-tight">
            Ready to Discover Your Future?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with our expert astrologers now and get personalized guidance for your life's journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/astrologers"
              className="px-10 py-4 bg-secondary text-secondary-foreground rounded-full text-lg font-semibold hover:bg-secondary/90 transition-all shadow-2xl hover:shadow-secondary/50 hover:scale-105 inline-flex items-center gap-3"
            >
              <Icon name="PhoneIcon" size={24} variant="solid" />
              Talk to Astrologer Now
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 bg-white/20 backdrop-blur-md text-primary-foreground border-2 border-white/50 rounded-full text-lg font-semibold hover:bg-white/30 transition-all shadow-xl inline-flex items-center gap-3"
            >
              <Icon name="EnvelopeIcon" size={24} />
              Contact Us
            </Link>
          </div>

          <p className="text-sm text-primary-foreground/70 mt-8">
            First consultation is free • 24/7 availability • Secure & confidential
          </p>
        </div>
      </div>
    </section>
  );
}