import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import ThreeColCards from '../components/ThreeColCards.js'
import SkillsWithIntro from '../components/SkillsWithIntro'
import Contact from '../components/Contact'
import HomeFooter from '../components/HomeFooter'
// import Document from './_document'

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
      </Head>
      <Hero />
      <ThreeColCards />
      <SkillsWithIntro />
      <Contact/>
      <HomeFooter />
    </div>
  )
}
