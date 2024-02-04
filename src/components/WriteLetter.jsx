import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";

function WriteLetter({ members, letters, setLetters }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectMem, setSelectMem] = useState("TAEIL");

  const addLetterBtn = (event) => {
    event.preventDefault();
    if (!nickname.trim() || !content.trim()) {
      alert("닉네임과 내용 모두 입력해주세요");
    } else {
      const newLetter = {
        id: uuid(),
        avatar:
          "https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png",
        writedTo: selectMem,
        nickname,
        content,
        createdAt: new Date().toLocaleString(),
      };

      setLetters([newLetter, ...letters]);
      setNickname("");
      setContent("");
    }
  };

  return (
    <WriteArea>
      <form>
        <StDiv>
          To :{" "}
          <StSelect
            onChange={(event) => {
              setSelectMem(event.target.value);
            }}
          >
            {members.map((member) => (
              <option key={member.id} value={member.name}>
                {member.name}
              </option>
            ))}
          </StSelect>
        </StDiv>
        <StDiv>
          닉네임 :{" "}
          <StInput
            type="text"
            value={nickname}
            onChange={(event) => {
              if (event.target.value.length <= 20) {
                setNickname(event.target.value);
              }
            }}
            placeholder="최대 20글자까지 작성할 수 있습니다."
          />
        </StDiv>
        <StDiv>
          내용 :{" "}
          <StTextarea
            value={content}
            onChange={(event) => {
              if (event.target.value.length <= 100) {
                setContent(event.target.value);
              }
            }}
            placeholder="최대 100글자까지 작성할 수 있습니다."
          />
        </StDiv>
        <DivBtn>
          <StBtn type="submit" onClick={addLetterBtn}>
            등록
          </StBtn>
        </DivBtn>
      </form>
    </WriteArea>
  );
}

export default WriteLetter;

const WriteArea = styled.div`
  width: 550px;
  height: 438px;
  margin-right: 85px;
  margin-bottom: 25px;
  border-radius: 10px;
  background: var(--bg--section-color);
  padding: 45px;
`;

const StDiv = styled.div`
  margin-bottom: 26px;
`;

const StSelect = styled.select`
  width: 240px;
  height: 45px;
  margin-left: 45px;
  background: var(--bg--fanletter-color);
  border: none;
`;

const StInput = styled.input`
  width: 350px;
  height: 45px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  background: var(--bg--fanletter-color);
  line-height: 1.5;
  font-family: "NanumSquareNeo-Variable";
`;

const StTextarea = styled.textarea`
  width: 350px;
  height: 130px;
  margin-left: 35px;
  border: none;
  border-radius: 5px;
  background: var(--bg--fanletter-color);
  line-height: 1.5;
  font-family: "NanumSquareNeo-Variable";
`;

const DivBtn = styled.div`
  width: 100px;
  float: right;
`;

const StBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background: var(--bg--main-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--text-color);
  font-size: 20px;
  font-weight: 400;
`;
