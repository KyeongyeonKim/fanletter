import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Fanletters({ letters, selectedMember }) {
  const filteredFanletters = letters.filter(
    (fanletter) => fanletter.writedTo === selectedMember
  );

  const navigate = useNavigate();

  return (
    <div>
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
            <div
              key={letters.id}
              style={{ border: "1px solid red" }}
              onClick={() => {
                navigate(`/detail/${letters.id}`);
              }}
            >
              <ul>
                <StImg src={letters.avatar}></StImg>
                <li>{letters.writedTo}</li>
                <li>{letters.nickname}</li>
                <li>{letters.createdAt}</li>
                <li>{letters.content}</li>
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Fanletters;

const StImg = styled.img`
  width: 100px;
`;
