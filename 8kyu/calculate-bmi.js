// instr
//Write function bmi that calculates body mass index (bmi = weight / height2).

//if bmi <= 18.5 return "Underweight"

//if bmi <= 25.0 return "Normal"

//if bmi <= 30.0 return "Overweight"

//if bmi > 30 return "Obese"

// solution

function bmi(weight, height) {
  let b = weight / height ** 2;
  if (b <= 18.5) {
    return "Underweight";
  }
  if (b <= 25) {
    return "Normal";
  }
  if (b <= 30) {
    return "Overweight";
  }
  return "Obese";
}
