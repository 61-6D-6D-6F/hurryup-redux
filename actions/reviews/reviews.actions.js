// feature name
export const REVIEWS = "[Reviews]";

// action types
export const FETCH_REVIEWS = `${REVIEWS} Fetch`;
export const SET_REVIEWS = `${REVIEWS} Set`;

// action creators
export const fetchReviews = ({ id }) => ({
  type: FETCH_REVIEWS,
  payload: { id }
});

export const setReviews = ({ reviews }) => ({
  type: SET_REVIEWS,
  payload: reviews,
  meta: { feature: REVIEWS }
});
