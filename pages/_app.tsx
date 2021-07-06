import Head from "next/head"
import { globalStyles } from "@tldraw/styles"

function MyApp({ Component, pageProps }) {
  globalStyles()

  return (
    <>
      <Head>
        <title>tldraw</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
