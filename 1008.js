var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const employeeNumber = Number(lines.shift());
const numberOfEmployeeHours = Number(lines.shift());
const employeeHourValue = Number(lines.shift());

const employeeSalary = (numberOfEmployeeHours * employeeHourValue).toFixed(2);

console.log(`NUMBER = ${employeeNumber}`);
console.log(`SALARY = U$ ${employeeSalary}`)