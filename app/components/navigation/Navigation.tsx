'use client';

import React, { useState, useEffect } from 'react';
import { NavItem } from '@/app/types/navigation';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/app/components/ui/Button';
import { cn } from '@/app/lib/utils';

const navigationItems: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScrollPosition();

  useEffect(() => {
    const sections = navigationItems.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const isScrolled = scrollY > 50;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-custom border-b border-theme',
          isScrolled ? 'nav-scrolled py-3 shadow-lg' : 'nav-default py-4'
        )}
        role='navigation'
        aria-label='Main navigation'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='flex justify-between items-center'>
            {/* Logo */}
            <div className='text-2xl font-bold gradient-text'>Lenuvio</div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navigationItems.map((item) => (
                <NavLink
                  key={item.id}
                  href={item.href}
                  isActive={activeSection === item.id}>
                  {item.label}
                </NavLink>
              ))}

              <Button variant='primary' size='sm'>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-theme-secondary hover:text-theme-primary p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle mobile menu'
              aria-expanded={isMobileMenuOpen}>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        items={navigationItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
