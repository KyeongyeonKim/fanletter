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
          <p>
            [ {selectedMember} ] 에게 남겨진 팬레터가 없습니다. &#128557; 첫
            번째 팬레터의 주인공이 되어주세요!! &#128140;
          </p>
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

              <Box2>{letters.nickname}</Box2>
              <Box2>{letters.createdAt}</Box2>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 70px 330px;
  grid-template-rows: 20px 20px 40px;
  gap: 5px;
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
  grid-row: 1/3;
`;

const StImg = styled.img`
  width: 70px;
  border-radius: 50%;
`;

const Box2 = styled.div`
  grid-column: 2/3;
`;

const StText = styled.div`
  grid-column: 2/3;
  width: 330px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid var(--bg--main-color);
  background: var(--bg--fanletter-color);
`;
