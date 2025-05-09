import { SET_ADDREVIEWSUCCESS } from "../../actions/addReview/addReviewSuccess.actions";

const initState = false;

export const addReviewSuccessReducer = (
  addReviewSuccess = initState,
  action
) => {
  switch (action.type) {
    case SET_ADDREVIEWSUCCESS:
      return action.payload;

    default:
      return addReviewSuccess;
  }
};
