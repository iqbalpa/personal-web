import ConnectMe from '@/components/connectMe/connectMe';
import Navbar from '@/components/navigation/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoTopButton from '@/components/goTopButton/gotopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Iqbal Pahlevi A',
  description: "Iqbal Pahlevi Amin's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-w-screen relative flex min-h-screen flex-col ${inter.className}`}
      >
        <ConnectMe />
        <Navbar />
        {children}
        <GoTopButton />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
