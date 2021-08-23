import { SELECTED_QUESTION } from "../actions/selectedQuestion";

export default function question(state = {}, action) {
  switch (action.type) {
    case SELECTED_QUESTION:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
}
