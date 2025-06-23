'use client';

import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

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
    { value: 'full-stack', label: 'Full-Stack Development' },
    { value: 'cloud', label: 'Cloud Solutions & DevOps' },
    { value: 'ui-ux', label: 'UI/UX & Frontend Architecture' },
    { value: 'transformation', label: 'Digital Transformation' },
    { value: 'other', label: 'Other / Consultation' },
  ];

  const serviceIcons: { [key: string]: string } = {
    'full-stack': '🚀',
    cloud: '☁️',
    'ui-ux': '🎨',
    transformation: '⚡',
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    // For now, just show an alert
    alert("Thank you for your message! I'll get back to you within 48 hours.");

    // Reset form
    setFormData({
      name: '',
      email: '',
      service: formData.service, // Keep the service selected
      message: '',
    });
  };

  const selectedServiceDetails = formData.service
    ? getServiceDetails(formData.service)
    : null;

  return (
    <section id='contact' className={styles.contact}>
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
        {selectedServiceDetails && (
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
                  className={styles.formSelect}>
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
                />
              </div>

              <button type='submit' className={styles.submitButton}>
                Send Message
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
                  href='mailto:hello@lenuvio.com'
                  className={styles.contactMethod}>
                  <div className={styles.methodIcon}>📧</div>
                  <div className={styles.methodContent}>
                    <div className={styles.methodLabel}>Email</div>
                    <div className={styles.methodValue}>hello@lenuvio.com</div>
                  </div>
                </a>

                <a
                  href='https://linkedin.com/in/yourprofile'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.contactMethod}>
                  <div className={styles.methodIcon}>💼</div>
                  <div className={styles.methodContent}>
                    <div className={styles.methodLabel}>LinkedIn</div>
                    <div className={styles.methodValue}>
                      Professional Network
                    </div>
                  </div>
                </a>

                <a
                  href='https://github.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.contactMethod}>
                  <div className={styles.methodIcon}>💻</div>
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
    </section>
  );
};
