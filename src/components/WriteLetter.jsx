import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

function WriteLetter({ members, letters, setLetters }) {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectMem, setSelectMem] = useState("");

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
    <>
      <form>
        To :{" "}
        <select
          onChange={(event) => {
            setSelectMem(event.target.value);
          }}
        >
          {members.map((member) => (
            <option key={member.id} value={member.name}>
              {member.name}
            </option>
          ))}
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
