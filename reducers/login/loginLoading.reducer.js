import { SET_LOGINLOADING } from "../../actions/login/loginLoading.actions";

const initState = false;

export const loginLoadingReducer = (loginLoading = initState, action) => {
  switch (action.type) {
    case SET_LOGINLOADING:
      return action.payload;

    default:
      return loginLoading;
  }
};
