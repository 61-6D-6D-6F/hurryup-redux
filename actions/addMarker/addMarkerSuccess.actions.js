// feature name
export const ADDMARKERSUCCESS = "[AddMarkerSuccess]";

// action types
export const SET_ADDMARKERSUCCESS = `${ADDMARKERSUCCESS} Set`;

// action creators
export const setAddMarkerSuccess = ({ state }) => ({
  type: SET_ADDMARKERSUCCESS,
  payload: state
});
