import { Selectedusername } from "./users";


export const handleUserSelector = (username) => (dispatch) => {
  dispatch(Selectedusername(username));
};
