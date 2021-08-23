import { SELECTED_USERNAME } from "../actions/users";

export default function username(state = {}, action) {
  switch (action.type) {
    case SELECTED_USERNAME:
      return {
        ...state,
        ...action.username
      };
    default:
      return state;
  }
}
