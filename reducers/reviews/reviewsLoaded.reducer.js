import { SET_REVIEWSLOADED } from "../../actions/reviews/reviewsLoaded.actions";

const initState = false;

export const reviewsLoadedReducer = (reviewsLoaded = initState, action) => {
  switch (action.type) {
    case SET_REVIEWSLOADED:
      return action.payload;

    default:
      return reviewsLoaded;
  }
};
