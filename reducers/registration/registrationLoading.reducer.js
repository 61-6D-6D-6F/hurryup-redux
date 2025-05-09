import { SET_REGISTRATIONLOADING } from "../../actions/registration/registrationLoading.actions";

const initState = false;

export const registrationLoadingReducer = (
  registrationLoading = initState,
  action
) => {
  switch (action.type) {
    case SET_REGISTRATIONLOADING:
      return action.payload;

    default:
      return registrationLoading;
  }
};
