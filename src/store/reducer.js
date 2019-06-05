import * as actionTypes from "./actionTypes";
const initialState = {
  token: null,
  userId: null,
  userEmail: null,
  userName: null,
  error: null,
  refreshToken: null,
  expiryDate: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        userEmail: action.userEmail,
        userName: action.userName,
        refreshToken: action.refreshToken,
        expiryDate: action.expiryDate
      };
    case actionTypes.LOGIN_FAIL:
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
    case actionTypes.SET_NEW_TOKEN:
      return {
        ...state,
        token: action.token,
        refreshToken: action.refreshToken,
        expiryDate: action.expiryDate
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
