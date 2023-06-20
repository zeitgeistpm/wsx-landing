import "./styles/globals.css"
import Navigation from "./components/header/navigation"
import Footer from "./components/footer/footer"
import EmailSubscribe from "./components/email-subscribe"
import { inter } from "./fonts/fonts"

export const metadata = {
  title: "Zeitgeist | Washington Stock Exchange",
  description: "Predicting the future of politics"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col py-10 ${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
