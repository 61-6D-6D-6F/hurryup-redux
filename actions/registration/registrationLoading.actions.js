// feature name
export const REGISTRATIONLOADING = "[RegistrationLoading]";

// action types
export const SET_REGISTRATIONLOADING = `${REGISTRATIONLOADING} Set`;

// action creators
export const setRegistrationLoading = ({ state }) => ({
  type: SET_REGISTRATIONLOADING,
  payload: state
});
