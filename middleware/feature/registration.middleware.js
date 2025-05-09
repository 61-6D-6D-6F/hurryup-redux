import {
  REGISTRATION,
  TRY_REGISTRATION
} from "../../actions/registration/registration.actions";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setToken } from "../../actions/token.actions";
import { setRegistrationLoading } from "../../actions/registration/registrationLoading.actions";
import { setRegistrationSuccess } from "../../actions/registration/registrationSuccess.actions";
import { setRegistrationError } from "../../actions/registration/registrationError.actions";

const REGISTRATION_URL = "https://hurryup-backend.herokuapp.com/api/register";

export const registrationMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case TRY_REGISTRATION:
      next([
        apiRequest({
          body: action.payload.user,
          headers: action.payload.headers,
          method: "POST",
          url: REGISTRATION_URL,
          feature: REGISTRATION
        }),
        setRegistrationLoading({
          state: true
        }),
        setRegistrationError({ error: "" })
      ]);
      break;

    case `${REGISTRATION} ${API_SUCCESS}`:
      next([
        setToken({ jwt: action.payload.data.token }),
        setRegistrationSuccess({
          state: true
        }),
        setRegistrationLoading({
          state: false
        })
      ]);
      break;

    case `${REGISTRATION} ${API_ERROR}`:
      next([
        setRegistrationError({ error: action.payload.data.message }),
        setRegistrationLoading({
          state: false
        })
      ]);
      break;
  }
};
