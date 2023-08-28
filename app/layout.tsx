import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vixatica Icons: Exclusive Icon library for Various UI Needs!',
  description: 'Vixatica Icons is a thoughtfully curated set of open-source icons. Every icons is meticulously crafted using a 24px grid and adheres to modern design principles.',
  twitter: {
    title: 'Vixatica Icons: Exclusive Icon library for Various UI Needs!',
    description: 'Vixatica Icons is a thoughtfully curated set of open-source icons. Every icons is meticulously crafted using a 24px grid and adheres to modern design principles.',
  },
  openGraph: {
    type: 'website',
    title: 'Vixatica Icons: Exclusive Icon library for Various UI Needs!',
    description: 'Vixatica Icons is a thoughtfully curated set of open-source icons. Every icons is meticulously crafted using a 24px grid and adheres to modern design principles.',
  },
  keywords: 'vixaticaicons,free icons,open source icons,google icons, icon, line icon, sharp icon, pixel perfect icons, open source icons, free icon set',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen bg-background antialiased'}>{children}</body>
    </html>
  )
}
