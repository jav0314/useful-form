import { validAge } from "./validAge.js";
import { validMail } from "./validEmail.js";
import { validName } from "./ValidName.js";
import { validPassword } from "./validPassword.js";
import { messages } from "../const.js/massages.js";

export function validForm(event) {
  const inputEmail = document.getElementById("mail").value;
  const inputName = document.getElementById("name").value;
  const inputPass = document.getElementById("password").value;
  let bio = document.getElementById("bio").value;
  let isValid = true;

  clearAlerts();

  if (!validName(inputName)) {
    event.preventDefault();
    showAlert("nameAlert", messages[5]);
    isValid = false;
  }

  if (!validMail(inputEmail)) {
    event.preventDefault();
    showAlert("emailAlert", messages[4]);
    isValid = false;
  }

  const passwordValidationMessage = validPassword(inputPass);
  if (passwordValidationMessage.includes("Easy Password")) {
    event.preventDefault();
    showAlert("passwordAlert", passwordValidationMessage);
    isValid = false;
  }

  if (!validAge()) {
    event.preventDefault();
    showAlert("ageAlert", messages[6]);
    isValid = false;
  }

  if (bio.trim().length === 0) {
    event.preventDefault();
    showAlert("bioAlert", messages[1]);
    isValid = false;
  }

  if (bio.length > 50) {
    event.preventDefault();
    showAlert("bioAlert", messages[0]);
    isValid = false;
  }

  if (isValid) {
    alert("Thanks!!!");
  }
}
function clearAlerts() {
  document.getElementById("nameAlert").innerText = "";
  document.getElementById("emailAlert").innerText = "";
  document.getElementById("passwordAlert").innerText = "";
  document.getElementById("ageAlert").innerText = "";
  document.getElementById("bioAlert").innerText = "";
}

export function showAlert(elementId, message) {
  document.getElementById(elementId).innerText = message;
}
