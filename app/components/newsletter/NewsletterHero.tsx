/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import { useGlobalToast } from '@/app/contexts/ToastContext';
import styles from './NewsletterHero.module.css';
import {
  MdArrowUpward,
  MdCheck,
  MdCheckCircle,
  MdCheckCircleOutline,
  MdClose,
  MdOutlineCheckCircleOutline,
  MdTrendingUp,
} from 'react-icons/md';
import { LuCircleCheck, LuTrendingUp } from 'react-icons/lu';

// Centralized text variables
const newsletterTexts = {
  badge: 'Join our growing community',
  title: 'Get Weekly Insights That',
  highlight: 'Help You Build Better Products',
  description:
    'Actionable tips, architecture ideas, and development strategies for modern teams including practical AI and automation. Delivered every Tuesday.',
  features: [
    'AI & automation strategies',
    'Product tips',
    'Architecture ideas',
    'No spam, unsubscribe anytime',
  ],
  socialProof:
    'Be among the first to get exclusive insights on AI, automation, and more!',

  // Toasts and subscription
  toastRequiredTitle: 'Email Required',
  toastRequiredMsg: 'Please enter your email address.',
  toastWelcomeBackTitle: 'Welcome Back!',
  toastWelcomeBackMsg:
    'You have been successfully resubscribed to our newsletter.',
  toastAlreadyTitle: 'Already Subscribed!',
  toastAlreadyMsg:
    'This email is already actively subscribed to our newsletter.',
  toastSubscribedTitle: 'Successfully Subscribed!',
  toastSubscribedMsg:
    'Thanks for joining! You’ll get your first insight next Tuesday.',
  toastSubscribedShortMsg: 'Thanks for joining!',
  toastFailedTitle: 'Subscription Failed',
  toastFailedMsg: 'Please try again later.',

  // Inline CTA
  inlineTitle: 'Enjoying this content?',
  inlineSubtitle:
    'Get more insights on AI, automation, and product development delivered weekly. Be among the first to join our newsletter and help shape the conversation.',
  inlineFeatures: [
    'AI & automation',
    'No spam',
    'Unsubscribe anytime',
    'Weekly insights',
  ],

  // Sticky Bar
  stickyStrong: 'Join our newsletter',
  stickySpan:
    'Get weekly insights on AI, automation, and building scalable digital products',

  // Footer
  footerTitle: 'Stay Ahead of the Curve',
  footerDescription:
    'Get weekly insights on AI, automation, and building scalable digital products. Actionable tips, architecture ideas, and strategies for modern teams.',
  footerBenefits: [
    'AI & automation',
    'Product tips',
    'Architecture ideas',
    'Development strategies',
  ],
};

