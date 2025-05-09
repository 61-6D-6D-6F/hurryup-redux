// feature name
export const REGISTRATIONSUCCESS = "[RegistrationSuccess]";

// action types
export const SET_REGISTRATIONSUCCESS = `${REGISTRATIONSUCCESS} Set`;

// action creators
export const setRegistrationSuccess = ({ state }) => ({
  type: SET_REGISTRATIONSUCCESS,
  payload: state
});
