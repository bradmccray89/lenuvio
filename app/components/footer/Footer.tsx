// app/components/footer/Footer.tsx - Updated with proper newsletter integration
'use client';

import React from 'react';
import styles from './Footer.module.css';
import { LinkedInLogo } from '@/public/icons/LinkedInLogo';
import { GithubLogo } from '@/public/icons/GithubLogo';
import { MdEmail } from 'react-icons/md';
import { TwitterLogo } from '@/public/icons/TwitterLogo';
import { LenuvioLogo } from '@/public/branding/LenuvioLogo';
import { NavItem } from '@/app/types/navigation';
import { usePathname, useRouter } from 'next/navigation';
import { NewsletterFooterEnhanced } from '../newsletter/NewsletterHero';
import { TikTokLogo } from '@/public/icons/TikTokLogo';
import { InstagramLogo } from '@/public/icons/InstagramLogo';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const brandDescription =
    'We help ambitious teams build what comes next. AI and automation are our foundation. Every product we create is designed to eliminate busywork, spark innovation, and move the needle for your business.';

  const navigationItems: NavItem[] = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Blog', href: '/blog', id: 'blog' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const services: NavItem[] = [
    {
      label: 'AI & Automation Systems',
      href: 'See AI in Action',
      id: 'ai-automation',
    },
    {
      label: 'Product Engineering',
      href: 'Build Your Product',
      id: 'product-engineering',
    },
    {
      label: 'Cloud & DevOps',
      href: 'Upgrade Your Cloud',
      id: 'cloud-devops',
    },
    {
      label: 'AI Readiness & Strategy',
      href: 'Start With Strategy',
      id: 'ai-readiness',
    },
  ];

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
        // setActiveSection(item.id);

        // Update URL without affecting scroll
        window.history.replaceState(null, '', `#${item.id}`);
      }
    }
  };

  const handleServiceClick = (service: NavItem) => {
    // Map service names to URL-friendly values
    const serviceMap: { [key: string]: string } = {
      'AI & Automation Systems': 'ai-automation',
      'Product Engineering': 'product-engineering',
      'Cloud & DevOps': 'cloud-devops',
      'AI Readiness & Strategy': 'ai-readiness',
    };

    // Get the service parameter from the map or default to 'other'
    const serviceParam = serviceMap[service.label] || 'other';

    // Update URL with service parameter
    const url = new URL(window.location.href);
    url.searchParams.set('service', serviceParam);
    window.history.pushState({}, '', url.toString());

    // Scroll to contact section
    const element = document.getElementById('contact');
    if (element) {
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Main Footer Grid */}
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.brandLogo}>
              <LenuvioLogo size={48} className={styles.logoIcon} />
              <div className={styles.logoText}>Lenuvio</div>
            </div>

            <p className={styles.brandDescription}>{brandDescription}</p>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              <a
                href='https://www.linkedin.com/company/lenuvio'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='LinkedIn'>
                <LinkedInLogo />
              </a>
              {/* Create links for tiktok and instagram */}
              <a
                href='https://www.tiktok.com/@lenuviohq'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='TikTok'>
                <TikTokLogo />
              </a>
              <a
                href='https://www.instagram.com/lenuviohq/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='Instagram'>
                <InstagramLogo />
              </a>
              <a
                href='https://x.com/lenuvio19335'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='Twitter'>
                <TwitterLogo fill='white' />
              </a>
              <a
                href='mailto:hello@lenuv.io'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='Email'>
                <MdEmail fill='white' size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
            <ul className={styles.footerLinks}>
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={styles.footerLink}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul className={styles.footerLinks}>
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className={styles.footerLink}>
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Stay Connected</h4>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg
                  className={styles.contactIcon}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span>hello@lenuv.io</span>
              </div>

              <div className={styles.contactItem}>
                <svg
                  className={styles.contactIcon}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>48h Response Time</span>
              </div>

              <div className={styles.statusIndicator}>
                <div className={styles.statusDot}></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <NewsletterFooterEnhanced />

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} Lenuvio. Crafted with passion and precision.
          </div>

          <nav className={styles.footerNav}>
            <a href='/privacy-policy' className={styles.footerNavLink}>
              Privacy Policy
            </a>
            <a href='/terms-of-service' className={styles.footerNavLink}>
              Terms of Service
            </a>
            <a href='/sitemap.xml' className={styles.footerNavLink}>
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