export const NewsletterHero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error, info } = useGlobalToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      error(
        newsletterTexts.toastRequiredTitle,
        newsletterTexts.toastRequiredMsg
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/audience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.details || result.error || 'Failed to subscribe'
        );
      }

      if (result.resubscribed) {
        success(
          newsletterTexts.toastWelcomeBackTitle,
          newsletterTexts.toastWelcomeBackMsg,
          8000
        );
      } else if (result.alreadyExists) {
        info(
          newsletterTexts.toastAlreadyTitle,
          newsletterTexts.toastAlreadyMsg,
          8000
        );
      } else if (result.newSubscriber) {
        success(
          newsletterTexts.toastSubscribedTitle,
          newsletterTexts.toastSubscribedMsg,
          8000
        );
      }

      setEmail('');
    } catch (err) {
      error(
        newsletterTexts.toastFailedTitle,
        err instanceof Error ? err.message : newsletterTexts.toastFailedMsg
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.newsletterHero}>
      <div className={styles.newsletterContainer}>
        <div className={styles.badge}>
          <LuTrendingUp size={24} className={styles.badgeIcon} />
          {newsletterTexts.badge}
        </div>

        <h3 className={styles.title}>
          {newsletterTexts.title}{' '}
          <span className={styles.highlight}>{newsletterTexts.highlight}</span>
        </h3>

        <p className={styles.description}>{newsletterTexts.description}</p>

        <div className={styles.features}>
          {newsletterTexts.features.map((feature, idx) => (
            <div className={styles.feature} key={idx}>
              <LuCircleCheck size={20} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className={styles.input}
              disabled={isSubmitting}
            />
            <button
              type='submit'
              className={styles.button}
              disabled={isSubmitting}>
              {isSubmitting ? 'Subscribing...' : 'Get Free Insights →'}
            </button>
          </div>
        </form>

        <div className={styles.socialProof}>{newsletterTexts.socialProof}</div>
      </div>
    </div>
  );
};

// 2. STICKY NEWSLETTER BAR COMPONENT
export const NewsletterStickyBar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { success, error } = useGlobalToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      error(
        newsletterTexts.toastRequiredTitle,
        newsletterTexts.toastRequiredMsg
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/audience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.details || result.error || 'Failed to subscribe'
        );
      }

      success(
        newsletterTexts.toastSubscribedTitle,
        newsletterTexts.toastSubscribedShortMsg,
        5000
      );
      setEmail('');
      setIsVisible(false);
    } catch (err) {
      error(newsletterTexts.toastFailedTitle, newsletterTexts.toastFailedMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.stickyBarContainer}>
      <div className={styles.stickyBar}>
        <div className={styles.stickyContainer}>
          <div className={styles.stickyContent}>
            <div className={styles.stickyText}>
              <strong>{newsletterTexts.stickyStrong}</strong>
              <span>{newsletterTexts.stickySpan}</span>
            </div>

            <form onSubmit={handleSubmit} className={styles.stickyForm}>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your email'
                className={styles.stickyInput}
                disabled={isSubmitting}
              />
              <button
                type='submit'
                className={styles.stickyButton}
                disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className={styles.closeButton}
            aria-label='Close'>
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

// 3. INLINE BLOG CTA COMPONENT
export const NewsletterInlineCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error } = useGlobalToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      error(
        newsletterTexts.toastRequiredTitle,
        newsletterTexts.toastRequiredMsg
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/audience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.details || result.error || 'Failed to subscribe'
        );
      }

      success(
        newsletterTexts.toastSubscribedTitle,
        newsletterTexts.toastSubscribedShortMsg,
        5000
      );
      setEmail('');
    } catch (err) {
      error(newsletterTexts.toastFailedTitle, newsletterTexts.toastFailedMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.inlineCTA}>
      <div className={styles.inlineContent}>
        <div className={styles.inlineHeader}>
          <div className={styles.inlineIcon}></div>
          <div>
            <h4 className={styles.inlineTitle}>
              {newsletterTexts.inlineTitle}
            </h4>
            <p className={styles.inlineSubtitle}>
              {newsletterTexts.inlineSubtitle}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.inlineForm}>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email for weekly insights'
            className={styles.inlineInput}
            disabled={isSubmitting}
          />
          <button
            type='submit'
            className={styles.inlineButton}
            disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>

        <div className={styles.inlineFeatures}>
          {newsletterTexts.inlineFeatures.map((feat, idx) => (
            <span key={idx}>✓ {feat}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. FOOTER ENHANCED NEWSLETTER COMPONENT
export const NewsletterFooterEnhanced: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error, info } = useGlobalToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      error(
        newsletterTexts.toastRequiredTitle,
        newsletterTexts.toastRequiredMsg
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/audience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.details || result.error || 'Failed to subscribe'
        );
      }

      if (result.resubscribed) {
        console.log('Resubscribed:', result);
        success(
          newsletterTexts.toastWelcomeBackTitle,
          newsletterTexts.toastWelcomeBackMsg,
          8000
        );
      } else if (result.alreadyExists) {
        console.log('Already exists:', result);
        info(
          newsletterTexts.toastAlreadyTitle,
          newsletterTexts.toastAlreadyMsg,
          8000
        );
      } else if (result.newSubscriber) {
        console.log('New subscriber:', result);
        success(
          newsletterTexts.toastSubscribedTitle,
          newsletterTexts.toastSubscribedMsg,
          8000
        );
      } else {
        console.log('Else result:', result);
        success(
          newsletterTexts.toastSubscribedShortMsg,
          'Thanks for joining!',
          5000
        );
      }

      setEmail('');
    } catch (err) {
      error(newsletterTexts.toastFailedTitle, newsletterTexts.toastFailedMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.footerNewsletter}>
      <div className={styles.footerContent}>
        <div className={styles.footerHeader}>
          <h3 className={styles.footerTitle}>{newsletterTexts.footerTitle}</h3>
          <p className={styles.footerDescription}>
            {newsletterTexts.footerDescription}
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.footerForm}>
          <div className={styles.footerInputGroup}>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className={styles.footerInput}
              disabled={isSubmitting}
            />
            <button
              type='submit'
              className={styles.footerButton}
              disabled={isSubmitting}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
            </button>
          </div>
        </form>

        <div className={styles.footerBenefits}>
          {newsletterTexts.footerBenefits.map((benefit, idx) => (
            <div className={styles.benefit} key={idx}>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
