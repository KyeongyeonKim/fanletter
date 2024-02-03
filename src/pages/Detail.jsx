import React, { useState } from "react";
import GlobalStyle from "GlobalStyle";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

function Detail({ letters, setLetters, removeBtn }) {
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
      const newArr = letters.map((letter) =>
        letter.id === params.id
          ? { ...letter, content: updatedContent }
          : letter
      );
      setLetters(newArr);
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
      <div>Detail</div>

      <div>
        <StImg src={foundData.avatar} alt="기본 아바타 이미지"></StImg>
        <p>To : {foundData.writedTo}</p>
        <p>닉네임 : {foundData.nickname}</p>
        내용 :
        {isUpdated ? (
          <textarea
            value={updatedContent}
            onChange={(event) => {
              if (event.target.value.length <= 100) {
                setUpdatedContent(event.target.value);
              }
            }}
          />
        ) : (
          <> {foundData.content}</>
        )}
        <li>{foundData.writedTo}</li>
        <li>{foundData.nickname}</li>
        <li>{foundData.createdAt}</li>
        <li>{foundData.content}</li>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME
      </button>
      {isUpdated ? (
        <button onClick={saveButton}>수정완료</button>
      ) : (
        <>
          <button onClick={updateButton}>수정</button>
          <button onClick={deleteButton}>삭제</button>
        </>
      )}
    </>
  );
}

export default Detail;

const StImg = styled.img`
  width: 100px;
  border-radius: 40%;
`;
