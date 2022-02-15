import Head from "next/head";
import { Header } from "../components/Header";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jurczak.it</title>
        <meta name="contact" content="page about contact" />
        <link rel="icon" href="/favicon_jurczak_it.ico" />
      </Head>
      <Header />
      <div className="contact">
        <h1>Contact</h1>
        <p>You can contact me via: </p>
        <br />
        <div>
          <a href="https://www.linkedin.com/in/sebastian-jurczak-42718b223/">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://github.com/Virssello">GitHub</a>
        </div>
        <div>
          <a href="https://www.xing.com/profile/Sebastian_Jurczak/cv">Xing</a>
        </div>
        <div>
          <a href="mailto:sebastian@jurczak.it">sebastian@jurczak.it</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
