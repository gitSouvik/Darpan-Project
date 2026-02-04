'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface StripAstrologer {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  alt: string;
}

const stripAstrologers: StripAstrologer[] = [
  {
    id: 'strip_1',
    name: 'Pandit Raj Kumar',
    specialty: 'Vedic Astrology',
    rating: 4.9,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Pandit Raj Kumar elderly astrologer with traditional white turban and peaceful expression',
  },
  {
    id: 'strip_2',
    name: 'Dr. Meera Iyer',
    specialty: 'Numerology',
    rating: 4.8,
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Dr. Meera Iyer professional woman astrologer with glasses and warm smile',
  },
  {
    id: 'strip_3',
    name: 'Guruji Anil Sharma',
    specialty: 'Tarot Reading',
    rating: 5.0,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Guruji Anil Sharma middle-aged astrologer with traditional orange robes and serene look',
  },
  {
    id: 'strip_4',
    name: 'Smt. Lakshmi Devi',
    specialty: 'Palmistry',
    rating: 4.9,
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Smt. Lakshmi Devi elderly female astrologer with traditional bindi and kind eyes',
  },
  {
    id: 'strip_5',
    name: 'Astrologer Vikram',
    specialty: 'KP Astrology',
    rating: 4.7,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Astrologer Vikram young professional astrologer with modern attire and confident smile',
  },
  {
    id: 'strip_6',
    name: 'Jyotish Ravi Das',
    specialty: 'Horary',
    rating: 4.8,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Jyotish Ravi Das mature astrologer with spectacles and traditional sacred thread',
  },
  {
    id: 'strip_7',
    name: 'Smt. Radha Krishnan',
    specialty: 'Vastu Shastra',
    rating: 4.9,
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Smt. Radha Krishnan middle-aged woman astrologer with elegant saree and gentle expression',
  },
  {
    id: 'strip_8',
    name: 'Pandit Suresh Joshi',
    specialty: 'Gemology',
    rating: 5.0,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Pandit Suresh Joshi senior astrologer with white beard and traditional tilak mark',
  },
];

export default function ScrollingStrip() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Duplicate array for seamless loop
  const duplicatedAstrologers = [...stripAstrologers, ...stripAstrologers];

  if (!isHydrated) {
    return (
      <div className="bg-gradient-to-r from-primary to-accent py-8 overflow-hidden">
        <div className="flex gap-6 px-6">
          {stripAstrologers.slice(0, 4).map((astrologer) => (
            <div
              key={astrologer.id}
              className="flex-shrink-0 w-64 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-card-foreground">
                    {astrologer.name}
                  </p>
                  <p className="text-sm text-card-foreground/60">
                    {astrologer.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary via-accent to-primary py-8 overflow-hidden relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />

      {/* Scrolling Content */}
      <div className="flex gap-6 animate-scroll-horizontal">
        {duplicatedAstrologers.map((astrologer, index) => (
          <div
            key={`${astrologer.id}_${index}`}
            className="flex-shrink-0 w-80 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4">
              <AppImage
                src={astrologer.image}
                alt={astrologer.alt}
                className="w-20 h-20 rounded-full object-cover border-2 border-secondary shadow-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground text-lg mb-1">
                  {astrologer.name}
                </h3>
                <p className="text-sm text-card-foreground/70 mb-2">
                  {astrologer.specialty}
                </p>
                <div className="flex items-center gap-1">
                  <Icon
                    name="StarIcon"
                    size={16}
                    variant="solid"
                    className="text-secondary"
                  />
                  <span className="text-sm font-semibold text-card-foreground">
                    {astrologer.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}