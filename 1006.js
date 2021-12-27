var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const gradeOne = Number(lines.shift());
const gradeTwo = Number(lines.shift());
const gradeThree = Number(lines.shift());

if(gradeOne > 10.0 || gradeTwo > 10.00 || gradeThree > 10.0){
  console.error('invalid grade')
  return;
}

const noteWeightOne = 2;
const noteWeightTwo = 3;
const noteWeightThree = 5
const totalWeight = noteWeightOne + noteWeightTwo + noteWeightThree;

const gradeOneAverage = (gradeOne * noteWeightOne) / totalWeight;
const gradeTwoAverage = (gradeTwo * noteWeightTwo) / totalWeight;
const gradeThreeAverage = (gradeThree * noteWeightThree) / totalWeight;

const average = (gradeOneAverage + gradeTwoAverage + gradeThreeAverage).toFixed(1);

console.log(`MEDIA = ${average}`);