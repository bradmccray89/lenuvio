'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Fixed import
import { NavItem } from '@/app/types/navigation';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import { MobileMenu } from './MobileMenu';
import styles from './Navigation.module.css';
import { LenuvioLogo } from '@/public/branding/LenuvioLogo';

const navigationItems: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Blog', href: '/blog', id: 'blog' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScrollPosition();
  const pathname = usePathname();
  const router = useRouter(); // This is now the correct App Router hook

  // Track mouse position for glow effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Set active section based on current page
  useEffect(() => {
    if (pathname === '/blog' || pathname.startsWith('/blog/')) {
      setActiveSection('blog');
    } else {
      // Only run scroll detection on home page
      const handleScroll = () => {
        const sections = navigationItems
          .filter((item) => item.href.startsWith('#'))
          .map((item) => item.id);
        const scrollPosition = window.scrollY + 120;

        let currentSection = 'home';

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              currentSection = sectionId;
              break;
            }

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
      setTimeout(handleScroll, 100);

      return () => window.removeEventListener('scroll', debouncedScroll);
    }
  }, [pathname]);

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

  const handleNavClick = (item: NavItem) => {
    // Handle external routes (like /blog)
    if (item.href.startsWith('/')) {
      router.push(item.href);
      return;
    }

    // Handle section scrolling (like #home, #about)
    if (item.href.startsWith('#')) {
      // If we're on blog page, navigate to home first
      if (pathname !== '/') {
        router.push(`/${item.href}`);
        return;
      }

      // If we're on home page, scroll to section
      const element = document.getElementById(item.id);
      if (element) {
        const elementPosition = element.offsetTop;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
        setActiveSection(item.id);

        // Update URL without affecting scroll
        window.history.replaceState(null, '', `#${item.id}`);
      }
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
                  <LenuvioLogo />
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
                    <button // Changed from <a> to <button>
                      onClick={() => handleNavClick(item)}
                      className={`${styles.navLink} ${
                        activeSection === item.id ? styles.navLinkActive : ''
                      }`}>
                      <span className={styles.navLinkText}>{item.label}</span>

                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <div className={styles.activeIndicator} />
                      )}
                    </button>
                  </div>
                ))}

                {/* CTA Button */}
                <div className={styles.ctaContainer}>
                  <button
                    className={styles.ctaButton}
                    onClick={() => {
                      const contactItem = navigationItems.find(
                        (item) => item.id === 'contact'
                      );
                      if (contactItem) {
                        handleNavClick(contactItem);
                      }
                    }}>
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
