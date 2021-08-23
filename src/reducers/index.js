import { combineReducers } from "redux";

//step two import reducers
import users from "./UsersReducer";
import questions from "./questionsReducer";
import username from "./Username";
import question from "./questionReducer";
import answer from "./SaveAnswerReducer";
import select_question from "./selectedReducer";
export default combineReducers({
  users,
  questions,
  username,
  question,
  answer,
  select_question,
});
