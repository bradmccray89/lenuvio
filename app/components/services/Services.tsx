'use client';

import styles from './Services.module.css';

export const Services: React.FC = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning Solutions',
      description:
        'Custom artificial intelligence implementations that solve real business problems. From predictive analytics to intelligent decision systems, we build AI that delivers measurable value.',
      features: [
        'Custom AI Model Development',
        'Machine Learning Integration',
        'Predictive Analytics Systems',
        'Natural Language Processing',
      ],
      cta: 'Explore AI Development',
      isPrimary: true,
    },
    {
      icon: '⚡',
      title: 'Intelligent Automation',
      description:
        'Streamline operations with smart automation that adapts and learns. We design systems that eliminate repetitive tasks and optimize workflows using AI-driven processes.',
      features: [
        'Process Automation Design',
        'Workflow Optimization',
        'System Integration',
        'Performance Analytics',
      ],
      cta: 'Automate Operations',
    },
    {
      icon: '🚀',
      title: 'Custom Software Development',
      description:
        "Modern applications built with scalable architecture and intelligent features. When existing solutions don't fit, we create custom software that grows with your business.",
      features: [
        'Full-Stack Web Applications',
        'API Development & Integration',
        'Cloud-Native Architecture',
        'Modern React/Next.js Interfaces',
      ],
      cta: 'Build Custom Solution',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description:
        'Deep dive into your processes to identify automation opportunities and AI implementation strategies that deliver maximum value.',
    },
    {
      number: '02',
      title: 'Solution Architecture',
      description:
        'Design intelligent systems with clear implementation roadmap, technology choices, and measurable success criteria.',
    },
    {
      number: '03',
      title: 'Development & Integration',
      description:
        'Build and deploy AI solutions with minimal disruption, comprehensive testing, and seamless integration with existing systems.',
    },
    {
      number: '04',
      title: 'Optimization & Growth',
      description:
        'Monitor performance, refine algorithms, and continuously improve system intelligence based on real-world data and feedback.',
    },
  ];

  const capabilities = [
    {
      category: 'AI & Machine Learning',
      items: [
        'TensorFlow & PyTorch',
        'OpenAI API Integration',
        'Computer Vision',
        'Predictive Modeling',
      ],
    },
    {
      category: 'Automation Technologies',
      items: [
        'Workflow Orchestration',
        'API-First Integration',
        'Event-Driven Systems',
        'Process Optimization',
      ],
    },
    {
      category: 'Development Stack',
      items: [
        'React, Next.js, TypeScript',
        '.NET, Node.js, Python',
        'PostgreSQL, MongoDB',
        'AWS, Azure, Vercel',
      ],
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
  };

  return (
    <div className={styles.services}>
      {/* Main Content */}
      <div className={styles.servicesContent}>
        {/* Section Header */}
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>AI-Powered Solutions</h2>
          <p className={styles.servicesSubtitle}>
            Specialized in artificial intelligence and automation technologies
            that transform how businesses operate and make decisions.
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

        {/* Future Platform Teaser */}
        <div className={styles.comingSoonSection}>
          <div className={styles.comingSoonCard}>
            <h3 className={styles.comingSoonTitle}>🚀 EchoForge Platform</h3>
            <p className={styles.comingSoonDescription}>
              We&apos;re developing an enterprise AI automation platform that
              will make intelligent workflows accessible to businesses of all
              sizes.
              <strong> Coming Soon.</strong>
            </p>
            <button className={styles.comingSoonCta}>
              Get Early Access Updates
            </button>
          </div>
        </div>

        {/* Capabilities Section */}
        <div className={styles.capabilitiesSection}>
          <h3 className={styles.capabilitiesTitle}>Technical Expertise</h3>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map((capability, index) => (
              <div key={index} className={styles.capabilityCard}>
                <h4 className={styles.capabilityCategory}>
                  {capability.category}
                </h4>
                <ul className={styles.capabilityList}>
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.capabilityItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className={styles.processSection}>
          <h3 className={styles.processTitle}>Our AI Development Process</h3>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDescription}>{step.description}</p>
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
              Let&apos;s discuss how artificial intelligence and automation can
              drive measurable results for your business.
            </p>
            <button
              onClick={() => handleCtaClick('contact')}
              className={styles.ctaButton}>
              Schedule a Consulation
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
