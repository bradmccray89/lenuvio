'use client';

import React, { useState, useEffect } from 'react';
import { NavItem } from '@/app/types/navigation';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import { MobileMenu } from './MobileMenu';
import styles from './Navigation.module.css';

const navigationItems: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScrollPosition();

  // Track mouse position for glow effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 120; // Offset for navbar height

      // Find which section we're currently in
      let currentSection = 'home'; // Default to home

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          // Check if we're in this section
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = sectionId;
            break;
          }

          // Special case: if we're past the last section, keep it active
          if (
            sectionId === sections[sections.length - 1] &&
            scrollPosition >= offsetTop
          ) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Debounce scroll events for better performance
    let ticking = false;
    const debouncedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });

    // Call once on mount to set initial state
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', debouncedScroll);
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

  const isScrolled = scrollY > 20;

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset to account for fixed navbar only on smaller screens
      const elementPosition = element.offsetTop;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });

      // Immediately update active section for better UX
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Floating Navigation Bar */}
      <nav
        className={`${styles.nav} ${
          isScrolled ? styles.navScrolled : styles.navDefault
        }`}>
        {/* Background with glassmorphism effect */}
        <div
          className={`${styles.navBackground} ${
            isScrolled ? styles.backgroundScrolled : styles.backgroundDefault
          }`}>
          {/* Animated background pattern */}
          <div className={styles.animatedBackground}>
            <div className={styles.gradientOverlay} />
            <div
              className={styles.mouseGlow}
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.05), transparent 40%)`,
              }}
            />
          </div>

          {/* Navigation content */}
          <div className={styles.navContent}>
            <div className={styles.navInner}>
              {/* Logo with tech effect */}
              <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                  {/* Logo icon */}
                  <div className={styles.logoIconInner}>
                    <div className={styles.logoIconContent}>
                      <div className={styles.logoIconDot} />
                    </div>
                  </div>
                  {/* Pulsing ring effect */}
                  <div className={styles.logoPulse} />
                </div>

                <div className={styles.logoText}>
                  <span className={styles.logoTitle}>Lenuvio</span>
                  <div className={styles.logoUnderline} />
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className={styles.desktopNav}>
                {navigationItems.map((item) => (
                  <div key={item.id} className={styles.navItem}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={`${styles.navLink} ${
                        activeSection === item.id ? styles.navLinkActive : ''
                      }`}>
                      <span className={styles.navLinkText}>{item.label}</span>

                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <div className={styles.activeIndicator} />
                      )}
                    </a>
                  </div>
                ))}

                {/* CTA Button */}
                <div className={styles.ctaContainer}>
                  <button
                    className={styles.ctaButton}
                    onClick={() => handleNavClick('contact')}>
                    <span className={styles.ctaButtonText}>Get Started</span>
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={styles.mobileMenuButton}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label='Toggle mobile menu'
                aria-expanded={isMobileMenuOpen}>
                {/* Animated hamburger icon */}
                <div className={styles.hamburgerIcon}>
                  <span
                    className={`${styles.hamburgerLine} ${
                      isMobileMenuOpen ? styles.hamburgerLineOpen : ''
                    }`}
                  />
                  <span
                    className={`${styles.hamburgerLine} ${
                      isMobileMenuOpen ? styles.hamburgerLineOpen : ''
                    }`}
                  />
                  <span
                    className={`${styles.hamburgerLine} ${
                      isMobileMenuOpen ? styles.hamburgerLineOpen : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Bottom gradient border */}
          <div className={styles.bottomBorder} />
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
