export const RECIEVE_USERS = "RECIEVE_USERS";

export const SELECTED_USERNAME = "SELECTED_USERNAME";

// to get users data
export function getUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}


export function Selectedusername(username) {
  return {
    type: SELECTED_USERNAME,
    username,
  }; 
}
