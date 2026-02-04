'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function FloatingCallButton() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-transform duration-300 group"
      aria-label="Call us"
    >
      <Icon name="PhoneIcon" size={28} variant="solid" className="group-hover:rotate-12 transition-transform" />
    </button>
  );
}