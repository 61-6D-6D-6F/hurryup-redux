import { CLEAR_ERRORS } from "../../actions/clearErrors.actions";
import { setAddMarkerError } from "../../actions/addMarker/addMarkerError.actions";
import { setAddReviewError } from "../../actions/addReview/addReviewError.actions";
import { setLoginError } from "../../actions/login/loginError.actions";
import { setRegistrationError } from "../../actions/registration/registrationError.actions";

export const clearErrorsMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case CLEAR_ERRORS:
      next([
        setAddMarkerError({ error: "" }),
        setAddReviewError({ error: "" }),
        setLoginError({ error: "" }),
        setRegistrationError({ error: "" })
      ]);
      break;
  }
};
