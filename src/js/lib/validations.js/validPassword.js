export function validPassword(password) {
  let level = 0;
  let alert = "";

  if (password.length < 8) {
    alert += " At least 8 character. ";
  } else {
    level += 1;
  }

  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    level += 1;
  } else {
    alert += " Use uppercase and lowercase. ";
  }

  if (password.match(/\d/)) {
    level += 1;
  } else {
    alert += " At least 1 number. ";
  }

  if (password.match(/[^a-zA-Z\d]/)) {
    level += 1;
  } else {
    alert += " At least a special character. ";
  }

  if (level < 2) {
    return "Easy Password. " + alert;
  } else if (level === 2) {
    return "Mid-level Password. " + alert;
  } else if (level === 3) {
    return "High level Password " + alert;
  } else if (level === 4) {
    return "Really hard Password. " + alert;
  }
}
