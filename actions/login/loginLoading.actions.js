// feature name
export const LOGINLOADING = "[LoginLoading]";

// action types
export const SET_LOGINLOADING = `${LOGINLOADING} Set`;

// action creators
export const setLoginLoading = ({ state }) => ({
  type: SET_LOGINLOADING,
  payload: state
});
