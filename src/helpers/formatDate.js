export function formatDate(val) {
  return val
    .split("-")
    .reverse()
    .join(".");
}
