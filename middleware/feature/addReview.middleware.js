import {
  ADDREVIEW,
  ADD_REVIEW
} from "../../actions/addReview/addReview.actions";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setAddReviewLoading } from "../../actions/addReview/addReviewLoading.actions";
import { setAddReviewSuccess } from "../../actions/addReview/addReviewSuccess.actions";
import { setAddReviewError } from "../../actions/addReview/addReviewError.actions";
import { fetchMarkers } from "../../actions/markers/markers.actions";
import { fetchReviews } from "../../actions/reviews/reviews.actions";
import { updateRatingSelectedMarker } from "../../actions/selectedMarker.actions";

const ADDREVIEW_URL = "https://hurryup-backend.herokuapp.com/api/addReview";

export const addReviewMiddleware = ({ dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case ADD_REVIEW:
      next([
        apiRequest({
          body: action.payload.review,
          headers: action.payload.headers,
          method: "POST",
          url: ADDREVIEW_URL,
          feature: ADDREVIEW
        }),
        setAddReviewLoading({
          state: true
        }),
        setAddReviewError({ error: "" })
      ]);
      break;

    case `${ADDREVIEW} ${API_SUCCESS}`:
      dispatch(fetchReviews({ id: action.payload.data.locationId }));
      dispatch(fetchMarkers());
      next([
        updateRatingSelectedMarker(action.payload.data.rating),
        setAddReviewSuccess({
          state: true
        }),
        setAddReviewLoading({
          state: false
        })
      ]);
      break;

    case `${ADDREVIEW} ${API_ERROR}`:
      next([
        setAddReviewError({ error: action.payload.data.message }),
        setAddReviewLoading({
          state: false
        })
      ]);
      break;
  }
};
