import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from '../components/ui/ScrollToTop';
import Loader from '../components/ui/Loader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://altraah.com'),
  title: {
    default: 'Altraah - Professional LED PCB Manufacturer | Metal Core PCB Solutions',
    template: '%s | Altraah LED PCB'
  },
  description: 'Leading LED PCB manufacturer specializing in Metal Core PCBs (MCPCB), automotive LED boards, and custom circuit design. ISO 9001:2015 certified with 13+ years expertise. Fast 24-48h turnaround, 99.8% quality rate.',
  keywords: 'LED PCB manufacturer, Metal Core PCB, MCPCB, LED circuit board, aluminum PCB, copper core PCB, automotive LED PCB, industrial LED board, LED PCB design, thermal management PCB, high power LED PCB, flexible LED PCB, COB LED PCB, RGB LED PCB, LED lighting solutions, PCB assembly, custom LED PCB, LED driver PCB, street light PCB, automotive lighting PCB',
  authors: [{ name: 'Altraah', url: 'https://altraah.com' }],
  creator: 'Altraah LED PCB Solutions',
  publisher: 'Altraah',
  category: 'Electronics Manufacturing',
  classification: 'LED PCB Manufacturing',
  icons: {
    icon: '/images/logo/logo.png',
    shortcut: '/images/logo/logo.png',
    apple: '/images/logo/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://altraah.com',
    siteName: 'Altraah LED PCB',
    title: 'Altraah - Professional LED PCB Manufacturer | 13+ Years Experience',
    description: 'Leading LED PCB manufacturer with 13+ years expertise in Metal Core PCBs, automotive LED boards, and thermal-efficient solutions. ISO 9001:2015 certified, 99.8% quality rate.',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Altraah LED PCB Manufacturer Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altraah - Professional LED PCB Manufacturer',
    description: 'Leading LED PCB manufacturer with 13+ years expertise. ISO 9001:2015 certified, 24-48h turnaround.',
    images: ['/images/logo/logo.png'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://altraah.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
