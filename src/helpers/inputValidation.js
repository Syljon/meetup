export function InputIsValid(value, validation) {
  let isValid = true;
  if (validation.required) {
    isValid = value.trim() !== "" && isValid;
  }
  return isValid;
}
