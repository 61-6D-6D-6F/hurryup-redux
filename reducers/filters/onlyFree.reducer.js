import { TOGGLE_ONLYFREE } from "../../actions/filters/onlyFree.actions";

const initState = false;

export const onlyFreeReducer = (onlyFree = initState, action) => {
  switch (action.type) {
    case TOGGLE_ONLYFREE:
      return !onlyFree;

    default:
      return onlyFree;
  }
};
