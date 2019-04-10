import * as actionTypes from "./actionTypes";

export const auth = (email, password, isSignup) => {
  return dispatch => {
    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";
    if (isSignup) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        const logoutDate = new Date(
          new Date().getTime() + response.expiresIn * 1000
        );
        localStorage.setItem("token", response.idToken);
        localStorage.setItem("userId", response.localId);
        localStorage.setItem("logoutDate", logoutDate);
        dispatch(authSuccess(response.idToken, response.localId, email));
        dispatch(AuthTimeout(response.expiresIn * 1000));
      })
      .catch(err => {
        console.log("ERRRRRRRRRROR", err);
      });
  };
};

export const authSuccess = (token, userId, userEmail) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
    userEmail: userEmail
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("logoutDate");
  console.log("[actions.js] LOGOUT");
  return { type: actionTypes.LOGOUT };
};
export const AuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};
