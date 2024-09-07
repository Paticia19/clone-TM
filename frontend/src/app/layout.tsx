import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '/styles/globals.css'; //tailwind

export const metadata: Metadata = {
  title: 'Comsci', 
  description: 'A description of your app', 
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

