'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/g2', label: 'G2 Resources', highlight: false },
    { href: '/g3', label: 'G3 Resources', highlight: false },
    { href: '/quiz', label: '📝 Quiz Generator', highlight: 'orange' },
    { href: '/circuit-simulator', label: '⚡ Circuit Sim', highlight: 'orange' },
    { href: '/csa', label: 'CSA', highlight: false },
    { href: '/csa-reference', label: '📚 Quick Ref', highlight: 'blue' },
    { href: '/tssa', label: 'TSSA', highlight: false },
    { href: '/career', label: '🚀 Career Path', highlight: 'button' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-brand-bg-secondary border-b border-brand-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold text-brand-accent-orange hover:text-brand-accent-orange-hover transition flex-shrink-0"
          >
            HVAC Student Resources
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1 xl:gap-2 items-center">
            {navLinks.map((link) => {
              if (link.highlight === 'button') {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`bg-brand-accent-orange text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-accent-orange-hover transition whitespace-nowrap ${
                      isActive(link.href) ? 'ring-2 ring-white ring-opacity-50' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              if (link.highlight === 'orange') {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-brand-accent-orange hover:text-brand-accent-orange-hover px-3 py-2 rounded-md transition font-medium whitespace-nowrap ${
                      isActive(link.href) ? 'bg-brand-bg-tertiary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              if (link.highlight === 'blue') {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-brand-accent-blue hover:text-brand-accent-blue-hover px-3 py-2 rounded-md transition font-medium whitespace-nowrap ${
                      isActive(link.href) ? 'bg-brand-bg-tertiary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary px-3 py-2 rounded-md transition whitespace-nowrap ${
                    isActive(link.href) ? 'bg-brand-bg-tertiary text-brand-text-primary' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary transition focus:outline-none focus:ring-2 focus:ring-brand-accent-orange"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-[#1a1a2e] border-l border-brand-border z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-brand-border bg-[#1a1a2e]">
          <span className="text-lg font-semibold text-brand-text-primary">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary transition"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)] bg-[#1a1a2e]">
          {/* Home Link */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition text-base font-medium ${
              pathname === '/'
                ? 'bg-brand-accent-orange/10 text-brand-accent-orange'
                : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary'
            }`}
          >
            <span className="text-xl">🏠</span>
            Home
          </Link>

          <div className="border-t border-brand-border my-3" />

          {navLinks.map((link) => {
            const active = isActive(link.href);
            
            if (link.highlight === 'button') {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-base transition ${
                    active
                      ? 'bg-brand-accent-orange text-white ring-2 ring-brand-accent-orange-hover'
                      : 'bg-brand-accent-orange text-white hover:bg-brand-accent-orange-hover'
                  }`}
                >
                  {link.label}
                </Link>
              );
            }
            
            if (link.highlight === 'orange') {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition text-base font-medium ${
                    active
                      ? 'bg-brand-accent-orange/10 text-brand-accent-orange'
                      : 'text-brand-accent-orange hover:bg-brand-accent-orange/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            }
            
            if (link.highlight === 'blue') {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition text-base font-medium ${
                    active
                      ? 'bg-brand-accent-blue/10 text-brand-accent-blue'
                      : 'text-brand-accent-blue hover:bg-brand-accent-blue/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            }
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition text-base ${
                  active
                    ? 'bg-brand-bg-tertiary text-brand-text-primary font-medium'
                    : 'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Footer in drawer */}
          <div className="border-t border-brand-border mt-6 pt-4">
            <p className="text-brand-text-tertiary text-sm text-center">
              Created by Mike Kapin
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
