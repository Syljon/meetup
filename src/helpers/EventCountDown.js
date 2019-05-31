export function getTime(distance) {
  let days = formatDateOutput(Math.floor(distance / (1000 * 60 * 60 * 24)));
  let hours = formatDateOutput(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = formatDateOutput(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  let seconds = formatDateOutput(Math.floor((distance % (1000 * 60)) / 1000));
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function formatDateOutput(v) {
  return v >= 10 ? v.toString() : 0 + v.toString();
}
