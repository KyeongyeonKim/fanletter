import GlobalStyle from "GlobalStyle";
import Header from "components/Header";
import MemberList from "components/MemberList";
import React from "react";

function Home() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <MemberList></MemberList>
    </>
  );
}

export default Home;
