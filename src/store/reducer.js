import * as actionTypes from "./actionTypes";
const initialState = {
  token: null,
  userId: null,
  userEmail: null,
  error: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        userEmail: action.userEmail
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.AUTH_RESET:
      return {
        ...state,
        token: null,
        userId: null,
        userEmail: null,
        error: null
      };
    case actionTypes.LOGOUT:
      return { ...state, token: null, userId: null, userEmail: null };
    default:
      return state;
  }
};

export default reducer;