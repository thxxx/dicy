import Head from "next/head";
import Image from "next/image";
import AppBar from "../components/AppBar";
import styled from "@emotion/styled";
import MainContainer, { MainContainerOuter } from "../components/MainContainer";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [mail, setMail] = useState("");

  const joinWaitlist = () => {};

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
            Make the World Better
            <br />
            by Artificial Intelligence{" "}
          </h1>
          <div className="desc">All the informations you need</div>
        </div>
      </HeroSection>
      <Section bg="rgba(249,249,249,1)">
        <div className="inner">
          <h1>Product</h1>
          <div className="content">
            <div className="card">Document Assistant GPT</div>
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

  .desc {
    margin-top: 15px;
  }
`;

const Section = styled(MainContainerOuter)`
  color: black;
  .inner {
    .content {
      flex-direction: row;

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
        margin: 5px;
        background: white;

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
    padding: 20px 25px;
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
