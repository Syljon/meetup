import * as actionTypes from "./actionTypes";
import { signInUser } from "../API/API";

export const auth = (email, password) => {
  return dispatch => {
    signInUser(email, password)
      .then(res =>
        dispatch(
          authSuccess(
            res.data.idToken,
            res.data.localId,
            res.data.email,
            res.data.displayName
          )
        )
      )
      .catch(err => dispatch(authFail(err)));
  };
};

// export const auth = (email, password, isSignup) => {
//   return dispatch => {
//     const data = {
//       email: email,
//       password: password,
//       returnSecureToken: true
//     };
//     let url =
//       "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";

//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify(data)
//     })
//       .then(response => response.json())
//       .then(response => {
//         if (response.error) {
//           console.log("Error", response);
//           dispatch(authFail(response.error.message));
//         } else {
//           console.log("THEN", response);
//           const logoutDate = new Date(
//             new Date().getTime() + response.expiresIn * 1000
//           );
//           localStorage.setItem("token", response.idToken);
//           localStorage.setItem("userId", response.localId);
//           localStorage.setItem("logoutDate", logoutDate);
//           dispatch(authSuccess(response.idToken, response.localId, email));
//         }
//       })
//       .catch(error => console.error("Error:", error));
//   };
// };

export const authSuccess = (token, userId, userEmail, userName) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId,
    userEmail: userEmail,
    userName: userName
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("logoutDate");
  console.log("[actions.js] LOGOUT");
  return { type: actionTypes.LOGOUT };
};
export const authReset = () => {
  return { type: actionTypes.AUTH_RESET };
};
