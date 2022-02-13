var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const sellerName = lines.shift();
const salaryFixed = Number(lines.shift());
const totalSales = Number(lines.shift());

let total = (totalSales * 15) / 100
total = (salaryFixed + total).toFixed(2)

console.log(`TOTAL = R$ ${total}`);
