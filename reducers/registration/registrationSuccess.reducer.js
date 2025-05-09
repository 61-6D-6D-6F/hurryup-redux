import { SET_REGISTRATIONSUCCESS } from "../../actions/registration/registrationSuccess.actions";

const initState = false;

export const registrationSuccessReducer = (
  registrationSuccess = initState,
  action
) => {
  switch (action.type) {
    case SET_REGISTRATIONSUCCESS:
      return action.payload;

    default:
      return registrationSuccess;
  }
};
