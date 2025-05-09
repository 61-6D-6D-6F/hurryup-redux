import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSensitiveStorage from "redux-persist-sensitive-storage";

import { tokenReducer } from "./reducers/token.reducer";
import { loginLoadingReducer } from "./reducers/login/loginLoading.reducer";
import { loginSuccessReducer } from "./reducers/login/loginSuccess.reducer";
import { loginErrorReducer } from "./reducers/login/loginError.reducer";
import { loginMiddleware } from "./middleware/feature/login.middleware";
import { registrationLoadingReducer } from "./reducers/registration/registrationLoading.reducer";
import { registrationSuccessReducer } from "./reducers/registration/registrationSuccess.reducer";
import { registrationErrorReducer } from "./reducers/registration/registrationError.reducer";
import { registrationMiddleware } from "./middleware/feature/registration.middleware";
import { regionReducer } from "./reducers/region/region.reducer";
import { regionLoadedReducer } from "./reducers/region/regionLoaded.reducer";
import { regionMiddleware } from "./middleware/feature/region.middleware";
import { markersReducer } from "./reducers/markers/markers.reducer";
import { markersLoadedReducer } from "./reducers/markers/markersLoaded.reducer";
import { markersMiddleware } from "./middleware/feature/markers.middleware";
import { reviewsReducer } from "./reducers/reviews/reviews.reducer";
import { reviewsLoadedReducer } from "./reducers/reviews/reviewsLoaded.reducer";
import { reviewsMiddleware } from "./middleware/feature/reviews.middleware";
import { addMarkerLoadingReducer } from "./reducers/addMarker/addMarkerLoading.reducer";
import { addMarkerSuccessReducer } from "./reducers/addMarker/addMarkerSuccess.reducer";
import { addMarkerErrorReducer } from "./reducers/addMarker/addMarkerError.reducer";
import { addMarkerMiddleware } from "./middleware/feature/addMarker.middleware";
import { addReviewLoadingReducer } from "./reducers/addReview/addReviewLoading.reducer";
import { addReviewSuccessReducer } from "./reducers/addReview/addReviewSuccess.reducer";
import { addReviewErrorReducer } from "./reducers/addReview/addReviewError.reducer";
import { addReviewMiddleware } from "./middleware/feature/addReview.middleware";
import { selectedMarkerReducer } from "./reducers/selectedMarker.reducer";
import { travelTypeReducer } from "./reducers/travelType.reducer";
import { openNowReducer } from "./reducers/filters/openNow.reducer";
import { onlyFreeReducer } from "./reducers/filters/onlyFree.reducer";
import { wheelchairFriendlyReducer } from "./reducers/filters/wheelchairFriendly.reducer";
import { babyChangeReducer } from "./reducers/filters/babyChange.reducer";
import { clearErrorsMiddleware } from "./middleware/feature/clearErrors.middleware";

import { enrichHeaderMiddleware } from "./middleware/enrichHeader.middleware";
import { apiMiddleware } from "./middleware/core/api.middleware";
import { actionSplitterMiddleware } from "./middleware/core/actionSplitter.middleware";

const storage = createSensitiveStorage({
  keychainService: "myKeychain",
  sharedPreferencesName: "mySharedPrefs"
});

const persistReducerConfig = {
  key: "token",
  storage: storage
};

// shape the state structure
const authReducer = combineReducers({
  jwt: persistReducer(persistReducerConfig, tokenReducer),
  login: combineReducers({
    loading: loginLoadingReducer,
    success: loginSuccessReducer,
    error: loginErrorReducer
  }),
  registration: combineReducers({
    loading: registrationLoadingReducer,
    success: registrationSuccessReducer,
    error: registrationErrorReducer
  })
});

const rootReducer = combineReducers({
  auth: authReducer,
  region: regionReducer,
  regionLoaded: regionLoadedReducer,
  markers: markersReducer,
  markersLoaded: markersLoadedReducer,
  reviews: reviewsReducer,
  reviewsLoaded: reviewsLoadedReducer,
  addMarker: combineReducers({
    loading: addMarkerLoadingReducer,
    success: addMarkerSuccessReducer,
    error: addMarkerErrorReducer
  }),
  addReview: combineReducers({
    loading: addReviewLoadingReducer,
    success: addReviewSuccessReducer,
    error: addReviewErrorReducer
  }),
  selectedMarker: selectedMarkerReducer,
  travelType: travelTypeReducer,
  filters: combineReducers({
    openNow: openNowReducer,
    onlyFree: onlyFreeReducer,
    wheelchairFriendly: wheelchairFriendlyReducer,
    babyChange: babyChangeReducer
  })
});

// create the feature middleware array
const featureMiddleware = [
  regionMiddleware,
  markersMiddleware,
  reviewsMiddleware,
  loginMiddleware,
  registrationMiddleware,
  addMarkerMiddleware,
  addReviewMiddleware,
  clearErrorsMiddleware
];

// create the core middleware array
const coreMiddleware = [actionSplitterMiddleware, apiMiddleware];

// compose the middleware with additional (optional) enhancers,
const enhancer = compose(
  applyMiddleware(
    enrichHeaderMiddleware,
    ...featureMiddleware,
    ...coreMiddleware
  )
);

// create and configure the store and presistor
export const store = createStore(rootReducer, {}, enhancer);
export const persistor = persistStore(store);
