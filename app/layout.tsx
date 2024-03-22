import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ICON, IconLibrary } from '@/components/icons';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Origami with Dacheese',
  description: 'Bring life to paper <3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.className} ${GeistSans.className}`}>
      <body className={`${inter.className} bg-template`}>
        <a href='/'>
           <div className="fixed top-40 left-4 text-[55px] -rotate-90 w-12 mix-blend-overlay">
            Origami
          </div>
        </a>
        {children}
        <span className="text-sm p-4 flex items-center w-full justify-center [&_svg]:fill-white [&_svg]:h-4 [&_svg]:w-4">Made with &nbsp;{IconLibrary(ICON.FAVORITE)} &nbsp; by &nbsp;<a href="https://daqichen.github.io" className="text-molecule" target="_blank">Daqi (Jen) Chen</a>&nbsp;&nbsp;&nbsp;{IconLibrary(ICON.COPYRIGHT)}&nbsp;2024</span>
        </body>
    </html>
  )
}
