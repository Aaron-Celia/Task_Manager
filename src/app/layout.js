import { Inter } from 'next/font/google'
import './globals.css';
import { Providers } from '@/components/Providers';
import AuthProvider from '@/components/AuthProvider';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Manager',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  )
}
