var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const gradeOne = Number(lines.shift());
const gradeTwo = Number(lines.shift());

const noteWeightOne = 3.5;
const noteWeightTwo = 7.5;
const totalWeight = noteWeightOne + noteWeightTwo;

const gradeOneAverage = (gradeOne * noteWeightOne) / totalWeight;
const gradeTwoAverage = (gradeTwo * noteWeightTwo) / totalWeight;

const average = (gradeOneAverage + gradeTwoAverage).toFixed(5);

console.log(`MEDIA = ${average}`);