import GlobalStyle from "GlobalStyle";
import Header from "components/Header";
import MemberList from "components/MemberList";
import React from "react";

function Home({ letters, setLetters }) {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <MemberList letters={letters} setLetters={setLetters}></MemberList>
    </>
  );
}

export default Home;
