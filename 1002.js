var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = lines.shift();

var n = 3.14159;

var a = (n * Math.pow(raio, 2)).toFixed(4);

console.log('A=' + a);
