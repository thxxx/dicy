import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainerOuter>
      <div className="inner">{children}</div>
    </MainContainerOuter>
  );
};

export default MainContainer;

export const MainContainerOuter = styled.div<{ ta?: string; bg?: string }>`
  width: 100vw;
  padding: ${({ theme }) => theme.py} 0px;
  display: flex;
  align-items: start;
  justify-content: center;
  background: ${({ bg }) => (bg ? bg : "white")};
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  h1 {
    font-size: 1.9em;
    font-weight: 700;
  }
  h2 {
    font-size: 1.5em;
  }

  .inner {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ ta }) => (ta ? ta : "center")};
    padding: 0px 20px;

    .content {
      padding: 20px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;
