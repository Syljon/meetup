import * as actionTypes from "./actionTypes";
import { signInUser, getNewToken } from "../API/API";

export const login = (email, password) => {
  return dispatch => {
    signInUser(email, password)
      .then(res => {
        console.log(res);
        dispatch(
          loginSuccess(
            res.data.idToken,
            res.data.localId,
            res.data.email,
            res.data.displayName,
            res.data.refreshToken
          )
        );
        setInterval(() => {
          dispatch(refreshOldToken(res.data.refreshToken));
        }, 3400000);
      })
      .catch(err => dispatch(loginFail(err)));
  };
};

const refreshOldToken = refreshToken => {
  return dispatch => {
    getNewToken(refreshToken).then(res =>
      dispatch(setNewToken(res.data.id_token, res.data.refresh_token))
    );
  };
};

const setNewToken = (token, refreshToken) => {
  const tokenExpiryTime = new Date();
  tokenExpiryTime.setHours(tokenExpiryTime.getHours() + 1);
  return {
    type: actionTypes.SET_NEW_TOKEN,
    token: token,
    refreshToken: refreshToken,
    expiryDate: tokenExpiryTime.toString()
  };
};
export const loginSuccess = (
  token,
  userId,
  userEmail,
  userName,
  refreshToken
) => {
  const tokenExpiryTime = new Date();
  tokenExpiryTime.setHours(tokenExpiryTime.getHours() + 1);
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: token,
    userId: userId,
    userEmail: userEmail,
    userName: userName,
    refreshToken: refreshToken,
    expiryDate: tokenExpiryTime.toString()
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
