import Head from "next/head";
import Image from "next/image";
import AppBar from "../components/AppBar";
import styled from "@emotion/styled";
import MainContainer, { MainContainerOuter } from "../components/MainContainer";
import { Button, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [mail, setMail] = useState("");
  const toast = useToast();

  const joinWaitlist = () => {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <HeroSection ta="flex-start">
        <div className="inner">
          <h1>
            We are building
            <br />
            AI experts, give answers through conversation
          </h1>
          <div className="desc">
            It{"'"}s like Quora through conversational AI
          </div>
        </div>
      </HeroSection>
      <Section bg="rgba(249,249,249,1)">
        <div className="inner">
          <h1>About us</h1>
          <p className="sub">Products we launched.</p>
          <div className="content"></div>
        </div>
      </Section>
      <Section bg="rgba(249,249,249,1)">
        <div className="inner">
          <h1>Product</h1>
          <p className="sub">Products we launched.</p>
          <div className="content">
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: "url('/solomon.png')" }}
              />
              <div className="desc_container">
                <p>Web AMA</p>
                <p className="desc">Web Assistant like ChatGPT</p>
              </div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{ backgroundImage: "url('/solomon.png')" }}
              />
              <div className="desc_container">
                <p>Solomon</p>
                <p className="desc">Solve your problem by AI Solution</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <LastSection>
        <div className="inner">
          <h1>Join the Waitlist</h1>
          <div className="content">
            <p>We are diiiice</p>
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
`;

const Section = styled(MainContainerOuter)`
  color: black;
  .inner {
    .sub {
      margin-top: 20px;
    }

    .content {
      flex-direction: row;
      margin-top: 70px;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
        width: 300px;
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
            font-weight: 700;
          }
          .desc {
            font-weight: 500;
            color: ${({ theme }) => theme.dark};
            font-size: 0.9em;
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
`;

export const CustomButton = styled(Button)`
  border: 1.5px solid black;
  padding: 20px;
  width: 100%;
  max-width: 360px;
  border-radius: 6px;
  margin-top: 20px;
`;
