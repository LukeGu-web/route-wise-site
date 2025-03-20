import type { Metadata } from 'next';
import { Inter, Roboto_Mono, Roboto_Condensed, Lora } from 'next/font/google';
import Providers from './providers';
import './globals.css';
import { Footer } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: 'Route Wise',
  description: 'Wonderful budgeting app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${roboto_mono.variable} ${roboto_condensed.variable} ${lora.variable}`}
    >
      <body
        className={`antialiased bg-white dark:bg-black`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
