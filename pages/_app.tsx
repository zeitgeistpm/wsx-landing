import React from "react"
import RootLayout from "@/app/layout"
import { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
