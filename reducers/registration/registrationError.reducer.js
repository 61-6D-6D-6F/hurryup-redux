import { SET_REGISTRATIONERRORMESSAGE } from "../../actions/registration/registrationError.actions";

const initState = "";

export const registrationErrorReducer = (
  registrationerror = initState,
  action
) => {
  switch (action.type) {
    case SET_REGISTRATIONERRORMESSAGE:
      return action.payload;

    default:
      return registrationerror;
  }
};
