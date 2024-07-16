import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import Dropdown from '@/components/dropdown/Dropdown';
import ConnectMe from '@/components/connectMe/ConnectMe';

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
        {/* <Footer /> */}
      </body>
    </html>
  );
}
