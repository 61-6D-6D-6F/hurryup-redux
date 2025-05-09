// feature name
export const ADDREVIEWSUCCESS = "[AddReviewSuccess]";

// action types
export const SET_ADDREVIEWSUCCESS = `${ADDREVIEWSUCCESS} Set`;

// action creators
export const setAddReviewSuccess = ({ state }) => ({
  type: SET_ADDREVIEWSUCCESS,
  payload: state
});
