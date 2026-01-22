import type { Metadata } from "next"
import "./globals.css"
// import Navigation from "../components/navigation"


export const metadata: Metadata = {
  title: "Hacker Rank Club | GNIT",
  description: "Official website of Hacker Rank Club",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased scroll-smooth"
        suppressHydrationWarning
      >
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  )
}

