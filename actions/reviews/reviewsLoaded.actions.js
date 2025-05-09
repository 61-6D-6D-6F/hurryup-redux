// feature name
export const REVIEWSLOADED = "[ReviewsLoaded]";

// action types
export const SET_REVIEWSLOADED = `${REVIEWSLOADED} Set`;

// action creators
export const setReviewsLoaded = ({ state }) => ({
  type: SET_REVIEWSLOADED,
  payload: state
});
