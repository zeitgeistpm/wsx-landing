import React from "react"
import RootLayout from "@/app/layout"
import { AppProps } from "next/app"
import Head from "next/head"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <Head>
        <title>The Washington Stock Exchange</title>
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
