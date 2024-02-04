import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";
import fakeData from "../assets/fakeData.json";
import { LettersContext } from "context/LettersContext";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);

  // letter 삭제하기
  const removeBtn = (id) => {
    const newArr = letters.filter((letter) => letter.id !== id);
    setLetters(newArr);
  };

  return (
    <BrowserRouter>
      <LettersContext.Provider value={{ letters, setLetters }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail removeBtn={removeBtn} />} />
        </Routes>
      </LettersContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
