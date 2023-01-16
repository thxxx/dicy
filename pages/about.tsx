import { NextPage } from "next";
import React from "react";
import AppBar from "../components/AppBar";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dice</title>
        <meta name="description" content="Dicy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
    </div>
  );
};

export default About;
