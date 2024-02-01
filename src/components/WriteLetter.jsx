import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

function WriteLetter() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [letters, setLetters] = useState([]);

  const addLetterBtn = () => {
    if (!nickname.trim() || !content.trim()) {
      alert("닉네임과 내용 모두 입력해주세요");
    } else {
      const newLetter = {
        id: uuid(),
        avatar: "../assets/avatar.png",
        // writeTo: optionvalue값,
        nickname,
        content,
        createdAt: new Date().toLocaleString(),
      };
      setLetters([...letters, newLetter]);
      setNickname("");
      setContent("");
    }
  };

  return (
    <>
      <form>
        <select>
          <option value="">멤버 선택</option>
          <option value="0">TAEIL</option>
          <option value="1">JOHNNY</option>
          <option value="2">TAEYONG</option>
          <option value="3">YUTA</option>
          <option value="4">DOYOUNG</option>
          <option value="5">JAEHYUN</option>
          <option value="6">JUNGWOO</option>
          <option value="7">MARK</option>
          <option value="8">HAECHAN</option>
        </select>
        닉네임 :{" "}
        <input
          type="text"
          value={nickname}
          onChange={(event) => {
            if (event.target.value.length <= 20) {
              setNickname(event.target.value);
            }
          }}
          placeholder="최대 20글자까지 작성할 수 있습니다."
        />
        내용 :{" "}
        <input
          type="text"
          value={content}
          onChange={(event) => {
            if (event.target.value.length <= 100) {
              setContent(event.target.value);
            }
          }}
          placeholder="최대 100글자가지만 작성할 수 있습니다."
        />
        <button type="submit" onClick={addLetterBtn}>
          팬레터 등록
        </button>
      </form>
    </>
  );
}

export default WriteLetter;
