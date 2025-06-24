'use client';

import React, { useState } from 'react';
import styles from './Footer.module.css';
import { LinkedInLogo } from '@/public/icons/LinkedInLogo';
import { GithubLogo } from '@/public/icons/GithubLogo';
import { MdEmail } from 'react-icons/md';
import { TwitterLogo } from '@/public/icons/TwitterLogo';
import { LenuvioLogo } from '@/public/branding/LenuvioLogo';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the email to your newsletter service
    console.log('Newsletter signup:', newsletterEmail);

    // For now, just show an alert
    alert(
      "Thanks for subscribing! I'll keep you updated on new projects and insights."
    );

    // Reset form
    setNewsletterEmail('');
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

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

            <p className={styles.brandDescription}>
              Empowering bold visions through cutting-edge technology and
              creative solutions. Transforming ambitious ideas into impactful
              digital experiences that inspire and deliver results.
            </p>

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
              <a
                href='https://github.com/bradmccray89'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='GitHub'>
                <GithubLogo fill='white' />
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
                href='mailto:hello@lenuvio.com'
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
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className={styles.footerLink}>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className={styles.footerLink}>
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className={styles.footerLink}>
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={styles.footerLink}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul className={styles.footerLinks}>
              <li>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('service', 'full-stack');
                    window.history.pushState({}, '', url.toString());
                    handleNavClick('contact');
                  }}
                  className={styles.footerLink}>
                  Full-Stack Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('service', 'cloud');
                    window.history.pushState({}, '', url.toString());
                    handleNavClick('contact');
                  }}
                  className={styles.footerLink}>
                  Cloud & DevOps
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('service', 'ui-ux');
                    window.history.pushState({}, '', url.toString());
                    handleNavClick('contact');
                  }}
                  className={styles.footerLink}>
                  UI/UX Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const url = new URL(window.location.href);
                    url.searchParams.set('service', 'transformation');
                    window.history.pushState({}, '', url.toString());
                    handleNavClick('contact');
                  }}
                  className={styles.footerLink}>
                  Digital Transformation
                </button>
              </li>
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

            {/* Mini Newsletter */}
            <div className={styles.newsletterSection}>
              <h5 className={styles.newsletterTitle}>Project Updates</h5>
              <p className={styles.newsletterDescription}>
                Get notified when I share new insights or showcase latest work.
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className={styles.newsletterForm}>
                <input
                  type='email'
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder='your@email.com'
                  className={styles.newsletterInput}
                  required
                />
                <button type='submit' className={styles.newsletterButton}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} Lenuvio. Crafted with passion and precision.
          </div>

          <nav className={styles.footerNav}>
            <a href='/privacy' className={styles.footerNavLink}>
              Privacy
            </a>
            <a href='/terms' className={styles.footerNavLink}>
              Terms
            </a>
            <a href='/sitemap' className={styles.footerNavLink}>
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
