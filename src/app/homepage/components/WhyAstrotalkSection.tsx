'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function WhyAstrotalkSection() {
  const [openWhy, setOpenWhy] = useState(false);
  const [openWhatIs, setOpenWhatIs] = useState(false);
  const [openWhatWeOffer, setOpenWhatWeOffer] = useState(false);

  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-14">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
            QnA
          </h2>
        </div>

        {/* What is Astrology ? */}
        <div className="mb-4 border border-border rounded-2xl bg-card/60 backdrop-blur-sm shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenWhatIs((prev) => !prev)}
            className="w-full flex items-center justify-between px-5 md:px-8 py-4 md:py-5"
          >
            <div className="text-left">
              <h3 className="font-serif text-lg md:text-xl text-card-foreground tracking-tight">
                What is Astrology ?
              </h3>
            </div>
            <div className="ml-4 flex items-center justify-center rounded-full border border-border w-9 h-9 md:w-10 md:h-10 bg-card">
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-card-foreground transition-transform duration-200 ${
                  openWhatIs ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </button>

          <div
            className={`transition-[max-height,opacity] duration-300 ease-out ${
              openWhatIs ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden border-t border-border`}
          >
            <div className="px-5 md:px-8 py-4 md:py-6 space-y-4 text-sm md:text-base text-card-foreground/80 leading-relaxed">
              <p>
                Astrology is an ancient science that studies the movement of planets and stars to understand
                their impact on human life. Your birth chart is like a cosmic blueprint that reveals your
                strengths, challenges, patterns, and opportunities.
              </p>
              <p>
                Rather than &quot;predicting&quot; the future in a fixed way, astrology helps you become more
                aware of tendencies and timings—so you can make better decisions, align with favorable
                periods, and navigate difficult phases with more clarity and confidence.
              </p>
              <p>
                From relationships and career to health, finances, and spiritual growth, astrology offers a
                deeper understanding of why certain events happen and how you can respond in the most
                empowered way.
              </p>
            </div>
          </div>
        </div>

        {/* Why Bhavishya Darpan ? */}
        <div className="mb-4 border border-border rounded-2xl bg-card/60 backdrop-blur-sm shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenWhy((prev) => !prev)}
            className="w-full flex items-center justify-between px-5 md:px-8 py-4 md:py-5"
          >
            <div className="text-left">
              <h3 className="font-serif text-lg md:text-xl text-card-foreground tracking-tight">
                Why Bhavishya Darpan ?
              </h3>
            </div>
            <div className="ml-4 flex items-center justify-center rounded-full border border-border w-9 h-9 md:w-10 md:h-10 bg-card">
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-card-foreground transition-transform duration-200 ${
                  openWhy ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </button>

          <div
            className={`transition-[max-height,opacity] duration-300 ease-out ${
              openWhy ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden border-t border-border`}
          >
            <div className="px-5 md:px-8 py-4 md:py-6 space-y-4 text-sm md:text-base text-card-foreground/80 leading-relaxed">
              <p>
                At Bhavishya Darpan, every consultation is powered by carefully vetted astrologers who combine
                traditional Vedic wisdom with a modern, practical approach. We focus on clear guidance you
                can actually use in your daily life—whether it&apos;s relationships, career, finances, or
                mental peace.
              </p>
              <p>
                Our platform is built for trust and privacy. From secure calls and chats to transparent
                ratings and reviews, you always know who you&apos;re speaking to and what to expect. No
                fake promises—just honest insights and remedies tailored to your unique birth chart.
              </p>
              <p>
                With 24/7 availability, multilingual experts, and a seamless app experience, Bhavishya Darpan makes
                quality astrology accessible from anywhere. That&apos;s why millions of users rely on us to
                navigate important decisions with confidence and clarity.
              </p>
            </div>
          </div>
        </div>

        {/* What we offer */}
        <div className="border border-border rounded-2xl bg-card/60 backdrop-blur-sm shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenWhatWeOffer((prev) => !prev)}
            className="w-full flex items-center justify-between px-5 md:px-8 py-4 md:py-5"
          >
            <div className="text-left">
              <h3 className="font-serif text-lg md:text-xl text-card-foreground tracking-tight">
                What we offer
              </h3>
            </div>
            <div className="ml-4 flex items-center justify-center rounded-full border border-border w-9 h-9 md:w-10 md:h-10 bg-card">
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-card-foreground transition-transform duration-200 ${
                  openWhatWeOffer ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </button>

          <div
            className={`transition-[max-height,opacity] duration-300 ease-out ${
              openWhatWeOffer ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden border-t border-border`}
          >
            <div className="px-5 md:px-8 py-4 md:py-6 space-y-4 text-sm md:text-base text-card-foreground/80 leading-relaxed">
              <p>
                Whether you&apos;re facing a crossroads or just curious about your path, Bhavishya Darpan offers a
                full range of astrology-based services: detailed birth chart readings, love and marriage
                guidance, career and business consultations, financial planning, health insights, and more.
              </p>
              <p>
                You can connect with experts via live calls and chats, explore personalised horoscopes, get
                Kundli matching, and even receive remedy suggestions such as gemstones, rituals, and
                affirmations—always with clear explanations and practical steps.
              </p>
              <p>
                Our goal is simple: to make high-quality astrology support accessible, compassionate, and
                truly helpful for every stage of your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

