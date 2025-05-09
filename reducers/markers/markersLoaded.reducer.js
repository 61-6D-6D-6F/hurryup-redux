import { SET_MARKERSLOADED } from "../../actions/markers/markersLoaded.actions";

const initState = false;

export const markersLoadedReducer = (markersLoaded = initState, action) => {
  switch (action.type) {
    case SET_MARKERSLOADED:
      return action.payload;

    default:
      return markersLoaded;
  }
};
