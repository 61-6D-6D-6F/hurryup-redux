// feature name
export const REGISTRATIONERROR = "[RegistrationError]";

// action types
export const SET_REGISTRATIONERRORMESSAGE = `${REGISTRATIONERROR} Set`;

// action creators
export const setRegistrationError = ({ error }) => ({
  type: SET_REGISTRATIONERRORMESSAGE,
  payload: error
});
