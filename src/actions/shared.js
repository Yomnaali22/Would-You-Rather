import { getUsers } from "./users";
import { recieveQuestions } from "./questions";
import { makeQuestion } from "./makeQuestion";
import { save_question } from "./saveQuestion";
import { selectQuestion } from "./selectedQuestion";
import { save_answer } from "./saveAnswer";
import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../DATA";

export const handleInitialData = () => (dispatch) => {
  _getUsers().then((users) => {
    dispatch(getUsers(users));
  });
};

export const handleQuestions = () => (dispatch) => {
  _getQuestions().then((questions) => {
    dispatch(recieveQuestions(questions));
  });
};

export const AddQuestion = (question) => (dispatch) => {
  _saveQuestion(question).then((question) => {
    dispatch(makeQuestion(question));
  });
};
export const savequestion = (question) => (dispatch) => {
  _saveQuestionAnswer(question).then((question) => {
    dispatch(save_question(question));
  });
};
export const select_question = (question) => (dispatch) => {
  dispatch(selectQuestion(question));
};

export const saveAnswer = (answer) => (dispatch) => {
  dispatch(save_answer(answer));
};
