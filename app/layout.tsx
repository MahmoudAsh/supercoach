import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-UltraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-UltraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-HeavyItalic.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../public/fonts/Gilroy-Black.ttf',
      weight: '950',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-BlackItalic.ttf',
      weight: '950',
      style: 'italic',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SuperCoach | Effortless Coaching, Exponential Growth.',
  description: 'Grow your personal training business by turning hours of fitness program creation and client management into minutes',
  keywords: ['personal training', 'fitness coaching', 'workout programs', 'nutrition plans', 'client management'],
  authors: [{ name: 'SuperCoach' }],
  openGraph: {
    title: 'SuperCoach | Effortless Coaching, Exponential Growth.',
    description: 'Grow your personal training business by turning hours of fitness program creation and client management into minutes',
    url: 'https://supercoach.me',
    siteName: 'SuperCoach',
    images: [
      {
        url: 'https://i.imgur.com/P72zkw5.png',
        width: 1200,
        height: 630,
        alt: 'SuperCoach - Effortless Coaching, Exponential Growth',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SuperCoach | Effortless Coaching, Exponential Growth.',
    description: 'Grow your personal training business by turning hours of fitness program creation and client management into minutes',
    images: ['https://i.imgur.com/P72zkw5.png'],
  },
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
    google: 'G-5NBYPWHS4Q',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${gilroy.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5NBYPWHS4Q"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('set', 'developer_id.dZGVlNj', true);
              gtag('config', 'G-5NBYPWHS4Q');
            `,
          }}
        />
      </head>
      <body className={`${gilroy.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
