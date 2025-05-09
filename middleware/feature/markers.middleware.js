import {
  MARKERS,
  FETCH_MARKERS,
  setMarkers
} from "../../actions/markers/markers.actions";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setMarkersLoaded } from "../../actions/markers/markersLoaded.actions";

const MARKERS_URL = "https://hurryup-backend.herokuapp.com/api/markers";

export const markersMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_MARKERS:
      next([
        apiRequest({
          body: null,
          headers: action.payload.headers,
          method: "POST",
          url: MARKERS_URL,
          feature: MARKERS
        }),
        setMarkersLoaded({
          state: false
        })
      ]);
      break;

    case `${MARKERS} ${API_SUCCESS}`:
      next([
        setMarkers({
          markers: action.payload.data
        }),
        setMarkersLoaded({
          state: true
        })
      ]);
      break;

    case `${MARKERS} ${API_ERROR}`:
      next(
        setMarkersLoaded({
          state: true
        })
      );
      break;
  }
};
