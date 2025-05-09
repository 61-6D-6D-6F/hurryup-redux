import {
  ADDMARKER,
  ADD_MARKER
} from "../../actions/addMarker/addMarker.actions";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setAddMarkerLoading } from "../../actions/addMarker/addMarkerLoading.actions";
import { setAddMarkerSuccess } from "../../actions/addMarker/addMarkerSuccess.actions";
import { setAddMarkerError } from "../../actions/addMarker/addMarkerError.actions";
import { fetchMarkers } from "../../actions/markers/markers.actions";

const ADDMARKER_URL = "https://hurryup-backend.herokuapp.com/api/addMarker";

export const addMarkerMiddleware = ({ dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case ADD_MARKER:
      next([
        apiRequest({
          body: action.payload.marker,
          headers: action.payload.headers,
          method: "POST",
          url: ADDMARKER_URL,
          feature: ADDMARKER
        }),
        setAddMarkerLoading({
          state: true
        }),
        setAddMarkerError({ error: "" })
      ]);
      break;

    case `${ADDMARKER} ${API_SUCCESS}`:
      dispatch(fetchMarkers());
      next([
        setAddMarkerSuccess({
          state: true
        }),
        setAddMarkerLoading({
          state: false
        })
      ]);
      break;

    case `${ADDMARKER} ${API_ERROR}`:
      next([
        setAddMarkerError({ error: action.payload.data.message }),
        setAddMarkerLoading({
          state: false
        })
      ]);
      break;
  }
};
