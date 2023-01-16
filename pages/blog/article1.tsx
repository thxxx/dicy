import { NextPage } from "next";
import React from "react";
import { articles } from "../../utils/writings";
import AppBar from "../../components/AppBar";
import { MainContainerOuter } from "../../components/MainContainer";
import styled from "@emotion/styled";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";

const ArticlePage: NextPage = () => {
  return (
    <div>
      <AppBar page="blog" />
      <ArticleConatainer>
        <main className="inner">
          <Link href="/blog" className="back">
            <ArrowBackIcon />
            go back
          </Link>
          <h1 className={"title"}>{articles[0].title}</h1>
          <div className="created">{articles[0].created}</div>
          <img src={articles[0].img} alt="hall" />
          <p
            className="contents"
            dangerouslySetInnerHTML={{
              __html: articles[0].text,
            }}></p>
        </main>
      </ArticleConatainer>
    </div>
  );
};

export default ArticlePage;

export const ArticleConatainer = styled(MainContainerOuter)`
  .inner {
    text-align: left;
    align-items: start;

    .back {
      padding-bottom: 20px;
      color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }

    img {
      margin-top: 30px;
      width: 500px;
      border-radius: 8px;
    }
  }
  .title {
    font-size: 2em;
    font-weight: 700;
  }
  .created {
    color: rgba(0, 0, 0, 0.5);
    padding: 10px 0px;
  }
  .contents {
    padding-top: 40px;
    padding-bottom: 150px;

    a {
      color: rgba(0, 0, 0, 0.6);
      &:hover {
        color: rgba(0, 0, 0, 0.8);
      }
    }

    span {
      color: ${({ theme }) => theme.blue02};

      .big {
        font-size: 1.4em;
        font-weight: 600;
        color: black;
      }
    }
  }
`;
