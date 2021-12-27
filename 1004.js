var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var value1 = Number(lines.shift());
var value2 = Number(lines.shift());

var prod = value1 * value2;

console.log(`PROD = ${prod}`);