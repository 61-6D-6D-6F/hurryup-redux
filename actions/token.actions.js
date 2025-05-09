// feature name
export const TOKEN = "[Token]";

// action types
export const SET_TOKEN = `${TOKEN} Set`;

// action creators
export const setToken = ({ jwt }) => ({
  type: SET_TOKEN,
  payload: jwt
});
