'use client';

import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { MdEmail } from 'react-icons/md';
import { LinkedInLogo } from '@/public/icons/LinkedInLogo';
import { GithubLogo } from '@/public/icons/GithubLogo';
import { useGlobalToast } from '@/app/contexts/ToastContext';

interface ContactProps {
  selectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService || '',
    message: '',
  });

  // Track if service was pre-selected vs manually changed
  const [isServicePreSelected, setIsServicePreSelected] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error } = useGlobalToast();

  // Check for service parameter in URL or passed prop
  useEffect(() => {
    const updateServiceFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceParam = urlParams.get('service');

      if (serviceParam || selectedService) {
        setFormData((prev) => ({
          ...prev,
          service: serviceParam || selectedService || '',
        }));
        setIsServicePreSelected(true);
      }
    };

    // Initial check
    updateServiceFromUrl();

    // Listen for popstate events (back/forward buttons)
    window.addEventListener('popstate', updateServiceFromUrl);

    // Listen for URL changes (for programmatic navigation)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(history, args);
      setTimeout(updateServiceFromUrl, 0);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(history, args);
      setTimeout(updateServiceFromUrl, 0);
    };

    return () => {
      window.removeEventListener('popstate', updateServiceFromUrl);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [selectedService]);

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'ai-automation', label: 'AI & Automation Systems' },
    { value: 'product-engineering', label: 'Product Engineering' },
    { value: 'cloud-devops', label: 'Cloud & DevOps' },
    { value: 'ai-readiness', label: 'AI Readiness & Strategy' },
    { value: 'other', label: 'Other / Consultation' },
  ];

  const serviceIcons: { [key: string]: string } = {
    'ai-automation': '🤖',
    'product-engineering': '⚡',
    'cloud-devops': '☁️',
    'ai-readiness': '🧠',
    other: '💡',
  };

  const getServiceDetails = (serviceValue: string) => {
    const service = serviceOptions.find((opt) => opt.value === serviceValue);
    return {
      name: service?.label || '',
      icon: serviceIcons[serviceValue] || '💡',
    };
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // If user manually changes the service dropdown, hide the alert
    if (name === 'service') {
      setIsServicePreSelected(false);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update your Contact component to handle the new response format
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(
          result.details || result.error || 'Failed to send message'
        );
      }

      console.log('Contact form result:', result);

      // Show success toast with tracking info
      if (result.success) {
        success(
          'Message Sent Successfully!',
          `Thanks for reaching out! I'll get back to you within 48 hours. Reference: ${result.tracking?.notificationId?.slice(-6) || 'N/A'}`,
          6000
        );
      }

      // Reset form and service selection
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
      });
    } catch (err) {
      console.error('Contact form error:', err);

      error(
        'Failed to Send Message',
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or contact me directly.',
        8000
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedServiceDetails = formData.service
    ? getServiceDetails(formData.service)
    : null;

  // Only show alert if service is pre-selected AND user hasn't manually changed it
  const showServiceAlert =
    isServicePreSelected && formData.service && selectedServiceDetails;

  return (
    <div className={styles.contact}>
      <div className={styles.contactContent}>
        {/* Section Header */}
        <div className={styles.contactHeader}>
          <h2 className={styles.contactTitle}>Let&apos;s Create Together</h2>
          <p className={styles.contactSubtitle}>
            Ready to transform your bold idea into an impactful digital
            experience? Let&apos;s start the conversation.
          </p>
        </div>

        {/* Service Interest Alert */}
        {showServiceAlert && (
          <div className={styles.serviceAlert}>
            <div className={styles.serviceIcon}>
              {selectedServiceDetails.icon}
            </div>
            <div className={styles.serviceAlertContent}>
              <div className={styles.serviceAlertTitle}>
                Interested in {selectedServiceDetails.name}
              </div>
              <div className={styles.serviceAlertText}>
                I&apos;ve pre-selected this service based on your interest. Feel
                free to change it or tell me more in your message!
              </div>
            </div>
          </div>
        )}

        {/* Main Contact Grid */}
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor='name' className={styles.formLabel}>
                  Your Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder='Enter your full name'
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='email' className={styles.formLabel}>
                  Email Address *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder='your.email@example.com'
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='service' className={styles.formLabel}>
                  Service Interest
                </label>
                <select
                  id='service'
                  name='service'
                  value={formData.service}
                  onChange={handleInputChange}
                  className={styles.formSelect}
                  disabled={isSubmitting}>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='message' className={styles.formLabel}>
                  Your Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  placeholder='Tell me about your project, goals, timeline, or any questions you have...'
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type='submit'
                className={styles.submitButton}
                disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg
                  className={styles.submitIcon}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Let&apos;s Connect</h3>
              <p className={styles.infoText}>
                Whether you have a fully formed idea or just a spark of
                inspiration, I&apos;m here to help turn your vision into
                reality. Every great project starts with a conversation.
              </p>

              <div className={styles.contactMethods}>
                <a
                  href='mailto:hello@lenuv.io'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <MdEmail />
                  </div>
                  <div className={styles.methodContent}>
                    <div className={styles.methodLabel}>Email</div>
                    <div className={styles.methodValue}>hello@lenuv.io</div>
                  </div>
                </a>

                <a
                  href='https://www.linkedin.com/company/lenuvio'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <LinkedInLogo />
                  </div>
                  <div className={styles.methodContent}>
                    <div className={styles.methodLabel}>LinkedIn</div>
                    <div className={styles.methodValue}>
                      Professional Network
                    </div>
                  </div>
                </a>

                <a
                  href='https://github.com/bradmccray89'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    <GithubLogo />
                  </div>
                  <div className={styles.methodContent}>
                    <div className={styles.methodLabel}>GitHub</div>
                    <div className={styles.methodValue}>View My Code</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time Card */}
            <div className={styles.responseCard}>
              <div className={styles.responseTitle}>Response Time</div>
              <div className={styles.responseTime}>48h</div>
              <div className={styles.responseText}>
                I typically respond to all inquiries within 48 hours, often much
                sooner.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
