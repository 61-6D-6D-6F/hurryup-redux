// feature name
export const ADDREVIEWERROR = "[AddMarkerError]";

// action types
export const SET_ADDREVIEWERRORMESSAGE = `${ADDREVIEWERROR} Set`;

// action creators
export const setAddReviewError = ({ error }) => ({
  type: SET_ADDREVIEWERRORMESSAGE,
  payload: error
});
