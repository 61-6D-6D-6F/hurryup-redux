import {
  SET_SELECTEDMARKER,
  REMOVE_SELECTEDMARKER,
  UPDATERATING_SELECTEDMARKER
} from "../actions/selectedMarker.actions";

const initState = {
  ID: null,
  text: null,
  latitude: null,
  longitude: null,
  rating: [],
  openingHours: {
    0: {
      isOpenToday: false,
      open: "00:00",
      close: "00:00"
    },
    1: {
      isOpenToday: false,
      open: "00:00",
      close: "00:00"
    },
    2: {
      isOpenToday: false,
      open: "00:00",
      close: "00:00"
    },
    3: {
      isOpenToday: false,
      open: "00:00",
      close: "00:00"
    },
    4: {
      isOpenToday: false,
      open: "00:00",
      close: "00:00"
    },
    5: {
      isOpenToday: false,
      open: "00:00",
      close: "00:00"
    },
    6: {
      isOpenToday: false,
      open: "00:00",
      close: "00:00"
    }
  }
};

export const selectedMarkerReducer = (selectedMarker = initState, action) => {
  switch (action.type) {
    case SET_SELECTEDMARKER:
      return action.payload;

    case REMOVE_SELECTEDMARKER:
      return initState;

    case UPDATERATING_SELECTEDMARKER:
      return {
        ...selectedMarker,
        rating: [...selectedMarker.rating, action.payload]
      };
    default:
      return selectedMarker;
  }
};
