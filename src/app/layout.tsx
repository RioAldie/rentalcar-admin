import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Carsewa',
  description: 'Sewa mobil dengan cepat dan mudah',
  icons: {
    icon: '/icons/carsewa-favi.svg', // Path to the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        <div className="w-full flex justify-center ">{children}</div>
      </body>
    </html>
  );
}
