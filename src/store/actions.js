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
        // const expirationDate = new Date(
        //   new Date().getTime() + response.data.expiresIn * 1000
        // );
        // localStorage.setItem("token", response.data.idToken);
        // localStorage.setItem("expirationDate", expirationDate);
        // localStorage.setItem("userId", response.data.localId);
        dispatch(authSuccess(response.idToken, response.localId));
        //dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        console.log("ERRRRRRRRRROR", err);
      });
  };
};

export const authSuccess = (token, userId) => {
  return { type: actionTypes.AUTH_SUCCESS, token: token, userId: userId };
};
