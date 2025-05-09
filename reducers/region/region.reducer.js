import { SET_REGION } from "../../actions/region/region.actions";

const initState = {
  latitude: null,
  longitude: null,
  latitudeDelta: null,
  longitudeDelta: null
};

export const regionReducer = (region = initState, action) => {
  switch (action.type) {
    case SET_REGION:
      return action.payload;

    default:
      return region;
  }
};
