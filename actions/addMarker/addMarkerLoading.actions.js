// feature name
export const ADDMARKERLOADING = "[AddMarkerLoading]";

// action types
export const SET_ADDMARKERLOADING = `${ADDMARKERLOADING} Set`;

// action creators
export const setAddMarkerLoading = ({ state }) => ({
  type: SET_ADDMARKERLOADING,
  payload: state
});
