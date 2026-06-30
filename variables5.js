const prompt = require("prompt-sync")();

let a = Number(prompt("enter a: "));
let b = Number(prompt("enter b: "));
let c = Number(prompt("enter c: "));

console.log(b += a);
console.log(a /= c);
console.log(c %= b);

let x = 5;
let y = "5";
console.log(x == y);

let x2 = 5;
let y2 = "5";
console.log(x2 == y2);
console.log(x2 != y2);

let x3 = 1;
let y3 = 2;
let z3 = 3;
console.log(x3 < y3 && y3 < z3);
console.log(x3 > y3 && y3 < z3);
