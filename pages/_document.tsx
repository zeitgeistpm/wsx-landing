import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

const Document = () => {
  return (
    <Html>
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-39WJ7YX34S" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-39WJ7YX34S',{ 'debug_mode':true });
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
