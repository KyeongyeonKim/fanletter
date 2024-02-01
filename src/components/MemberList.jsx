import React, { useState } from "react";
import styled from "styled-components";
import Fanletters from "./Fanletters";

// const StDiv = styled.div`
//   width: 1187px;
//   height: 170px;
//   border-radius: 10px;
//   background: var(--bg--main-color);
// `;

const StMemberBtn = styled.button`
  width: 177px;
  height: 44px;
  border-radius: 15px;
  border: 1px solid
    ${(props) =>
      props.isSelected ? "var(--bg--main-color)" : "var(--text-color)"};
  background: ${(props) =>
    props.isSelected ? "var(--text-color)" : "var(--bg--main-color)"};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: ${(props) =>
    props.isSelected ? "var(--bg--main-color)" : "var(--text-color)"};
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function MemberList() {
  const [selectedMember, setSelectedMember] = useState();
  const members = [
    { id: 0, name: "TAEIL" },
    { id: 1, name: "JOHNNY" },
    { id: 2, name: "TAEYONG" },
    { id: 3, name: "YUTA" },
    { id: 4, name: "DOYOUNG" },
    { id: 5, name: "JAEHYUN" },
    { id: 6, name: "JUNGWOO" },
    { id: 7, name: "MARK" },
    { id: 8, name: "HAECHAN" },
  ];

  return (
    <>
      <div>
        {members.map((mem) => {
          return (
            <StMemberBtn
              key={mem.id}
              isSelected={selectedMember === mem.id}
              onClick={() => setSelectedMember(mem.id)}
            >
              {mem.name}
            </StMemberBtn>
          );
        })}
      </div>
      <div>
        <Fanletters></Fanletters>
      </div>
    </>
  );
}

export default MemberList;
