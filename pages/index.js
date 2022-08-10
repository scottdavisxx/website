import Head from 'next/head'
import Hero from '../components/Hero'
import ThreeColCards from '../components/ThreeColCards.js'
import SkillsWithIntro from '../components/SkillsWithIntro'
import Contact from '../components/Contact'
import HomeFooter from '../components/HomeFooter'
import ContactForm from "../components/contact-form";

// import styles from '../styles/Home.module.css'
// import Document from './_document'


export default function Home() {
  return (
    <div className="">
       <Head>
        <title>Scott Davis</title>
      </Head>
      <Hero />
      <ThreeColCards />
      <SkillsWithIntro />
      {/* <Contact/> */}
      <ContactForm />
      <HomeFooter />
    </div>
  )
}
