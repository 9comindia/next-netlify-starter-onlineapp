import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Logic RACE app</title>
        <link rel="icon" href="/lr-logo-icon.png" />
      </Head>

      <main>
        <Header title="!!Welcome to Logic RACE app!!" />
        <p>
    
    <a href="https://play.google.com/store/apps/details?id=com.logicrace.socialmediaplatform"><img src="/images/google-play-badge-telugu.png" alt="Logic RACE" /> </a>
    <a href="https://play.google.com/store/apps/details?id=com.logicrace.socialmediaplatform"><img src="/images/google-play-badge-eng.png" alt="Logic RACE" /> </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
