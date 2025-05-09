import {
  FETCH_REGION,
  REGION_SUCCESS,
  REGION_ERROR,
  setRegion,
  regionSuccess,
  regionError
} from "../../actions/region/region.actions";
import { setRegionLoaded } from "../../actions/region/regionLoaded.actions";

import { Dimensions } from "react-native";
import Geolocation from "react-native-geolocation-service";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const regionMiddleware = ({ dispatch }) => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_REGION:
      Geolocation.getCurrentPosition(
        position => {
          dispatch(
            regionSuccess({
              region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
              }
            })
          );
        },
        error => {
          dispatch(regionError({ error: error }));
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      next(
        setRegionLoaded({
          state: false
        })
      );
      break;

    case REGION_SUCCESS:
      next([
        setRegion({
          region: action.payload
        }),
        setRegionLoaded({
          state: true
        })
      ]);
      break;

    case REGION_ERROR:
      console.log("error loading region");
      next(
        setRegionLoaded({
          state: true
        })
      );
      break;
  }
};
