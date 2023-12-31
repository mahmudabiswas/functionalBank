function getInputValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldString);
  // clear inputField
  inputField.value = "";
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementField = element.innerText;
  const elementFieldString = parseFloat(elementField);
  return elementFieldString;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
