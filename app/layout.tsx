import type { Metadata } from 'next'
import '@/styles/globals.css';
import '@/styles/markdown.css';
import AppContextProvider from './AppContext'

export const metadata: Metadata = {
  title: 'My First Next App',
  description: 'Next App Imitates ChatGPT Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
