import '../styles/globals.css'
import Layout from '../components/layout'
import '../styles/style.scss'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

      <Script src='https://kit.fontawesome.com/3aaf099540.js' crossOrigin='anonymous'></Script>
    </Layout>

  )
}
