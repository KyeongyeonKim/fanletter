import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";
import fakeData from "../assets/fakeData.json";
import { LettersContext } from "context/LettersContext";

const Router = () => {
  const [letters, setLetters] = useState(fakeData);

  return (
    <BrowserRouter>
      <LettersContext.Provider value={{ letters, setLetters }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="detail/:id" element={<Detail removeBtn={removeBtn} />} /> */}
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </LettersContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
