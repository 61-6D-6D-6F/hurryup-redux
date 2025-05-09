// feature name
export const MARKERSLOADED = "[MarkersLoaded]";

// action types
export const SET_MARKERSLOADED = `${MARKERSLOADED} Set`;

// action creators
export const setMarkersLoaded = ({ state }) => ({
  type: SET_MARKERSLOADED,
  payload: state
});
