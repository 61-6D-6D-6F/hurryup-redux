import { SET_REVIEWS } from "../../actions/reviews/reviews.actions";

const initState = [];

export const reviewsReducer = (reviews = initState, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return action.payload;

    default:
      return reviews;
  }
};
