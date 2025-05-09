import { SET_LOGINSUCCESS } from "../../actions/login/loginSuccess.actions";

const initState = false;

export const loginSuccessReducer = (loginSuccess = initState, action) => {
  switch (action.type) {
    case SET_LOGINSUCCESS:
      return action.payload;

    default:
      return loginSuccess;
  }
};
