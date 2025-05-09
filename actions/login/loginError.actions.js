// feature name
export const LOGINERROR = "[LoginError]";

// action types
export const SET_LOGINERRORMESSAGE = `${LOGINERROR} Set`;

// action creators
export const setLoginError = ({ error }) => ({
  type: SET_LOGINERRORMESSAGE,
  payload: error
});
