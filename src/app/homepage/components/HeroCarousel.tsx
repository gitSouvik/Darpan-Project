'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Slide {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
{
  id: 'slide_1',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11b833d93-1766735216116.png",
  alt: 'Mystical starry night sky with constellation patterns and zodiac symbols',
  title: 'Discover Your Destiny',
  subtitle: 'Connect with expert astrologers 24/7'
},
{
  id: 'slide_2',
  image: "https://images.unsplash.com/photo-1725475551698-6ab597e27be2",
  alt: 'Ancient zodiac wheel with golden astrological symbols on cosmic purple background',
  title: 'Unlock Cosmic Wisdom',
  subtitle: 'Personalized horoscope readings'
},
{
  id: 'slide_3',
  image: "https://images.unsplash.com/photo-1548222606-6c4f581fd09d",
  alt: 'Mystical moon phases chart with stars scattered across deep purple night sky',
  title: 'Find Your Path',
  subtitle: 'Kundli matching & compatibility'
},
{
  id: 'slide_4',
  image: "https://images.unsplash.com/photo-1711352632315-c0fd4757f14b",
  alt: 'Tarot cards spread on velvet cloth with crystal ball and candles in soft golden light',
  title: 'Spiritual Guidance',
  subtitle: 'Trusted by 10,000+ users'
},
{
  id: 'slide_5',
  image: "https://images.unsplash.com/reserve/YEc7WB6ASDydBTw6GDlF_antalya-beach-lulu.jpg",
  alt: 'Peaceful meditation scene with person silhouette against purple sunset sky and mountains',
  title: 'Transform Your Life',
  subtitle: 'Expert consultations await'
}];


export default function HeroCarousel() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isHydrated) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/20 to-background">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-foreground tracking-tight leading-tight mb-6">
            {slides[0].title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-10">
            {slides[0].subtitle}
          </p>
        </div>
      </div>);

  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-background overflow-hidden pt-2 pb-16">
      <div className="w-full">
        {/* Light yellow banner background */}
        <div className="relative w-full bg-background pb-2">
          {/* Centered hero card */}
          <div className="relative max-w-6xl mx-auto px-4 md:px-6">
            <div className="mt-4 md:mt-6 rounded-[32px] bg-card shadow-sm border border-border overflow-hidden flex flex-col md:flex-row">
              {/* Left: sliding media */}
              <div className="relative md:w-[44%] w-full">
                <div className="relative w-full h-full min-h-[300px] md:min-h-[360px] overflow-hidden">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <AppImage
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: content (desktop and larger tablets only) */}
              <div className="hidden md:flex flex-1 bg-gradient-to-r from-[#FFF7ED] via-[#FFF7ED] to-[#FFFBEB] px-6 md:px-10 py-6 md:py-8 flex-col justify-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1 text-xs md:text-sm font-semibold text-muted-foreground w-max">
                  <span className="inline-block h-2 w-2 rounded-full bg-success mr-1" />
                  LIVE CONSULTATION
                </div>

                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground tracking-tight leading-snug">
                  Healing
                </h1>
                <p className="text-sm md:text-base text-foreground/80">
                  By <span className="font-semibold">Acharya Bharti</span>
                </p>

                <button className="mt-2 inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground px-10 py-3 text-base font-semibold hover:bg-secondary/90 transition-all">
                  Book Now
                </button>

                {/* <div className="mt-1 text-xs md:text-sm text-foreground/60 flex flex-wrap items-center gap-2">
                  <span>App available on:</span>
                  <span className="font-semibold">Android</span>
                  <span className="font-semibold">iOS</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Pagination dots under card */}
          <div className="relative mt-4 flex justify-center">
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={`dot_${index}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-secondary w-8'
                      : 'bg-white/60 hover:bg-white/80 w-2.5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Big CTAs row below banner */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 mt-2 flex flex-col md:flex-row gap-4 justify-center items-stretch">
          <Link
            href="/astrologers"
            className="flex-1 rounded-[36px] bg-white shadow-sm border border-border px-10 py-5 flex items-center justify-center gap-3 text-lg md:text-xl font-semibold text-foreground hover:shadow-md transition-all"
          >
            <Icon name="PhoneIcon" size={22} variant="solid" className="text-destructive" />
            <span>
              Talk To <span className="text-destructive font-bold">Astrologer</span>
            </span>
          </Link>
          <Link
            href="/astrologers"
            className="flex-1 rounded-[36px] bg-white shadow-sm border border-border px-10 py-5 flex items-center justify-center gap-3 text-lg md:text-xl font-semibold text-foreground hover:shadow-md transition-all"
          >
            <Icon
              name="ChatBubbleLeftRightIcon"
              size={22}
              className="text-destructive"
            />
            <span>
              Chat With <span className="text-destructive font-bold">Astrologer</span>
            </span>
          </Link>
        </div>

        {/* Divider line between CTAs and feature buttons */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8">
          <div className="h-px w-full bg-border" />
        </div>

        {/* Feature buttons row - horizontal scroll on mobile */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-6">
          <div className="flex gap-3 overflow-x-auto mobile-scrollbar-hide pb-2 -mx-4 px-4 md:grid md:grid-cols-7 md:gap-3 md:overflow-visible md:px-0 md:mx-0 snap-x snap-mandatory">
            {[
            'Today\'s Panchang',
            'Kundli Match',
            'Astro Mall',
            'Daily Horoscope',
            'Online Puja',
            'Astro Academy',
            'Free Services',
          ].map((label) => (
              <button
                key={label}
                className="flex flex-col items-center justify-center rounded-2xl bg-white border border-border px-4 py-3 text-xs md:text-sm font-semibold text-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all min-w-[140px] snap-center md:min-w-0"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
                  <span className="text-secondary text-lg">★</span>
                </div>
                <span className="text-center leading-tight">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

}