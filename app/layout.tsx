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

// Professional metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://lenuv.io'),

  // Basic metadata
  title: {
    default: 'Lenuvio - Full-Stack Development & Digital Innovation',
    template: '%s | Lenuvio',
  },
  description:
    'Transform your bold ideas into impactful digital experiences. Expert full-stack development, cloud solutions, and digital transformation services that deliver results.',

  // Keywords for SEO
  keywords: [
    'full-stack development',
    'digital innovation',
    'web development',
    'cloud solutions',
    'React development',
    'Next.js',
    'TypeScript',
    'UI/UX design',
    'digital transformation',
    'software consulting',
    'startup development',
    'enterprise solutions',
    'modern web applications',
    'scalable architecture',
    'technical consulting',
  ],

  // Author and creator information
  authors: [{ name: 'Lenuvio', url: 'https://lenuv.io' }],
  creator: 'Lenuvio',
  publisher: 'Lenuvio',

  // Language and locale
  alternates: {
    canonical: 'https://lenuv.io',
    languages: {
      'en-US': 'https://lenuv.io',
    },
  },

  // Open Graph for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lenuv.io',
    siteName: 'Lenuvio',
    title: 'Lenuvio - Where Bold Vision Meets Technical Mastery',
    description:
      'Transform ambitious ideas into impactful digital products that inspire and deliver exceptional results. Expert full-stack development and digital innovation services.',
    images: [
      {
        url: '/images/og-image-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Lenuvio - Full-Stack Development & Digital Innovation',
        type: 'image/jpeg',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Lenuvio Logo',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter Card configuration
  twitter: {
    card: 'summary_large_image',
    site: '@lenuviotech',
    creator: '@lenuviotech',
    title: 'Lenuvio - Full-Stack Development & Digital Innovation',
    description:
      'Transform bold ideas into impactful digital experiences. Expert development services that deliver results.',
    images: ['/images/twitter-card.jpg'],
  },

  // Additional social platforms
  other: {
    // LinkedIn specific
    'linkedin:owner': 'lenuvio',

    // Facebook specific
    'fb:app_id': 'your-facebook-app-id', // Replace with actual if you have one

    // Pinterest
    'pinterest-rich-pin': 'true',

    // Additional branding
    'application-name': 'Lenuvio',
    'apple-mobile-web-app-title': 'Lenuvio',
    'msapplication-TileColor': '#0f172a',
    'msapplication-TileImage': '/images/ms-tile-150x150.png',

    // Rich snippets
    'article:author': 'Lenuvio',
    'article:publisher': 'https://lenuv.io',
  },

  // App icons and manifests
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-touch-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-touch-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-touch-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-touch-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-touch-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-touch-icon-57x57.png', sizes: '57x57' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#06b6d4',
      },
    ],
  },

  // Web app manifest
  manifest: '/manifest.json',

  // Robots and indexing
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

  // Verification codes (add your actual verification codes)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },

  // Additional metadata
  category: 'technology',
  classification: 'business',

  // App links for mobile
  appLinks: {
    web: {
      url: 'https://lenuv.io',
      should_fallback: true,
    },
  },
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
                'Full-stack development and digital innovation services transforming bold ideas into impactful digital experiences.',
              foundingDate: '2024',
              sameAs: [
                'https://linkedin.com/company/lenuvio',
                'https://github.com/bradmccray89',
                'https://twitter.com/lenuvio19335',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-XXX-XXX-XXXX', // Add your phone if you want
                contactType: 'customer service',
                email: 'hello@lenuv.io',
                availableLanguage: 'English',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Remote',
                addressCountry: 'US',
              },
              serviceArea: {
                '@type': 'Place',
                name: 'Worldwide',
              },
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Full-Stack Development',
                    description:
                      'End-to-end web application development using modern frameworks and best practices.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Cloud Solutions & DevOps',
                    description:
                      'Modern cloud infrastructure and deployment strategies for scalable applications.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Transformation',
                    description:
                      'Modernizing legacy systems and processes with cutting-edge technology solutions.',
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
