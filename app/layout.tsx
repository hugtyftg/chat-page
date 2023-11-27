import type { Metadata } from 'next'
import '@/styles/globals.css';
import '@/styles/markdown.css';
import AppContextProvider from '../components/AppContext'
import EventBusContextProvider from '@/components/EventBusContext';

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
          <EventBusContextProvider>
            {children}
          </EventBusContextProvider>
        </AppContextProvider>
      </body>
    </html>
  )
}
