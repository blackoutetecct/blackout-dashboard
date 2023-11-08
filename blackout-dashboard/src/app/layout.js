
import { Poppins } from 'next/font/google'

import './style/globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['900', '700', '600', '500', '400'] })

export const metadata = {
  title: 'DASHBOARD',
  description: 'Blackout DASHBOARD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
