// feature name
export const CLEARERRORS = "[ClearErrors]";

// action types
export const CLEAR_ERRORS = `${CLEARERRORS} Clear`;

// action creators
export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
