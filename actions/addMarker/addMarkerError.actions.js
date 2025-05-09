// feature name
export const ADDMARKERERROR = "[AddMarkerError]";

// action types
export const SET_ADDMARKERERRORMESSAGE = `${ADDMARKERERROR} Set`;

// action creators
export const setAddMarkerError = ({ error }) => ({
  type: SET_ADDMARKERERRORMESSAGE,
  payload: error
});
