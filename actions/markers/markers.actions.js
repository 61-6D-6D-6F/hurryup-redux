// feature name
export const MARKERS = "[Markers]";

// action types
export const FETCH_MARKERS = `${MARKERS} Fetch`;
export const SET_MARKERS = `${MARKERS} Set`;

// action creators
export const fetchMarkers = () => ({
  type: FETCH_MARKERS
});

export const setMarkers = ({ markers }) => ({
  type: SET_MARKERS,
  payload: markers,
  meta: { feature: MARKERS }
});
