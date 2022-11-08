import '../styles/globals.css'
import Head from "next/head";
import Layout from "../components/layout/layout";
import { SessionProvider } from "next-auth/react"


export default function MyApp({ Component, pageProps }) {
  return(
    <SessionProvider session={pageProps.session}>

      <Layout>
        <Head><meta name="viewport" content="width=device-width, initial-scale=1"></meta></Head>
        <Component {...pageProps} />
      </Layout>

    </SessionProvider>
  )
}

// export default MyApp
