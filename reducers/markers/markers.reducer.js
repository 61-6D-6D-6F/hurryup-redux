import { SET_MARKERS, ADD_MARKER } from "../../actions/markers/markers.actions";

const initState = [];

export const markersReducer = (markers = initState, action) => {
  switch (action.type) {
    case SET_MARKERS:
      return action.payload;

    default:
      return markers;
  }
};
