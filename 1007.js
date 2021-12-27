var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const productOne = Number(lines.shift());
const productTwo = Number(lines.shift());
const productThree = Number(lines.shift());
const productFour = Number(lines.shift());

const difference = productOne * productTwo - productThree * productFour;

console.log(`DIFERENCA = ${difference}`);
