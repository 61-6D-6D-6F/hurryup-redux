// feature name
export const SELECTEDMARKER = "[SelectedMarker]";

// action types
export const SET_SELECTEDMARKER = `${SELECTEDMARKER} Set`;
export const REMOVE_SELECTEDMARKER = `${SELECTEDMARKER} Remove`;
export const UPDATERATING_SELECTEDMARKER = `${SELECTEDMARKER} Update rating`;

// action creators
export const setSelectedMarker = marker => ({
  type: SET_SELECTEDMARKER,
  payload: marker
});

export const removeSelectedMarker = () => ({
  type: REMOVE_SELECTEDMARKER
});

export const updateRatingSelectedMarker = newRating => ({
  type: UPDATERATING_SELECTEDMARKER,
  payload: newRating
});
