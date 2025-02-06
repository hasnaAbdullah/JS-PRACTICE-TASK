/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = prompt("your weight (kg) "); //weight(kg)
let height = prompt("your height (meter) "); //height(m)
let BMI = (weight / Math.pow(height, 2)).toFixed(2);

if (BMI < 18.5) {
  alert("You are underweight and Your BMI is : " + BMI);
} else if (BMI >= 18.5 && BMI <= 24.9) {
  alert("you are normal and Your BMI is : " + BMI);
} else if (BMI >= 25 && BMI <= 29.9) {
  alert("You are overweight and Your BMI is : " + BMI);
} else {
  alert("You are obese and Your BMI is : " + BMI);
}
alert("reload your website window to get new BMI");
