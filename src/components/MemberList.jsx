import React, { useState } from "react";
import styled from "styled-components";
import Fanletters from "./Fanletters";
import WriteLetter from "./WriteLetter";

function MemberList({ letters, setLetters }) {
  const [selectedMember, setSelectedMember] = useState("TAEIL");
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
      <StCenter>
        <StMember>
          {members.map((mem) => {
            return (
              <StMemberBtn
                key={mem.id}
                selected={selectedMember === mem.name}
                onClick={() => setSelectedMember(mem.name)}
              >
                {mem.name}
              </StMemberBtn>
            );
          })}
        </StMember>
      </StCenter>
      <div>
        <WriteLetter
          letters={letters}
          setLetters={setLetters}
          members={members}
        ></WriteLetter>
      </div>
      <div>
        <Fanletters
          letters={letters}
          setLetters={setLetters}
          selectedMember={selectedMember}
        ></Fanletters>
      </div>
    </>
  );
}

export default MemberList;

const StCenter = styled.div`
  display: flex;
  justify-content: center;
`;
const StMember = styled.div`
  margin: 25px 0;
  width: 1187px;
  height: 10%;
  border-radius: 10px;
  background: var(--bg--main-color);
`;

const StMemberBtn = styled.button`
  margin: 28px 10px;
  width: 177px;
  height: 44px;
  border-radius: 15px;
  border: 1px solid
    ${(props) =>
      props.selected ? "var(--bg--main-color)" : "var(--text-color)"};
  background: ${(props) =>
    props.selected ? "var(--text-color)" : "var(--bg--main-color)"};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: ${(props) =>
    props.selected ? "var(--bg--main-color)" : "var(--text-color)"};
  text-align: center;
  font-family: "KOTRAHOPE";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
