import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail({ letters, removeBtn }) {
  const navigate = useNavigate();
  const params = useParams();

  const foundData = letters.find((letter) => {
    return letter.id === params.id;
  });

  const deleteBtnHandler = () => {
    removeBtn(params.id);
    alert("해당 팬레터가 삭제되었습니다");
    navigate("/");
  };

  return (
    <>
      <div>Detail</div>

      <div>
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
      <button>수정</button>
      <button onClick={deleteBtnHandler}>삭제</button>
    </>
  );
}

export default Detail;
