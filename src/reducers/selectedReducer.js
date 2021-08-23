import { SELECTED_QUESTION } from "../actions/selectedQuestion";

export default function select_question(state = {}, action) {
  switch (action.type) {
    case SELECTED_QUESTION:
      return {
        ...state,
        ...action.question,
      };

    default:
      return state;
  }
}
