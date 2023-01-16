import { NextPage } from "next";
import React from "react";
import { articles } from "../../utils/writings";
import AppBar from "../../components/AppBar";
import { MainContainerOuter } from "../../components/MainContainer";
import styled from "@emotion/styled";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { ArticleConatainer } from "./article1";

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
          <h1 className={"title"}>{articles[1].title}</h1>
          <div className="created">{articles[1].created}</div>
          <img src={articles[1].img} alt="hall" />
          <p
            className="contents"
            dangerouslySetInnerHTML={{
              __html: articles[1].text,
            }}></p>
        </main>
      </ArticleConatainer>
    </div>
  );
};

export default ArticlePage;
