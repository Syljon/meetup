import * as actionTypes from "./actionTypes";
const initialState = {
  test: "Hello",
  token: null,
  userId: null,
  userEmail: null
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
    case actionTypes.LOGOUT:
      return { ...state, token: null, userId: null, userEmail: null };
    default:
      return state;
  }
};

export default reducer;
