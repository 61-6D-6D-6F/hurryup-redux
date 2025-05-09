import { LOGIN, TRY_LOGIN } from "../../actions/login/login.actions";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setToken } from "../../actions/token.actions";
import { setLoginLoading } from "../../actions/login/loginLoading.actions";
import { setLoginSuccess } from "../../actions/login/loginSuccess.actions";
import { setLoginError } from "../../actions/login/loginError.actions";

const LOGIN_URL = "https://hurryup-backend.herokuapp.com/api/login";

export const loginMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case TRY_LOGIN:
      next([
        apiRequest({
          body: action.payload.user,
          headers: action.payload.headers,
          method: "POST",
          url: LOGIN_URL,
          feature: LOGIN
        }),
        setLoginLoading({
          state: true
        }),
        setLoginError({ error: "" })
      ]);
      break;

    case `${LOGIN} ${API_SUCCESS}`:
      next([
        setToken({ jwt: action.payload.data.jwt }),
        setLoginSuccess({
          state: true
        }),
        setLoginLoading({
          state: false
        })
      ]);
      break;

    case `${LOGIN} ${API_ERROR}`:
      next([
        setLoginError({ error: action.payload.data.message }),
        setLoginLoading({
          state: false
        })
      ]);
      break;
  }
};
