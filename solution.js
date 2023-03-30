// // Variable neede to connect to text/input
// const fs = require("fs")

// // Read the input file and split it into an array of lines
// const elfCalories = fs.readFileSync(`${__dirname}/input`).toString().split(/\r?\n/)

// // Initialize variables
// let calories = []

// let currentCalorieCount = 0
// // Iterate over the array of elf calorie counts
// for (let elfCalorie of elfCalories) {
//     // If the current line is empty, add the current calorie count to the calorieCounts array
//     if (elfCalorie == "") {
//         calories.push(currentCalorieCount)
//         currentCalorieCount = 0; // Reset the current calorie count to 0
//         // Otherwise, add the elf's calorie count to the current calorie count
//     } else {
//         currentCalorieCount += +elfCalorie
//     }
// }
// // Add the last group's calorie count to the calorieCounts array
// calories.push(currentCalorieCount)

// // Find the maximum calorie count and log it to the console
// console.log(Math.max(...calories))



const fs = require("fs");

const elfCalories = fs.readFileSync(`${__dirname}/input`, "utf-8").trim().split(/\r?\n/);

let calories = []
let currentCalorieCount = 0

for (let elfCalorie of elfCalories) {
  if (elfCalorie == "") (calories.push(currentCalorieCount), currentCalorieCount = 0)
  else currentCalorieCount += +elfCalorie
}

calories.push(currentCalorieCount)
console.log(Math.max(...calories))

