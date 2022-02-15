import Head from 'next/head'
import { Header } from '../components/Header'
import Image from 'next/image'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jurczak.it</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="info">
            <h1>About myself</h1>
            <p>I am 23 years old student in University of Technology in Kielce</p>
            <p>At the moment I have finished fifth semestr of my University</p>
            <br/>
            <p>My projects are avaliable at my <a href="https://github.com/Virssello?tab=repositories">Github</a></p>
            <p>I can send my CV after e-mail contact</p>
        </div>
    </div>
  )
}

export default Home
