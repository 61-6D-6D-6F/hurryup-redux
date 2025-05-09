// feature name
export const REGIONLOADED = "[RegionLoaded]";

// action types
export const SET_REGIONLOADED = `${REGIONLOADED} Set`;

// action creators
export const setRegionLoaded = ({ state }) => ({
  type: SET_REGIONLOADED,
  payload: state
});
