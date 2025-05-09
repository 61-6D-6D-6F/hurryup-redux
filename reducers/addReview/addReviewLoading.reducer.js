import { SET_ADDREVIEWLOADING } from "../../actions/addReview/addReviewLoading.actions";

const initState = false;

export const addReviewLoadingReducer = (
  addReviewLoading = initState,
  action
) => {
  switch (action.type) {
    case SET_ADDREVIEWLOADING:
      return action.payload;

    default:
      return addReviewLoading;
  }
};
