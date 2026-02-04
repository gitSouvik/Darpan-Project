'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactForm() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  if (!isHydrated) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
        <h3 className="font-serif text-2xl text-card-foreground mb-6">
          Book Your Consultation
        </h3>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-card-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="Enter your name"
            />
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8 md:p-10 shadow-lg scroll-reveal will-animate">
      <h3 className="font-serif text-3xl text-card-foreground mb-2 tracking-tight">
        Book Your Consultation
      </h3>
      <p className="text-card-foreground/60 mb-8">
        Fill in your details and our astrologers will get back to you shortly
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-card-foreground mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            placeholder="Tell us about your concerns or questions..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
              Book Consultation
            </>
          )}
        </button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-success/10 border border-success/30 text-success rounded-lg p-4 flex items-center gap-3">
            <Icon name="CheckCircleIcon" size={24} variant="solid" />
            <span className="font-medium">
              Thank you! We'll contact you within 24 hours.
            </span>
          </div>
        )}
      </form>
    </div>
  );
}