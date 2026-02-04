import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloatingCallButton from '@/components/common/FloatingCallButton';
import HeroCarousel from './components/HeroCarousel';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ScrollingStrip from '@/components/shared/ScrollingStrip';
import AstrologersGrid from '@/components/shared/AstrologerCard';
import WhyAstrotalkSection from './components/WhyAstrotalkSection';

export const metadata: Metadata = {
  title: 'Bhavishya Darpan - Your Trusted Astrology Consultation Platform',
  description: 'Connect with expert astrologers 24/7 for personalized horoscope readings, Kundli matching, and life guidance. Trusted by 10,000+ users.',
  keywords: 'astrology, horoscope, kundli matching, astrologer consultation, vedic astrology, online astrology',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Slim ticker bar below main navbar */}
        <div className="h-8 bg-secondary text-secondary-foreground text-xs md:text-sm flex items-center overflow-hidden shadow-sm">
          <div className="max-w-7xl mx-auto px-6 w-full overflow-hidden">
            <div className="flex items-center gap-8 animate-scroll-horizontal whitespace-nowrap">
              <span>Lorem ipsum dolor sit amet consectetur Duis aute irure dolor in reprehenderit</span>
              <span>Sed do eiusmod tempor incididunt Duis aute irure dolor in reprehenderit</span>
              <span>Ut labore et dolore magna aliqua Enim ad minim veniam quis nostrud</span>
            </div>
          </div>
        </div>

        {/* Top/Hero Section */}
        <HeroCarousel />
        
        {/* Astrologers Section */}
        <section
          id="astrologers"
          className="pt-16 pb-8 md:pb-16 bg-gradient-to-b from-primary/10 to-background"
        >
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Meet Our Expert Astrologers
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Connect with verified professionals for personalized guidance and accurate predictions
            </p>
          </div>
          <ScrollingStrip />
          <AstrologersGrid />
        </section>

        {/* Why Astrotalk Section */}
        <WhyAstrotalkSection />

        {/* Reviews Section - only review cards */}
        <section id="reviews" className="bg-background">
          <TestimonialsCarousel />
        </section>

      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}