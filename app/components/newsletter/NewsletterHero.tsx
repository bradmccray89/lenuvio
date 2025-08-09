/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { useGlobalToast } from '@/app/contexts/ToastContext';
import styles from './NewsletterHero.module.css';
import { MdClose, MdEmail } from 'react-icons/md';
import { LuCircleCheck, LuTrendingUp } from 'react-icons/lu';

// Centralized text variables
const newsletterTexts = {
  badge: 'Join our growing community',
  title: 'Weekly AI Insights',
  highlight: 'Build Smarter, Not Harder',
  description:
    'Get actionable tips and real-world strategies for using AI, automation, and better product development. New ideas every Tuesday.',
  features: [
    'Practical AI tips',
    'Automation Strategies',
    'Product Development Ideas',
    'No spam, unsubscribe anytime',
  ],
  socialProof:
    'Join others getting early insights on AI, automation, and EchoForge updates.',

  // Toasts and subscription
  toastRequiredTitle: 'Email Required',
  toastRequiredMsg: 'Please enter your email address.',
  toastWelcomeBackTitle: 'Welcome Back!',
  toastWelcomeBackMsg: 'You are back on the list. Thanks for staying with us.',
  toastAlreadyTitle: 'Already Subscribed!',
  toastAlreadyMsg: 'This email is already signed up for our newsletter.',
  toastSubscribedTitle: 'Subscription Confirmed!',
  toastSubscribedMsg:
    'Thanks for joining! Your first insight arrives next Tuesday.',
  toastSubscribedShortMsg: 'Thanks for joining!',
  toastFailedTitle: 'Subscription Failed',
  toastFailedMsg: 'Please try again later.',

  // Inline CTA
  inlineTitle: 'Like this content?',
  inlineSubtitle:
    'Sign up to get more practical AI, automation, and product tips every week. Be first to know when EchoForge launches.',
  inlineFeatures: [
    'Practical AI insights',
    'No spam',
    'Unsubscribe any time',
    'Weekly updates',
  ],

  // Sticky Bar
  stickyStrong: 'Sign up for our weekly insights',
  stickySpan:
    'Get the latest on AI, automation, and product strategies straight to your inbox.',

  // Footer
  footerTitle: 'Stay Ahead',
  footerDescription:
    'Subscribe for weekly updates on AI, automation, and smarter product development. Simple, useful tips every Tuesday.',
  footerBenefits: [
    'AI tips you can use',
    'Automation strategies',
    'Fresh product ideas',
    'No spam, just value',
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

        <h1 className={styles.title}>
          {newsletterTexts.title}{' '}
          <span className={styles.highlight}>{newsletterTexts.highlight}</span>
        </h1>

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
          <div className={styles.inputWrapper}>
            <MdEmail className={styles.inputIcon} />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className={styles.input}
              disabled={isSubmitting}
            />
          </div>
          <button
            type='submit'
            className={styles.submitButton}
            disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Get Free Access →'}
          </button>
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
          <div className={styles.inputWrapper}>
            <MdEmail className={styles.inputIcon} />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your business email'
              className={styles.input}
              disabled={isSubmitting}
            />
          </div>
          <button
            type='submit'
            className={styles.submitButton}
            disabled={isSubmitting}>
            {isSubmitting ? 'Subscribing...' : 'Get Free Access →'}
          </button>
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
