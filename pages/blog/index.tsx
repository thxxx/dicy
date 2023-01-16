import { NextPage } from "next";
import React from "react";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import { MainContainerOuter } from "../../components/MainContainer";
import styled from "@emotion/styled";
import { articles } from "../../utils/writings";
import Link from "next/link";

const BlogPage: NextPage = () => {
  return (
    <>
      <AppBar page="blog" />
      <BlogConatainer>
        <div className="inner">
          <h1>All writings</h1>
          <ArticleContainer>
            {articles.map((item, i) => {
              return (
                <Link className="card" key={item.id} href={`/blog/${item.id}`}>
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage: `url("${item.img}")`,
                    }}
                  />
                  <div className="desc_container">
                    <p className="title">{item.title}</p>
                    <p className="date">{item.created}</p>
                  </div>
                </Link>
              );
            })}
          </ArticleContainer>
        </div>
      </BlogConatainer>
    </>
  );
};

export default BlogPage;

const BlogConatainer = styled(MainContainerOuter)`
  .inner {
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    width: 420px;
    height: 300px;
    margin: 15px;
    background: white;
    cursor: pointer;

    @media (max-width: 570px) {
      width: 320px;
      height: 270px;
    }

    &:hover {
      outline: 1.3px solid ${({ theme }) => theme.darkGrey};
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.18);
    }

    .thumbnail {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 100%;
      height: 200px;
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
      .date {
        font-weight: 500;
        color: ${({ theme }) => theme.darkGrey + "66"};
        font-size: 0.9em;
      }
    }
  }
`;
