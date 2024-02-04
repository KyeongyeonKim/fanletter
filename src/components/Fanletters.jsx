import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Fanletters({ letters, selectedMember }) {
  const filteredFanletters = letters.filter(
    (fanletter) => fanletter.writedTo === selectedMember
  );

  const navigate = useNavigate();

  return (
    <LettersArea>
      {filteredFanletters.length === 0 ? (
        <>
          <StP>
            [ {selectedMember} ] 에게 남겨진 팬레터가 없습니다. &#128557; 첫
            번째 팬레터의 주인공이 되어주세요!! &#128140;
          </StP>
        </>
      ) : (
        filteredFanletters.map((letters) => {
          return (
            <Grid
              key={letters.id}
              onClick={() => {
                navigate(`/detail/${letters.id}`);
              }}
            >
              <Box1>
                <StImg src={letters.avatar}></StImg>
              </Box1>

              <Box2>
                <StNickname>{letters.nickname}</StNickname>
                <p>{letters.createdAt}</p>
              </Box2>
              <StText>{letters.content}</StText>
            </Grid>
          );
        })
      )}
    </LettersArea>
  );
}

export default Fanletters;

const LettersArea = styled.div`
  width: 550px;
  border-radius: 10px;
  background: var(--bg--section-color);
  padding: 25px 45px 0 45px;
  margin-bottom: 25px;
  font-size: 15px;
  font-weight: 400;
`;

const StP = styled.p`
  text-align: center;
  padding: 25px;
  font-size: 20px;
  font-weight: 900;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 45px);
  gap: 10px;
  width: 460px;
  height: 110px;
  margin-bottom: 25px;
  border-radius: 15px;
  background: var(--bg--fanletter-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background: var(--bg--section-color);
    color: var(--bg--main-color);
    cursor: pointer;
  }
`;

const Box1 = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
`;

const StImg = styled.img`
  width: 70px;
  border-radius: 50%;
  margin: 10px;
`;

const Box2 = styled.div`
  grid-row: 1/2;
  grid-column: 2/7;
  padding: 10px;
`;

const StNickname = styled.p`
  font-weight: 900;
`;

const StText = styled.div`
  grid-row: 2/3;
  grid-column: 2/7;
  width: 350px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid var(--bg--main-color);
  background: var(--bg--fanletter-color);
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
