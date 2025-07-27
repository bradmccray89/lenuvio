'use client';

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isClient, setIsClient] = useState(false);
  type Particle = { id: number; left: number; delay: number; duration: number };
  const [particles, setParticles] = useState<Particle[]>([]);

  const heroTitle = "Building Tomorrow's";
  const heroSubtitle =
    'Turning ambitious ideas into impactful products using AI, automation, and custom software.';
  const heroActions = [
    {
      label: "Let's Build Something",
      target: 'contact',
      primary: true,
    },
    {
      label: 'Learn More',
      target: 'about',
      primary: false,
    },
  ];

  const heroDifferentiators = [
    { label: 'Build Fast. Iterate Faster.' },
    { label: 'Tech-Agnostic. Results-Obsessed.' },
    { label: 'AI That Actually Works.' },
  ];

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
          <span className={styles.titleLine1}>{heroTitle}</span>
          <span className={styles.titleLine2}>
            {typedText}
            {isClient && <span className={styles.typingCursor} />}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>{heroSubtitle}</p>

        {/* CTA Buttons */}
        <div className={styles.heroActions}>
          {heroActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleCtaClick(action.target)}
              className={
                action.primary ? styles.primaryCta : styles.secondaryCta
              }>
              {action.label}
              {action.primary && (
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
              )}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className={styles.heroDifferentiators}>
          {heroDifferentiators.map((differentiator, index) => (
            <div key={index} className={styles.differentiatorItem}>
              <span className={styles.differentiatorLabel}>
                {differentiator.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
