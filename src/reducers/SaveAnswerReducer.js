import { SAVE_ANSWER } from "../actions/saveAnswer";

export default function answer(state = {}, action) {
  switch (action.type) {
    case SAVE_ANSWER:
      return {
        ...state,
        answer: action.answer
      };
    default:
      return state;
  }
}