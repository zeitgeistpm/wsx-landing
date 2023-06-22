import "./styles/globals.css"
import Navigation from "./components/header/navigation"
import Footer from "./components/footer/footer"
import { inter } from "./fonts/fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={`min-h-screen flex flex-col py-10 ${inter.className}`}>
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
