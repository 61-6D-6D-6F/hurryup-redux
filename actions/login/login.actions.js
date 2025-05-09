// feature name
export const LOGIN = "[Login]";

// action types
export const TRY_LOGIN = `${LOGIN} Try`;

// action creators
export const tryLogin = ({ user, headers }) => ({
  type: TRY_LOGIN,
  payload: { user, headers }
});
