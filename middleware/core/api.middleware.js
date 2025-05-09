import axios from "axios";
import { API_REQUEST, apiError, apiSuccess } from "../../actions/api.actions";

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { url, method, feature } = action.meta;
    const { body, headers } = action.payload;

    switch (method) {
      case "POST":
        axios
          .post(url, body, { headers: headers })
          .then(response => dispatch(apiSuccess({ response, feature })))
          .catch(error =>
            dispatch(apiError({ error: error.response, feature }))
          );
        break;
    }
  }
};
