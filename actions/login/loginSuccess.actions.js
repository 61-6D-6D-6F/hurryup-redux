// feature name
export const LOGINSUCCESS = "[LoginSuccess]";

// action types
export const SET_LOGINSUCCESS = `${LOGINSUCCESS} Set`;

// action creators
export const setLoginSuccess = ({ state }) => ({
  type: SET_LOGINSUCCESS,
  payload: state
});
