import StreamProviders from '@/app/provider/StreamProviders'
import React, { ReactNode } from 'react'

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StreamProviders>
      <main>
        {children}
      </main>
    </StreamProviders>
  )
}

export default RootLayout
