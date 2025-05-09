import { TOGGLE_OPENNOW } from "../../actions/filters/openNow.actions";

const initState = false;

export const openNowReducer = (openNow = initState, action) => {
  switch (action.type) {
    case TOGGLE_OPENNOW:
      return !openNow;

    default:
      return openNow;
  }
};
