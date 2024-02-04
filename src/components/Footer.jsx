import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lemon&display=swap');
      </style>
      <StFooter>
        <StP>TO THE WORLD, 여기는 NCT!</StP>
      </StFooter>
    </>
  );
}

export default Footer;

const StFooter = styled.header`
  height: 170px;
  background: var(--bg--main-color);
`;

const StP = styled.p`
  text-align: center;
  color: #fff;
  text-align: center;
  font-family: "Lemon", serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 170px;
`;
