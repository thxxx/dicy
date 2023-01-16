import Head from "next/head";
import Image from "next/image";
import AppBar from "../components/AppBar";
import styled from "@emotion/styled";
import MainContainer, { MainContainerOuter } from "../components/MainContainer";
import { Button, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { dbService } from "../utils/fbase";
import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
  const [mail, setMail] = useState("");
  const toast = useToast();

  const joinWaitlist = async () => {
    if (mail.length < 2) return;

    const body = {
      mail,
      createdAt: new Date(),
    };
    await dbService.collection("waitlist").add(body);

    setMail("");
    toast({
      description: "Thank you for join!",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <>
      <Head>
        <title>Dice</title>
        <meta name="description" content="Create AI World" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dice.png" />
      </Head>
      <AppBar />
      <HeroSection ta="flex-start">
        <div className="inner">
          <h1>
            We are building
            <br />
            <span>AI experts</span>, give answers through conversation
          </h1>
          <div className="desc">
            It{"'"}s like Quora through conversational AI
          </div>
        </div>
      </HeroSection>
      <Section bg="rgba(255,255,255,1)">
        <div className="inner">
          <h1>About us</h1>
          <p className="sub">
            Our goal is to create an AGI (Artificial General Intelligence)
            assistant that can assist people in their daily lives in the next 15
            years. To achieve this goal, they are breaking down the progress
            into several stages and starting with the creation of a Quora-like
            platform using conversational AI.
            <br />
            <br />
            <strong>
              We provide a platform with AI experts for each area with superior
              knowledge.
            </strong>
            People can ask questions and get answers easily and quickly through
            conversations. Our main focus is on solving the problem of {"'"}
            online fatigue {"'"} that results from the time and effort required
            to sift through vast amounts of information on the internet.
          </p>
          <div className="content">
            <CustomButton bn>
              <Link href="/blog">
                Read more about us &nbsp;
                <ArrowForwardIcon />
              </Link>
            </CustomButton>
          </div>
        </div>
      </Section>
      <Section bg="rgba(249,249,249,1)">
        <div className="inner">
          <h1>Product</h1>
          <p className="sub">Products we launched.</p>
          <div className="content">
            <div
              className="card"
              onClick={() => {
                window.open(
                  "https://chrome.google.com/webstore/detail/webama-web-assistant-like/abgnbgkcmpikahkbccpjhbekkhimbjpi/related?hl=en",
                  "_blank"
                );
              }}>
              <div
                className="img"
                style={{ backgroundImage: "url('/webama.png')" }}
              />
              <div className="desc_container">
                <p>Web AMA</p>
                <div className="desc">
                  <p>Web Assistant like ChatGPT</p>
                  <p>You can ask anything about current page</p>
                </div>
              </div>
            </div>
            <div
              className="card"
              onClick={() => {
                window.open("https://solomongpt.com", "_blank");
              }}>
              <div
                className="img"
                style={{ backgroundImage: "url('/solomon.png')" }}
              />
              <div className="desc_container">
                <p>Solomon</p>
                <div className="desc">
                  <p>Solve your problem by AI Solution</p>
                  <p>By only typing your problem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <LastSection>
        <div className="inner">
          <h1>Join the Waitlist</h1>
          <div className="content">
            <p>
              If you want to know when we launched product.
              <br />
              (Quora through conversational AI)
            </p>
            <Input
              placeholder="contact@diceyai.com"
              value={mail}
              onChange={(e) => setMail(e.currentTarget.value)}
            />
            <CustomButton onClick={() => joinWaitlist()}>Join</CustomButton>
          </div>
        </div>
      </LastSection>
    </>
  );
}

const HeroSection = styled(MainContainerOuter)`
  width: 100%;
  background: ${({ theme }) => theme.dark};
  color: white;
  padding: 150px 0px;

  .desc {
    margin-top: 15px;
  }
  span {
    color: ${({ theme }) => theme.blue01};
  }
`;

const Section = styled(MainContainerOuter)`
  color: black;
  .inner {
    .sub {
      margin-top: 20px;
      text-align: center;
      line-height: 1.7em;
    }

    .content {
      flex-direction: row;
      margin-top: 20px;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
        width: 350px;
        margin: 15px;
        background: white;
        cursor: pointer;

        &:hover {
          outline: 1.3px solid ${({ theme }) => theme.darkGrey};
          box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.18);
        }

        .img {
          width: 100%;
          height: 250px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }

        .desc_container {
          padding: 20px;
          width: 100%;
          text-align: left;
          p {
            font-weight: 600;
          }
          .desc {
            margin-top: 10px;
            font-weight: 400;
            color: ${({ theme }) => theme.dark + "aa"};
            font-size: 0.8em;
          }
        }
      }
    }
  }
`;

const LastSection = styled(MainContainerOuter)`
  input {
    margin-top: 40px;
    padding: 25px 15px;
    border-radius: 6px;
    box-shadow: 5px 8px 15px rgba(0, 0, 0, 0.2);
    transition: 0.5s ease;
    max-width: 360px;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.blue01};
    }
  }

  .content {
    width: 100%;
  }
`;

export const CustomButton = styled(Button)<{ bn?: boolean }>`
  border: 1.5px solid
    ${({ bn }) => (bn ? "rgba(0,0,0,0)" : "rgba(0, 0, 0, 0.8)")};
  padding: 20px;
  width: 100%;
  max-width: 360px;
  border-radius: 6px;
  margin-top: 20px;
`;
