import { createStore } from "redux";
import { combineReducers } from "redux";
import writeLetter from "../modules/fanletters";

const rootReducer = combineReducers({
  writeLetter,
});
const store = createStore(rootReducer);

export default store;
