// feature name
export const REGION = "[Region]";

// action types
export const FETCH_REGION = `${REGION} Fetch`;
export const REGION_SUCCESS = `${REGION} Success`;
export const REGION_ERROR = `${REGION} Error`;
export const SET_REGION = `${REGION} Set`;

// action creators
export const fetchRegion = () => ({
  type: FETCH_REGION
});

export const regionSuccess = ({ region }) => ({
  type: REGION_SUCCESS,
  payload: region
});

export const regionError = ({ error }) => ({
  type: REGION_ERROR,
  payload: error
});

export const setRegion = ({ region }) => ({
  type: SET_REGION,
  payload: region
});
