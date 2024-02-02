import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

function WriteLetter({ members }) {
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
        writedTo: members.name,
        nickname,
        content,
        createdAt: new Date().toLocaleString(),
      };
      setLetters([...letters, newLetter]);
      setNickname("");
      setContent("");
      console.log(letters);
    }
  };

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <select>
          <option value="">멤버 선택</option>
          {members.map((member) => (
            <option key={member.id} value={member.name}>
              {member.name}
            </option>
          ))}
          {/* <option value="TAEIL">TAEIL</option>
          <option value="JOHNNY">JOHNNY</option>
          <option value="TAEYONG">TAEYONG</option>
          <option value="YUTA">YUTA</option>
          <option value="DOYOUNG">DOYOUNG</option>
          <option value="JAEHYUN">JAEHYUN</option>
          <option value="JUNGWOO">JUNGWOO</option>
          <option value="MARK">MARK</option>
          <option value="HAECHAN">HAECHAN</option> */}
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
