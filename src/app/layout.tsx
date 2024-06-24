import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'  
import './globals.css'
import Navbar from '@/app/components/Navbar'
import { Toaster } from '@/app/components/ui/toaster'
import Providers from '@/app/components/Providers'
import { constructMetadata } from '@/app/lib/utils'


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata = constructMetadata()

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>  
        <div className='grainy-light'><Navbar /></div>
        
        <main className='flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]'>
          <div className='flex-1 flex flex-col h-full'>
            <Providers>{children}</Providers>
          </div>
        </main>

        <Toaster />
      </body>
    </html>
  )
}
