import { RECIEVE_QUESTIONS } from "../actions/questions";
import { MAKE_QUESTION } from "../actions/makeQuestion";
import { SAVE_QUESTION } from "../actions/saveQuestion";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case MAKE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        ...action.question,
      };

    default:
      return state;
  }
}
