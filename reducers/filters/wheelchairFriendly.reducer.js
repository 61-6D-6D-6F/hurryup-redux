import { TOGGLE_WHEELCHAIRFRIENDLY } from "../../actions/filters/wheelchairFriendly.actions";

const initState = false;

export const wheelchairFriendlyReducer = (
  wheelchairFriendly = initState,
  action
) => {
  switch (action.type) {
    case TOGGLE_WHEELCHAIRFRIENDLY:
      return !wheelchairFriendly;

    default:
      return wheelchairFriendly;
  }
};
