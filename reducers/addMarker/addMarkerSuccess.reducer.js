import { SET_ADDMARKERSUCCESS } from "../../actions/addMarker/addMarkerSuccess.actions";

const initState = false;

export const addMarkerSuccessReducer = (
  addMarkerSuccess = initState,
  action
) => {
  switch (action.type) {
    case SET_ADDMARKERSUCCESS:
      return action.payload;

    default:
      return addMarkerSuccess;
  }
};
