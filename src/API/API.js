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
