function setAlarm(employed, vacation) {
  // Check if you are employed and not on vacation
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
}
