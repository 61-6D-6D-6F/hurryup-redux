import { SET_ADDMARKERERRORMESSAGE } from "../../actions/addMarker/addMarkerError.actions";

const initState = "";

export const addMarkerErrorReducer = (addMarkererror = initState, action) => {
  switch (action.type) {
    case SET_ADDMARKERERRORMESSAGE:
      return action.payload;

    default:
      return addMarkererror;
  }
};
