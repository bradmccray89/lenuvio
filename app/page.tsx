'use client';

import React from 'react';
import { Navigation } from '@/app/components';

export default function Home() {
  return (
    <main className='min-h-screen bg-theme-primary text-theme-primary'>
      <Navigation />

      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen flex items-center justify-center relative bg-theme-primary'>
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10'></div>
        <div className='text-center max-w-4xl px-6 z-10'>
          <div className='bg-theme-accent backdrop-blur-sm rounded-2xl p-12 border border-theme'>
            <h2 className='text-3xl font-bold mb-4 text-cyan-400'>
              HERO SECTION
            </h2>
            <p className='text-theme-secondary'>
              Main headline, value proposition, and primary CTA will go here
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-theme-secondary'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center'>
            <div className='bg-theme-accent backdrop-blur-sm rounded-2xl p-12 border border-theme'>
              <h2 className='text-3xl font-bold mb-4 text-cyan-400'>
                ABOUT SECTION
              </h2>
              <p className='text-theme-secondary'>
                Company story, mission, values, and team information will go
                here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-theme-primary'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center'>
            <div className='bg-theme-accent backdrop-blur-sm rounded-2xl p-12 border border-theme'>
              <h2 className='text-3xl font-bold mb-4 text-cyan-400'>
                SERVICES SECTION
              </h2>
              <p className='text-theme-secondary'>
                Service offerings, features, and benefits will go here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-theme-secondary'>
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
      <footer className='py-12 border-t border-theme bg-theme-primary'>
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
