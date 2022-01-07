import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Logic RACE app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header> title="Welcome to Logic RACE app!" </Header>
    <img src="/images/google-play-badge-eng.png" alt="Nature" />
        <p className="description">
    <img src="/images/google-play-badge-telugu.png" alt="Nature" />
    <a href="https://play.google.com/store/apps/details?id=com.logicrace.socialmediaplatform">Logic </a>
          Get started by downloading from the Google Play store https://play.google.com/store/apps/details?id=com.logicrace.socialmediaplatform
        </p>
      </main>

      <Footer />
    </div>
  )
}
