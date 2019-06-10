import axios from "axios";

export function getEvent(id) {
  const url = `https://react-meetup-c3c9c.firebaseio.com/events/${id}.json`;
  return fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      console.log(err);
    });
}
export function deleteEvent(id) {
  console.log("DELETE");
  const url = `https://react-meetup-c3c9c.firebaseio.com/events/${id}.json`;
  return fetch(url, {
    method: "DELETE"
  }).then(response => response.json());
}
export function getEvents() {
  return fetch("https://react-meetup-c3c9c.firebaseio.com/events.json", {
    method: "Get"
  })
    .then(response => response.json())
    .then(response =>
      Object.keys(response).map(res => {
        response[res].id = res;
        return response[res];
      })
    );
}
export function getUserEvents(token, userId) {
  console.log(token, userId);
  const url = "https://react-meetup-c3c9c.firebaseio.com/events.json";
  const queryParams =
    "?auth=" + token + `&orderBy="userId"&equalTo="` + userId + `"`;
  return fetch(url + queryParams, {
    method: "Get"
  })
    .then(response => response.json())
    .then(response =>
      Object.keys(response).map(res => {
        response[res].id = res;
        return response[res];
      })
    );
}

export function signUpUser(email, password) {
  console.log("signUpUser");
  let url =
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";

  return axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  });
}

export function setUserInfo(token, userName) {
  let url =
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";
  return axios.post(url, {
    idToken: token,
    displayName: userName,
    returnSecureToken: true
  });
}

export function signInUser(email, password) {
  let url =
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";
  return axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  });
}

export function getNewToken(refresh_token) {
  let url =
    "https://securetoken.googleapis.com/v1/token?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";
  return axios.post(url, {
    grant_type: "refresh_token",
    refresh_token: refresh_token
  });
}

// export function getUserInfo(token) {
//   let url =
//     "https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyC0sZ_wlaL-fNxe24VaSLD8UZFB8yP_wYw";
//   return axios.post(url, {
//     idToken: token
//   });
// }
