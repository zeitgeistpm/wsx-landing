import "./styles/globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/header/navigation"
import Footer from "./components/footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zeitgeist | Washington Stock Exchange",
  description: "Predicting the future of politics"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col justify-between px-14 ${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
