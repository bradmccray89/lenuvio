'use client';

import styles from './Services.module.css';

export const Services: React.FC = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description:
        'End-to-end web application development using modern frameworks and best practices. From concept to deployment, creating scalable solutions that grow with your business.',
      features: [
        'React, Angular & Next.js Applications',
        '.NET & Node.js Backend Development',
        'Database Design & Optimization',
        'API Development & Integration',
      ],
      cta: 'Explore Development',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions & DevOps',
      description:
        'Modern cloud infrastructure and deployment strategies that ensure your applications are scalable, secure, and performant across all environments.',
      features: [
        'AWS, Azure & Vercel Deployment',
        'Docker Containerization',
        'CI/CD Pipeline Setup',
        'Performance Monitoring',
      ],
      cta: 'Learn About Cloud',
    },
    {
      icon: '🎨',
      title: 'UI/UX & Frontend Architecture',
      description:
        'Creating intuitive, responsive user interfaces with focus on user experience, accessibility, and maintainable component architecture.',
      features: [
        'Responsive Design Systems',
        'Component Architecture',
        'User-Centered Design',
        'Performance Optimization',
      ],
      cta: 'See Design Work',
    },
    {
      icon: '⚡',
      title: 'Digital Transformation',
      description:
        'Modernizing legacy systems and processes with cutting-edge technology solutions that improve efficiency and user satisfaction.',
      features: [
        'Legacy System Migration',
        'Process Automation',
        'Technology Consulting',
        'Strategic Planning',
      ],
      cta: 'Start Transformation',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'Deep dive into your vision, goals, and challenges to understand exactly what success looks like for your project.',
    },
    {
      number: '02',
      title: 'Strategy',
      description:
        'Craft a comprehensive plan with technology choices, architecture decisions, and development roadmap.',
    },
    {
      number: '03',
      title: 'Development',
      description:
        'Build your solution with clean, scalable code, regular updates, and continuous collaboration.',
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'Deploy, test, and optimize your application with ongoing support and performance monitoring.',
    },
  ];

  const handleCtaClick = (service: string) => {
    console.log('CTA clicked for:', service);

    // Map service names to URL-friendly values
    const serviceMap: { [key: string]: string } = {
      'Explore Development': 'full-stack',
      'Learn About Cloud': 'cloud',
      'See Design Work': 'ui-ux',
      'Start Transformation': 'transformation',
    };

    const serviceParam = serviceMap[service] || 'other';

    // Scroll to contact section with service parameter
    const element = document.getElementById('contact');
    if (element) {
      const navbarHeight = 0;
      const elementPosition = element.offsetTop - navbarHeight;

      // Add service parameter to URL
      const url = new URL(window.location.href);
      url.searchParams.set('service', serviceParam);
      window.history.pushState({}, '', url.toString());

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }

    // Optional: Track analytics or trigger specific actions based on service
    // analytics.track('service_cta_clicked', { service });
  };

  return (
    <>
      {/* Main Content */}
      <div className={styles.servicesContent}>
        {/* Section Header */}
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>Creative Solutions</h2>
          <p className={styles.servicesSubtitle}>
            Transforming bold ideas into powerful digital experiences through
            cutting-edge technology and innovative problem-solving
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>

              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>

              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.serviceFeature}>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCtaClick(service.cta)}
                className={styles.serviceCta}>
                {service.cta}
                <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className={styles.processSection}>
          <div className={styles.processHeader}>
            <h3 className={styles.processTitle}>How We Create Together</h3>
            <p className={styles.processSubtitle}>
              A collaborative approach that ensures your vision becomes reality
            </p>
          </div>

          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.processNumber}>{step.number}</div>
                <h4 className={styles.processStepTitle}>{step.title}</h4>
                <p className={styles.processStepDescription}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>
              Ready to Build Something Amazing?
            </h3>
            <p className={styles.ctaDescription}>
              Let&apos;s transform your bold idea into an impactful digital
              experience that inspires and delivers exceptional results.
            </p>
            <button
              onClick={() => handleCtaClick('contact')}
              className={styles.ctaButton}>
              Start Your Project
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
          </div>
        </div>
      </div>
    </>
  );
};
