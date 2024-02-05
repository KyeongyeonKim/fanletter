import { createStore } from "redux";
import { combineReducers } from "redux";
import fanLetters from "../modules/fanletters";

const rootReducer = combineReducers({
  fanLetters,
});
const store = createStore(rootReducer);

export default store;
