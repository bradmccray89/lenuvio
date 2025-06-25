'use client';

import React from 'react';
import { Navigation } from '@/app/components';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import styles from './page.module.css';
import ToastContainer from './components/toast/ToastContainer';
import { useToast } from './hooks/useToast';

export default function Home() {
  const { toasts, removeToast } = useToast();

  return (
    <main className={styles.mainContainer}>
      <Navigation />
      <section id='home'>
        <Hero />
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
      <ToastContainer
        toasts={toasts}
        onClose={removeToast}
        position='top-right'
      />{' '}
    </main>
  );
}
