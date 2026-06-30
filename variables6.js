const prompt = require("prompt-sync")();

let x = 1;
let y = 2;
let z = 3;

console.log(x < y && y < z);
console.log(x > y && y < z);
console.log(x > y || y < z);
console.log(x > y || y > z);
let x1 = false;
console.log(!x1);
console.log(!(x < y));

let miles = Number(prompt("enter miles: "));
let km = miles * 1.60934;

console.log(`the distance of ${miles} is equal to ${km}`);

const c = "5"
console.log(typeof(c))
let a = "Hello";
a = "world";
console.log(a);

let a1 = "Hello";
a1 = prompt("world");
console.log(a1);

let a2 = 5;
let b1 = 70;
let c1 = "5";
b1++;
console.log(b1);

let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;
console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2)

const a11 = 5;
const b11 = 10;
console.log(a11 > 0 && b11 > 0);
console.log(a11 == 5 && b11 == 4);
console.log(true ||false);
console.log(a11 == 3 || b11 == 10);
console.log(a11 == 3 || b11 == 7); 
