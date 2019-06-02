import { InputIsValid } from "./inputValidation";

export function formInputChange(value, index, formInputs) {
  const formElements = formInputs;
  const formElement = { ...formElements[index] };
  formElement.value = value;
  formElement.valid = InputIsValid(formElement.value, formElement.validation);
  formElement.touched = true;
  formElements[index] = formElement;
  return formElements;
}
