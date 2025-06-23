'use client';

import React from 'react';
import { Navigation } from '@/app/components';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Services } from './components/services/Services';

export default function Home() {
  return (
    <main className='min-h-screen bg-theme-primary text-theme-primary'>
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

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-theme-secondary min-h-screen w-full flex items-center justify-center'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center'>
            <div className='bg-theme-accent backdrop-blur-sm rounded-2xl p-12 border border-theme'>
              <h2 className='text-3xl font-bold mb-4 text-cyan-400'>
                CONTACT SECTION
              </h2>
              <p className='text-theme-secondary'>
                Contact form, information, and social links will go here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 border-t border-theme bg-theme-primary h-32 w-full flex items-center justify-center'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center'>
            <div className='bg-theme-accent backdrop-blur-sm rounded-2xl p-8 border border-theme'>
              <h2 className='text-2xl font-bold mb-2 text-cyan-400'>FOOTER</h2>
              <p className='text-theme-secondary'>
                Footer links and copyright will go here
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
