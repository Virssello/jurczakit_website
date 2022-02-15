import { Footer } from "../components/Footer";
import Head from "next/head";
import { Header } from "../components/Header";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jurczak.it</title>
        <meta name="home" content="home page" />
        <link rel="icon" href="/favicon_jurczak_it.ico" />
      </Head>
      <Header />
      <div className="info">
        <h1>Hello</h1>
        <p>
          I am 23 years old student of Computer Science in University of
          Technology in Kielce
        </p>
        <p>
          At the moment I have finished fifth semestr, I have at least 2 more to
          achive enginner title
        </p>
        <br />
        <p>
          My projects are avaliable at my{" "}
          <a href="https://github.com/Virssello?tab=repositories">Github</a>
        </p>
        <p>My CV are avaliable after e-mail contact</p>
      </div>
    </div>
  );
};

export default Home;
