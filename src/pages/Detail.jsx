import React, { useState } from "react";
import GlobalStyle from "GlobalStyle";
import styled from "styled-components";
import Header from "components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail({ removeBtn }) {
  const letters = useSelector((state) => state.fanLetters);

  const navigate = useNavigate();
  const params = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");

  const foundData = letters.find((letter) => {
    return letter.id === params.id;
  });

  const updateButton = () => {
    setIsUpdated(true);
    setUpdatedContent(foundData.content);
  };

  const saveButton = () => {
    if (updatedContent.trim() === foundData.content.trim()) {
      alert("수정사항이 없습니다.");
      setIsUpdated(false);
    } else {
      const newArr = letters.letters.map((letter) =>
        letter.id === params.id
          ? { ...letter, content: updatedContent }
          : letter
      );
      letters.setLetters(newArr);
      setIsUpdated(false);
    }
  };

  const deleteButton = () => {
    if (
      window.confirm(
        `${foundData.writedTo}에게 작성한 팬레터를 삭제하시겠습니까?`
      ) === true
    ) {
      removeBtn(params.id);
      alert("해당 팬레터가 삭제되었습니다");
      navigate("/");
    } else {
      return;
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <div style={{ width: "1100px", margin: "30px auto" }}>
        <StWritedTo>To : {foundData.writedTo}</StWritedTo>

        <Letter>
          <StImg src={foundData.avatar} alt="기본 아바타 이미지"></StImg>
          <StNickname>{foundData.nickname}</StNickname>
          <StCreatedAt>{foundData.createdAt}</StCreatedAt>
          {isUpdated ? (
            <StTextarea
              value={updatedContent}
              onChange={(event) => {
                if (event.target.value.length <= 100) {
                  setUpdatedContent(event.target.value);
                }
              }}
            />
          ) : (
            <StContent> {foundData.content}</StContent>
          )}
        </Letter>
        <StBtn
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </StBtn>
        {isUpdated ? (
          <StBtn2 onClick={saveButton}>수정완료</StBtn2>
        ) : (
          <>
            <StBtn2 onClick={updateButton}>수정</StBtn2>
            <StBtn2 onClick={deleteButton}>삭제</StBtn2>
          </>
        )}
      </div>
    </>
  );
}

export default Detail;

const StWritedTo = styled.p`
  color: var(--bg--main-color);
  font-size: 30px;
  font-family: "JalnanGothic";
  font-weight: 500;
  margin-bottom: 20px;
`;

const Letter = styled.div`
  width: 1100px;
  height: 450px;
  padding: 75px 95px;
  border-radius: 10px;
  background: var(--bg--section-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StImg = styled.img`
  width: 100px;
  border-radius: 40%;
`;

const StNickname = styled.p`
  font-weight: 900;
  margin-bottom: 10px;
`;

const StCreatedAt = styled.p`
  margin-bottom: 10px;
`;

const StContent = styled.p`
  width: 900px;
  height: 130px;
  padding: 25px;
  border: none;
  border-radius: 5px;
  background: var(--text-color);
  line-height: 1.5;
  color: var(--bg--main-color);
  font-family: "NanumSquareNeo-Variable";
`;

const StTextarea = styled.textarea`
  width: 900px;
  height: 130px;
  padding: 25px;
  border: none;
  border-radius: 5px;
  background: var(--bg--fanletter-color);
  line-height: 1.5;
  color: var(--bg--main-color);
  font-family: "NanumSquareNeo-Variable";
`;

const StBtn = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 25px;
  border: none;
  border-radius: 15px;
  background: var(--bg--main-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--text-color);
  font-size: 20px;
  font-weight: 400;
  &:hover {
    background: var(--text-color);
    color: var(--bg--main-color);
    transition: 0.5s;
    cursor: pointer;
  }
`;

const StBtn2 = styled.button`
  float: right;
  width: 120px;
  height: 40px;
  margin: 25px 0 0 25px;
  border: none;
  border-radius: 15px;
  background: var(--bg--main-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--text-color);
  font-size: 20px;
  font-weight: 400;
  &:hover {
    background: var(--text-color);
    color: var(--bg--main-color);
    transition: 0.5s;
    cursor: pointer;
  }
`;
