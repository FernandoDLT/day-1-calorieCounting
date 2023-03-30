const fs = require("fs");

const elfCalories = fs.readFileSync(`${__dirname}/input`).toString().split(/\r?\n/);

let calories = [];

let currentCalorieCount = 0;
for (let elfCalorie of elfCalories) {
  if (elfCalorie == "") {
    calories.push(currentCalorieCount);
    currentCalorieCount = 0;
  } else {
    currentCalorieCount += +elfCalorie;
  }
}
calories.push(currentCalorieCount);
console.log(Math.max(...calories));