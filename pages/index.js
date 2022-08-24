import Head from 'next/head'
import Hero from '../components/Hero'
import ThreeColCards from '../components/ThreeColCards.js'
import SkillsWithIntro from '../components/SkillsWithIntro'
import HomeFooter from '../components/HomeFooter'
import Contact from "../components/Contact"
import { Navbar } from '../components/Navbar'
import ContactNetlify from '../components/ContactNetlify'



export default function Home() {
  return (
    <>
       <Head>
        <title>Scott Davis</title>
      </Head>
      <Navbar />
      <Hero />
      <ThreeColCards id="skills" />
      <SkillsWithIntro id="more-skills" />
      <ContactNetlify id="contact" />
      <HomeFooter id="social" />
    </>
  )
}
