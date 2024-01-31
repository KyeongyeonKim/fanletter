import React from "react";
import styled from "styled-components";

const StHeader = styled.header`
  height: 170px;
  background: var(--bg--main-color);
`;

const StP = styled.p`
  text-align: center;
`;

const StSvg = styled.img`
  height: 170px;
  border: 1px solid red;
`;

function Header() {
  return (
    <StHeader>
      <StP>
        <StSvg src="/src/assets/nct127.svg"></StSvg>
      </StP>
    </StHeader>
  );
}

export default Header;
