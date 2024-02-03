import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail({ letters }) {
  const navigate = useNavigate();
  const params = useParams();

  const foundData = letters.find((letter) => {
    return letter.id === params.id;
  });
  console.log(foundData);
  return (
    <>
      <div>Detail</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME
      </button>
      <div>
        <li>{foundData.writedTo}</li>
        <li>{foundData.nickname}</li>
        <li>{foundData.createdAt}</li>
        <li>{foundData.content}</li>
      </div>
    </>
  );
}

export default Detail;
