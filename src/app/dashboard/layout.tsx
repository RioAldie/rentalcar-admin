import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} w-screen antialiased  flex`}>
      <div className="flex-[1]">
        <Sidebar />
      </div>

      <div className="flex-[4]  p-5 ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
