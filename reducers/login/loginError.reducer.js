import { SET_LOGINERRORMESSAGE } from "../../actions/login/loginError.actions";

const initState = "";

export const loginErrorReducer = (loginerror = initState, action) => {
  switch (action.type) {
    case SET_LOGINERRORMESSAGE:
      return action.payload;

    default:
      return loginerror;
  }
};
