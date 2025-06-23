'use client';

import React from 'react';
import { Navigation } from '@/app/components';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

export default function Home() {
  return (
    <main className='min-h-screen bg-theme-primary text-theme-primary flex flex-col gap-8'>
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
    </main>
  );
}
