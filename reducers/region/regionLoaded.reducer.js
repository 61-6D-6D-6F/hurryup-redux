import { SET_REGIONLOADED } from "../../actions/region/regionLoaded.actions";

const initState = false;

export const regionLoadedReducer = (regionLoaded = initState, action) => {
  switch (action.type) {
    case SET_REGIONLOADED:
      return action.payload;

    default:
      return regionLoaded;
  }
};
