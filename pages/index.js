import Head from 'next/head'
import Hero from '../components/Hero'
import ThreeColCards from '../components/ThreeColCards.js'
import SkillsWithIntro from '../components/SkillsWithIntro'
import HomeFooter from '../components/HomeFooter'
import Contact from "../components/Contact"



export default function Home() {
  return (
    <div className="">
       <Head>
        <title>Scott Davis</title>
      </Head>
      <Hero />
      <ThreeColCards />
      <SkillsWithIntro />
      <Contact/>
      <HomeFooter />
    </div>
  )
}
