import "./globals.css"
import { PropsWithChildren, ReactElement } from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Iconolatry",
  description: "Icons are awesome!",
}

export default function RootLayout({
  children,
}: PropsWithChildren<{}>): ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
