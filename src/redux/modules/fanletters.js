import fakeData from "../../assets/fakeData.json";

// 초기 상태값(state)
const initialState = {
  letters: fakeData,
};

// 리듀서 : state에 변화를 일으키는 함수
// state를 action의 type에 따라서 변경하는 함수
const writeLetter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default writeLetter;
