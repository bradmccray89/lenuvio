'use client';

import styles from './Services.module.css';

export const Services: React.FC = () => {
  const servicesTitle = 'What We Build';
  const servicesSubtitle =
    'AI-powered automation, product engineering, and modern cloud solutions built for teams that want to work smarter, not harder.';
  const processTitle = 'How We Work';
  const processSubtitle =
    'From kickoff to launch, every step is designed for speed, transparency, and results.';
  const ctaTitle = 'Ready to Build Smarter?';
  const ctaDescription =
    "Let's turn your ideas into reality. Bring us your toughest challenge. If you're ready to automate, accelerate, or launch something new, we want to help.";
  const ctaButtonText = 'Start Your Project';

  const services = [
    {
      icon: '🤖',
      title: 'AI & Automation Systems',
      description:
        'Designing custom AI agents and smart automation that cut busywork, eliminate manual errors, and scale with your ambition.',
      features: [
        'Process Automation & Orchestration',
        'AI Assistant & Chatbot Development',
        'RAG (Retrieval-Augmented Generation) Solutions',
        'Intelligent API Integrations',
      ],
      cta: 'See AI in Action',
    },
    {
      icon: '⚡',
      title: 'Product Engineering',
      description:
        'Full-stack product design and engineering, focused on shipping fast and learning faster. We take bold ideas from zero to real users.',
      features: [
        'React, Angular, and Next.js Apps',
        'Custom .NET & Node.js Backends',
        'Rapid Prototyping',
        'End-to-End Product Delivery',
      ],
      cta: 'Build Your Product',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description:
        'Modern cloud architecture that keeps your business running at top speed—secure, scalable, and built to grow.',
      features: [
        'AWS, Azure, and Vercel Deployments',
        'Containerization & Docker',
        'CI/CD Pipeline Automation',
        'Performance & Security Monitoring',
      ],
      cta: 'Upgrade Your Cloud',
    },
    {
      icon: '🧠',
      title: 'AI Readiness & Strategy',
      description:
        'Not sure where AI or automation fits? We help you identify high-leverage use cases, pick the right tools, and avoid the buzzword trap.',
      features: [
        'AI Readiness Audits',
        'Workflow Analysis',
        'Strategic Consulting',
        'Practical Training for Teams',
      ],
      cta: 'Start With Strategy',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discover & Plan',
      description:
        'We dig in to understand your needs, map out real opportunities, and set ambitious goals together.',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description:
        'Move fast and break nothing—get an interactive prototype or proof of concept in your hands early.',
    },
    {
      number: '03',
      title: 'Build & Automate',
      description:
        'We develop, integrate, and automate, with real progress updates and room to adapt as we go.',
    },
    {
      number: '04',
      title: 'Launch & Learn',
      description:
        'Your product goes live, but we stick around for fine-tuning, data-driven improvement, and next steps.',
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
    <div className={styles.services}>
      {/* Main Content */}
      <div className={styles.servicesContent}>
        {/* Section Header */}
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>{servicesTitle}</h2>
          <p className={styles.servicesSubtitle}>{servicesSubtitle}</p>
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
            <h3 className={styles.processTitle}>{processTitle}</h3>
            <p className={styles.processSubtitle}>{processSubtitle}</p>
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
            <h3 className={styles.ctaTitle}>{ctaTitle}</h3>
            <p className={styles.ctaDescription}>{ctaDescription}</p>
            <button
              onClick={() => handleCtaClick('contact')}
              className={styles.ctaButton}>
              {ctaButtonText}
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
    </div>
  );
};
