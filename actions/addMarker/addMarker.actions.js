// feature name
export const ADDMARKER = "[AddMarker]";

// action types
export const ADD_MARKER = `${ADDMARKER} Add`;

// action creators
export const addMarker = ({ marker, headers }) => ({
  type: ADD_MARKER,
  payload: { marker, headers },
  meta: { feature: ADDMARKER }
});
