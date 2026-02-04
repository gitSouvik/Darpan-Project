'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'nav_home', label: 'Home', href: '/homepage' },
    { id: 'nav_astrologers', label: 'Astrologers', href: '/homepage#astrologers' },
    { id: 'nav_contact', label: 'Contact', href: '/homepage#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
              <Icon name="SparklesIcon" size={24} variant="solid" />
            </div>
            <span className="font-serif text-2xl font-semibold text-foreground tracking-tight">
              Bhavishya Darpan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks?.map((link) => (
              <Link
                key={link?.id}
                href={link?.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === link?.href
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {link?.label}
              </Link>
            ))}

            {/* Language toggle */}
            <div
              className={`ml-4 inline-flex items-center rounded-full border border-border p-0.5 text-xs font-medium ${
                language === 'EN' ? 'bg-primary/10' : 'bg-muted/40'
              }`}
            >
              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  language === 'EN'
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('HI')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  language === 'HI'
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Login button */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="ml-3 px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-sm hover:bg-primary/90 transition-colors"
            >
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border py-4 space-y-4">
            {navLinks?.map((link) => (
              <Link
                key={link?.id}
                href={link?.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium ${
                  pathname === link?.href
                    ? 'text-primary bg-primary/10 rounded-lg'
                    : 'text-card-foreground hover:bg-muted rounded-lg'
                }`}
              >
                {link?.label}
              </Link>
            ))}

            {/* Mobile language + login */}
            <div className="flex items-center justify-between px-4 pt-2">
              <div
                className={`inline-flex items-center rounded-full border border-border p-0.5 text-xs font-medium ${
                  language === 'EN' ? 'bg-primary/10' : 'bg-muted/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLanguage('EN')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    language === 'EN'
                      ? 'bg-white text-foreground shadow-sm'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('HI')}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    language === 'HI'
                      ? 'bg-white text-foreground shadow-sm'
                      : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
              <button
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="ml-3 px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-sm hover:bg-primary/90 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Login modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-3xl bg-card p-7 shadow-2xl border border-border relative">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute right-3 top-3 text-foreground/60 hover:text-foreground"
              aria-label="Close login"
            >
              <Icon name="XMarkIcon" size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="SparklesIcon" size={20} variant="solid" />
              </div>
              <div>
                <h2 className="font-serif text-xl text-card-foreground">
                  Welcome back
                </h2>
                <p className="text-xs text-card-foreground/60">
                  Sign in to continue your consultation.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-card-foreground/70 mb-1.5">
                  Mobile number
                </label>
                <div className="flex rounded-xl border border-border bg-input overflow-hidden">
                  <span className="px-3 py-2 text-sm text-card-foreground/70 border-r border-border">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    className="flex-1 px-3 py-2 text-sm bg-transparent outline-none"
                  />
                </div>
                <button className="mt-4 w-full rounded-full bg-secondary text-secondary-foreground py-2.5 text-sm font-semibold hover:bg-secondary/90 transition-colors">
                  Send OTP
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-card-foreground/60">OR</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <button className="w-full rounded-full border border-border py-2.5 text-sm font-semibold text-card-foreground flex items-center justify-center gap-2 hover:bg-muted transition-colors">
                <Icon name="GlobeAltIcon" size={18} />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}