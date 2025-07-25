import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/assets/styles/global.scss';
import { clsx } from 'clsx';

const disketMono = localFont({
  src: [
    {
      path: './fonts/DisketMono.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/DisketMono.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/DisketMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/DisketMono-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-disket-mono',
  display: 'swap',
});

const bdo = localFont({
  src: [
    {
      path: './fonts/bdo-regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bdo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IQ Lab',
  description: 'Powered by IQ Lab',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>

      <body className={clsx(disketMono.variable, bdo.variable)}>
        <main>{children}</main>
        {/*TODO: Footer section*/}
      </body>
    </html>
  );
}
