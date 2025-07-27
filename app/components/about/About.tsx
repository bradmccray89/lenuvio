'use client';

import Image from 'next/image';
import styles from './About.module.css';

export const About: React.FC = () => {
  const yearsOfExperience = () => {
    const startMonth = 6;
    const startYear = 2017;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Months are zero-based
    let experience = currentYear - startYear;
    if (currentMonth < startMonth) {
      experience--;
    }
    return experience;
  };

  const aboutTitle = 'About Lenuvio';
  const aboutSubtitle =
    "Where AI, automation, and code come together to build what's next";
  const heroTitle = 'Problem Solvers. Builders. Innovators.';
  const heroRole = 'AI and Full-Stack Product Engineering';
  const heroDescription =
    'We help founders and teams bring ambitious ideas to life with practical AI, automation, and modern software. Our focus is on building products that work, save time, and actually get used.';
  const storyTitle = 'The Journey';

  const stackTitle = 'Our Stack';
  const stackSubtitle = 'Tools we use to build, automate, and scale.';
  const techCategories = [
    {
      icon: '⚡',
      title: 'Frontend',
      technologies: 'Angular, React, Next.js, TypeScript, Tailwind CSS',
    },
    {
      icon: '🚀',
      title: 'Backend',
      technologies: '.NET, Node.js, Supabase, PostgreSQL, MySQL',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      technologies: 'Vercel, Azure, AWS, Docker, GitHub Actions',
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      technologies: 'N8N, Custom AI agents, API integration, Task automation',
    },
  ];

  const journeyItems = [
    {
      icon: '🎓',
      year: '2017',
      title: 'Getting Started',
      description:
        'Started turning ideas into products and learning what it takes to deliver real software.',
    },
    {
      icon: '🔍',
      year: '2017-Present',
      title: 'Always Exploring',
      description: 'Constantly picking up new tech and sharpening our skills.',
    },
    {
      icon: '💡',
      year: '2024',
      title: 'Lenuvio Launched',
      description:
        'Founded Lenuvio to help teams build faster with AI and automation.',
    },
    {
      icon: '∞',
      year: 'Next',
      title: "What's Next?",
      description:
        'Working with founders to shape the future of digital products.',
    },
  ];

  const highlights = [
    {
      icon: '🤔',
      label: 'Curiosity is Required',
      description: 'We ask "why" until we hit something worth building.',
    },
    {
      icon: '⚡',
      label: 'Build Something Real',
      description:
        'We ship fast and break our own stuff before anyone else can.',
    },
    {
      icon: '🧑‍💻',
      label: 'Direct Access',
      description: 'Talk to the actual builders, not a sales rep or bot.',
    },
  ];

  return (
    <div className={styles.about}>
      {/* Main Content */}
      <div className={styles.aboutContent}>
        {/* Section Header */}
        <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>{aboutTitle}</h2>
          <p className={styles.aboutSubtitle}>{aboutSubtitle}</p>
        </div>

        {/* Hero Statement Section - New design */}
        <div className={styles.heroStatement}>
          <div className={styles.heroCard}>
            <div className={styles.heroImage}>
              <Image
                src='/images/robot-innovation.jpg'
                alt="AI Innovation - Building Tomorrow's Technology"
                className={styles.heroImg}
                width={600}
                height={400}
                priority
              />
              <div className={styles.colorOverlay}></div>
            </div>{' '}
            <h3 className={styles.heroTitle}>{heroTitle}</h3>
            <p className={styles.heroRole}>{heroRole}</p>
            <p className={styles.heroDescription}>{heroDescription}</p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{highlight.icon}</div>
                <div className={styles.highlightLabel}>{highlight.label}</div>
                <div className={styles.highlightDescription}>
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className={styles.storySection}>
          <div className={styles.storyContent}>
            <h3>{storyTitle}</h3>
            <div className={styles.storyGrid}>
              <div className={styles.storyColumn}>
                <p className={styles.storyText}>
                  With{' '}
                  <span className={styles.storyHighlight}>
                    {yearsOfExperience()}+ years pushing the limits of what code
                    can do
                  </span>
                  , we have learned one thing: innovation favors the bold. The
                  future belongs to those who challenge the way things are done
                  and build something better.
                </p>
              </div>
              <div className={styles.storyColumn}>
                <p className={styles.storyText}>
                  Lenuvio is built on that spirit. We are not here to recycle
                  tired solutions or slap AI on top of old workflows. We are
                  here to design smarter systems where automation is the
                  backbone and artificial intelligence is the real advantage,
                  not just a buzzword.
                </p>
              </div>
            </div>
            <div className={styles.storyFull}>
              <p className={styles.storyText}>
                The playbook is open, the ceiling does not exist, and the only
                rule is never settle. We help people and teams reclaim their
                time, focus on what matters, and build digital products that
                actually move the needle. If you are ready to build what&apos;s
                next, welcome to Lenuvio.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className={styles.techStack}>
          <div className={styles.techStackHeader}>
            <h3 className={styles.techStackTitle}>{stackTitle}</h3>
            <p className={styles.techStackSubtitle}>{stackSubtitle}</p>
          </div>

          <div className={styles.techGrid}>
            {techCategories.map((category, index) => (
              <div key={index} className={styles.techCategory}>
                <span className={styles.techIcon}>{category.icon}</span>
                <h4 className={styles.techCategoryTitle}>{category.title}</h4>
                <p className={styles.techList}>{category.technologies}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className={styles.journeySection}>
          <div className={styles.journeyHeader}>
            <h3 className={styles.journeyTitle}>The Creative Evolution</h3>
          </div>

          <div className={styles.journeyTimeline}>
            {journeyItems.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>{item.icon}</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{item.year}</div>
                  <h4 className={styles.timelineTitle}>{item.title}</h4>
                  <p className={styles.timelineDescription}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
