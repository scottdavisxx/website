import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import MyTracks from "../components/MyTracks";

export default function Player() {
  return (
    <>
      <Head>
        <title>Scott Davis</title>
      </Head>
      <Navbar />
      <MyTracks />
    </>
  )
}
