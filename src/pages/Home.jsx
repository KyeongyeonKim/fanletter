import GlobalStyle from "GlobalStyle";
import Footer from "components/Footer";
import Header from "components/Header";
import MemberList from "components/MemberList";
import React from "react";

function Home() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <MemberList></MemberList>
      <Footer></Footer>
    </>
  );
}

export default Home;
