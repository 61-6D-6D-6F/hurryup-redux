import { SET_TOKEN } from "../actions/token.actions";

const initState = "";

export const tokenReducer = (token = initState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;

    default:
      return token;
  }
};
