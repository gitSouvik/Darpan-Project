'use client';

import { useState } from 'react';
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
    name: 'Pandit Raj Kumar',
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
    name: 'Dr. Meera Iyer',
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
    name: 'Guruji Anil Sharma',
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
    name: 'Smt. Lakshmi Devi',
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
    name: 'Astrologer Vikram Singh',
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
    name: 'Jyotish Ravi Das',
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
    name: 'Smt. Radha Krishnan',
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
    name: 'Pandit Suresh Joshi',
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
    name: 'Dr. Anjali Verma',
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
    name: 'Swami Narayan Das',
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
    name: 'Jyotishi Priya Nair',
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
    name: 'Pandit Mohan Bhatt',
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

export default function AstrologersSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedAstrologers = showAll ? astrologers : astrologers.slice(0, 6);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedAstrologers.map((astrologer) => (
            <div
              key={astrologer.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-2xl transition-all duration-300 group hover:border-primary/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <AppImage
                    src={astrologer.image}
                    alt={astrologer.alt}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-colors shadow-lg"
                  />
                  <div
                    className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-card ${
                      astrologer.available ? 'bg-success' : 'bg-muted'
                    }`}
                  />
                </div>

                <h3 className="font-serif text-2xl text-card-foreground mb-1 tracking-tight">
                  {astrologer.name}
                </h3>
                <p className="text-sm text-card-foreground/60 mb-3">
                  {astrologer.specialty}
                </p>

                <div className="flex items-center gap-1 mb-4">
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

                <div className="w-full space-y-2 mb-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-card-foreground/60">Experience:</span>
                    <span className="font-semibold text-card-foreground">
                      {astrologer.experience} years
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-card-foreground/60">Consultations:</span>
                    <span className="font-semibold text-card-foreground">
                      {astrologer.consultations.toLocaleString()}+
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-card-foreground/60">Languages:</span>
                    <span className="font-semibold text-card-foreground">
                      {astrologer.languages.join(', ')}
                    </span>
                  </div>
                </div>

                <button className="w-full py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <Icon name="PhoneIcon" size={20} variant="solid" />
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {!showAll && astrologers.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Show More Astrologers
            </button>
          </div>
        )}
      </div>
    </section>
  );
}