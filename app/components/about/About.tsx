'use client';

import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

export const About: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Code snippets for floating animation
  const codeSnippets = [
    'const innovation = await buildSolution();',
    'function transformIdeas() { return reality; }',
    'export default { passion, precision, performance };',
    'useEffect(() => { createImpact(); }, [vision]);',
    'class Developer extends Innovator { solve() }',
  ];

  const techCategories = [
    {
      icon: '⚡',
      title: 'Frontend',
      technologies: 'React, Next.js, TypeScript, Tailwind CSS, Three.js',
    },
    {
      icon: '🚀',
      title: 'Backend',
      technologies: 'Node.js, Python, PostgreSQL, MongoDB, Redis',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      technologies: 'AWS, Docker, Kubernetes, CI/CD, Terraform',
    },
    {
      icon: '📱',
      title: 'Mobile & Design',
      technologies: 'React Native, Figma, UI/UX, Progressive Web Apps',
    },
  ];

  const journeyItems = [
    {
      icon: '🎓',
      year: '2017',
      title: 'The Spark',
      description:
        'Discovered the magic of turning creative ideas into digital reality through code. The journey of endless learning began.',
    },
    {
      icon: '🚀',
      year: '2018-2024',
      title: 'Exploring & Engineering',
      description:
        'Dove deep into 15+ tech stacks, crafting solutions and discovering the art of blending creativity with technology.',
    },
    {
      icon: '💡',
      year: '2024',
      title: 'Lenuvio Born',
      description:
        'Launched my creative practice to empower bold visions and transform ambitious ideas into inspiring digital products.',
    },
    {
      icon: '∞',
      year: 'Present',
      title: 'Your Creative Catalyst',
      description:
        'Ready to engineer your next bold idea into an impactful digital experience that inspires and delivers results.',
    },
  ];

  return (
    <section id='about' className={styles.about}>
      {/* Animated Background */}
      <div className={styles.aboutBackground}>
        {/* Floating Code Elements */}
        {isClient && (
          <div className={styles.codeElements}>
            {codeSnippets.map((snippet, index) => (
              <div key={index} className={styles.codeSnippet}>
                {snippet}
              </div>
            ))}
          </div>
        )}

        {/* Grid Pattern */}
        <div className={styles.gridPattern} />

        {/* Circuit Lines */}
        <div className={styles.circuitLines}>
          <div className={styles.circuitLine} />
          <div className={styles.circuitLine} />
          <div className={styles.circuitVertical} />
          <div className={styles.circuitVertical} />
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.aboutContent}>
        {/* Section Header */}
        <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>About Lenuvio</h2>
          <p className={styles.aboutSubtitle}>
            Where bold vision meets technical mastery to create digital
            experiences that inspire
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.aboutGrid}>
          {/* Profile Section */}
          <div className={styles.profileSection}>
            <div className={styles.profileCard}>
              <div className={styles.profileAvatar}>L</div>
              <h3 className={styles.profileName}>Your Creative Catalyst</h3>
              <p className={styles.profileRole}>
                Full-Stack Developer & Digital Visionary
              </p>
              <p className={styles.profileDescription}>
                Passionate about empowering bold visions through cutting-edge
                technology. I specialize in transforming ambitious ideas into
                impactful digital products that not only deliver results but
                inspire and captivate users.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className={styles.storySection}>
            <div className={styles.storyContent}>
              <h3>The Creative Journey</h3>
              <p className={styles.storyText}>
                With{' '}
                <span className={styles.storyHighlight}>
                  8+ years of crafting code
                </span>
                , I&apos;ve discovered that the most impactful digital products
                are born when creative vision meets technical excellence. Every
                project is an opportunity to push creative boundaries and
                engineer solutions that truly inspire.
              </p>
              <p className={styles.storyText}>
                I believe in the power of{' '}
                <span className={styles.storyHighlight}>
                  empowering your vision
                </span>{' '}
                – taking your boldest ideas and transforming them into digital
                experiences that not only function flawlessly but captivate and
                engage users on an emotional level.
              </p>
              <p className={styles.storyText}>
                Through exploring{' '}
                <span className={styles.storyHighlight}>15+ tech stacks</span>{' '}
                and engineering countless ideas, I&apos;ve developed an
                intuitive understanding of how to blend creativity with
                cutting-edge technology to deliver results that exceed
                expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className={styles.techStack}>
          <div className={styles.techStackHeader}>
            <h3 className={styles.techStackTitle}>Creative Technology Stack</h3>
            <p className={styles.techStackSubtitle}>
              The cutting-edge tools that bring bold ideas to life
            </p>
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
    </section>
  );
};
