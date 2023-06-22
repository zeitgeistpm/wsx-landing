import "./styles/globals.css"
import Script from "next/script"
import Navigation from "./components/header/navigation"
import Footer from "./components/footer/footer"
import { inter } from "./fonts/fonts"

export const metadata = {
  title: "Zeitgeist | Washington Stock Exchange",
  description: "Predicting the future of politics"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-39WJ7YX34S" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-39WJ7YX34S');
        `}
      </Script>
      <body className={`min-h-screen flex flex-col py-10 ${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
