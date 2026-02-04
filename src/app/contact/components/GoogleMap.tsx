'use client';

import { useState, useEffect } from 'react';

export default function GoogleMap() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="w-full h-96 bg-muted rounded-xl flex items-center justify-center">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border border-border scroll-reveal will-animate delay-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9746396068744!2d77.21787931508084!3d28.631475982421907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d97a32b%3A0x6118dd6d77d4c4b2!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bhavishya Darpan Office Location"
      />
    </div>
  );
}