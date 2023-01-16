import { NextPage } from "next";
import React, { useState } from "react";
import AppBar from "../components/AppBar";
import Head from "next/head";
import { MainContainerOuter } from "../components/MainContainer";
import styled from "@emotion/styled";
import { Button, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { dbService } from "../utils/fbase";

const Contact: NextPage = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [comments, setComments] = useState("");
  const [mail, setMail] = useState("");

  const onSubmit = async () => {
    const body = {
      first,
      last,
      comments,
      mail,
      createdAt: new Date(),
    };
    await dbService.collection("contact").add(body);
  };

  return (
    <div>
      <Head>
        <title>Dice</title>
        <meta name="description" content="Create AI World" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar page="contact" />
      <ContactContainer>
        <div className="inner">
          <p className="title">Contact us</p>
          <div className="desc">
            <p>Thank you for interest.</p>
          </div>
          <div className="row">
            <div className="name">
              <Label>First Name</Label>
              <Input
                value={first}
                onChange={(e) => setFirst(e.currentTarget.value)}
              />
            </div>
            <div className="name">
              <Label>Last Name</Label>
              <Input
                value={last}
                onChange={(e) => setLast(e.currentTarget.value)}
              />
            </div>
          </div>
          <Label>Business Email</Label>
          <Input
            value={mail}
            onChange={(e) => setMail(e.currentTarget.value)}
          />
          <Label>Comments</Label>
          <Textarea
            value={comments}
            onChange={(e) => setComments(e.currentTarget.value)}
            rows={4}
          />
          <Button
            onClick={() => onSubmit()}
            width="100%"
            mt={10}
            isDisabled={
              first.length < 1 ||
              last.length < 1 ||
              comments.length < 1 ||
              mail.length < 1
            }>
            Submit
          </Button>
        </div>
      </ContactContainer>
    </div>
  );
};

export default Contact;

const ContactContainer = styled(MainContainerOuter)`
  width: 100%;

  .desc {
    text-align: left;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 23px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
  }

  .inner {
    max-width: 700px;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;

    .name {
      width: 49%;
    }
  }

  .title {
    font-size: 1.7em;
    font-weight: 700;
  }

  input {
    margin-top: 5px;
  }
  textarea {
    margin-top: 5px;
    resize: none;
  }
`;

const Label = styled.p`
  width: 100%;
  text-align: left;
  margin-top: 25px;
  font-size: 1.1em;
  font-weight: 600;
`;
