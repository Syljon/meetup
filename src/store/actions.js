import * as actionTypes from "./actionTypes";
import { signInUser } from "../API/API";

export const login = (email, password) => {
  return dispatch => {
    signInUser(email, password)
      .then(res =>
        dispatch(
          loginSuccess(
            res.data.idToken,
            res.data.localId,
            res.data.email,
            res.data.displayName
          )
        )
      )
      .catch(err => dispatch(loginFail(err)));
  };
};

export const loginSuccess = (token, userId, userEmail, userName) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
    userId: userId,
    userEmail: userEmail,
    userName: userName
  };
};

export const loginFail = error => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: error.response.data.error.message
  };
};

export const logout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("userId");
  // localStorage.removeItem("logoutDate");
  // console.log("[actions.js] LOGOUT");
  return { type: actionTypes.LOGOUT };
};
export const authReset = () => {
  return { type: actionTypes.AUTH_RESET };
};
