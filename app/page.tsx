'use client';

import { Navigation } from '@/app/components';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import styles from './page.module.css';
import { NewsletterHero } from './components/newsletter';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Navigation />
      <section id='home'>
        <Hero />
      </section>
      <section id='newsletter'>
        <NewsletterHero />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
