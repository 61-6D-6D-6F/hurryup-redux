import {
  REVIEWS,
  FETCH_REVIEWS,
  setReviews
} from "../../actions/reviews/reviews.actions";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setReviewsLoaded } from "../../actions/reviews/reviewsLoaded.actions";

const REVIEWS_URL = "https://hurryup-backend.herokuapp.com/api/reviews/";

export const reviewsMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_REVIEWS:
      next([
        apiRequest({
          body: null,
          headers: action.payload.headers,
          method: "POST",
          url: REVIEWS_URL + action.payload.id,
          feature: REVIEWS
        }),
        setReviewsLoaded({
          state: false
        })
      ]);
      break;

    case `${REVIEWS} ${API_SUCCESS}`:
      next([
        setReviews({
          reviews: action.payload.data.reverse()
        }),
        setReviewsLoaded({
          state: true
        })
      ]);
      break;

    case `${REVIEWS} ${API_ERROR}`:
      console.log("error loading reviews");
      next(
        setReviewsLoaded({
          state: true
        })
      );
      break;
  }
};
