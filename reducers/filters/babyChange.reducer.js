import { TOGGLE_BABYCHANGE } from "../../actions/filters/babyChange.actions";

const initState = false;

export const babyChangeReducer = (babyChange = initState, action) => {
  switch (action.type) {
    case TOGGLE_BABYCHANGE:
      return !babyChange;

    default:
      return babyChange;
  }
};
