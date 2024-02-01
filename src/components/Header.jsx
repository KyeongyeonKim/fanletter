import React from "react";
import styled from "styled-components";
import nct127 from "../assets/nct127.svg";

const StHeader = styled.header`
  height: 170px;
  background: var(--bg--main-color);
`;

const StP = styled.p`
  text-align: center;
`;

const StSvg = styled.img`
  height: 170px;
`;

function Header() {
  return (
    <StHeader>
      <StP>
        <StSvg src={nct127}></StSvg>
      </StP>
    </StHeader>
  );
}

export default Header;
