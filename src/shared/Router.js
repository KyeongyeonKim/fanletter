import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";
import fakeData from "../assets/fakeData.json";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);

  // letter 삭제하기
  const removeBtn = (id) => {
    const newArr = letters.filter((letter) => letter.id !== id);
    setLetters(newArr);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letters={letters} setLetters={setLetters} />}
        />
        <Route
          path="detail/:id"
          element={<Detail letters={letters} removeBtn={removeBtn} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
