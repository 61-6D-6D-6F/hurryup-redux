// feature name
export const REGISTRATION = "[Registration]";

// action types
export const TRY_REGISTRATION = `${REGISTRATION} Try`;

// action creators
export const tryRegistration = ({ user, headers }) => ({
  type: TRY_REGISTRATION,
  payload: { user, headers }
});
