import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'We have landed in Year 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.className} ${GeistSans.className}`}>
      <body className={inter.className}>
        <Sidebar/>
        {children}
        </body>
    </html>
  )
}
