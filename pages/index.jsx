import Head from 'next/head'
import Image from 'next/image'

import Hero from '../components/hero'

export default function Home() {
  return (
    <>
    <Head>
      <title>MetalOoze</title>
      <meta name="title" content="MetalOoze"></meta>
      <meta name="description" content="Internet Wanderer + Website Developer + Gamer trying to reach bronze in valorant"></meta>
      <link rel="icon" type='image/x-icon' href="/assets/favicon.svg" />

      {/*Open Graph*/}
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.metalooze.xyz/"></meta>
      <meta property="og:title" content="MetalOoze"></meta>
      <meta property="og:description" content="Internet Wanderer + Website Developer + Gamer trying to reach bronze in valorant"></meta>
      <meta property="og:image" content="https://media.discordapp.net/attachments/788764017060741130/940185591981703208/Web_capture_7-2-2022_153131_localhost.jpeg?width=984&height=480"></meta>

      {/*Twitter*/}
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://www.metalooze.xyz/"></meta>
      <meta property="twitter:title" content="MetalOoze"></meta>
      <meta property="twitter:description" content="Internet Wanderer + Website Developer + Gamer trying to reach bronze in valorant"></meta>
      <meta property="twitter:image" content="https://media.discordapp.net/attachments/788764017060741130/940185591981703208/Web_capture_7-2-2022_153131_localhost.jpeg?width=984&height=480"></meta>

    </Head>
      <Hero />
    </>
  )
}
