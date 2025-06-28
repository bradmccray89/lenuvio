'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'; // Fixed import
import { NavItem } from '@/app/types/navigation';
import styles from './MobileMenu.module.css';
import { LenuvioLogo } from '@/public/branding/LenuvioLogo';

interface MobileMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); // This is now the correct App Router hook

  // Handle mounting/unmounting with animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to ensure DOM is updated before animation
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Wait for animation to complete before unmounting
      setTimeout(() => setShouldRender(false), 400);
    }
  }, [isOpen]);

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

  // Handle navigation click with support for both internal and external routes
  const handleNavClick = (item: NavItem) => {
    // Handle external routes (like /blog)
    if (item.href.startsWith('/')) {
      router.push(item.href);
      onClose();
      return;
    }

    // Handle section scrolling (like #home, #about)
    if (item.href.startsWith('#')) {
      // If we're on blog page, navigate to home first
      if (pathname !== '/') {
        router.push(`/${item.href}`);
        onClose();
        return;
      }

      // If we're on home page, scroll to section
      const element = document.getElementById(item.id);
      if (element) {
        // // Prevent default scroll behavior when navigating
        // const currentScrollY = window.scrollY;

        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Update URL without affecting scroll
        window.history.replaceState(null, '', `#${item.id}`);
      }
      onClose();
    }
  };

  // Don't render if shouldn't be shown
  if (!shouldRender) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${
          isAnimating ? styles.backdropOpen : ''
        }`}
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          isAnimating ? styles.mobileMenuOpen : ''
        }`}>
        <div className={styles.menuBackground}>
          {/* Animated Background Pattern */}
          <div className={styles.menuBackgroundPattern} />
          <div className={styles.menuBackgroundOrbs}>
            <div className={styles.orb1} />
            <div className={styles.orb2} />
          </div>

          {/* Menu Content */}
          <div
            className={`${styles.menuContent} ${
              isAnimating ? styles.menuContentOpen : ''
            }`}>
            {/* Header Section */}
            <div className={styles.menuHeader}>
              <div className={styles.menuLogo}>
                <LenuvioLogo className={styles.menuLogoIcon} />
                <span className={styles.menuLogoText}>Lenuvio</span>
              </div>

              <button
                onClick={onClose}
                className={styles.closeButton}
                aria-label='Close menu'>
                <svg
                  className={styles.closeIcon}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Section */}
            <nav className={styles.menuNav} role='navigation'>
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`${styles.menuNavItem} ${
                    isAnimating ? styles.menuNavItemOpen : ''
                  }`}
                  style={
                    { '--delay': `${index * 0.1}s` } as React.CSSProperties
                  }>
                  <button // Changed from <a> to <button>
                    onClick={() => handleNavClick(item)}
                    className={styles.menuNavLink}>
                    <span className={styles.menuNavText}>{item.label}</span>
                  </button>
                </div>
              ))}
            </nav>

            {/* Footer Section */}
            <div className={styles.menuFooter}>
              <button
                className={styles.menuCta}
                onClick={() => {
                  const contactItem = items.find(
                    (item) => item.id === 'contact'
                  );
                  if (contactItem) {
                    handleNavClick(contactItem);
                  }
                }}>
                <span className={styles.menuCtaText}>Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
