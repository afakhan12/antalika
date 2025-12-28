import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Antalika | Trading and Management Consulting',
  description: 'Antalika specializes in multidisciplinary engineering support and international trading across MENA nations. Turkey\'s leading industrial procurement partner.',
  icons: {
    icon: 'logo_mark.png',
    shortcut: 'logo_mark.png',
    apple: 'logo_mark.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-white text-slate-900`}>
        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <main className="flex-grow pt-[80px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

