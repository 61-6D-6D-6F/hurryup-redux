// feature name
export const ADDREVIEW = "[AddReview]";

// action types
export const ADD_REVIEW = `${ADDREVIEW} Add`;

// action creators
export const addReview = ({ review, headers }) => ({
  type: ADD_REVIEW,
  payload: { review, headers },
  meta: { feature: ADDREVIEW }
});
