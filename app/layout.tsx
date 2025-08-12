// app/layout.tsx - Root layout with comprehensive metadata
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ToastProvider } from './contexts/ToastContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// Comprehensive viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#06b6d4' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://lenuv.io'),

  title: {
    default: 'Lenuvio | AI, Automation, and Product Engineering',
    template: '%s | Lenuvio',
  },
  description:
    'We help teams ship fast with practical AI, automation, and modern product engineering. Build smarter products, reduce busywork, and move the needle.',

  keywords: [
    'AI',
    'automation',
    'product engineering',
    'RAG',
    'AI assistants',
    'workflow automation',
    'Next.js',
    'React',
    'Angular',
    '.NET',
    'Node.js',
    'cloud',
    'DevOps',
    'Vercel',
    'Azure',
    'AWS',
  ],

  authors: [{ name: 'Lenuvio', url: 'https://lenuv.io' }],
  creator: 'Lenuvio',
  publisher: 'Lenuvio',

  alternates: {
    canonical: 'https://lenuv.io',
    languages: { 'en-US': 'https://lenuv.io' },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lenuv.io',
    siteName: 'Lenuvio',
    title: 'Lenuvio | Build with AI and automation',
    description:
      'AI and automation systems, full‑stack product engineering, and modern cloud ops for teams that want to build smarter.',
    images: [
      {
        url: '/images/og/lenuvio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lenuvio — AI, automation, and product engineering',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@lenuvio19335', // matches site link
    creator: '@lenuvio19335',
    title: 'Lenuvio | AI, automation, and product engineering',
    description:
      'Build faster with practical AI, automation, and modern product engineering.',
    images: ['/images/og/lenuvio-og.jpg'],
  },

  other: {
    'application-name': 'Lenuvio',
    'apple-mobile-web-app-title': 'Lenuvio',
    'msapplication-TileColor': '#0f172a',
    'msapplication-TileImage': '/images/ms-tile-150x150.png',
  },

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#06b6d4' },
    ],
  },

  manifest: '/manifest.json',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: '',
    other: { 'msvalidate.01': '' },
  },

  category: 'technology',
  classification: 'business',

  appLinks: { web: { url: 'https://lenuv.io', should_fallback: true } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        {/* Additional meta tags for enhanced functionality */}
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />

        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link rel='preconnect' href='https://analytics.vercel.app' />

        {/* DNS prefetch for external resources */}
        <link rel='dns-prefetch' href='//linkedin.com' />
        <link rel='dns-prefetch' href='//github.com' />
        <link rel='dns-prefetch' href='//twitter.com' />

        {/* Structured data for rich snippets */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Lenuvio',
              url: 'https://lenuv.io',
              logo: 'https://lenuv.io/images/logo-structured-data.png',
              description:
                'AI and automation systems, full-stack product engineering, and modern cloud solutions.',
              foundingDate: '2024',
              sameAs: [
                'https://linkedin.com/company/lenuvio',
                'https://github.com/bradmccray89',
                'https://twitter.com/lenuvio19335',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  email: 'hello@lenuv.io',
                  availableLanguage: ['English'],
                },
              ],
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI & Automation Systems',
                    description:
                      'Custom AI agents, RAG, chat assistants, and workflow automation.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Product Engineering',
                    description:
                      'React, Angular, and Next apps with .NET or Node backends. From prototype to launch.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Cloud & DevOps',
                    description:
                      'AWS, Azure, and Vercel deployments, Docker, CI/CD, and performance monitoring.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Readiness & Strategy',
                    description:
                      'Use-case discovery, audits, and practical training for teams.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <SpeedInsights />
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
