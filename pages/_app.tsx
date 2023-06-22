import React, { useEffect } from "react"
import "./app.css"
import TagManager from "react-gtm-module"

const tagManagerArgs = {
  id: "GTM-XXXX"
}

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
