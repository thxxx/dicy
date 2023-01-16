import { NextPage } from "next";
import router from "next/router";
import React from "react";

const ArticlePage: NextPage = () => {
  const { id } = router.query;

  return <div>{id}</div>;
};

export default ArticlePage;
