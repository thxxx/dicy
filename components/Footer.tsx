import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="inner">
        <div className="container">
          <div className="above">
            <div className="logo">
              <img src="/dice.png" alt="dice_logo" />
              <span>Dice</span>
            </div>
            <MenuContainer>
              <div className="box">
                <div className="label">Products</div>
                <a
                  onClick={() => {
                    window.open("https://solomongpt.com", "_blank");
                  }}>
                  Solomon
                </a>
                <a
                  onClick={() => {
                    window.open(
                      "https://chrome.google.com/webstore/detail/webama-web-assistant-like/abgnbgkcmpikahkbccpjhbekkhimbjpi/related?hl=en",
                      "_blank"
                    );
                  }}>
                  Web AMA
                </a>
              </div>
              <div className="box">
                <div className="label">Company</div>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact us</Link>
              </div>
            </MenuContainer>
          </div>
          <div className="middle">
            <span className="sentence">Solve all Problems by AI</span>
            <span>contact@diceyai.com</span>
          </div>
          <div className="site">© 2023 Dice, Inc. All rights reserved.</div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default React.memo(Footer);

const FooterContainer = styled.footer`
  width: 100vw;
  padding: 64px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.dark};
  color: white;

  a {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }

  .inner {
    width: 100%;
    max-width: 1000px;

    @media (max-width: 400px) {
      font-size: 14px;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1;

      @media (max-width: 900px) {
        width: 100%;
      }
    }

    .above {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: start;
      width: 100%;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      .logo {
        width: 30%;
        text-align: left;
        font-size: 1.8em;
        font-weight: 700;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;

        img {
          width: 37px;
          height: 36px;
        }

        span {
          margin-left: 10px;
        }
      }
    }

    .middle {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 40px;
      border-bottom: 1px solid rgba(255, 255, 255, 1);
      padding: 10px 0px;

      .sentence {
        color: white;
      }
    }
    .site {
      padding-top: 15px;
      width: 100%;
      text-align: right;
      font-size: 0.9em;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: 70%;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 600px) {
    width: 100%;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 24%;

    @media (max-width: 600px) {
      margin-top: 20px;
      width: 50%;
    }

    div {
      padding: 8px 0px;
    }
    a {
      padding: 8px 0px;
    }

    .label {
      color: rgba(255, 255, 255, 0.9);
      font-weight: 600;
    }
  }
`;
