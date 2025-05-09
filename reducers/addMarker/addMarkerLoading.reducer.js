import { SET_ADDMARKERLOADING } from "../../actions/addMarker/addMarkerLoading.actions";

const initState = false;

export const addMarkerLoadingReducer = (
  addMarkerLoading = initState,
  action
) => {
  switch (action.type) {
    case SET_ADDMARKERLOADING:
      return action.payload;

    default:
      return addMarkerLoading;
  }
};
