'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Astrologer {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  consultations: number;
  languages: string[];
  available: boolean;
  image: string;
  alt: string;
}

const astrologers: Astrologer[] = [
  {
    id: 'astrologer_1',
    name: 'Raj Kumar',
    specialty: 'Vedic Astrology Expert',
    experience: 15,
    rating: 4.9,
    consultations: 5200,
    languages: ['Hindi', 'English'],
    available: true,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Pandit Raj Kumar elderly Vedic astrologer with traditional white turban and peaceful expression',
  },
  {
    id: 'astrologer_2',
    name: 'Meera Iyer',
    specialty: 'Numerology & Tarot',
    experience: 12,
    rating: 4.8,
    consultations: 4800,
    languages: ['English', 'Tamil'],
    available: true,
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Dr. Meera Iyer professional woman numerologist with glasses and warm smile',
  },
  {
    id: 'astrologer_3',
    name: 'Anil Sharma',
    specialty: 'Tarot & Palmistry',
    experience: 20,
    rating: 5.0,
    consultations: 8500,
    languages: ['Hindi', 'Punjabi', 'English'],
    available: false,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Guruji Anil Sharma middle-aged tarot reader with traditional orange robes and serene look',
  },
  {
    id: 'astrologer_4',
    name: 'Lakshmi Devi',
    specialty: 'Palmistry Specialist',
    experience: 18,
    rating: 4.9,
    consultations: 6700,
    languages: ['Telugu', 'Hindi', 'English'],
    available: true,
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Smt. Lakshmi Devi elderly female palmistry expert with traditional bindi and kind eyes',
  },
  {
    id: 'astrologer_5',
    name: 'Vikram Singh',
    specialty: 'KP Astrology',
    experience: 10,
    rating: 4.7,
    consultations: 3900,
    languages: ['Hindi', 'English'],
    available: true,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Astrologer Vikram Singh young professional KP astrologer with modern attire and confident smile',
  },
  {
    id: 'astrologer_6',
    name: 'Ravi Das',
    specialty: 'Horary Astrology',
    experience: 22,
    rating: 4.8,
    consultations: 7200,
    languages: ['Bengali', 'Hindi', 'English'],
    available: true,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Jyotish Ravi Das mature horary astrologer with spectacles and traditional sacred thread',
  },
  {
    id: 'astrologer_7',
    name: 'Radha Krishnan',
    specialty: 'Vastu Shastra Consultant',
    experience: 14,
    rating: 4.9,
    consultations: 5600,
    languages: ['Tamil', 'Malayalam', 'English'],
    available: false,
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Smt. Radha Krishnan middle-aged Vastu expert with elegant saree and gentle expression',
  },
  {
    id: 'astrologer_8',
    name: 'Suresh Joshi',
    specialty: 'Gemology & Remedies',
    experience: 25,
    rating: 5.0,
    consultations: 9800,
    languages: ['Hindi', 'Gujarati', 'English'],
    available: true,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Pandit Suresh Joshi senior gemology expert with white beard and traditional tilak mark',
  },
  {
    id: 'astrologer_9',
    name: 'Anjali Verma',
    specialty: 'Medical Astrology',
    experience: 11,
    rating: 4.8,
    consultations: 4200,
    languages: ['Hindi', 'English'],
    available: true,
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Dr. Anjali Verma female medical astrologer with professional attire and compassionate demeanor',
  },
  {
    id: 'astrologer_10',
    name: 'Narayan Das',
    specialty: 'Spiritual Guidance',
    experience: 30,
    rating: 5.0,
    consultations: 12000,
    languages: ['Hindi', 'Sanskrit', 'English'],
    available: true,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Swami Narayan Das elderly spiritual guide with long white beard and saffron robes',
  },
  {
    id: 'astrologer_11',
    name: 'Priya Nair',
    specialty: 'Career & Finance',
    experience: 9,
    rating: 4.7,
    consultations: 3500,
    languages: ['Malayalam', 'English'],
    available: false,
    image: 'https://i.ibb.co/SqG6yht/woman.png',
    alt: 'Jyotishi Priya Nair young career astrologer with modern professional look and bright smile',
  },
  {
    id: 'astrologer_12',
    name: 'Mohan Bhatt',
    specialty: 'Marriage & Relationships',
    experience: 16,
    rating: 4.9,
    consultations: 6100,
    languages: ['Hindi', 'Marathi', 'English'],
    available: true,
    image: 'https://i.ibb.co/Z638wTVM/boy.png',
    alt: 'Pandit Mohan Bhatt middle-aged relationship astrologer with traditional attire and wise expression',
  },
];

export default function AstrologersGrid() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const displayedAstrologers = isMobile ? astrologers : showAll ? astrologers : astrologers.slice(0, 6);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto mobile-scrollbar-hide pb-2 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:mx-0 snap-x snap-mandatory">
          {displayedAstrologers.map((astrologer) => (
            <div
              key={astrologer.id}
              className="h-full flex min-w-[260px] snap-center md:min-w-0"
            >
              <div className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-primary/40 flex flex-col items-center text-center w-full">
                <div className="relative mb-4">
                  <AppImage
                    src={astrologer.image}
                    alt={astrologer.alt}
                    className="w-28 h-28 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-colors shadow-lg"
                  />
                  <div
                    className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-card ${
                      astrologer.available ? 'bg-success' : 'bg-muted'
                    }`}
                  />
                </div>

                <h3 className="font-serif text-xl text-card-foreground mb-1 tracking-tight">
                  {astrologer.name}
                </h3>
                <p className="text-xs text-card-foreground/60 mb-3">
                  {astrologer.specialty}
                </p>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={`star_${astrologer.id}_${i}`}
                      name="StarIcon"
                      size={18}
                      variant={i < Math.floor(astrologer.rating) ? 'solid' : 'outline'}
                      className={
                        i < Math.floor(astrologer.rating)
                          ? 'text-secondary' :'text-border'
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-card-foreground">
                    {astrologer.rating}
                  </span>
                </div>

                <div className="w-full mt-2 mb-4 text-xs text-card-foreground/70 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Experience</span>
                    <span className="font-semibold text-card-foreground">
                      {astrologer.experience} yrs
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Languages</span>
                    <span className="font-semibold text-card-foreground text-right">
                      {astrologer.languages.join(', ')}
                    </span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <Icon name="PhoneIcon" size={20} variant="solid" />
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && !showAll && astrologers.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              View All
            </button>
          </div>
        )}

        {!isMobile && showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-muted text-foreground rounded-full font-semibold hover:bg-muted/80 transition-all shadow-lg hover:shadow-xl"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}