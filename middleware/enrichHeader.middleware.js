import { apikey } from "../../constants/apiKey";
import { FETCH_MARKERS } from "../actions/markers/markers.actions";
import { FETCH_REVIEWS } from "../actions/reviews/reviews.actions";
import { TRY_REGISTRATION } from "../actions/registration/registration.actions";
import { TRY_LOGIN } from "../actions/login/login.actions";
import { ADD_MARKER } from "../actions/addMarker/addMarker.actions";
import { ADD_REVIEW } from "../actions/addReview/addReview.actions";

export const enrichHeaderMiddleware = () => next => action => {
  const actionsToEnrich = [
    FETCH_MARKERS,
    FETCH_REVIEWS,
    TRY_REGISTRATION,
    TRY_LOGIN,
    ADD_MARKER,
    ADD_REVIEW
  ];
  if (
    actionsToEnrich.some(actionElement => action.type.includes(actionElement))
  ) {
    const payload = { ...action.payload } || {};
    const headers = { ...(payload.headers || {}) };
    let enrichedAction = {
      ...action,
      payload: {
        ...payload,
        headers: {
          ...headers,
          apikey: apikey
        }
      }
    };
    next(enrichedAction);
  } else {
    next(action);
  }
};
