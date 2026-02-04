'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  alt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial_1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    review: 'The predictions were incredibly accurate! The astrologer helped me make important life decisions with confidence. Highly recommended!',
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Priya Sharma smiling portrait photo with traditional Indian attire',
  },
  {
    id: 'testimonial_2',
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    review: 'Bhavishya Darpan changed my perspective on life. The Kundli matching was spot-on and helped me find the perfect match. Thank you!',
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Rajesh Kumar professional headshot with glasses and formal shirt',
  },
  {
    id: 'testimonial_3',
    name: 'Anita Desai',
    location: 'Bangalore',
    rating: 5,
    review: 'Professional, accurate, and compassionate. The astrologer understood my concerns and provided practical solutions. Excellent service!',
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Anita Desai warm smile portrait with colorful traditional jewelry',
  },
];

export default function TestimonialsCarousel() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleExpanded = (id: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <section className="py-12 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile: horizontal scroll list */}
        <div className="md:hidden -mx-6 px-6 overflow-x-auto mobile-scrollbar-hide pb-2">
          <div className="flex gap-4 snap-x snap-mandatory">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[280px] max-w-xs bg-card rounded-2xl p-6 border border-border shadow-sm snap-center"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={`star_mobile_${testimonial.id}_${i}`}
                        name="StarIcon"
                        size={18}
                        variant="solid"
                        className="text-secondary"
                      />
                    ))}
                  </div>
                  <div
                    className={`relative w-full max-h-32 ${
                      expandedReviews[testimonial.id] ? 'overflow-y-auto' : 'overflow-hidden'
                    } mb-2`}
                  >
                    <p className="font-serif text-base text-card-foreground leading-relaxed italic pr-1">
                      "{testimonial.review}"
                    </p>
                    {!expandedReviews[testimonial.id] && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card to-transparent" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleExpanded(testimonial.id)}
                    className="text-xs font-semibold text-secondary hover:text-secondary/80 mb-2"
                  >
                    {expandedReviews[testimonial.id] ? 'Read less' : 'Read more'}
                  </button>
                  <div className="flex items-center gap-3">
                    <AppImage
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary shadow-md"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-card-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-card-foreground/60">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: fading carousel */}
        <div className="hidden md:block">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={`star_${testimonial.id}_${i}`}
                          name="StarIcon"
                          size={20}
                          variant="solid"
                          className="text-secondary"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <div
                      className={`relative w-full max-h-40 ${
                        expandedReviews[testimonial.id] ? 'overflow-y-auto' : 'overflow-hidden'
                      } mb-6`}
                    >
                      <p className="font-serif text-xl md:text-2xl text-card-foreground leading-relaxed italic pr-1">
                        "{testimonial.review}"
                      </p>
                      {!expandedReviews[testimonial.id] && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card to-transparent" />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleExpanded(testimonial.id)}
                      className="text-xs md:text-sm font-semibold text-secondary hover:text-secondary/80 mb-4"
                    >
                      {expandedReviews[testimonial.id] ? 'Read less' : 'Read more'}
                    </button>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <AppImage
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-lg"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-card-foreground text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-card-foreground/60">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={`dot_${index}`}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8' :'bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}