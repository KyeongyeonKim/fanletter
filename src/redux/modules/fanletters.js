import fakeData from "../../assets/fakeData.json";

// action value
const ADD_LETTER = "ADD_LETTER";
const DELETE_LETTER = "DELETE_LETTER";
//const UPDATE_LETTER = "UPDATE_LETTER";

// action creator : action value를 return 하는 함수
export const addLetter = (payload) => {
  return { type: ADD_LETTER, payload };
};
export const deleteLetter = (payload) => {
  return { type: DELETE_LETTER, payload };
};

// export const update = (payload) => {
//   return { type: UPDATE_LETTER, payload };
// };

// 초기 상태값(state)
const initialState = fakeData;

// 리듀서 : state에 변화를 일으키는 함수
// state를 action의 type에 따라서 변경하는 함수
const fanLetters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      const newArr = action.payload;
      return [newArr, ...state];

    case DELETE_LETTER:
      // letter 삭제하기
      const id = action.payload;
      return state.filter((letter) => letter.id !== id);

    default:
      return state;
  }
};

export default fanLetters;
