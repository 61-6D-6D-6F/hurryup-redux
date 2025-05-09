// feature name
export const ADDREVIEWLOADING = "[AddReviewLoading]";

// action types
export const SET_ADDREVIEWLOADING = `${ADDREVIEWLOADING} Set`;

// action creators
export const setAddReviewLoading = ({ state }) => ({
  type: SET_ADDREVIEWLOADING,
  payload: state
});
