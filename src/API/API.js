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
