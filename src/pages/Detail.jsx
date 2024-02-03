import React from "react";
import GlobalStyle from "GlobalStyle";
import { useNavigate, useParams } from "react-router-dom";

function Detail({ letters, removeBtn }) {
  const navigate = useNavigate();
  const params = useParams();

  const foundData = letters.find((letter) => {
    return letter.id === params.id;
  });

  const button_event = () => {
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
      <button onClick={button_event}>삭제</button>
    </>
  );
}

export default Detail;
