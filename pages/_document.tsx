import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  const useAnalytics = process.env.NEXT_PUBLIC_SITE_URL === "https://thewsx.com"

  return (
    <Html>
      <Head>
        {useAnalytics && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-39WJ7YX34S');
            `}
          </Script>
        )}
        {useAnalytics && <Script src="https://www.googletagmanager.com/gtag/js?id=G-39WJ7YX34S" strategy="afterInteractive" />}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
