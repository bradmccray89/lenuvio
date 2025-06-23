'use client';

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isClient, setIsClient] = useState(false);
  type Particle = { id: number; left: number; delay: number; duration: number };
  const [particles, setParticles] = useState<Particle[]>([]);

  const phrases = React.useMemo(
    () => ['Innovation', 'Technology', 'Excellence', 'Vision'],
    []
  );
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Fix hydration by only rendering particles on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Generate particles only once on client mount
    if (isClient) {
      setParticles(generateParticles());
    }
  }, [isClient]);

  // Typing animation effect
  useEffect(() => {
    if (!isClient) return;

    const currentPhrase = phrases[currentPhraseIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < currentPhrase.length) {
            setTypedText(currentPhrase.slice(0, currentIndex + 1));
            currentIndex++;
          } else {
            // Pause before deleting
            setTimeout(() => {
              isDeleting = true;
            }, 2000);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setTypedText(currentPhrase.slice(0, currentIndex - 1));
            currentIndex--;
          } else {
            // Move to next phrase
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            isDeleting = false;
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearInterval(typeInterval);
  }, [currentPhraseIndex, isClient, phrases]);

  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 8 + Math.random() * 4;

      particles.push({
        id: i,
        left,
        delay,
        duration,
      });
    }
    return particles;
  };

  const handleCtaClick = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.heroBackground}>
        {/* Floating Particles - Only render on client */}
        {isClient && (
          <div className={styles.particles}>
            {particles.map((particle) => (
              <div
                key={particle.id}
                className={styles.particle}
                style={{
                  left: `${particle.left}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Geometric Grid */}
        <div className={styles.geometricGrid} />

        {/* Glowing Orbs */}
        <div className={styles.glowingOrbs}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.heroContent}>
        {/* Main Title */}
        <h1 className={styles.heroTitle}>
          <span className={styles.titleLine1}>Building Tomorrow&apos;s</span>
          <span className={styles.titleLine2}>
            {typedText}
            {isClient && <span className={styles.typingCursor} />}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>
          Empowering your vision with cutting-edge technology and creative
          solutions. Turning bold ideas into impactful digital products that
          inspire and deliver results.
        </p>

        {/* CTA Buttons */}
        <div className={styles.heroActions}>
          <button
            onClick={() => handleCtaClick('contact')}
            className={styles.primaryCta}>
            Let&apos;s Build Something
            <svg
              className={styles.ctaIcon}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7l5 5m0 0l-5 5m5-5H6'
              />
            </svg>
          </button>

          <button
            onClick={() => handleCtaClick('about')}
            className={styles.secondaryCta}>
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>8+</span>
            <span className={styles.statLabel}>Years Crafting Code</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Tech Stacks Explored</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>∞</span>
            <span className={styles.statLabel}>Ideas Engineered</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} onClick={handleScrollDown}>
        <svg
          className={styles.scrollArrow}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>
    </div>
  );
};
