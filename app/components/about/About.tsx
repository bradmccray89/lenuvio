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
  const techCategories = [
    {
      icon: '⚡',
      title: 'Frontend',
      technologies:
        'Angular, React, Next.js, JavaScript, TypeScript, HTML, SCSS, Tailwind CSS, RxJS',
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
      icon: '🎨',
      title: 'UI/UX & Frontend Architecture',
      technologies:
        'Responsive Design, Tailwind CSS, Theming, Component Architecture, User-Centered Debugging',
    },
  ];

  const journeyItems = [
    {
      icon: '🎓',
      year: '2017',
      title: 'The Spark',
      description:
        'Discovered the magic of turning creative ideas into digital reality through code. The journey of endless exploration began.',
    },
    {
      icon: '🔍',
      year: '2017-Present',
      title: 'Continuous Exploration',
      description:
        'Never-ending discovery of new technologies, frameworks, and creative solutions. Always learning, always evolving.',
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
      year: 'Forever',
      title: 'The Journey Continues',
      description:
        'Ready to engineer your next bold idea while continuously exploring new frontiers in technology and creativity.',
    },
  ];

  return (
    <div className={styles.about}>
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
              {/* // Use this image from this location /public/images/cartoon_brandon.png */}
              <Image
                src='/images/cartoon_brandon.png'
                alt='Your Creative Catalyst'
                width={350}
                height={350}
                className={styles.profileAvatar}
                priority
              />
            </div>
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

          {/* Story Section */}
          <div className={styles.storySection}>
            <div className={styles.storyContent}>
              <h3>The Creative Journey</h3>
              <p className={styles.storyText}>
                With{' '}
                <span className={styles.storyHighlight}>
                  {yearsOfExperience()}+ years of crafting code
                </span>
                , I&apos;ve discovered that the most impactful digital products
                are born when creative vision meets technical excellence. What
                drives me is the{' '}
                <span className={styles.storyHighlight}>
                  continuous exploration
                </span>{' '}
                of new technologies and the endless engineering of innovative
                solutions.
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
                This journey of exploration never truly ends. Every project,
                every new technology, every challenge is an opportunity to{' '}
                <span className={styles.storyHighlight}>
                  push creative boundaries
                </span>{' '}
                and engineer solutions that inspire and deliver exceptional
                results.
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
    </div>
  );
};
