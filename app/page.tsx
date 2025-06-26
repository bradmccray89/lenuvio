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
  const { toasts, removeToast, success, error, warning, info } = useToast();

  return (
    <main className={styles.mainContainer}>
      <ToastContainer
        toasts={toasts}
        onClose={removeToast}
        position='bottomRight'
      />
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
        <Contact onShowToast={{ success, error, warning, info }} />
      </section>
      <Footer onShowToast={{ success, error, warning, info }} />
    </main>
  );
}
