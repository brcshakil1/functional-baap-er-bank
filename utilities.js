function getInputById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldValueString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldValueString);
    return elementFieldValue;
}

function displayAmount(elementId, amount) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = amount;
}