import { SET_ADDREVIEWERRORMESSAGE } from "../../actions/addReview/addReviewError.actions";

const initState = "";

export const addReviewErrorReducer = (addReviewerror = initState, action) => {
  switch (action.type) {
    case SET_ADDREVIEWERRORMESSAGE:
      return action.payload;

    default:
      return addReviewerror;
  }
};
